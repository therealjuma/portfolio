import { TypeAnimation } from 'react-type-animation';
import myProfileImage from './assets/photo.jpg';

const Hero = () => {
    return (
        <section class="bg-gray-100">
            <div class="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                    <div class="max-w-lg">
                        <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">denis juma</h2>
                        <p class="mt-4 text-gray-600 text-lg"><span className='text-teal-900 font-extrabold'>JumaGPT</span>: Hello! I'm Denis Juma, a data scientist with a background in procurement and supply chain management. I'm passionate about integrating AI with supply chain processes to drive innovation and efficiency. Welcome to my portfolio!</p>
                        <div class="mt-8">
                            <a href="#" class="text-blue-500 hover:text-blue-600 font-medium">Learn more about us
                                <span class="ml-2">&#8594;</span></a>
                        </div>
                    </div>
                    <div class="mt-12 md:mt-0">
                        <img src={myProfileImage} alt="Denis Juma Profile Picture" className="w-80 h-80 rounded-lg object-cover" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
