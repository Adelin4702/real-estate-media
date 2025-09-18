'use client';

import { useEffect, useRef, useState } from 'react';
import Image, { StaticImageData } from 'next/image';

interface ImageComparisonSliderProps {
    beforeSrc: string | StaticImageData;
    afterSrc: string | StaticImageData;
    beforeAlt: string;
    afterAlt: string;
    width?: number;
    height?: number;
}

const ImageComparisonSlider = ({
                                   beforeSrc,
                                   afterSrc,
                                   beforeAlt,
                                   afterAlt,
                                   width = 1000,
                                   height = 750,
                               }: ImageComparisonSliderProps) => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const [sliderX, setSliderX] = useState(50); // %
    const [isDragging, setIsDragging] = useState(false);

    const handleMove = (clientX: number) => {
        const container = containerRef.current;
        if (!container) return;

        const rect = container.getBoundingClientRect();
        let x = ((clientX - rect.left) / rect.width) * 100;
        x = Math.max(0, Math.min(100, x));
        setSliderX(x);
    };

    const handleMouseMove = (e: MouseEvent) => {
        if (isDragging) handleMove(e.clientX);
    };

    const handleTouchMove = (e: TouchEvent) => {
        if (isDragging && e.touches.length > 0) handleMove(e.touches[0].clientX);
    };

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('touchmove', handleTouchMove);
        window.addEventListener('mouseup', () => setIsDragging(false));
        window.addEventListener('touchend', () => setIsDragging(false));

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('touchmove', handleTouchMove);
            window.removeEventListener('mouseup', () => setIsDragging(false));
            window.removeEventListener('touchend', () => setIsDragging(false));
        };
    }, [handleMouseMove, handleTouchMove, isDragging]);

    return (
        <div
            ref={containerRef}
            className="relative mx-auto overflow-hidden touch-none select-none"
            style={{ width: '100%', maxWidth: width, aspectRatio: `${width} / ${height}` }}
        >
            {/* BEFORE image – full, fixed */}
            <Image
                src={beforeSrc}
                alt={beforeAlt}
                width={width}
                height={height}
                style={{
                    objectPosition: 'left top',
                }}
                className="absolute top-0 left-0 w-full h-full object-cover"
            />

            {/* AFTER image – masked */}
            <div
                className="absolute top-0 left-0 h-full overflow-hidden"
                style={{ width: `${sliderX}%` }}
            >
                <Image
                    src={afterSrc}
                    alt={afterAlt}
                    width={width}
                    height={height}
                    style={{
                        objectPosition: 'left top',
                    }}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* SLIDER line */}
            <div
                className="absolute top-0 h-full w-[2px] bg-white z-20 cursor-ew-resize"
                style={{
                    left: `${sliderX}%`,
                    transform: 'translateX(-1px)',
                }}
                onMouseDown={() => setIsDragging(true)}
                onTouchStart={() => setIsDragging(true)}
            />

            {/* Slider handle (optional) */}
            <div
                className="absolute z-30 w-10 h-10 bg-white border border-gray-500 rounded-full"
                style={{
                    top: '50%',
                    left: `${sliderX}%`,
                    transform: 'translate(-50%, -50%)',
                }}
                onMouseDown={() => setIsDragging(true)}
                onTouchStart={() => setIsDragging(true)}
            />
        </div>
    );
};

export default ImageComparisonSlider;
