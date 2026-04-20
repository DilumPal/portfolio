import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectCard from './components/ProjectCard';

function App() {
  const projects = [
    {
      title: "Saffron App",
      description: "A stall reservation system built with React and Spring Boot.",
      tags: ["React", "Spring Boot", "PostgreSQL"],
    },
    {
      title: "PharmaCare",
      description: "Inventory management system for pharmacies with real-time updates.",
      tags: ["Node.js", "Express", "React", "PostgreSQL"],
    }
  ];

  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <Hero />
      
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj, index) => (
            <ProjectCard key={index} {...proj} />
          ))}
        </div>
      </section>

      <footer className="py-10 text-center text-gray-500 border-t border-gray-800">
        <p>© 2026 Dilum Pelawaththa. Built with React & Tailwind.</p>
      </footer>
    </div>
  );
}

export default App;