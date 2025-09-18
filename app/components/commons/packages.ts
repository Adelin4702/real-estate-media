import { Card } from './types';
import {faCamera, faFilm, faMobileAlt, faPaperPlane, faStreetView, faVideo} from "@fortawesome/free-solid-svg-icons";

export const PACKAGES: Card[] = [
    {
        id: '1',
        title: 'STANARD',
        description:
            'Pachet de bază ce include servicii **foto profesionale și video**. Ideal pentru o prezentare rapidă și eficientă.\n' +
            '\n** .**\n' +
            '✓ Apartamente **700 Ron**\n' +
            '✓ Case 120-220 mp **800 Ron**\n' +
            '✓ 220-320 mp **900 Ron**\n' +
            '✓ Terenuri **500 Ron**\n' +
            '✓ Spații comerciale ( ofertă realizată în funcție de suprafața)\n' +
            '✓ Pensiune ( ofertă realizată în funcție de suprafața)\n' +
            '✓ Hoteluri ( ofertă realizată în funcție de suprafața)',
        package: true,
        icons: [faCamera, faFilm]
    },
    {
        id: '2',
        title: 'STANDARD PLUS',
        description:
            'Upgrade-ul la pachetul Standard. Servicii **foto și video profesionale**, ambele realizate cu echipament dedicat pentru o **calitate superioară**.\n' +
            '\n** .**\n' +
            '✓ Apartamente **1000 Ron**\n' +
            '✓ Case 120-220 mp **1200 Ron**\n' +
            '✓ 220-320 mp **1500 Ron**\n' +
            '✓ Terenuri **500 Ron**\n' +
            '✓ Spații comerciale (ofertă realizată în funcție de suprafața)\n' +
            '✓ Pensiune (ofertă realizată în funcție de suprafața)\n' +
            '✓ Hoteluri (ofertă realizată în funcție de suprafața)',
        package: true,
        icons: [faCamera, faVideo]
    },
    {
        id: '3',
        title: 'DELUXE',
        description:
            'Pe lângă servicii **foto profesionale și video**, acest pachet include un **tur virtual 360°**, aducând proprietatea la viață.\n' +
            '\n** .**\n' +
            '✓ Apartamente **1000 Ron**\n' +
            '✓ Case 120-220 mp **1200 Ron**\n' +
            '✓ Case 220-320 mp **1300 Ron**\n' +
            '✓ Spații comerciale (ofertă realizată în funcție de suprafata)\n' +
            '✓ Pensiune (ofertă realizată în funcție de suprafața)\n' +
            '✓ Hotel (ofertă realizată în funcție de suprafața)',
        package: true,
        icons: [faCamera, faFilm, faStreetView]
    },
    {
        id: '4',
        title: 'DELUXE PLUS',
        description:
            'Soluția completă Deluxe, cu **servicii foto și video profesionale**. Include **tur virtual** și **filmări spectaculoase cu drona**.\n' +
            '\n** .**\n' +
            '✓ Apartamente **1200 Ron**\n' +
            '✓ Case 120-220 mp **1400 Ron**\n' +
            '✓ Case 220-320 mp **1500 Ron**\n' +
            '✓ Spații comerciale (ofertă realizată în funcție de suprafata)\n' +
            '✓ Pensiune (ofertă realizată în funcție de suprafața)\n' +
            '✓ Hotel (ofertă realizată în funcție de suprafața)',
        package: true,
        icons: [faCamera, faVideo, faStreetView, faPaperPlane]
    },
    {
        id: '5',
        title: 'PREMIUM',
        description:
            'Pachet complet cu **tur virtual** și **un reel vertical** pentru social media, pe lângă **serviciile foto profesionale și video**.\n' +
            '\n** .**\n' +
            '✓ Apartamente **1200 Ron**\n' +
            '✓ Case 120-220 mp **1300 Ron**\n' +
            '✓ Case 220-320 mp **1400 Ron**\n' +
            '✓ Spații comerciale (ofertă realizată în funcție de suprafața)\n' +
            '✓ Pensiune (ofertă realizată în funcție de suprafața)\n' +
            '✓ Hotel (ofertă realizată în funcție de suprafața)',
        package: true,
        icons: [faCamera, faFilm, faStreetView, faMobileAlt]
    },
    {
        id: '6',
        title: 'PREMIUM PLUS',
        description:
            'Pachetul de **top**. Toate beneficiile pachetului Premium, dar cu **servicii foto și video de calitate profesională** pentru un impact maxim.\n' +
            '\n** .**\n' +
            '✓ Apartamente **1400 Ron**\n' +
            '✓ Case 120-220 mp **1500 Ron**\n' +
            '✓ Case 220-320 mp **1600 Ron**\n' +
            '✓ Spații comerciale (ofertă realizată în funcție de suprafata)\n' +
            '✓ Pensiune (ofertă realizată în funcție de suprafața)\n' +
            '✓ Hotel (ofertă realizată în funcție de suprafața)',
        package: true,
        icons: [faCamera, faVideo, faStreetView, faMobileAlt]
    },
];