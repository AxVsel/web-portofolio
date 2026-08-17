"use client";

import React, { useEffect, useRef, useState } from "react";
import { useTheme } from "./ThemeProvider";
import { X, Play, RotateCcw, Volume2, VolumeX, Trophy, Heart, Gamepad2, ArrowLeft, ArrowRight, Zap } from "lucide-react";
import {
  playShootSound,
  playExplosionSound,
  playCoinSound,
  playGameOverSound,
  playPowerupSound,
} from "@/lib/retroAudio";

interface Bullet {
  x: number;
  y: number;
  speed: number;
}

interface Enemy {
  x: number;
  y: number;
  width: number;
  height: number;
  speedX: number;
  speedY: number;
  type: "bug" | "glitch" | "404";
  points: number;
  color: string;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  color: string;
  life: number;
  maxLife: number;
}

interface Star {
  x: number;
  y: number;
  size: number;
  speed: number;
}

interface CoinDrop {
  x: number;
  y: number;
  speedY: number;
  label: string;
}

export default function RetroArcadeModal() {
  const { isGameOpen, closeGame, soundEnabled, toggleSound } = useTheme();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const [score, setScore] = useState<number>(0);
  const [highScore, setHighScore] = useState<number>(0);
  const [lives, setLives] = useState<number>(3);
  const [wave, setWave] = useState<number>(1);
  const [gameState, setGameState] = useState<"menu" | "playing" | "gameover" | "waveclear">("menu");

  // Game internal state refs for 60fps loop
  const playerRef = useRef({
    x: 180,
    y: 400,
    width: 32,
    height: 24,
    speed: 6,
    isShooting: false,
    lastShot: 0,
  });

  const keysRef = useRef<{ left: boolean; right: boolean; shoot: boolean }>({
    left: false,
    right: false,
    shoot: false,
  });

  const bulletsRef = useRef<Bullet[]>([]);
  const enemiesRef = useRef<Enemy[]>([]);
  const particlesRef = useRef<Particle[]>([]);
  const coinsRef = useRef<CoinDrop[]>([]);
  const starsRef = useRef<Star[]>([]);
  const animationFrameRef = useRef<number | null>(null);
  const scoreRef = useRef<number>(0);
  const livesRef = useRef<number>(3);
  const waveRef = useRef<number>(1);

  // Load High Score on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("retro_high_score");
      if (saved) {
        setHighScore(parseInt(saved, 10));
      }
    }
  }, []);

  // Initialize stars
  const initStars = () => {
    const stars: Star[] = [];
    for (let i = 0; i < 40; i++) {
      stars.push({
        x: Math.random() * 400,
        y: Math.random() * 480,
        size: Math.random() > 0.8 ? 2 : 1,
        speed: 0.5 + Math.random() * 1.5,
      });
    }
    starsRef.current = stars;
  };

  // Spawn enemy wave
  const spawnWave = (currentWave: number) => {
    const enemies: Enemy[] = [];
    const rows = 3 + Math.min(currentWave, 3);
    const cols = 5;
    const bugTypes: Array<"bug" | "glitch" | "404"> = ["bug", "glitch", "404"];
    const colors = ["#ef4444", "#38bdf8", "#ec4899", "#eab308"];

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const type = bugTypes[r % bugTypes.length];
        enemies.push({
          x: 45 + c * 65,
          y: 40 + r * 45,
          width: 24,
          height: 20,
          speedX: (1 + currentWave * 0.25) * (r % 2 === 0 ? 1 : -1),
          speedY: 0.15 + currentWave * 0.05,
          type,
          points: (r + 1) * 100,
          color: colors[r % colors.length],
        });
      }
    }
    enemiesRef.current = enemies;
  };

  const startNewGame = () => {
    scoreRef.current = 0;
    livesRef.current = 3;
    waveRef.current = 1;
    setScore(0);
    setLives(3);
    setWave(1);
    playerRef.current.x = 180;
    bulletsRef.current = [];
    particlesRef.current = [];
    coinsRef.current = [];
    initStars();
    spawnWave(1);
    setGameState("playing");
    playPowerupSound();
  };

  // Keyboard Event Handlers
  useEffect(() => {
    if (!isGameOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === "ArrowLeft" || e.code === "KeyA") {
        keysRef.current.left = true;
      }
      if (e.code === "ArrowRight" || e.code === "KeyD") {
        keysRef.current.right = true;
      }
      if (e.code === "Space") {
        e.preventDefault();
        keysRef.current.shoot = true;
      }
      if (e.code === "Escape") {
        closeGame();
      }
      if (e.code === "KeyR" && gameState === "gameover") {
        startNewGame();
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.code === "ArrowLeft" || e.code === "KeyA") {
        keysRef.current.left = false;
      }
      if (e.code === "ArrowRight" || e.code === "KeyD") {
        keysRef.current.right = false;
      }
      if (e.code === "Space") {
        keysRef.current.shoot = false;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [isGameOpen, gameState]);

  // Main 60 FPS Game Loop
  useEffect(() => {
    if (!isGameOpen) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    initStars();

    let lastTime = performance.now();

    const loop = (time: number) => {
      const dt = (time - lastTime) / 1000;
      lastTime = time;

      // Clear Canvas
      ctx.fillStyle = "#0a0a14";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Render & Update Stars
      ctx.fillStyle = "#ffffff";
      starsRef.current.forEach((star) => {
        star.y += star.speed;
        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
        }
        ctx.fillRect(star.x, star.y, star.size, star.size);
      });

      if (gameState === "playing") {
        // Player Movement
        const player = playerRef.current;
        if (keysRef.current.left && player.x > 10) {
          player.x -= player.speed;
        }
        if (keysRef.current.right && player.x < canvas.width - player.width - 10) {
          player.x += player.speed;
        }

        // Shooting
        if (keysRef.current.shoot && time - player.lastShot > 220) {
          bulletsRef.current.push({
            x: player.x + player.width / 2 - 2,
            y: player.y - 6,
            speed: 9,
          });
          player.lastShot = time;
          playShootSound();
        }

        // Update Bullets
        bulletsRef.current.forEach((b, bIdx) => {
          b.y -= b.speed;
          if (b.y < -10) {
            bulletsRef.current.splice(bIdx, 1);
          }
        });

        // Update Enemies
        const enemies = enemiesRef.current;
        let shouldReverse = false;

        enemies.forEach((enemy) => {
          enemy.x += enemy.speedX;
          enemy.y += enemy.speedY;

          if (enemy.x <= 10 || enemy.x >= canvas.width - enemy.width - 10) {
            shouldReverse = true;
          }

          // Enemy touches player level -> Lose Life
          if (enemy.y >= player.y - 10) {
            livesRef.current -= 1;
            setLives(livesRef.current);
            playExplosionSound();
            enemies.splice(enemies.indexOf(enemy), 1);

            if (livesRef.current <= 0) {
              setGameState("gameover");
              playGameOverSound();
              if (scoreRef.current > highScore) {
                setHighScore(scoreRef.current);
                localStorage.setItem("retro_high_score", scoreRef.current.toString());
              }
            }
          }
        });

        if (shouldReverse) {
          enemies.forEach((enemy) => {
            enemy.speedX *= -1;
            enemy.y += 8;
          });
        }

        // Bullet vs Enemy Collisions
        bulletsRef.current.forEach((bullet, bIdx) => {
          enemies.forEach((enemy, eIdx) => {
            if (
              bullet.x >= enemy.x &&
              bullet.x <= enemy.x + enemy.width &&
              bullet.y >= enemy.y &&
              bullet.y <= enemy.y + enemy.height
            ) {
              // Hit!
              bulletsRef.current.splice(bIdx, 1);
              enemies.splice(eIdx, 1);
              scoreRef.current += enemy.points;
              setScore(scoreRef.current);
              playExplosionSound();

              // Spawn particles
              for (let p = 0; p < 8; p++) {
                particlesRef.current.push({
                  x: enemy.x + enemy.width / 2,
                  y: enemy.y + enemy.height / 2,
                  vx: (Math.random() - 0.5) * 6,
                  vy: (Math.random() - 0.5) * 6,
                  color: enemy.color,
                  life: 1,
                  maxLife: 0.4,
                });
              }

              // 20% chance drop tech coin
              if (Math.random() < 0.25) {
                const labels = ["⚡TS", "⚛️REACT", "▲NUXT", "🐍PY", "🛡️C++"];
                coinsRef.current.push({
                  x: enemy.x,
                  y: enemy.y,
                  speedY: 2.2,
                  label: labels[Math.floor(Math.random() * labels.length)],
                });
              }
            }
          });
        });

        // Coin Drops
        coinsRef.current.forEach((coin, cIdx) => {
          coin.y += coin.speedY;

          // Check pickup by player
          if (
            coin.x >= player.x - 15 &&
            coin.x <= player.x + player.width + 15 &&
            coin.y >= player.y - 10 &&
            coin.y <= player.y + player.height
          ) {
            coinsRef.current.splice(cIdx, 1);
            scoreRef.current += 250;
            setScore(scoreRef.current);
            playCoinSound();
          } else if (coin.y > canvas.height) {
            coinsRef.current.splice(cIdx, 1);
          }
        });

        // Check Wave Clear
        if (enemies.length === 0) {
          waveRef.current += 1;
          setWave(waveRef.current);
          scoreRef.current += 1000;
          setScore(scoreRef.current);
          playPowerupSound();
          spawnWave(waveRef.current);
        }
      }

      // Draw Coins
      coinsRef.current.forEach((coin) => {
        ctx.fillStyle = "#ffcc00";
        ctx.fillRect(coin.x, coin.y, 14, 14);
        ctx.strokeStyle = "#000000";
        ctx.strokeRect(coin.x, coin.y, 14, 14);
        ctx.fillStyle = "#000000";
        ctx.font = "8px monospace";
        ctx.fillText("$", coin.x + 4, coin.y + 10);
      });

      // Draw Particles
      particlesRef.current.forEach((p, pIdx) => {
        p.x += p.vx;
        p.y += p.vy;
        p.life -= dt * 2.5;

        if (p.life <= 0) {
          particlesRef.current.splice(pIdx, 1);
        } else {
          ctx.fillStyle = p.color;
          ctx.fillRect(p.x, p.y, 3, 3);
        }
      });

      // Draw Bullets
      ctx.fillStyle = "#38bdf8";
      ctx.shadowColor = "#38bdf8";
      ctx.shadowBlur = 6;
      bulletsRef.current.forEach((b) => {
        ctx.fillRect(b.x, b.y, 4, 10);
      });
      ctx.shadowBlur = 0;

      // Draw Enemies (8-bit Pixel Bugs)
      enemiesRef.current.forEach((enemy) => {
        ctx.fillStyle = enemy.color;
        // Pixel Bug Body
        ctx.fillRect(enemy.x + 4, enemy.y + 4, enemy.width - 8, enemy.height - 8);
        // Antennas / Claws
        ctx.fillRect(enemy.x, enemy.y, 4, 6);
        ctx.fillRect(enemy.x + enemy.width - 4, enemy.y, 4, 6);
        ctx.fillRect(enemy.x, enemy.y + enemy.height - 6, 4, 6);
        ctx.fillRect(enemy.x + enemy.width - 4, enemy.y + enemy.height - 6, 4, 6);
        // Eyes
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(enemy.x + 6, enemy.y + 6, 3, 3);
        ctx.fillRect(enemy.x + enemy.width - 9, enemy.y + 6, 3, 3);
      });

      // Draw Player Ship (8-Bit Pixel Ship)
      const p = playerRef.current;
      ctx.fillStyle = "#22c55e"; // Green ship
      ctx.fillRect(p.x + 12, p.y, 8, 8); // Top Cockpit
      ctx.fillStyle = "#eab308"; // Wings
      ctx.fillRect(p.x + 4, p.y + 8, 24, 8); // Main Wing
      ctx.fillStyle = "#ef4444"; // Thrusters
      ctx.fillRect(p.x, p.y + 14, 8, 8);
      ctx.fillRect(p.x + 24, p.y + 14, 8, 8);
      ctx.fillStyle = "#38bdf8"; // Engine Core
      ctx.fillRect(p.x + 12, p.y + 12, 8, 6);

      animationFrameRef.current = requestAnimationFrame(loop);
    };

    animationFrameRef.current = requestAnimationFrame(loop);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isGameOpen, gameState, highScore]);

  if (!isGameOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      {/* Arcade Cabinet Container */}
      <div className="relative w-full max-w-lg bg-gray-950 border-4 border-black dark:border-cyan-400 shadow-[8px_8px_0px_#000000] dark:shadow-[8px_8px_0px_#ff0055] p-3 sm:p-5 flex flex-col items-center">
        {/* Arcade Cabinet Top Marquee */}
        <div className="w-full flex items-center justify-between border-b-4 border-black dark:border-cyan-400 pb-2 mb-3 bg-amber-400 dark:bg-pink-600 px-3 py-1.5 text-black dark:text-white">
          <div className="flex items-center gap-2">
            <Gamepad2 className="w-5 h-5 animate-bounce" />
            <span className="font-extrabold text-xs sm:text-sm tracking-wider">
              ★ BUG HUNTER 1989 ★
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleSound}
              className="p-1 rounded hover:bg-black/20 text-black dark:text-white"
              title={soundEnabled ? "Mute sound" : "Unmute sound"}
            >
              {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </button>
            <button
              onClick={closeGame}
              className="p-1 rounded hover:bg-red-500 hover:text-white transition-colors"
              title="Close game"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* HUD Top Stats */}
        <div className="w-full flex items-center justify-between text-[11px] sm:text-xs text-green-400 bg-black px-3 py-1.5 border-2 border-gray-800 mb-2 font-mono">
          <div className="flex items-center gap-1">
            <span>SCORE:</span>
            <span className="text-yellow-400 font-bold">{score.toString().padStart(6, "0")}</span>
          </div>
          <div className="flex items-center gap-1">
            <Trophy className="w-3 h-3 text-amber-400" />
            <span>HI:</span>
            <span className="text-amber-400 font-bold">{Math.max(score, highScore).toString().padStart(6, "0")}</span>
          </div>
          <div className="flex items-center gap-1">
            <span>WAVE:</span>
            <span className="text-cyan-400 font-bold">{wave}</span>
          </div>
          <div className="flex items-center gap-0.5">
            {Array.from({ length: 3 }).map((_, i) => (
              <Heart
                key={i}
                className={`w-3.5 h-3.5 ${
                  i < lives ? "fill-red-500 text-red-500" : "text-gray-700"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Screen Canvas Area with CRT Overlay */}
        <div className="relative border-4 border-gray-800 rounded overflow-hidden shadow-inner bg-black w-full max-w-[400px]">
          <canvas
            ref={canvasRef}
            width={400}
            height={460}
            className="w-full h-auto block"
          />

          {/* Menu Overlay */}
          {gameState === "menu" && (
            <div className="absolute inset-0 bg-black/85 flex flex-col items-center justify-center text-center p-4">
              <h2 className="text-xl sm:text-2xl font-extrabold text-amber-400 dark:text-cyan-400 mb-2 tracking-wider animate-pulse">
                BUG HUNTER 1989
              </h2>
              <p className="text-xs text-gray-300 mb-6 max-w-xs leading-relaxed">
                Shoot down all bugs &amp; syntax errors before they breach the production server!
              </p>

              <button
                onClick={startNewGame}
                className="px-6 py-2.5 bg-green-500 hover:bg-green-400 text-black font-extrabold text-sm border-2 border-black shadow-[4px_4px_0px_#000] active:translate-x-1 active:translate-y-1 transition-transform mb-4 flex items-center gap-2"
              >
                <Play className="w-4 h-4 fill-current" /> PRESS START (PLAY)
              </button>

              <div className="text-[10px] text-gray-400 font-mono space-y-1">
                <p>💻 PC: Arrow Keys / A-D (Move) | SPACE (Shoot)</p>
                <p>📱 Touch: Use on-screen controls below</p>
              </div>
            </div>
          )}

          {/* Game Over Overlay */}
          {gameState === "gameover" && (
            <div className="absolute inset-0 bg-black/90 flex flex-col items-center justify-center text-center p-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-red-500 mb-2 tracking-wider animate-bounce">
                GAME OVER
              </h2>
              <p className="text-sm text-yellow-400 font-mono mb-1">
                FINAL SCORE: {score} PTS
              </p>
              <p className="text-xs text-cyan-400 font-mono mb-6">
                WAVE REACHED: {wave}
              </p>

              <button
                onClick={startNewGame}
                className="px-6 py-2.5 bg-amber-400 hover:bg-amber-300 text-black font-extrabold text-xs sm:text-sm border-2 border-black shadow-[4px_4px_0px_#000] active:translate-x-1 active:translate-y-1 transition-transform flex items-center gap-2"
              >
                <RotateCcw className="w-4 h-4" /> INSERT COIN (PLAY AGAIN)
              </button>
            </div>
          )}
        </div>

        {/* On-Screen Mobile & Tablet Touch Controls */}
        <div className="w-full flex items-center justify-between gap-2 mt-3 pt-2 border-t-2 border-gray-800">
          {/* Movement Buttons */}
          <div className="flex gap-2">
            <button
              onPointerDown={() => (keysRef.current.left = true)}
              onPointerUp={() => (keysRef.current.left = false)}
              onPointerLeave={() => (keysRef.current.left = false)}
              className="p-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg border-2 border-black shadow-[2px_2px_0px_#000] active:translate-x-0.5 active:translate-y-0.5"
              aria-label="Move left"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onPointerDown={() => (keysRef.current.right = true)}
              onPointerUp={() => (keysRef.current.right = false)}
              onPointerLeave={() => (keysRef.current.right = false)}
              className="p-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg border-2 border-black shadow-[2px_2px_0px_#000] active:translate-x-0.5 active:translate-y-0.5"
              aria-label="Move right"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Shoot Button */}
          <button
            onPointerDown={() => {
              keysRef.current.shoot = true;
            }}
            onPointerUp={() => {
              keysRef.current.shoot = false;
            }}
            onPointerLeave={() => {
              keysRef.current.shoot = false;
            }}
            className="flex items-center gap-1.5 px-6 py-3 bg-red-600 hover:bg-red-500 text-white font-extrabold text-xs sm:text-sm rounded-lg border-2 border-black shadow-[3px_3px_0px_#000] active:translate-x-0.5 active:translate-y-0.5"
            aria-label="Shoot laser"
          >
            <Zap className="w-4 h-4 fill-yellow-300 text-yellow-300" />
            <span>FIRE</span>
          </button>
        </div>
      </div>
    </div>
  );
}
