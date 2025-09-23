'use client';

import Link from 'next/link';
import {motion} from 'framer-motion';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMoneyBill, faMousePointer} from '@fortawesome/free-solid-svg-icons';

const PropertyWebsiteBanner = () => {
    return (
        <motion.div
            className="bg-gray-100 border rounded-[3px] shadow-lg w-[90vw] mx-auto my-12 p-6"
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.6, ease: 'easeOut'}}
        >
            {/* Titlu */}
            <motion.h2
                className="text-2xl font-normal text-teal-custom mb-4 text-center"
                initial={{opacity: 0, scale: 0.95}}
                animate={{opacity: 1, scale: 1}}
                transition={{duration: 0.4, delay: 0.1}}
            >
                <FontAwesomeIcon icon={faMousePointer} className="mr-2"/>
                Noutate: Site-uri pentru promovarea proprietăților!
            </motion.h2>

            {/* Descriere */}
            <motion.p
                className="text-lg md:text-xl font-normal text-gray-900 leading-relaxed mb-4 text-justify"
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 0.4, delay: 0.2}}
            >
                Pe lângă serviciile noastre foto-video pentru real estate, oferim acum <span
                className="font-normal text-teal-custom">site-uri de prezentare</span> pentru proprietăți – elegante,
                rapide și ușor de folosit, cu galerie media, rezervări și conținut personalizat.
            </motion.p>

            {/* Listă în 3 coloane pe desktop, 1 pe mobile */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-3 text-lg font-light text-gray-900 mb-6">
                {[
                    'Design modern, adaptabil la orice dispozitiv',
                    'Rezervări direct pe site',
                    'Galerie foto-video profesională',
                    'Conținut în mai multe limbi',
                    'Integrare hartă și formular de contact',
                    'Animații subtile pentru experiență fluidă',
                    'Site personalizabil după nevoile tale',
                ].map((item, index) => (
                    <motion.li
                        key={index}
                        className="flex items-start hover:text-teal-custom hover:bg-gray-200 rounded-sm transition-all duration-200"
                        initial={{opacity: 0, x: -10}}
                        animate={{opacity: 1, x: 0}}
                        transition={{duration: 0.3, delay: 0.3 + index * 0.1}}
                    >
                        <span>✓ {item}</span>
                    </motion.li>
                ))}
            </ul>

            {/* Preț */}
            <motion.p
                className="text-lg font-normal text-gray-900 mb-4 text-center"
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 0.4, delay: 0.5}}
            >
                <FontAwesomeIcon icon={faMoneyBill} className="mr-2"/>
                Oferta se face în funcție de <span className="text-teal-custom">cererea clientului</span>
            </motion.p>

            {/* CTA */}
            <div className="flex justify-center">
                <motion.div
                    initial={{opacity: 0, scale: 0.95}}
                    animate={{opacity: 1, scale: 1}}
                    transition={{duration: 0.4, delay: 0.6}}
                >
                    <Link
                        href="/contact#contact"
                        className="inline-block px-4 py-2 bg-teal-custom text-white rounded-full text-lg font-normal hover:bg-teal-custom-dark hover:shadow-md transition-all duration-300"
                    >
                        Contactează-ne pentru o ofertă
                    </Link>
                </motion.div>
            </div>

            {/* Subtext */}
            <motion.p
                className="text-lg font-light text-gray-900 mt-4 text-center"
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 0.4, delay: 0.7}}
            >
                Solicită o ofertă personalizată sau vezi exemple de site-uri realizate.
            </motion.p>
        </motion.div>
    );
};

export default PropertyWebsiteBanner;

