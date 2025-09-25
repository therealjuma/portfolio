const About = () => {
    return (
        <section id="about" class="py-16 bg-white dark:bg-gray-800">
            <div class="max-w-6xl mx-auto px-4">
                <div class="text-center mb-12">
                    <h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
                    <div class="w-20 h-1 bg-blue-600 mx-auto"></div>
                </div>
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div class="lg:col-span-2">
                        <div class="prose prose-lg dark:prose-invert max-w-none">
                            <p class="text-gray-600 dark:text-gray-300 mb-6">
                                I’m deeply focused on AI orchestration and data-driven systems, with a growing expertise in applying data science to supply chain integration and financial operations. My journey hasn’t been traditional — it’s been built through hands-on problem solving, bridging the gap between day-to-day business workflows and intelligent automation.
                            </p>
                            <p class="text-gray-600 dark:text-gray-300 mb-6">
                                I specialize in orchestrating AI models and tools into real workflows — connecting data pipelines, optimizing decision-making, and ensuring that insights actually reach execution. With a background in finance and operations systems, I understand both the technical and organizational bottlenecks that slow companies down.
                            </p>
                            <p class="text-gray-600 dark:text-gray-300 mb-6">
                                My core interest lies in building scalable, lean, and intelligent systems that reduce friction in processes like procurement, inventory, and financial reporting. To me, AI isn’t just about algorithms — it’s about integration, orchestration, and measurable impact.
                            </p>
                        </div>
                    </div>
                    <div class="space-y-6">
                        <div class="bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
                            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Quick Facts</h3>
                            <div class="space-y-3">
                                <div class="flex justify-between">
                                    <span class="text-gray-600 dark:text-gray-300">Location</span>
                                    <span class="text-gray-900 dark:text-white">Nairobi, Kenya</span>
                                </div>
                                <div class="flex justify-between">
                                    <span class="text-gray-600 dark:text-gray-300">Experience</span>
                                    <span class="text-gray-900 dark:text-white">2+ Years</span>
                                </div>
                                <div class="flex justify-between">
                                    <span class="text-gray-600 dark:text-gray-300">Email</span>
                                    <span class="text-gray-900 dark:text-white">jumadenis404@gmail.com</span>
                                </div>
                                <div class="flex justify-between">
                                    <span class="text-gray-600 dark:text-gray-300">Phone</span>
                                    <span class="text-gray-900 dark:text-white">+254740548200</span>
                                </div>
                            </div>
                        </div>
                        <div class="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-6">
                            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Interests</h3>
                            <div class="flex flex-wrap gap-2">
                                <span class="bg-white dark:bg-gray-700 px-3 py-1 rounded-full text-sm text-gray-700 dark:text-gray-300">Open Source</span>
                                <span class="bg-white dark:bg-gray-700 px-3 py-1 rounded-full text-sm text-gray-700 dark:text-gray-300">AI/ML</span>
                                <span class="bg-white dark:bg-gray-700 px-3 py-1 rounded-full text-sm text-gray-700 dark:text-gray-300">Data Analysis</span>
                                <span class="bg-white dark:bg-gray-700 px-3 py-1 rounded-full text-sm text-gray-700 dark:text-gray-300">Networking</span>
                                <span class="bg-white dark:bg-gray-700 px-3 py-1 rounded-full text-sm text-gray-700 dark:text-gray-300">Exploration</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;