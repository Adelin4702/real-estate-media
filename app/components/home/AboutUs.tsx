'use client';

import React from 'react';
import {motion, Variants} from 'framer-motion';
import Image from 'next/image';
import {imageVariants, textVariants} from "../commons/variants";

// Variante pentru animațiile Framer Motion


export default function AboutUs() {
    return (
        <section className="bg-gray-100 py-12">
            <div className="container mx-auto px-4">
                {/* Titlu și Text */}
                <motion.div
                    variants={textVariants}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Experiența noastră în real estate media
                    </h2>
                    <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                        Cu o experiență solidă în domeniul media imobiliar, am avut privilegiul de a fotografia și filma
                         <strong> peste 1500 de proprietăți </strong>diverse. Fiecare proiect, de la apartamente cochete la reședințe
                        impunătoare și spații comerciale extinse, ne-a îmbogățit expertiza și ne-a consolidat înțelegerea profundă
                        a ceea ce este necesar pentru a prezenta o proprietate în cea mai bună lumină. Această vastă colecție
                        de portofoliu nu este doar o dovadă a volumului nostru de muncă, ci și a angajamentului nostru constant
                        față de calitate, inovație și rezultate excepționale pentru clienții noștri. Suntem pregătiți să aducem
                        aceeași dedicare și profesionalism și proiectului dumneavoastră.
                    </p>
                </motion.div>

                {/* Grilă de imagini */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        { src: '/about-us-1.jpg', alt: 'Apartament modern' },
                        { src: '/about-us-2.jpg', alt: 'Reședință de lux' },
                        { src: '/about-us-3.jpg', alt: 'Spațiu comercial' },
                    ].map((image, index) => (
                        <motion.div
                            key={index}
                            variants={imageVariants}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                            className="relative h-64 rounded-lg overflow-hidden"
                        >
                            <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                className="object-cover"
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}