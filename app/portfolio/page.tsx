import type { Metadata } from 'next';
import {portfolioData} from "../data/portfolio.data";
import PortfolioCategory from "./PortfolioCategory";

export const metadata: Metadata = {
    title: "Portofoliu - Real Estate Media | Fotografie și Video Imobiliară",
    description: "Descoperă proiectele noastre: apartamente, case, vile și spații comerciale. Fotografie profesională, video drone și tururi virtuale pentru proprietăți imobiliare.",
    keywords: "portofoliu imobiliară, fotografie apartamente, case fotografiate profesional, video drone proprietăți, tururi virtuale, exemple proiecte imobiliare",
    openGraph: {
        title: "Portofoliu Real Estate Media - Proiecte Fotografiate",
        description: "Vezi cele mai bune proiecte fotografiate de echipa noastră: apartamente moderne, case premium și spații comerciale.",
        images: [
            {
                url: "/portfolio/apartamente/living-modern-1.jpg",
                width: 1200,
                height: 630,
                alt: "Portofoliu Real Estate Media"
            }
        ],
    }
};

export default function PortfolioPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white py-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">
                        Portofoliul Nostru
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
                        Descoperă cum transformăm proprietățile în povești vizuale captivante.
                        Fiecare proiect reflectă dedicarea noastră pentru excelență în media imobiliară.
                    </p>
                    <div className="flex justify-center space-x-8 text-lg">
                        <div className="flex items-center">
                            <span className="font-semibold text-yellow-400 text-2xl mr-2">150+</span>
                            <span>Proprietăți Fotografiate</span>
                        </div>
                        <div className="flex items-center">
                            <span className="font-semibold text-yellow-400 text-2xl mr-2">50+</span>
                            <span>Video Drone Realizate</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Portfolio Categories */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    {portfolioData.map((category, index) => (
                        <PortfolioCategory
                            key={category.id}
                            category={category}
                            initialLoad={index === 0 ? 9 : 6} // Prima categorie încarcă mai multe
                            loadMoreCount={6}
                        />
                    ))}
                </div>
            </section>

            {/* Call to Action */}
            <section className="bg-blue-900 text-white py-16">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold mb-6">
                        Proprietatea Ta Merită o Prezentare Profesională
                    </h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">
                        Lasă-ne să creăm o prezentare vizuală spectaculoasă care să îți valorifice
                        proprietatea la adevăratul potențial.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="/contact"
                            className="px-8 py-4 bg-yellow-500 text-blue-900 rounded-lg font-bold hover:bg-yellow-400 transition-colors duration-300"
                        >
                            Solicită o Ofertă
                        </a>
                        <a
                            href="/servicii"
                            className="px-8 py-4 border-2 border-white text-white rounded-lg font-bold hover:bg-white hover:text-blue-900 transition-colors duration-300"
                        >
                            Vezi Serviciile
                        </a>
                    </div>
                </div>
            </section>

            {/* Statistics */}
            <section className="py-16 bg-gray-100">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                        <div className="bg-white p-8 rounded-lg shadow-md">
                            <div className="text-3xl font-bold text-blue-600 mb-2">150+</div>
                            <div className="text-gray-600">Proprietăți Fotografiate</div>
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-md">
                            <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                            <div className="text-gray-600">Video Drone</div>
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-md">
                            <div className="text-3xl font-bold text-blue-600 mb-2">25+</div>
                            <div className="text-gray-600">Tururi Virtuale</div>
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-md">
                            <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
                            <div className="text-gray-600">Clienți Mulțumiți</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}