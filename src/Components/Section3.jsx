function Section() {
    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-30">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">

                <div>
                    <img src="src/assets/images/img5.png" alt="" className="animate-pulse" />
                </div>

                <div className="w-full lg:w-1/2">
                    <p className="text-sm tracking-widest uppercase mb-3 font-semibold text-blue-800">
                        How It Works
                    </p>
                    <h2 className="text-3xl md:text-5xl font-extrabold leading-tight mb-6 text-gray-900">
                        Simplify Your Shipping Experience with Our Easy Step Process
                    </h2>

                    <p className="text-base md:text-lg mb-8 text-gray-600">
                        At FastGo, we believe in providing our clients with personalized and
                        efficient logistics solutions that meet their unique needs. With years of
                        experience and a team of experts, we are dedicated to empowering your
                        business with seamless shipping experiences.
                    </p>
                </div>

            </div>
            <div className="max-w-7xl mx-auto px-4 py-16">
                <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-20 text-center">
                    <div className="flex flex-col items-center max-w-xs">
                        <img src="src/assets/images/img3.png" alt="Request a Quote" className="h-24 w-24 mb-4"
                        />
                        <h1 className="text-lg font-semibold mb-2">Request a Quote</h1>
                        <p className="text-gray-500 text-sm">
                            At FastGo, we believe in providing our clients with personalized and efficient logistics solutions that meet their unique needs.
                        </p>
                    </div>

                    <div className="flex flex-col items-center max-w-xs">
                        <img src="src/assets/images/img3.png" alt="Track Your Shipment" className="h-24 w-24 mb-4"
                        />
                        <h1 className="text-lg font-semibold mb-2">Track Your Shipment</h1>
                        <p className="text-gray-500 text-sm">
                            At FastGo, we believe in providing our clients with personalized and efficient logistics solutions that meet their unique needs.
                        </p>
                    </div>
                    <div className="flex flex-col items-center max-w-xs">
                        <img src="src/assets/images/img3.png" alt="Get Support" className="h-24 w-24 mb-4"
                        />
                        <h1 className="text-lg font-semibold mb-2">Get Support</h1>
                        <p className="text-gray-500 text-sm">
                            At FastGo, we believe in providing our clients with personalized and efficient logistics solutions that meet their unique needs.
                        </p>
                    </div>

                </div>
            </div>



        </div>

    )

}
export default Section;