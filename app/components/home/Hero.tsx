'use client';

import {motion, Variants} from 'framer-motion';
import Link from 'next/link';
import {buttonVariants, textVariants, textVariants50} from "../commons/variants";



export default function Hero() {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Video de fundal */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute w-full h-full object-cover"
                aria-hidden="true"
                height="30%"
            >
                <source src="/videos/hero-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Filtru întunecat */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50" />

            {/* Conținut suprapus */}
            <div className="relative z-10 text-center text-white px-4">
                <motion.h1
                    variants={textVariants50}
                    initial="initial"
                    animate="animate"
                    className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4"
                >
                    Transformăm Proprietăți în Povești Vizuale
                </motion.h1>
                <motion.p
                    variants={textVariants50}
                    initial="initial"
                    animate="animate"
                    className="text-lg md:text-2xl font-medium mb-8 max-w-2xl mx-auto"
                >
                    Fotografie profesională, videografie, tururi 360° și filmări cu drona pentru a-ți pune în valoare proprietatea.
                </motion.p>
                <motion.div
                    variants={buttonVariants}
                    initial="initial"
                    animate="animate"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Link
                        href="#contact"
                        className="inline-block text-white border-2 px-6 py-3 rounded-full font-semibold  transition-colors duration-300"
                    >
                        Contactează-ne Acum
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}