import { NAV_LINKS } from '../commons/navLinks';
import { NavItem } from './NavItem';

export const DesktopMenu: React.FC = () => (
    <ul className="hidden md:flex space-x-8">
        {NAV_LINKS.map((link) => (
            <NavItem key={link.href} link={link} />
        ))}
    </ul>
);