import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectCard from './components/ProjectCard';
import { Route } from 'react-router-dom';

function App() {
  const projects = [
    {
      title: "FitNova",
      date: "03/04/2026 – 19/06/2026",
      type: "Individual (Completed)",
      description: [
        "Built using the MERN architecture, providing a robust foundation for core administrative workflows using JWT authentication and Google OAuth.",
        "Connected to MongoDB and Supabase to store data and images."
      ],
      tags: ["MongoDB", "Express", "React", "Node.js", "Supabase"],
      image: "https://ufmapsbspsfmkdekzuwo.supabase.co/storage/v1/object/public/portfolio-images/Screenshot%20(240).png",
      links: [
        { label: "Live Web", url: "https://frontend-gym-phi.vercel.app/" },
        { label: "Frontend Repo", url: "https://github.com/DilumPal/frontend-GYM" },
        { label: "Backend Repo", url: "https://github.com/DilumPal/backend-GYM" }
      ]
    },
    {
      title: "UOK Connect",
      date: "03/07/2026 – 30/08/2026",
      type: "Group (Completed)",
      description: [
        "Developed a secure student project portfolio platform using React, Node.js, Express, and PostgreSQL to connect students with recruiters.",
        "Implemented OIDC authentication, role-based access control, JWT validation, secure file uploads, rate limiting, and CSP security."
      ],
      tags: ["React", "Node.js", "Express", "PostgreSQL"],
      image: "https://ufmapsbspsfmkdekzuwo.supabase.co/storage/v1/object/public/portfolio-images/Screenshot%20(241).png",
      links: [
        { label: "Live Web", url: "https://student-project-portal-mu6m.vercel.app/" },
        { label: "Git Repo", url: "https://github.com/BGYKanishka/Student_Project_Portal" }
      ]
    },
    {
      title: "UniConnect",
      date: "11/09/2026 – Present",
      type: "Individual",
      description: [
        "A comprehensive, AI-powered platform bridging university students, academic researchers, and industry, with a robust Spring Boot (Java) backend and a responsive Next.js (React) & Tailwind CSS frontend."
      ],
      tags: ["Next.js", "React", "Spring Boot", "Java", "Tailwind CSS"],
      image: "https://ufmapsbspsfmkdekzuwo.supabase.co/storage/v1/object/public/portfolio-images/Screenshot%20(242).png",
      links: [
        { label: "Git Repo", url: "https://github.com/DilumPal/UniConnect" }
      ]
    },
    {
      title: "AI Tutor",
      date: "20/06/2026 - Present",
      type: "Individual",
      description: [
        "Educational web app built with React, Tailwind CSS, Node.js, and MongoDB, using Google Gen AI to generate personalized quizzes and flashcards from uploaded documents.",
        "Implemented JWT authentication and study progress tracking."
      ],
      tags: ["React", "Node.js", "MongoDB", "Google GenAI", "Tailwind CSS"],
      image: "https://ufmapsbspsfmkdekzuwo.supabase.co/storage/v1/object/public/portfolio-images/Screenshot%20(243).png",
      links: [
        { label: "Git Repo", url: "https://github.com/DilumPal/AI_Tutor" }
      ]
    },
    {
      title: "StockSphere",
      date: "23/09/2026 - Present",
      type: "Individual",
      description: [
        "A full-stack real-time inventory management system using Next.js, C# .NET Core, and PostgreSQL, following Clean Architecture principles.",
        "Implemented JWT/RBAC security, SignalR real-time notifications, interactive dashboards, inventory auditing, and scalable image storage."
      ],
      tags: ["Next.js", "C#", ".NET Core", "PostgreSQL", "SignalR"],
      links: [
        { label: "Git Repo", url: "https://github.com/DilumPal/StockSphere-web" },
      ]
    },
    {
      title: "Drug-Demand-Predictor",
      date: "25/09/2026 - Present",
      type: "Individual",
      description: [
        "Developed a machine learning system using historical inventory data to predict 30-day pharmaceutical stockout risk.",
        "Built a Random Forest classification pipeline with preprocessing and model evaluation, then deployed the trained model through a FastAPI REST API for real-time predictions."
      ],
      tags: ["Python", "Pandas", "Scikit-learn", "FastAPI", "Machine Learning"],
      image: "https://ufmapsbspsfmkdekzuwo.supabase.co/storage/v1/object/public/portfolio-images/Screenshot%20(244).png",
      links: [
        { label: "Git Repo", url: "https://github.com/DilumPal/drug-demand-predictor" }
      ]
    }
  ];

  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <Hero />

      {/* Inside App.jsx, before the Projects section */}
      <section id="about" className="py-20 px-6 max-w-4xl mx-auto text-white scroll-mt-20">
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
        <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700">
          <p className="text-gray-300 leading-relaxed text-lg">
            I am currently pursuing a BSc (Hons) in Software Engineering at the University of Kelaniya. Through my academic projects and personal development, I have gained hands-on experience with  JavaScript, Java, React, Node.js, Express, Next.js, Springboot, .NET, PHP, MySQL, PostgreSQL, Git, and REST API development. I am passionate about building scalable web applications and continuously expanding my knowledge of modern software development technologies.
          </p>
        </div>
      </section>

      <section id='projects-section' className="py-20 px-6 max-w-6xl mx-auto">
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