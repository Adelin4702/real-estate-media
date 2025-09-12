    import {Geist, Geist_Mono, Oswald} from "next/font/google";
    import "./globals.css";
    import Navbar from "./components/navbar/Navbar";
    import Footer from "./components/footer/Footer";
    import CookieConsentWrapper from "./components/commons/CookieConsentWrapper";
    import type { Metadata } from 'next';

    const geistSans = Geist({
        variable: "--font-geist-sans",
        subsets: ["latin"],
    });

    const geistMono = Geist_Mono({
        variable: "--font-geist-mono",
        subsets: ["latin"],
    });

    const oswald = Oswald({
        subsets: ["latin"],
        variable: "--font-oswald",
        weight: ["200", "300", "400", "500", "700"],
        display: "swap",
    });

    export const metadata: Metadata = {
        title: "Real Estate Media - Servicii Profesionale de Media Imobiliară",
        description: "Servicii profesionale de media imobiliară: fotografie, video, tur virtual 360°, drone pentru proprietăți. Prezentăm imobilele în modul cel mai atractiv.",
        keywords: "fotografie imobiliară, video imobiliară, tur virtual 360, drone imobiliare, media imobiliară, prezentare proprietăți, marketing imobiliar, fotograf proprietăți",
        robots: "index, follow",
        openGraph: {
            title: "Real Estate Media - Servicii Profesionale de Media Imobiliară",
            description: "Transformăm proprietățile în povești vizuale captivante prin fotografie profesională, video cinematic și tururi virtuale 360°.",
            type: "website",
            images: [
                {
                    url: "/og-image.jpg",
                    width: 1200,
                    height: 630,
                    alt: "Real Estate Media - Servicii Media Imobiliară"
                }
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: "Real Estate Media - Servicii Media Imobiliară",
            description: "Fotografie, video și tururi virtuale pentru proprietăți. Prezentări profesionale care vând.",
            images: ["/og-image.jpg"],
        },
        other: {
            "application/ld+json": JSON.stringify({
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "Real Estate Media",
                "description": "Servicii profesionale de media imobiliară - fotografie, video, tururi virtuale 360°",
                "serviceType": "Real Estate Photography and Media Services",
                "areaServed": "România",
                "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "Servicii Media Imobiliară",
                    "itemListElement": [
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Fotografie Imobiliară Profesională"
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Video Imobiliar și Drone"
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Tururi Virtuale 360°"
                            }
                        }
                    ]
                }
            })
        }
    };

    export default function RootLayout({
                                           children,
                                       }: Readonly<{ children: React.ReactNode }>) {

        return (
            <html lang="ro">
            <body className={`${oswald.variable} antialiased`}>
            {/* Render CookieConsent doar pe client */}
            <CookieConsentWrapper/>

            <Navbar/>
            {children}
            <Footer/>
            </body>
            </html>
        );
    }