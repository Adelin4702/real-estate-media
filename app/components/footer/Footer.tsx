'use client';

import React from 'react';
import {motion} from 'framer-motion';
import Link from 'next/link';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebook, faInstagram, faTiktok, faYoutube} from '@fortawesome/free-brands-svg-icons';
import {NAV_LINKS} from '../commons/navLinks';
import {iconVariants, textVariants} from "../commons/variants";

export default function Footer() {

    return (
        <footer className="bg-gradient-to-r from-black to-gray-700 text-white py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
                    {/* Secțiunea Link-uri */}
                    <motion.div
                        variants={textVariants}
                        initial="initial"
                        whileInView="animate"
                        viewport={{once: true}}
                        className="text-center"
                    >
                        <h3 className="text-xl font-semibold mb-4">Navigare</h3>
                        <ul className="space-y-2">
                            {NAV_LINKS.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-300  transition-colors duration-300"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Secțiunea Rețele Sociale */}
                    <motion.div
                        variants={textVariants}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <h3 className="text-xl font-semibold mb-4">Urmărește-ne</h3>
                        <ul className="flex justify-center space-x-4">
                            <li>
                                <motion.a
                                    href={`${process.env.NEXT_PUBLIC_INSTAGRAM_URL}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-300 transition-colors duration-300"
                                    aria-label="Urmărește-ne pe Instagram"
                                    variants={iconVariants}
                                    initial="initial"
                                    whileHover="hover"
                                >
                                    <FontAwesomeIcon icon={faInstagram} className="w-6 h-6"/>
                                </motion.a>
                            </li>
                            <li>
                                <motion.a
                                    href={`${process.env.NEXT_PUBLIC_FACEBOOK_URL}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-300 transition-colors duration-300"
                                    aria-label="Urmărește-ne pe Facebook"
                                    variants={iconVariants}
                                    initial="initial"
                                    whileHover="hover"
                                >
                                    <FontAwesomeIcon icon={faFacebook} className="w-6 h-6"/>
                                </motion.a>
                            </li>
                            <li>
                                <motion.a
                                    href={`${process.env.NEXT_PUBLIC_YOUTUBE_URL}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-300 transition-colors duration-300"
                                    variants={iconVariants}
                                    initial="initial"
                                    whileHover="hover"
                                >
                                    <FontAwesomeIcon icon={faYoutube} className="w-6 h-6"/>
                                </motion.a>
                            </li>
                            <li>
                                <motion.a
                                    href={`${process.env.NEXT_PUBLIC_TIKTOK_URL}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-300 transition-colors duration-300"
                                    variants={iconVariants}
                                    initial="initial"
                                    whileHover="hover"
                                >
                                    <FontAwesomeIcon icon={faTiktok} className="w-6 h-6"/>
                                </motion.a>
                            </li>
                        </ul>
                    </motion.div>

                    {/* Secțiunea Contact */}
                    <motion.div
                        variants={textVariants}
                        initial="initial"
                        whileInView="animate"
                        viewport={{once: true}}
                        className="text-center"
                    >
                        <h3 className="text-xl font-semibold mb-4">Contact</h3>
                        <ul className="space-y-2">
                            <li>
                                <a
                                    href={`mailto:${process.env.NEXT_PUBLIC_EMAIL_CONTACT}`}
                                    className="text-gray-300  transition-colors duration-300"
                                    aria-label="Trimite email către Real Estate Media"
                                >
                                    arealestatemedia@gmail.com
                                </a>
                            </li>
                            <li>
                                <a
                                    href={`tel:${process.env.NEXT_PUBLIC_MOBILE}`}
                                    className="text-gray-300 transition-colors duration-300"
                                    aria-label="Sună la Real Estate Media"
                                >
                                    +40 774 659 529
                                </a>
                            </li>
                            <li className="text-gray-300">
                                Brașov, România
                            </li>
                        </ul>
                    </motion.div>
                </div>

                {/* Copyright */}
                <motion.div
                    variants={textVariants}
                    initial="initial"
                    whileInView="animate"
                    viewport={{once: true}}
                    className="text-center mt-8 text-gray-400"
                >
                    &copy; {new Date().getFullYear()} Real Estate Media. Toate drepturile rezervate.
                </motion.div>
            </div>
        </footer>
    );
}