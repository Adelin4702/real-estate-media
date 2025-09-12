'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { NavLink } from '../commons/types';

interface NavItemProps {
    link: NavLink;
    onClick?: () => void;
}

const MotionLink = motion.create(Link);

export const NavItem: React.FC<NavItemProps> = ({ link, onClick }) => {
    return (
        <motion.li
            variants={{
                initial: { y: 20, opacity: 0 },
                animate: { y: 0, opacity: 1, transition: { duration: 0.2 } },
            }}
            initial="initial"
            animate="animate"
        >
            <MotionLink
                href={link.href}
                className={`text-3xl md:text-lg font-medium transition-colors duration-300 `}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={onClick}
            >
                {link.label}
            </MotionLink>
        </motion.li>
    );
};