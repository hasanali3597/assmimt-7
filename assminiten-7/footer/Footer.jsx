import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="bg-black mt-20 text-gray-400 text-sm px-6 py-10">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">


                    <div className="md:col-span-1">
                        <h2 className="text-white font-semibold text-lg">CS — Ticket System</h2>
                        <p className="mt-3 leading-relaxed">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                    </div>


                    <div>
                        <h3 className="text-white font-semibold mb-2">Company</h3>
                        <ul className="space-y-1">
                            <li><a href="#" className="text-white">About Us</a></li>
                            <li><a href="#" className="text-white">Our Mission</a></li>
                            <li><a href="#" className="text-white">Contact Sales</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-2">Services</h3>
                        <ul className="space-y-1">
                            <li><a href="#" className="text-white">Products & Services</a></li>
                            <li><a href="#" className="text-white">Customer Stories</a></li>
                            <li><a href="#" className="text-white">Download Apps</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-2">Information</h3>
                        <ul className="space-y-1">
                            <li><a href="#" className="text-white">Privacy Policy</a></li>
                            <li><a href="#" className="text-white">Terms & Conditions</a></li>
                            <li><a href="#" className="text-white">Join Us</a></li>
                        </ul>
                    </div>


                    <div>
                        <h3 className="text-white font-semibold mb-2">Social Links</h3>
                        <ul className="space-y-1">
                            <li><a href="#" className="text-white"><i class="fa-brands fa-square-x-twitter"></i> @CS — Ticket System</a></li>
                            <li><a href="#" className="text-white"> @CS — Ticket System</a></li>
                            <li><a href="#" className="text-white"> @CS — Ticket System</a></li>
                            <li><a href="mailto:support@cst.com" className="text-white">support@cst.com</a></li>
                        </ul>
                    </div>
                </div>


                <div className="border-t border-gray-700 mt-10 pt-4 text-center text-gray-500 text-xs">
                    © 2025 CS — Ticket System. All rights reserved.
                </div>
            </footer>

        </div>
    );
};

export default Footer;