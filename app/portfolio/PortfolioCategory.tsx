'use client';

import { useState } from 'react';
import Image from 'next/image';
import {CategoryData} from "../data/portfolio.data";

interface PortfolioCategoryProps {
    category: CategoryData;
    initialLoad?: number;
    loadMoreCount?: number;
}

const PortfolioCategory = ({
                               category,
                               initialLoad = 6,
                               loadMoreCount = 6
                           }: PortfolioCategoryProps) => {
    console.log('Category Data:', category); // Debug: Log category data
    const [visibleImages, setVisibleImages] = useState(initialLoad);
    const [loading, setLoading] = useState(false);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const loadMore = () => {
        setLoading(true);
        setTimeout(() => {
            setVisibleImages(prev => Math.min(prev + loadMoreCount, category.images.length));
            setLoading(false);
        }, 800);
    };

    const hasMore = visibleImages < category.images.length;

    return (
        <div className="mb-16">
            {/* Header categoriei */}
            <div className="mb-8">
                <h2 className="text-xl md:text-4xl font-bold text-gray-900 mb-4">
                    {category.title}
                </h2>
                <div className="w-1/2 md:w-1/4 h-1 bg-teal-500 mt-4"></div>
            </div>

            {/* Grid cu imagini */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {category.images.length === 0 ? (
                    <p className="text-red-500 col-span-full text-center">
                        No images available in this category
                    </p>
                ) : (
                    category.images.slice(0, visibleImages).map((image, index) => (
                        <div
                            key={image.id}
                            className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                            onClick={() => {
                                console.log('Image clicked:', image.src); // Debug: Log clicked image
                                setSelectedImage(image.src);
                            }}
                        >
                            {/* Container pentru imagine */}
                            <div className="relative w-full aspect-[4/3]">
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    width={400}
                                    height={300}
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                    loading={index < initialLoad ? "eager" : "lazy"}
                                    onLoad={() => console.log('Image loaded:', image.src)} // Debug: Confirm image load
                                    onError={() => console.log('Image failed to load:', image.src)} // Debug: Log image errors
                                />

                                {/* Overlay pe hover */}
                                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                                    <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            {/* Caption */}
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                                <p className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    {image.alt}
                                </p>
                            </div>
                        </div>
                    ))
                )}
            </div>

            {/* Load More Button */}
            {hasMore && (
                <div className="text-center">
                    <button
                        onClick={loadMore}
                        disabled={loading}
                        className="px-8 py-3 bg-teal-500 text-white rounded-lg hover:bg-teal-600 disabled:bg-teal-400 transition-colors duration-300 font-medium"
                    >
                        {loading ? (
                            <>
                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Se încarcă...
                            </>
                        ) : (
                            `Încarcă mai multe (${category.images.length - visibleImages} rămase)`
                        )}
                    </button>
                </div>
            )}

            {/* Modal pentru imagine mărită */}
            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4 pt-16"
                    onClick={() => setSelectedImage(null)}
                >
                    <div className="relative max-h-full">
                        <button
                            onClick={() => setSelectedImage(null)}
                            className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
                        >
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <Image
                            src={selectedImage}
                            alt="Imagine mărită"
                            width={1200}
                            height={800}
                            className="w-auto h-[90vh] object-contain"
                            onLoad={() => console.log('Modal image loaded:', selectedImage)} // Debug: Confirm modal image load
                            onError={() => console.log('Modal image failed to load:', selectedImage)} // Debug: Log modal image errors
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default PortfolioCategory;