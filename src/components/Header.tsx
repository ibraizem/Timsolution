
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center">
            <img src="/lovable-uploads/5665f02f-7c8d-47b7-a648-1095ffca3804.png" alt="TIM SOLUTION Logo" className="h-12 w-auto object-contain" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-900 hover:text-tim-red transition-colors font-medium red-gradient-border">
              Accueil
            </Link>
            <Link to="/services" className="text-gray-900 hover:text-tim-red transition-colors font-medium red-gradient-border">
              Nos Services
            </Link>
            <Link to="/how-it-works" className="text-gray-900 hover:text-tim-red transition-colors font-medium red-gradient-border">
              Comment ça marche ?
            </Link>
            <Link to="/testimonials" className="text-gray-900 hover:text-tim-red transition-colors font-medium red-gradient-border">
              Témoignages
            </Link>
            <Link to="/blog" className="text-gray-900 hover:text-tim-red transition-colors font-medium red-gradient-border">
              Blog / Conseils
            </Link>
            <Link to="/contact">
              <Button className="bg-tim-red hover:bg-tim-red/90 text-white rounded-md px-6 py-2 transition-all">
                Contact
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden focus:outline-none"
            aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg animate-fade-in">
          <div className="px-4 pt-2 pb-6 space-y-4">
            <Link 
              to="/" 
              className="block py-3 text-gray-900 hover:text-tim-red font-medium border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Accueil
            </Link>
            <Link 
              to="/services" 
              className="block py-3 text-gray-900 hover:text-tim-red font-medium border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Nos Services
            </Link>
            <Link 
              to="/how-it-works" 
              className="block py-3 text-gray-900 hover:text-tim-red font-medium border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Comment ça marche ?
            </Link>
            <Link 
              to="/testimonials" 
              className="block py-3 text-gray-900 hover:text-tim-red font-medium border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Témoignages
            </Link>
            <Link 
              to="/blog" 
              className="block py-3 text-gray-900 hover:text-tim-red font-medium border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog / Conseils
            </Link>
            <Link 
              to="/contact" 
              className="block"
              onClick={() => setIsMenuOpen(false)}
            >
              <Button className="w-full bg-tim-red hover:bg-tim-red/90 text-white rounded-md py-3 transition-all">
                Contact
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
