import { Card } from '../components/commons/types';

export const SERVICES: Card[] = [
    {
        id: '1',
        title: 'Fotografiere',
        image: '/service-photo.webp',
        description:
            'Servicii profesionale de fotografie imobiliară pentru o prezentare vizuală impecabilă a proprietăților, de la studiouri la case și spații comerciale. Include editare profesională pentru imagini de înaltă calitate, luminozitate optimă și detalii clare.',
        // button: { label: 'Află mai multe', href: '/services#photo' },
        package: false,
    },
    {
        id: '2',
        title: 'Video Prezentare Proprietate',
        iframe: 'https://player.mux.com/dGvF3hHi9EBzVR535JSd554sECuncafc8iZeL6SNMmk?autoplay=true&muted=true&loop=true&metadata-video-title=hero-video',
        description:
            'Producem videoclipuri de prezentare a proprietății în format orizontal și vertical 4K, ideal pentru o vizualizare cinematografică detaliată. Includem cadre profesionale filmate de la sol și din aer, evidențiind cele mai importante aspecte ale spațiului.',
        package: false,
    },
    {
        id: '3',
        title: 'Tur Virtual Proprietăți',
        image: '/service-tour.webp',
        description:
            'Oferim tururi virtuale interactive pentru a permite potențialilor cumpărători să exploreze proprietatea de la distanță, ca și cum ar fi acolo fizic. O experiență imersivă ce economisește timp și oferă o imagine completă a spațiului.',
        // button: { label: 'Află mai multe', href: '/services#tour' },
        package: false,
    },
    {
        id: '4',
        title: 'Foto/Video Dronă',
        image: '/service-drone.webp',
        description:
            'Captăm imagini aeriene spectaculoase cu drona, oferind o perspectivă unică și completă asupra proprietății și a împrejurimilor. Ideal pentru evidențierea dimensiunilor, locației și caracteristicilor exterioare, cu imagini editate pentru un impact vizual maxim.',
        package: false,
    },
    {
        id: '5',
        title: 'Video Reel Vertical 4K Prezentare Proprietate Agent',
        iframe: 'https://player.mux.com/vF9kIvRJZWZOYYrvUOEAluue02co6rAUWmvY6mNibEfE?autoplay=true&muted=true&loop=true&metadata-video-title=hero-video',
        description:
            'Creăm videoclipuri scurte și dinamice în format vertical 4K, perfecte pentru promovarea rapidă a proprietăților pe platformele sociale. Concepute pentru a atrage atenția și a oferi o privire rapidă asupra caracteristicilor cheie.',
        package: false,
    },
    {
        id: '6',
        title: 'Fotografii Ora Albastră',
        image: '/service-bluehour.webp',
        description:
            'Realizăm fotografii artistice ale proprietății la apus, capturând lumina magică a “orei albastre” pentru o atmosferă unică și atrăgătoare. Aceste imagini premium adaugă o notă de eleganță și exclusivitate prezentării imobiliare.',
        package: false,
    },
    {
        id: '7',
        title: 'NOU! Site-uri de prezentare',
        image: '/site.webp',
        description:
            'Realizăm site-uri dedicate pentru proprietăți — design profesionist, conținut personalizat și funcționalități utile, precum galerie media și rezervări.',
        package: false,
        button: {
            label: 'Vezi oferta',
            href: '/packages#siteOffer'
        }
    },
];