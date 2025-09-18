'use client';

import React from 'react';
import {motion} from 'framer-motion';
import Image from 'next/image';
import CardShow from "../components/commons/CardShow";
import {PACKAGES} from "../components/commons/packages";
import Link from "next/link";
import {cardVariants, imageVariants, textVariants} from "../components/commons/variants";



export default function About() {
    return (
        <section className="bg-white py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    {/* Fotografie mare pe stânga */}
                    <motion.div
                        variants={imageVariants}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        className="flex justify-center items-center"
                    >
                        <Image
                            src="/packages-image.webp"
                            alt="Proprietate imobiliară"
                            width={0}
                            height={0}
                            sizes="100wh"
                            className="w-fit h-auto object-cover rounded-lg"
                            loading="lazy"
                        />
                    </motion.div>


                    {/* Text mare pe dreapta */}
                    <motion.div
                        variants={textVariants}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        className="text-center lg:text-left"
                    >
                        <h1 className="text-3xl md:text-6xl font-bold mb-4">
                            PACHETELE NOASTRE DE SERVICII
                        </h1>
                        <br/>
                        <p className="text-lg font-extralight md:text-3xl text-gray-700">
                            La AR-Real Estate Media transformăm modul în care proprietățile sunt văzute și
                            vândute prin <strong> fotografie imobiliară de înaltă calitate, tururi virtuale 3D
                            </strong> și <strong> filmări aeriene spectaculoase </strong>, maximizând atractivitatea
                            și valoarea proprietății tale pe piață.
                        </p>
                    </motion.div>
                </div>
            </div>

            <motion.h2
                variants={cardVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-bold text-center mb-8 pt-20"
            >
                Pachetele Noastre
            </motion.h2>

            <motion.h4
                variants={cardVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="text-xl font-light md:text-2xl text-center mb-8 px-5 md:px-28 text-gray-700"
            >
                Am creat o serie de pachete flexibile, gândite să răspundă nevoilor diverse ale proprietăților
                tale, de la apartamente la vile luxoase. Fiecare pachet combină armonios fotografie imobiliară
                profesională, tururi virtuale 3D interactive, planuri de etaj detaliate și filmări aeriene
                spectaculoase, asigurând o prezentare completă și atrăgătoare.
            </motion.h4>
            <CardShow items={PACKAGES}/>
            <motion.h4
                variants={cardVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="text-xl font-medium md:text-2xl text-center mb-8 px-5 md:px-28 text-gray-700"
            >
                Fiecare proiect este unic. Dacă aveți nevoie de un serviciu individual, <Link href={"/contact#contact"}> contactați-ne </Link> și vă vom crea o soluție personalizată.
            </motion.h4>
        </section>
    );
}