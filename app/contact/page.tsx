import Image from 'next/image';
import ContactPerson from "./ContactPerson";
import ContactForm from "./ContactForm";
import {InstaPost} from "./InstaPost";

export default function Contact() {
    return (
        <div className="min-h-screen bg-white text-gray-900 flex flex-col items-center">
            {/* Hero Section */}
            <div className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[90vh]">
                <Image
                    src="/contact-image.webp"
                    alt="Real Estate Media"
                    fill
                    className="object-cover z-0"
                />
                {/* Black Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-70 z-10 flex flex-col justify-center items-center text-center px-4 sm:px-6">
                    <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 drop-shadow-lg">
                        AR-REAL ESTATE MEDIA
                    </h1>
                    <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl max-w-2xl sm:max-w-3xl mb-3 sm:mb-4">
                        Peste <span className="font-semibold text-teal-300">1500 de proprietăți</span> filmate și
                        fotografiate în ultimii 4 ani.
                    </p>
                    <p className="text-teal-300 text-sm sm:text-md md:text-lg lg:text-xl max-w-2xl sm:max-w-3xl">
                        Proprietățile cu materiale profesioniste de prezentare se vând și închiriază cu până la <span
                        className="font-bold">80% mai repede</span>!
                    </p>
                </div>
            </div>

            <h1  id="contact"  className="text-3xl md:text-5xl font-bold pt-16">CONTACTEAZA-NE</h1>
            <p className=" text-lg w-full px-2 md:px-0 md:w-2/5 py-6 text-gray-600 text-center" >
                Ai o proprietate de prezentat și vrei să te asiguri că strălucește? Suntem aici să te ajutăm!
                Contactează-ne acum pentru o discuție despre cum putem transforma împreună viziunea ta în realitate și maximiza
                potențialul proprietății tale.
            </p>

            {/* Contact Person and Contact Form */}
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-6 flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
                {/* Contact Person */}
                <div className="w-full lg:w-1/2 flex justify-center">
                    <ContactPerson
                        name="Alex Mosora - Owner AR Real Estate Media"
                        description="Sună-mă acum pentru a programa o ședință"
                        availability="Luni-Vineri: 09-19"
                        imageSrc="/contact-person-image.webp"
                        email={`${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`}
                        phone={`${process.env.NEXT_PUBLIC_MOBILE}`}
                        facebook={`${process.env.NEXT_PUBLIC_FACEBOOK_URL}`}
                        whatsapp={`${process.env.NEXT_PUBLIC_WHATSAPP_URL}`}
                    />
                </div>

                {/* Contact Form */}
                <div className="w-full lg:w-1/2 flex justify-center">
                    <ContactForm />
                </div>
            </div>
            <InstaPost/>
        </div>
    );
}