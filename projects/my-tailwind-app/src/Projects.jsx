// src/components/Projects.jsx
import ProjectCard from './ProjectCard'; // Make sure this path is correct
// Import a single image to use as a placeholder for all cards (you can change this later)
import placeholderImage from './assets/supply3.jpg'; // Create this file or update the path

const PROJECTS_DATA = [
    {
        title: "AI Orchestration Platform",
        description: "Developed a system to sequence and manage multiple AI models (LLMs, classification) to automate procurement decision-making workflows.",
        tags: ["AI Orchestration", "LangChain", "Python", "Docker", "API Integration"],
        imageSrc: placeholderImage,
        liveLink: "#",
        repoLink: "#"
    },
    {
        title: "Supply Chain Data Analysis & BI",
        description: "Built end-to-end data pipelines and Business Intelligence dashboards to track inventory, forecast demand, and visualize logistics efficiency.",
        tags: ["Data Analysis", "PostgreSQL", "Pandas", "Tableau/Power BI", "ETL"],
        imageSrc: placeholderImage,
        liveLink: "#",
        repoLink: "#"
    },
    {
        title: "Digital Procurement System",
        description: "Implemented a custom Django/React application to streamline the procurement process, integrating vendor management and automated quote analysis.",
        tags: ["Django", "React", "Digital Procurement", "Full Stack", "Agile"],
        imageSrc: placeholderImage,
        liveLink: "#",
        repoLink: "#"
    },
    {
        title: "Financial Data Preprocessing Engine",
        description: "Created a Python script to clean, validate, and standardize large volumes of financial data, reducing error rates by 30% for reporting.",
        tags: ["Data Cleaning", "Python", "Numpy", "Data Preprocessing", "Financial Reporting"],
        imageSrc: placeholderImage,
        liveLink: "#",
        repoLink: "#"
    }
];

const Projects = () => {
    return (
        <section id="projects" className="py-20 bg-gray-900 dark:bg-black">
            <div className="max-w-7xl mx-auto px-6">

                <h2 className="text-5xl font-extrabold text-white text-center mb-16">
                    featured projects
                </h2>

                {/* This is the Grid container that controls the layout */}
                <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
                    {PROJECTS_DATA.map((project, index) => (
                        <ProjectCard
                            key={index}
                            title={project.title}
                            description={project.description}
                            tags={project.tags}
                            imageSrc={project.imageSrc}
                            liveLink={project.liveLink}
                            repoLink={project.repoLink}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;