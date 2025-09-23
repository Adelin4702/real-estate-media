'use client';

import React, {useRef} from 'react';
import {color, motion, Variants} from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {useMediaQuery} from "react-responsive";
import {Card} from "./types";
import {cardVariants} from "./variants";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const NextArrow = ({ onClick }: { onClick?: () => void }) => (
    <div
        className="next-arrow absolute right-0 bottom-1/2 transform -translate-y-1/2 cursor-pointer z-10"
        onClick={onClick}
        aria-label="Următorul"
    >
        →
    </div>
);

const PrevArrow = ({ onClick }: { onClick?: () => void }) => (
    <div
        className="prev-arrow absolute left-0 bottom-1/2 transform -translate-y-1/2 cursor-pointer z-10"
        onClick={onClick}
        aria-label="Precedentul"
    >
        ←
    </div>
);

type CardShowProps = {
    items: Card[];
};

export default function CardShow({ items }: CardShowProps) {
    const sliderRef = useRef<Slider | null>(null);
    const isMobile = useMediaQuery({ maxWidth: 767 });
    const pauseTimeout = useRef<NodeJS.Timeout | null>(null);

    const settings = {
        width: "100 dvw",
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: isMobile ? 1 : 3,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };

    const handleTouchStart = () => {
        sliderRef.current?.slickPause();

        if (pauseTimeout.current) clearTimeout(pauseTimeout.current);

        pauseTimeout.current = setTimeout(() => {
            sliderRef.current?.slickPlay();
        }, 5000);
    };

    return (
        <section
            id="cardShow" className="bg-white pb-12">
            <div className="container mx-auto px-10" onTouchEnd={handleTouchStart}>
                <Slider {...settings} ref={sliderRef}>
                    {items.map((card, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            initial="initial"
                            animate="animate"
                            className="px-2"
                        >
                            <div className="bg-gray-100 rounded-lg shadow-lg p-6 text-center h-full flex flex-col">
                                {card.image && (
                                    <div className="relative h-48 mb-4">
                                        <Image
                                            src={card.image}
                                            alt={card.title}
                                            fill
                                            className="object-cover rounded"
                                            sizes="(max-width: 640px) 100dvw, (max-width: 1024px) 50dvw, 33dvw"
                                            loading="lazy"
                                        />
                                    </div>
                                )}
                                {card.iframe && (
                                    <div className="relative h-48 mb-4">
                                        <iframe
                                            src={card.iframe}
                                            title={card.title}
                                            className="w-full h-full rounded"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                            loading="lazy"
                                        />
                                    </div>
                                )}
                                {!card.package && (<h3 className="text-xl font-semibold mb-2">{card.title}</h3>)}

                                {card.package && (<h3 className="text-3xl md:text-4xl font-medium mb-5">{card.title}</h3>)}

                                {card.icons && (
                                    <div style={{ display: 'flex', gap: '10px', alignItems: 'center', justifyContent: 'center', color: "gray" }}>
                                        {card.icons.map((icon, idx) => (
                                            <FontAwesomeIcon key={idx} icon={icon} size="1x" />
                                        ))}
                                    </div>
                                )}

                                {!card.package && (<p className="whitespace-pre-line text-gray-600 mb-4 flex-grow">{card.description}</p>)}

                                {card.package && (<div className="text-gray-900 pt-3 font-light text-left text-xl md:text-xl whitespace-pre-line text-gray-6 mb-4 flex-grow">
                                    {card.description.split('\n').map((line, idx) => {
                                        const parts = line.split(/(\*\*[^\*]+\*\*)/g); // Separă după **text**
                                        return (
                                            <p key={idx} style={{ margin: 0 }}>
                                                {parts.map((part, i) => {
                                                    if (/^\*\*[^*]+\*\*$/.test(part)) {
                                                        const boldText = part.slice(2, -2); // scoate ** **
                                                        return <strong key={i} style={{color:"#109dae"}}>{boldText}</strong>;
                                                    }
                                                    return part;
                                                })}
                                            </p>
                                        );
                                    })}
                               </div>)}

                                {card.button && (
                                    <Link
                                        href={card.button.href}
                                        className="inline-block bg-teal-custom text-white px-4 rounded-full hover:bg-teal-custom-dark transition-colors mt-auto"
                                    >
                                        {card.button.label}
                                    </Link>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </Slider>
            </div>
        </section>
    );
}