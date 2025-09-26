// src/components/Resume.jsx

const Resume = () => {
    // NOTE: You will need to put your actual PDF resume in the 'public' folder 
    // and name it 'Juma_Denis_CV.pdf' (or update the filename below).
    const resumeFileName = "Juma_Denis_CV.pdf";

    return (
        <section id="resume" className="py-20 bg-blue-700 dark:bg-blue-900">
            <div className="max-w-4xl mx-auto px-6 text-center">

                <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
                    Ready for the Next Challenge?
                </h2>

                <p className="text-blue-200 dark:text-blue-300 mb-8 text-lg">
                    Download my full curriculum vitae to see detailed experience, project methodologies, and technical expertise in AI orchestration and data systems.
                </p>

                <a
                    href={`/${resumeFileName}`}
                    download // This attribute tells the browser to download the file
                    className="inline-block px-12 py-4 text-xl font-bold bg-white text-blue-700 rounded-lg shadow-xl hover:bg-gray-100 transition duration-300 transform hover:scale-105"
                >
                    Download Full CV (PDF) 📄
                </a>
            </div>
        </section>
    );
};

export default Resume;