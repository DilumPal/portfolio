const Hero = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-4 bg-gradient-to-b from-gray-900 to-black text-white">
      <h2 className="text-5xl md:text-7xl font-extrabold mb-4">
        Hi, I'm <span className="text-blue-500">Dilum</span>
      </h2>
      <p className="text-gray-400 text-lg md:text-xl max-w-2xl">
        A Software Engineering student specializing in Full-Stack Web Development
        and building scalable digital solutions.
      </p>
      <button className="mt-8 px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-full font-bold transition-all transform hover:scale-105">
        View My Work
      </button>
    </section>
  );
};

export default Hero;