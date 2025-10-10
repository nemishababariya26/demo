import React from 'react';
const features = [
    {
        number: '01',
        title: 'EXPERTISE AND',
        subtitle: 'EXPERIENCE',
    },
    {
        number: '02',
        title: 'COMMITTED TO',
        subtitle: 'QUALITY',
    },
    {
        number: '03',
        title: 'COMPREHENSIVE',
        subtitle: 'SERVICES',
    },
];

function AboutSection() {
    return (
        <div className="py-16 md:py-24 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
                    <div className="w-full lg:w-1/2">
                        <p className="text-sm tracking-widest uppercase mb-3 font-semibold text-blue-800">
                            ABOUT US
                        </p>
                        <h2 className="text-3xl md:text-5xl font-extrabold leading-tight mb-6 text-gray-900">
                            EMPOWERING YOUR BUSINESS WITH TAILORED LOGISTICS SOLUTIONS
                        </h2>

                        <p className="text-base md:text-lg mb-8 text-gray-600">
                            At FastGo, we believe in providing our clients with personalized and
                            efficient logistics solutions that meet their unique needs. With years of
                            experience and a team of experts, we are dedicated to empowering your
                            business with seamless shipping experiences.
                        </p>
                        <button
                            className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded shadow-lg transition duration-300 ease-in-out uppercase text-sm tracking-wider"    >
                            LEARN MORE
                        </button>
                    </div>
                    <div>
                        <img src="src/assets/images/img2.png" alt="" className="object-cover w-full h-full " />
                    </div>
                </div>
            </div>
            <div className="py-10 md:py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">

                        {features.map((feature, index) => (
                            <div key={index} className="bg-gray-900 text-white p-6 md:p-8 rounded-xl shadow-lg border-2 border-transparent hover:border-blue-500 transition duration-300 ease-in-out" >
                                <div className="flex items-center space-x-4">
                                    <div className="relative text-5xl font-extrabold text-white leading-none pr-4">
                                        {feature.number}
                                        <span className="absolute right-0 top-1/2 transform -translate-y-1/2 h-full w-px border-r-2 border-dashed border-white opacity-30"
                                            style={{ height: '80%' }}
                                        ></span>
                                    </div>
                                    <div className="flex flex-col text-left uppercase text-sm font-semibold tracking-wider pl-4">
                                        <span className="mb-0.5">{feature.title}</span>
                                        <span className="text-lg font-extrabold leading-none">{feature.subtitle}</span>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;