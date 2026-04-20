const ProjectCard = ({ title, description, tags, link }) => {
  return (
    <div className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500 transition-all group">
      <div className="h-48 bg-gray-700 overflow-hidden">
        {/* Placeholder for project image */}
        <div className="w-full h-full bg-gradient-to-br from-blue-900 to-gray-800 flex items-center justify-center text-gray-500">
          Project Preview
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition">
          {title}
        </h3>
        <p className="text-gray-400 text-sm mb-4 leading-relaxed">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span key={index} className="text-xs font-mono bg-gray-900 text-blue-300 px-2 py-1 rounded">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;