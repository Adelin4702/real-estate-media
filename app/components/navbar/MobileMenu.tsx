'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { NAV_LINKS } from '../commons/navLinks';
import { NavItem } from './NavItem';

interface MobileMenuProps {
    isOpen: boolean;
    toggleMenu: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, toggleMenu }) => (
    <AnimatePresence>
        {isOpen && (
            <motion.div
                variants={{
                    open: { height: '100vh', width:'w-full', opacity: 1, transition: { duration: 0.3, ease: 'easeInOut' } },
                    closed: { height: 0, opacity: 0, transition: { duration: 0.3, ease: 'easeInOut' } },
                }}
                initial="closed"
                animate="open"
                exit="closed"
                className="md:hidden bg-none px-4 py-4 overflow-hidden"
            >
                <ul className="flex flex-col space-y-4 text-center tex">
                    {NAV_LINKS.map((link) => (
                        <NavItem key={link.href} link={link} onClick={toggleMenu} />
                    ))}
                </ul>
            </motion.div>
        )}
    </AnimatePresence>
);