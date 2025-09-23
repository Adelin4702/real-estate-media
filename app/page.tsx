'use client';

import React from 'react';
import {motion} from 'framer-motion';
import Hero from "./components/home/Hero";
import AboutUs from "./components/home/AboutUs";
import CardShow from "./components/commons/CardShow";
import {SERVICES} from "./data/services";
import {cardVariants} from "./components/commons/variants";

export default function Home() {
    return (
        <div>
            <Hero/>
            <AboutUs/>
            <motion.h2
                variants={cardVariants}
                initial="initial"
                whileInView="animate"
                viewport={{once: true}}
                className="text-3xl md:text-4xl font-bold text-center mb-8 pt-12"
            >
                Ce oferim?
            </motion.h2>
            <CardShow items={SERVICES}/>
        </div>
    );
}