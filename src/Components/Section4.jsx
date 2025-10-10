import React from 'react';

function VideoSection() {
    return (
        <div className="relative bg-cover bg-center ">
            <img src="src/assets/images/img6.png" alt="" />
            <div className="absolute  bg-black opacity-40"></div>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4 z-10">
                <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight mb-4">
                    SEE IT IN ACTION
                </h2>
                <p className="text-sm sm:text-base md:text-lg mb-8 font-light max-w-2xl">
                    Watch our video to get a clear understanding of how it works.
                </p>
                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24">
                    <img src="src/assets/images/img7.png" alt="" className="w-full h-full object-contain cursor-pointer "
                    />
                </div>
            </div>
        </div>
    );
}

export default VideoSection;
