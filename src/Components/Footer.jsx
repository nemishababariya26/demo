function Footer() {
    return (
        <footer className="bg-black text-white">
            <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center sm:text-left">

                <div className="flex flex-col leading-relaxed">
                    <h1 className="text-2xl font-semibold mb-3">Ekspress</h1>
                    <p className="text-gray-300">
                        At FastGo, we believe in providing our clients with personalized and efficient logistics solutions that meet their unique needs.
                    </p>
                </div>
                <div className="flex flex-col leading-relaxed">
                    <h1 className="text-2xl font-semibold mb-3">Navigation</h1>
                    <ul className="text-gray-300 space-y-2">
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Services</li>
                        <li>Contact Us</li>
                    </ul>
                </div>

                <div className="flex flex-col leading-relaxed">
                    <h1 className="text-2xl font-semibold mb-3">Recent Project</h1>
                    <div className="bg-blue-950 h-32 w-40 mx-auto sm:mx-0 "></div>
                </div>
                <div className="flex flex-col gap-4">
                    <h1 className="text-2xl font-semibold mb-3">Subscribe Us</h1>
                    <input
                        type="email"
                        placeholder="Enter Your Email"
                        className="bg-white text-gray-800 placeholder-gray-400 font-medium py-2 px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2  transition w-full"
                    />
                    <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-lg transition">
                        SUBSCRIBE NOW
                    </button>
                </div>
            </div>
            <div className="border-t border-gray-700 mx-auto max-w-7xl"></div>

            <div className="flex flex-col sm:flex-row justify-between items-center w-full max-w-7xl mx-auto px-6 py-4  text-sm sm:text-base">
                <p>COPYRIGHT  © 2023 EKSPRESS </p>
                <p> DESIGNED BY TOKOTEMA </p>
            </div>
        </footer>
    );
}

export default Footer;
