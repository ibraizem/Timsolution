
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-tim-black text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <img src="/lovable-uploads/5665f02f-7c8d-47b7-a648-1095ffca3804.png" alt="TIM SOLUTION Logo" className="h-14 w-auto object-contain mb-4" />
            </Link>
            <p className="text-gray-300 text-sm">
              TIM SOLUTION est spécialisée dans la mise en relation entre professionnels du bâtiment et clients cherchant à réaliser des travaux de rénovation énergétique.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-300 hover:text-tim-red transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-tim-red transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-tim-red transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-tim-red transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-tim-red pb-2 inline-block">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-tim-red transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-tim-red transition-colors">
                  Nos Services
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-gray-300 hover:text-tim-red transition-colors">
                  Comment ça marche ?
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-gray-300 hover:text-tim-red transition-colors">
                  Témoignages
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-tim-red transition-colors">
                  Blog / Conseils
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-tim-red transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-tim-red pb-2 inline-block">Secteurs couverts</h4>
            <ul className="space-y-2">
              <li className="text-gray-300 hover:text-tim-red transition-colors">
                Isolation
              </li>
              <li className="text-gray-300 hover:text-tim-red transition-colors">
                Toiture
              </li>
              <li className="text-gray-300 hover:text-tim-red transition-colors">
                Charpente
              </li>
              <li className="text-gray-300 hover:text-tim-red transition-colors">
                Salle de bain
              </li>
              <li className="text-gray-300 hover:text-tim-red transition-colors">
                Menuiserie
              </li>
              <li className="text-gray-300 hover:text-tim-red transition-colors">
                Ventilation
              </li>
              <li className="text-gray-300 hover:text-tim-red transition-colors">
                Maçonnerie
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-tim-red pb-2 inline-block">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-tim-red mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  3 ter rue condorcet<br />
                  33150 CENON
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-tim-red flex-shrink-0" />
                <a href="mailto:timsolution33@outlook.com" className="text-gray-300 hover:text-tim-red transition-colors">
                  timsolution33@outlook.com
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-tim-red flex-shrink-0" />
                <a href="tel:+33000000000" className="text-gray-300 hover:text-tim-red transition-colors">
                  +33 (0) 00 00 00 00
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} TIM SOLUTION. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
