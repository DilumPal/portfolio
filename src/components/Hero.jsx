import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative h-screen flex flex-col md:flex-row justify-center items-center text-center md:text-left px-6 bg-black text-white gap-12 overflow-hidden">
      
      {/* Live Animated Blobs */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none flex justify-center items-center">
        {/* Blue Blob */}
        <motion.div
          animate={{
            x: [0, 150, -100, 0],
            y: [0, -150, 100, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-[400px] h-[400px] bg-blue-600 rounded-full mix-blend-screen filter blur-[100px] opacity-50"
        />
        {/* Indigo Blob */}
        <motion.div
          animate={{
            x: [0, -150, 150, 0],
            y: [0, 150, -150, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-[500px] h-[500px] bg-indigo-600 rounded-full mix-blend-screen filter blur-[100px] opacity-40"
        />
      </div>

      {/* Image Container */}
      <div className="relative z-10 w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-blue-500 shadow-xl shadow-blue-500/20 flex-shrink-0">
        <img 
          src="/me.jpeg" 
          alt="Dilum Pelawaththa" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text Container */}
      <div className="relative z-10 max-w-2xl">
        <h2 className="text-5xl md:text-7xl font-extrabold mb-4">
          Hi, I'm <span className="text-blue-500">Dilum</span>
        </h2>
        <p className="text-gray-400 text-lg md:text-xl">
          A Software Engineering student specializing in Full-Stack Web Development 
          and building scalable digital solutions.
        </p>
        <a 
          href="#projects-section"
          className="inline-block mt-8 px-8 py-3 cursor-pointer bg-blue-600 hover:bg-blue-700 rounded-full font-bold transition-all transform hover:scale-105"
        >
          View My Work
        </a>
      </div>
    </section>
  );
};

export default Hero;