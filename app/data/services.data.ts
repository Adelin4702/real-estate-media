import {ServiceModel} from "../models/service.model";

export const services: ServiceModel[] = [
    {
        id: "1",
        title: "Fotografie Imobiliară",
        description: "Imagini de înaltă calitate care scot în evidență frumusețea proprietăților tale.",
        image: "/images/service-photo.jpg",
    },
    {
        id: "2",
        title: "Videografie Imobiliară",
        description: "Videoclipuri profesionale care prezintă proprietățile dintr-o perspectivă dinamică.",
        image: "/images/service-video.jpg",
    },
    {
        id: "3",
        title: "Filmări cu Drona",
        description: "Imagini aeriene spectaculoase pentru a arăta amplasarea și împrejurimile.",
        image: "/images/service-drone.jpg",
    },
    {
        id: "4",
        title: "Tururi 360",
        description: "Experiențe interactive pentru a explora proprietățile virtual.",
        image: "/images/service-360.jpg",
    },
];