import React from 'react';


function ServicesSection() {
    return (
        <div className="py-16 md:py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

                {/* Section Header */}
                <p className="text-sm font-semibold tracking-widest uppercase text-blue-700 mb-2">
                    OUR SERVICES
                </p>
                <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-snug mb-12">
                    EFFICIENT AND RELIABLE SHIPPING <br className="hidden sm:inline" />
                    WITH FASTGO
                </h2>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-25">
                <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
                    <div className="bg-blue-950 text-white rounded-2xl p-6 flex flex-col  hover:scale-105 transition-transform">
                        <img src="src/assets/images/img3.png" alt="Ocean Shipping" className="h-20 w-20" />
                        <h1 className="text-lg mt-4">Ocean Shipping</h1>
                        <p className="text-sm mt-2">
                            At FastGo, we believe in providing our clients with personalized and efficient logistics solutions that meet their unique needs.
                        </p>
                    </div>
                    <div className="bg-white text-blue-950 rounded-2xl p-6 flex flex-col  hover:scale-105 transition-transform">
                        <img src="src/assets/images/img3.png" alt="Air Shipping" className="h-20 w-20" />
                        <h1 className="text-lg mt-4">Air Shipping</h1>
                        <p className="text-sm mt-2 ">
                            At FastGo, we believe in providing our clients with personalized and efficient logistics solutions that meet their unique needs.
                        </p>
                    </div>
                    <div className="bg-white text-blue-950 rounded-2xl p-6 flex flex-col  hover:scale-105 transition-transform">
                        <img src="src/assets/images/img3.png" alt="Truck Shipping" className="h-20 w-20" />
                        <h1 className="text-lg mt-4 ">Truck Shipping</h1>
                        <p className="text-sm mt-2">
                            At FastGo, we believe in providing our clients with personalized and efficient logistics solutions that meet their unique needs.
                        </p>
                    </div>

                    <div className="bg-white text-blue-950 rounded-2xl p-6 flex flex-col  hover:scale-105 transition-transform">
                        <img src="src/assets/images/img3.png" alt="Custom Clearance" className="h-20 w-20" />
                        <h1 className="text-lg mt-4 ">Custom Clearance</h1>
                        <p className="text-sm mt-2 ">
                            At FastGo, we believe in providing our clients with personalized and efficient logistics solutions that meet their unique needs.
                        </p>
                    </div>
                    <div className="bg-white text-blue-950 rounded-2xl p-6 flex flex-col  hover:scale-105 transition-transform">
                        <img src="src/assets/images/img3.png" alt="Freight Forwarding" className="h-20 w-20" />
                        <h1 className="text-lg mt-4 ">Freight Forwarding</h1>
                        <p className="text-sm mt-2 ">
                            At FastGo, we believe in providing our clients with personalized and efficient logistics solutions that meet their unique needs.
                        </p>
                    </div>
                    <div className="bg-white text-blue-950 rounded-2xl p-6 flex flex-col hover:scale-105 transition-transform">
                        <img src="src/assets/images/img3.png" alt="Insurance" className="h-20 w-20" />
                        <h1 className="text-lg mt-4 ">Insurance</h1>
                        <p className="text-sm mt-2 ">
                            At FastGo, we believe in providing our clients with personalized and efficient logistics solutions that meet their unique needs.
                        </p>
                    </div>

                </div>
            </div>


        </div>
    );
};

export default ServicesSection;