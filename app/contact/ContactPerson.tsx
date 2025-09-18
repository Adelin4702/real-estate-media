import Image from 'next/image';
import Link from 'next/link';
import { FaEnvelope, FaFacebook, FaTiktok, FaWhatsapp } from 'react-icons/fa';

interface ContactPersonProps {
    name: string;
    description: string;
    availability: string;
    imageSrc: string;
    email: string;
    phone: string;
    facebook: string;
    whatsapp: string;
}

const ContactPerson = ({
                           name,
                           description,
                           availability,
                           imageSrc,
                           email,
                           phone,
                           facebook,
                           whatsapp,
                           }: ContactPersonProps) => {
    return (
        <div className="w-full max-w-lg py-12 sm:py-16 text-center">
            <div className="space-y-4">
                {/* Round Image */}
                <div className="relative w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-4">
                    <Image
                        src={imageSrc}
                        alt={`${name} photo`}
                        fill
                        className="rounded-full border-4 border-teal-500 object-cover"
                    />
                </div>

                {/* Name and Title */}
                <h2 className="text-2xl md:text-3xl px-0 font-semibold text-gray-800">{name}</h2>

                {/* Description with Phone Link */}
                <Link href={`tel:${phone}`} className="text-sm sm:text-lg text-gray-800 hover:text-teal-600 transition-colors">
                    {phone} - {description}
                </Link>

                {/* Availability */}
                <p className="text-sm sm:text-lg text-gray-800">
                    <strong>Disponibil: </strong> {availability}
                </p>

                {/* Social Links */}
                <div className="mt-4 flex justify-center gap-4 sm:gap-6">
                    {email && (
                        <Link href={`mailto:${email}`} target="_blank" className="text-xl sm:text-2xl text-teal-600 hover:text-teal-800">
                            <FaEnvelope />
                        </Link>
                    )}
                    {facebook && (
                        <Link href={facebook} target="_blank" className="text-xl sm:text-2xl text-teal-600 hover:text-teal-800">
                            <FaFacebook />
                        </Link>
                    )}
                    {whatsapp && (
                        <Link href={whatsapp} target="_blank" className="text-xl sm:text-2xl text-teal-600 hover:text-teal-800">
                            <FaWhatsapp />
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ContactPerson;