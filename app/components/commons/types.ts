import {IconDefinition} from "@fortawesome/fontawesome-svg-core";

export interface NavLink {
    label: string;
    href: string;
    isButton?: boolean;
}

export interface Card {
    id: string;
    title: string;
    image?: string;
    iframe?: string;
    icons?: IconDefinition[],
    description: string;
    button?: {
        label: string;
        href: string;
    };
    package: boolean;
}