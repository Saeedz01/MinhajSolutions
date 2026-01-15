'use client'

import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white border-t border-gray-400">
            <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">

                {/* Company Info */}
                <div>
                    <h2 className="text-xl font-semibold mb-2">MinhajSolutions</h2>
                    <p className="text-sm">
                    Professional technology services provider offering comprehensive solutions for businesses worldwide 
                    </p>
                </div>

                {/* Navigation Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-2">Services</h3>
                    <ul className="space-y-1 text-sm">
                        <li><Link href="/about" className="hover:text-orange-300">Software Development</Link></li>
                        <li><Link href="/about" className="hover:text-orange-300">Website Design & Creative</Link></li>
                        <li><Link href="/" className="hover:text-orange-300">Digital Marketing</Link></li>
                        <li><Link href="/portfolio" className="hover:text-orange-300">E-Commerce Solutions</Link></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-lg font-semibold mb-2">Company</h3>
                    <ul className="space-y-1 text-sm">
                        <li><Link href="/" className="hover:text-orange-300">Home</Link></li>
                        <li><Link href="/portfolio" className="hover:text-orange-300">Services</Link></li>
                        <li><Link href="/portfolio" className="hover:text-orange-300">Portfolio</Link></li>
                        <li><Link href="/portfolio" className="hover:text-orange-300">Blog</Link></li>
                        <li><Link href="/about" className="hover:text-orange-300">About Us</Link></li>
                        <li><Link href="/portfolio" className="hover:text-orange-300">contact</Link></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h3 className="text-lg font-semibold mb-2">Contact</h3>
                    <a
                        href={'https://mail.google.com/mail/?view=cm&fs=1&to=xyz@gmail.com'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                    >
                        Email: xyz@gmail.com
                    </a>
                    <a
                        href={'tel:+92 343 5197694'}
                        target="_blank"
                        className="block"
                    >
                        Call: +92 343 5197694
                    </a>
                    <a
                        href={'tel:+92 337 4821673'}
                        target="_blank"
                        className="block"
                    >
                        Call: +92 337 4821673
                    </a>


                    <p className="text-sm">Address: Valencia Town F Block House #16 Lahore, Pakistan</p>
                </div>
            </div>

            <div className="border-t border-white/20 text-center text-sm py-4">
                &copy; {new Date().getFullYear()} ServiceHub. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;