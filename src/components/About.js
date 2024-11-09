import logo from "../assests/img.jpg";

const About = () => {

    return(
        <div class="about-section bg-gradient-to-b from-pink-100 to-white p-10 rounded-3xl shadow-2xl max-w-3xl mx-auto mt-10">
        <h1 class="text-3xl font-extrabold text-gray-800 text-center mb-6">About Us</h1>
        
        <div class="text-center mb-6">
            <img src={logo} alt="Shreya Pandey" class="rounded-full mx-auto w-40 h-40 mb-4 shadow-lg border-4 border-pink-200"/>
            <h2 class="text-2xl text-pink-600 font-semibold">Hello! I’m Shreya Pandey</h2>
        </div>
        
        <p class="text-gray-700 text-center text-lg leading-relaxed mb-6 px-4">
            A passionate Frontend Developer dedicated to creating seamless and engaging user experiences.
        </p>
        
        <ul class="list-none text-gray-700 space-y-4 px-6 text-lg">
            <li class="flex items-start space-x-3">
                <span class="text-pink-500 mt-1">&#10003;</span>
                <p>Specialized in React, JavaScript, and Tailwind CSS for building responsive and dynamic interfaces.</p>
            </li>
            <li class="flex items-start space-x-3">
                <span class="text-pink-500 mt-1">&#10003;</span>
                <p>Skilled in optimizing code for performance and creating clean, maintainable code structures.</p>
            </li>
            <li class="flex items-start space-x-3">
                <span class="text-pink-500 mt-1">&#10003;</span>
                <p>Experienced in integrating APIs to add dynamic and data-driven content to applications.</p>
            </li>
            <li class="flex items-start space-x-3">
                <span class="text-pink-500 mt-1">&#10003;</span>
                <p>Constantly learning and adapting to new tools and technologies in the frontend ecosystem.</p>
            </li>
        </ul>
    </div>
    

    );
};

export default About;