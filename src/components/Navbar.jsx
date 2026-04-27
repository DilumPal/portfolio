import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 top-0 bg-white/10 backdrop-blur-md border-b border-white/10 px-6 py-4 flex justify-between items-center text-white">
      <h1 className="text-xl font-bold tracking-tighter">DR.DEV</h1>
      <ul className="hidden md:flex gap-8 font-medium">
        <li className="hover:text-blue-400 cursor-pointer transition"><a href="#about">About</a></li>
        <li className="hover:text-blue-400 cursor-pointer transition"><a href="#projects-section">Projects</a></li>
        <li className="hover:text-blue-400 cursor-pointer transition">Contact</li>
      </ul>
      <div className="flex gap-4 text-2xl">
        <a
          href="https://github.com/DilumPal"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400 cursor-pointer transition"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/dilum-palawaththa-3557a2306?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 cursor-pointer transition"
        >
          <FaLinkedin />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;