import Link from 'next/link';
import { NavLink } from '@/app/types';

type NavigationProps = {
  links: NavLink[];
};

const Navigation: React.FC<NavigationProps> = ({ links }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex justify-center py-4">
        <div className="bg-white/30 backdrop-blur-md rounded-full px-6 py-2 flex items-center space-x-8">
          {links.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              className="text-white hover:text-yellow-300 transition font-museo-moderno"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;