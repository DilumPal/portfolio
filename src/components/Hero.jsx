const Hero = () => {
  return (
    <section className="h-screen flex flex-col md:flex-row justify-center items-center text-center md:text-left px-6 bg-gradient-to-b from-gray-700 to-black text-white gap-12">
      {/* Image Container */}
      <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-blue-500 shadow-xl shadow-blue-500/20">
        <img 
          src="/me.jpeg" 
          alt="Dilum Pelawaththa" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text Container */}
      <div className="max-w-2xl">
        <h2 className="text-5xl md:text-7xl font-extrabold mb-4">
          Hi, I'm <span className="text-blue-500">Dilum</span>
        </h2>
        <p className="text-gray-400 text-lg md:text-xl">
          A Software Engineering student specializing in Full-Stack Web Development 
          and building scalable digital solutions.
        </p>
        <button className="mt-8 px-8 py-3 cursor-pointer bg-blue-600 hover:bg-blue-700 rounded-full font-bold transition-all transform hover:scale-105">
          View My Work
        </button>
      </div>
    </section>
  );
};

export default Hero;