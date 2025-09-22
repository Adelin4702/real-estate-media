'use client'; // Pentru client-side în Next.js App Router

export const InstaPost = () => {
    const iframeSrc = "https://www.instagram.com/reel/DMngZgEsV3l/embed/captioned/?cr=1&v=14&wp=625&rd=https%3A%2F%2Faisb4634b550teenagelight.wordpress.com&rp=%2Fcontact%2F#%7B%22ci%22%3A0%2C%22os%22%3A704.8000000119209%7D";

    return (
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
            <div className="text-center mb-8">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
                    Cât durează o ședință foto/filmare ?
                </h2>
                <p className="text-lg text-gray-600">
                    Urmărește-ne pe Instagram pentru mai mult conținut
                </p>
            </div>
            <div className="max-w-md sm:max-w-lg mx-auto">
                <div className="relative bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden aspect-[9/16] transition-all duration-300 animate-fade-in">
                    {/* iFrame optimizat */}
                    <iframe
                        className="instagram-media instagram-media-rendered w-full h-full"
                        id="instagram-embed-0"
                        src={iframeSrc}
                        allowFullScreen={true}
                        frameBorder={0}
                        scrolling="no"
                        data-instgrm-payload-id="instagram-media-payload-0"
                        title="Instagram Reel"
                        loading="lazy"
                        onError={(e) => console.error('Eroare încărcare iframe:', e)}
                    />
                    {/* Fallback stilizat */}
                    <noscript>
                        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                            <a
                                href="https://www.instagram.com/reel/DMngZgEsV3l/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                            >
                                Deschide Reel-ul pe Instagram
                            </a>
                        </div>
                    </noscript>
                </div>
            </div>
        </div>
    );
};