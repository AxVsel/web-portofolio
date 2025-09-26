export default function LetsBuild() {
  return (
    <section className=" text-white py-20 flex flex-col items-center justify-center">
      <h1 className="text-4xl md:text-4xl text-gray-600 font-bold mb-4 text-center">
        Let's build something together
      </h1>
      <p className="text-gray-600 mb-8 text-center max-w-xl">
        Feel free to reach out if you're looking for a developer, have a
        question, or just want to connect.
      </p>
      <div className="flex items-center gap-6 text-lg font-semibold">
        <div className="flex items-center gap-2">
          <a
            href="mailto:assperacus77@gmail.com"
            className="flex items-center gap-2 text-gray-600 hover:text-gray-800"
          >
            <img src="/emailAnimated.webp" alt="Email" className="h-8 w-8" />
            yaumilaksah@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
}
