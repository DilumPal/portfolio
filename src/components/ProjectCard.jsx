const ProjectCard = ({ title, date, type, description, tags, links, image }) => {
  return (
    <div className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500 transition-all group flex flex-col h-full">
      <div className="h-48 bg-gray-700 overflow-hidden flex-shrink-0">
        {/* Render the image if provided, otherwise show the placeholder */}
        {image ? (
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-blue-900 to-gray-800 flex items-center justify-center text-gray-500">
            Project Preview
          </div>
        )}
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition">
          {title}
        </h3>
        
        {/* Date and Type tags */}
        <div className="flex flex-wrap items-center gap-2 mb-4 text-xs">
          {date && (
            <span className="bg-gray-700 text-gray-300 px-2 py-1 rounded-md">
              {date}
            </span>
          )}
          {type && (
            <span className="text-blue-300 font-medium">
              {type}
            </span>
          )}
        </div>

        {/* Description section */}
        <div className="text-gray-400 text-sm mb-6 leading-relaxed flex-grow">
          {Array.isArray(description) ? (
            <ul className="list-disc list-outside ml-4 space-y-1.5">
              {description.map((desc, idx) => (
                <li key={idx}>{desc}</li>
              ))}
            </ul>
          ) : (
            <p>{description}</p>
          )}
        </div>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tags?.map((tag, index) => (
            <span key={index} className="text-xs font-mono bg-gray-900 text-blue-300 px-2 py-1 rounded border border-gray-800">
              {tag}
            </span>
          ))}
        </div>

        {/* Links section positioned at bottom */}
        {links && links.length > 0 && (
          <div className="flex flex-wrap gap-4 mt-auto pt-4 border-t border-gray-700">
            {links.map((link, idx) => (
              <a 
                key={idx} 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1"
              >
                {link.label} ↗
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;