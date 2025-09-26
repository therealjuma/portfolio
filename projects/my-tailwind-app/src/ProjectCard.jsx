const ProjectCard = ({ title, description, imageSrc, tags, liveLink, repoLink }) => {
    return (
        <div className="bg-gray-800 dark:bg-gray-700 rounded-xl shadow-2xl overflow-hidden transform transition duration-500 hover:scale-[1.02]">

            {/* Project Image */}
            <img
                src={imageSrc}
                alt={`${title} screenshot`}
                className="w-full h-48 object-cover"
            />

            <div className="p-6">

                {/* Title and Description */}
                <h3 className="text-3xl font-bold text-white mb-3">{title}</h3>
                <p className="text-gray-300 dark:text-gray-200 mb-4">{description}</p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                    {Array.isArray(tags) && tags.map((tag, index) => (
                        <span
                            key={index}
                            className="bg-blue-600/70 text-white text-xs font-semibold px-3 py-1 rounded-full"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4">
                    <a
                        href={liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition duration-200"
                    >
                        Live Demo
                    </a>
                    <a
                        href={repoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center border border-gray-500 text-gray-300 hover:bg-gray-700 font-bold py-2 px-4 rounded transition duration-200"
                    >
                        GitHub
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;