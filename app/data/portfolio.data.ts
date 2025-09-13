// data/portfolioData.ts
export interface ImageData {
    id: string;
    src: string;
    alt: string;
    width: number;
    height: number;
}

export interface CategoryData {
    id: string;
    title: string;
    description: string;
    images: ImageData[];
}

export const portfolioData: CategoryData[] = [
    {
        id: "developer",
        title: "Fotografii dezvoltatori imobiliari",
        description: "", //"Fotografie profesională pentru apartamente moderne și clasice",
        images: [
            {
                id: "dev1",
                src: "/portfolio/developer/img_1.jpeg",
                alt: "Living modern cu design contemporan",
                width: 100,
                height: 600
            },
            {
                id: "apt2",
                src: "/portfolio/apartamente/bucatarie-alba.jpg",
                alt: "Bucătărie albă cu finisaje premium",
                width: 800,
                height: 600
            },
            {
                id: "apt3",
                src: "/portfolio/apartamente/dormitor-matrimonial.jpg",
                alt: "Dormitor matrimonial elegant",
                width: 800,
                height: 600
            },
            {
                id: "apt4",
                src: "/portfolio/apartamente/balcon-vedere.jpg",
                alt: "Balcon cu vedere panoramică",
                width: 800,
                height: 600
            },
            {
                id: "apt5",
                src: "/portfolio/apartamente/baie-moderna.jpg",
                alt: "Baie modernă cu finisaje de lux",
                width: 800,
                height: 600
            },
            {
                id: "apt6",
                src: "/portfolio/apartamente/hol-intrare.jpg",
                alt: "Hol de intrare spatios",
                width: 800,
                height: 600
            }
        ]
    },
    {
        id: "case",
        title: "Case & Vile",
        description: "Prezentări complete pentru proprietăți rezidențiale premium",
        images: [
            {
                id: "casa1",
                src: "/portfolio/case/vila-moderna-exterior.jpg",
                alt: "Vilă modernă cu arhitectură contemporană",
                width: 800,
                height: 600
            },
            {
                id: "casa2",
                src: "/portfolio/case/gradina-amenajata.jpg",
                alt: "Grădină amenajată cu piscină",
                width: 800,
                height: 600
            },
            {
                id: "casa3",
                src: "/portfolio/case/living-casa-mare.jpg",
                alt: "Living spațios cu tavan înalt",
                width: 800,
                height: 600
            },
            {
                id: "casa4",
                src: "/portfolio/case/bucatarie-insula.jpg",
                alt: "Bucătărie cu insulă centrală",
                width: 800,
                height: 600
            },
            {
                id: "casa5",
                src: "/portfolio/case/terasa-acoperita.jpg",
                alt: "Terasă acoperită pentru relaxare",
                width: 800,
                height: 600
            }
        ]
    },
    {
        id: "comercial",
        title: "Spații Comerciale",
        description: "Media profesională pentru birouri, magazine și spații comerciale",
        images: [
            {
                id: "com1",
                src: "/portfolio/comercial/birou-open-space.jpg",
                alt: "Birou open space modern",
                width: 800,
                height: 600
            },
            {
                id: "com2",
                src: "/portfolio/comercial/magazin-fashion.jpg",
                alt: "Magazin fashion cu design elegant",
                width: 800,
                height: 600
            },
            {
                id: "com3",
                src: "/portfolio/comercial/restaurant-interior.jpg",
                alt: "Interior restaurant cu atmosferă intimă",
                width: 800,
                height: 600
            },
            {
                id: "com4",
                src: "/portfolio/comercial/sala-conferinte.jpg",
                alt: "Sală de conferințe echipată modern",
                width: 800,
                height: 600
            }
        ]
    },
    {
        id: "drone",
        title: "Video Drone",
        description: "Filmări aeriene spectaculoase pentru proprietăți premium",
        images: [
            {
                id: "drone1",
                src: "/portfolio/drone/vila-aerial-1.jpg",
                alt: "Vedere aeriană vilă cu piscină",
                width: 800,
                height: 600
            },
            {
                id: "drone2",
                src: "/portfolio/drone/complex-rezidential.jpg",
                alt: "Complex rezidențial văzut din aer",
                width: 800,
                height: 600
            },
            {
                id: "drone3",
                src: "/portfolio/drone/casa-curte-mare.jpg",
                alt: "Casă cu curte mare - perspectivă aeriană",
                width: 800,
                height: 600
            }
        ]
    }
];