const Footer = () => {
    return (
        <footer className="bg-gray-900 dark:bg-black text-gray-400 py-8">
            <div className="max-w-6xl mx-auto px-6 text-center">

                {/* Social Media Links (Icons would go here) */}
                <div className="flex justify-center space-x-6 mb-6">
                    {/* Placeholder for GitHub Icon Link */}
                    <a
                        href="https://github.com/therealjuma"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-2xl hover:text-white transition duration-200"
                        title="GitHub Profile"
                    >
                        {/* Placeholder for an icon like a GitHub octocat or a simple 'G' */}
                        <span className="font-bold">G</span>
                    </a>

                    {/* Placeholder for LinkedIn Icon Link */}
                    <a
                        href="https://linkedin.com/in/YOUR_LINKEDIN_PROFILE"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-2xl hover:text-white transition duration-200"
                        title="LinkedIn Profile"
                    >
                        {/* Placeholder for an icon like an 'L' */}
                        <span className="font-bold">L</span>
                    </a>
                </div>

                {/* Quick Contact Info */}
                <p className="mb-3 text-sm">
                    Email:
                    <a
                        href="mailto:jumadenis404@gmail.com"
                        className="text-white hover:text-blue-400 transition duration-200 ml-1"
                    >
                        jumadenis404@gmail.com
                    </a>
                </p>

                {/* Copyright and Branding */}
                <p className="text-sm">
                    &copy; {new Date().getFullYear()} **Denis Juma**. All Rights Reserved.
                </p>

            </div>
        </footer>
    );
};

export default Footer;