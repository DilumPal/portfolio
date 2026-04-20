import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 top-0 bg-white/10 backdrop-blur-md border-b border-white/10 px-6 py-4 flex justify-between items-center text-white">
      <h1 className="text-xl font-bold tracking-tighter">DP.DEV</h1>
      <ul className="hidden md:flex gap-8 font-medium">
        <li className="hover:text-blue-400 cursor-pointer transition">About</li>
        <li className="hover:text-blue-400 cursor-pointer transition">Projects</li>
        <li className="hover:text-blue-400 cursor-pointer transition">Contact</li>
      </ul>
      <div className="flex gap-4 text-2xl">
        <FaGithub className="hover:text-gray-400 cursor-pointer transition" />
        <FaLinkedin className="hover:text-blue-500 cursor-pointer transition" />
      </div>
    </nav>
  );
};

export default Navbar;