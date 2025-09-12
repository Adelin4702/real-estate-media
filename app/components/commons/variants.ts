import {Variants} from "framer-motion";

export const cardVariants : Variants = {
    initial: { x: '100%', opacity: 0 },
    animate: { x: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
};

export const textVariants: Variants = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
};

export const iconVariants = {
    initial: { scale: 1, opacity: 0.8 },
    hover: { scale: 1.2, opacity: 1, transition: { duration: 0.3 } },
};

export const imageVariants: Variants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: { scale: 1, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
};

export const textVariants50: Variants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
};

export const buttonVariants: Variants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: { scale: 1, opacity: 1, transition: { duration: 0.6, ease: 'easeOut', delay: 0.2 } },
};