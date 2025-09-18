import { Geist, Geist_Mono, Oswald } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import CookieConsentWrapper from "./components/commons/CookieConsentWrapper";
import type { Metadata } from "next";

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
    metadataBase: new URL('https://www.arrealestatemedia.com'),
    title: "AR Real Estate Media | Foto, Video, Tururi Virtuale & Dronă Imobiliare",
    description:
        "Servicii profesionale de fotografie, videografie, tururi virtuale 360° și filmări cu drona pentru imobiliare. Prezentăm proprietățile tale în cel mai atractiv mod pentru vânzare sau închiriere.",
    keywords:
        "fotografie imobiliară, video imobiliar, tur virtual 360, drone imobiliare, media imobiliară, prezentare proprietăți, marketing imobiliar, fotograf proprietăți, filmare dronă, videografie imobiliară",
    robots: "index, follow",
    openGraph: {
        title: "AR Real Estate Media | Media Profesională pentru Imobiliare",
        description:
            "Descoperă servicii premium de fotografie, video, tur virtual 360° și filmări cu drona pentru vânzarea și promovarea proprietăților imobiliare.",
        type: "website",
        locale: "ro_RO",
        url: "https://www.arrealestatemedia.com",
        siteName: "AR Real Estate Media",
        images: [
            {
                url: "/favicon.ico",
                width: 1200,
                height: 630,
                alt: "AR Real Estate Media - Fotografie, Video și Tur Virtual Imobiliare",
            },
        ],
    },
    other: {
        "application/ld+json": JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "AR Real Estate Media",
            "image": "https://www.arrealestatemedia.com/favicon.ico",
            "telephone": "+40 774 659 529",
            "address": {
                "@type": "PostalAddress",
                "addressCountry": "RO",
                "addressLocality": "Brașov",
                "addressRegion": "RO-BV",
            },
            "url": "https://real-estate-media.ro/",
            "description":
                "Servicii premium de fotografie, videografie, tururi virtuale 360° și filmări cu drona pentru domeniul imobiliar.",
            "serviceType":
                "Fotografie imobiliară, Videografie imobiliară, Tur virtual 360°, Filmare cu drona",
            "areaServed": "România",
            "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Servicii Media Imobiliară",
                "itemListElement": [
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Fotografie Imobiliară Profesională",
                        },
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Videografie Imobiliară și Prezentare Video",
                        },
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Tururi Virtuale 360° pentru Proprietăți",
                        },
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Filmări cu Dronă pentru Imobiliare",
                        },
                    },
                ],
            },
        }),
    },
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="ro">
        <body className={`${oswald.variable} antialiased`}>
        {/* Render CookieConsent doar pe client */}
        <CookieConsentWrapper />
        <Navbar />
        {children}
        <Footer />
        </body>
        </html>
    );
}