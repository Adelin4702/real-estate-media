import {portfolioData} from "../data/portfolio.data";
import PortfolioCategory from "./PortfolioCategory";
import ImageComparisonSlider from "./ImageSlider";

export default function PortfolioPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="pt-10">
                <h1 className="text-xl md:text-5xl font-bold p-2 md:p-6 pt-3 text-center text-teal-500">
                    O IMAGINE FACE CAT 1000 DE CUVINTE, UNA PROFESIONALA FACE DIFERENȚA!
                </h1>
                <p className="text-md md:text-2xl mb-8 max-w-4xl mx-auto text-center px-4">
                    Proprietățile cu materiale profesioniste de prezentare se vând și închiriază cu până la 80% mai
                    repede!
                </p>

            </section>
            <ImageComparisonSlider beforeSrc={"/portfolio/before.webp"} afterSrc={"/portfolio/after.webp"} beforeAlt={""}
                                   afterAlt={""}/>
            {/* Portfolio Categories */}
            <section className="py-16 ">
                <div className="container mx-auto px-4">
                    {portfolioData.map((category) => (
                        <PortfolioCategory
                            key={category.id}
                            category={category}
                            initialLoad={6}
                            loadMoreCount={6}
                        />
                    ))}
                </div>
            </section>

            {/* Call to Action */}
            <section className="bg-teal-600 text-white py-16">
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
                            href="/contact#contact"
                            className="px-8 py-4 bg-yellow-500 text-gray-900 rounded-lg font-bold hover:bg-yellow-400 hover:text-gray-800 transition-colors duration-300"
                        >
                            Solicită o Ofertă
                        </a>
                        <a
                            href="/packages#cardShow"
                            className="px-8 py-4 border-2 border-white text-white rounded-lg font-bold hover:bg-white hover:text-gray-800 transition-colors duration-300"
                        >
                            Vezi Serviciile
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}