'use client';

import {useState} from 'react';
import {motion} from 'framer-motion';
import Link from 'next/link';
import {DesktopMenu} from './DesktopMenu';
import {MobileMenu} from './MobileMenu';
import Image from "next/image";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className=" navbar bg-gradient-to-r from-black to-gray-700 text-white sticky top-0 z-50 shadow-lg">
            <div className="container mx-auto px-4 py-2  flex justify-between items-center">
                {/* Logo cu animație */}
                <motion.div
                    initial={{opacity: 0, x: -20}}
                    animate={{opacity: 1, x: 0}}
                    transition={{duration: 0.5, ease: 'easeOut'}}
                    className="flex items-center space-x-2"
                >
                    <Link href="/" aria-label="Real Estate Media Home">
                        <Image
                            src="/logo-white.webp"
                            alt="Logo"
                            height={100}
                            width={80}
                        />
                    </Link>
                </motion.div>

                {/* Meniu Desktop */}
                <DesktopMenu/>

                {/* Buton Hamburger (Mobil) */}
                <button
                    className="md:hidden text-white focus:outline-none"
                    onClick={toggleMenu}
                    aria-label="Toggle navigation menu"
                    aria-expanded={isOpen}
                >
                    <motion.svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        animate={{rotate: isOpen ? 90 : 0}}
                        transition={{duration: 0.3}}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
                        />
                    </motion.svg>
                </button>
            </div>

            {/* Meniu Mobil */}
            <MobileMenu isOpen={isOpen} toggleMenu={toggleMenu}/>
        </nav>
    );
}