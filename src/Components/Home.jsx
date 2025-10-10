import React from "react";

function HeroSection() {
    return (
        <div className="relative h-[90vh] md:h-[100vh] flex items-center justify-center bg-cover bg-center ">

            <img src="src/assets/images/bg.png" alt="Background" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/50"> </div>
            <div className="relative z-10 text-white px-6 md:px-12 lg:px-24 text-center md:text-left max-w-7xl mb-30">
                <p className="text-xs sm:text-sm md:text-base tracking-widest uppercase mb-4 font-light">
                    WE ARE BEST LOGISTIC COMPANY </p>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                    STREAMLINE YOUR SHIPPING WITH <br className="hidden sm:block" />
                    OUR CARGO SERVICES 
                </h1>
                <p className="text-sm sm:text-base md:text-lg max-w-2xl mx-auto md:mx-0 mb-10 font-light">
                    Simplify your shipping process and make it more efficient with our
                    cargo services. From start to finish, we'll handle everything to
                    ensure your cargo arrives safely.
                </p>
                <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center md:justify-start gap-8 sm:gap-16">
                    <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-xl border-2 border-white flex items-center justify-center overflow-hidden">
                        <img src="src/assets/images/img1.png" alt="" className="object-cover w-full h-full" />
                    </div>
                    <div className="text-center sm:text-left">
                        <p className="text-5xl sm:text-6xl md:text-7xl font-bold">26K</p>
                        <p className="text-sm sm:text-base font-light">Satisfied Clients</p>
                    </div>
                    <div className="text-center sm:text-left">
                        <p className="text-5xl sm:text-6xl md:text-7xl font-bold">12+</p>
                        <p className="text-sm sm:text-base font-light"> 
                            Years of Experience 
                        </p>
                    </div>
                </div> 
            </div> 
        </div>
    );
}

export default HeroSection;
