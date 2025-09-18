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
        title: "PORTOFOLIU DEZVOLTATORI IMOBILIARI",
        description: "",
        images: [
            {
                id: "dev1",
                src: "/portfolio/developer/img_1.webp",
                alt: "",
                width: 800,
                height: 600
            },
            {
                id: "dev2",
                src: "/portfolio/developer/img_2.webp",
                alt: "",
                width: 800,
                height: 600
            },
            {
                id: "dev3",
                src: "/portfolio/developer/img_3.webp",
                alt: "",
                width: 800,
                height: 600
            },
            {
                id: "dev4",
                src: "/portfolio/developer/img_4.webp",
                alt: "",
                width: 800,
                height: 600
            },
            {
                id: "dev5",
                src: "/portfolio/developer/img_5.webp",
                alt: "",
                width: 800,
                height: 600
            },
            {
                id: "dev6",
                src: "/portfolio/developer/img_6.webp",
                alt: "",
                width: 800,
                height: 600
            },
            {
                id: "dev7",
                src: "/portfolio/developer/img_7.webp",
                alt: "",
                width: 800,
                height: 600
            },
            {
                id: "dev8",
                src: "/portfolio/developer/img_8.webp",
                alt: "",
                width: 800,
                height: 600
            },
            {
                id: "dev9",
                src: "/portfolio/developer/img_9.webp",
                alt: "",
                width: 800,
                height: 600
            }
        ]
    },
    {
        id: "airbnb",
        title: "PORTOFOLIU AIRBNB",
        description: "",
        images: [
            {
                id: "airbnb1",
                src: "/portfolio/airbnb/img_1.webp",
                alt: "",
                width: 800,
                height: 600
            },
            {
                id: "airbnb2",
                src: "/portfolio/airbnb/img_2.webp",
                alt: "",
                width: 800,
                height: 600
            },
            {
                id: "airbnb3",
                src: "/portfolio/airbnb/img_3.webp",
                alt: "",
                width: 800,
                height: 600
            },
            {
                id: "airbnb4",
                src: "/portfolio/airbnb/img_4.webp",
                alt: "",
                width: 800,
                height: 600
            },
            {
                id: "airbnb5",
                src: "/portfolio/airbnb/img_5.webp",
                alt: "",
                width: 800,
                height: 600
            },
            {
                id: "airbnb6",
                src: "/portfolio/airbnb/img_6.webp",
                alt: "",
                width: 800,
                height: 600
            },
            {
                id: "airbnb7",
                src: "/portfolio/airbnb/img_7.webp",
                alt: "",
                width: 800,
                height: 600
            },
            {
                id: "airbnb8",
                src: "/portfolio/airbnb/img_8.webp",
                alt: "",
                width: 800,
                height: 600
            },
            {
                id: "airbnb9",
                src: "/portfolio/airbnb/img_9.webp",
                alt: "",
                width: 800,
                height: 600
            }
        ]
    },
    {
        id: "apartments",
        title: "PORTOFOLIU AGENȚII IMOBILIARE",
        description: "",
        images: [
            {
                id: "apt1",
                src: "/portfolio/agency/img_1.webp",
                alt: "",
                width: 800,
                height: 600
            },
            {
                id: "apt2",
                src: "/portfolio/agency/img_2.webp",
                alt: "",
                width: 800,
                height: 600
            },
            {
                id: "apt3",
                src: "/portfolio/agency/img_3.webp",
                alt: "",
                width: 800,
                height: 600
            },
            {
                id: "apt4",
                src: "/portfolio/agency/img_4.webp",
                alt: "",
                width: 800,
                height: 600
            },
            {
                id: "apt5",
                src: "/portfolio/agency/img_5.webp",
                alt: "",
                width: 800,
                height: 600
            },
            {
                id: "apt6",
                src: "/portfolio/agency/img_6.webp",
                alt: "",
                width: 800,
                height: 600
            },
            {
                id: "apt7",
                src: "/portfolio/agency/img_7.webp",
                alt: "",
                width: 800,
                height: 600
            },
            {
                id: "apt8",
                src: "/portfolio/agency/img_8.webp",
                alt: "",
                width: 800,
                height: 600
            },
            {
                id: "apt9",
                src: "/portfolio/agency/img_9.webp",
                alt: "",
                width: 800,
                height: 600
            }
        ]
    }
];