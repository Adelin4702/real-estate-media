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
            <ImageComparisonSlider beforeSrc={"/portfolio/before.jpg"} afterSrc={"/portfolio/after.jpg"} beforeAlt={""}
                                   afterAlt={""}/>
            {/* Portfolio Categories */}
            <section className="py-16 ">
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
                            href="/contact"
                            className="px-8 py-4 bg-yellow-500 text-gray-900 rounded-lg font-bold hover:bg-yellow-400 hover:text-gray-800 transition-colors duration-300"
                        >
                            Solicită o Ofertă
                        </a>
                        <a
                            href="/servicii"
                            className="px-8 py-4 border-2 border-white text-white rounded-lg font-bold hover:bg-white hover:text-gray-800 transition-colors duration-300"
                        >
                            Vezi Serviciile
                        </a>
                    </div>
                </div>
            </section>

            {/* Statistics */}
            {/*<section className="py-16 bg-gray-100">*/}
            {/*    <div className="container mx-auto px-4">*/}
            {/*        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">*/}
            {/*            <div className="bg-white p-8 rounded-lg shadow-md">*/}
            {/*                <div className="text-3xl font-bold text-blue-600 mb-2">150+</div>*/}
            {/*                <div className="text-gray-600">Proprietăți Fotografiate</div>*/}
            {/*            </div>*/}
            {/*            <div className="bg-white p-8 rounded-lg shadow-md">*/}
            {/*                <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>*/}
            {/*                <div className="text-gray-600">Video Drone</div>*/}
            {/*            </div>*/}
            {/*            <div className="bg-white p-8 rounded-lg shadow-md">*/}
            {/*                <div className="text-3xl font-bold text-blue-600 mb-2">25+</div>*/}
            {/*                <div className="text-gray-600">Tururi Virtuale</div>*/}
            {/*            </div>*/}
            {/*            <div className="bg-white p-8 rounded-lg shadow-md">*/}
            {/*                <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>*/}
            {/*                <div className="text-gray-600">Clienți Mulțumiți</div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</section>*/}
        </div>
    );
}