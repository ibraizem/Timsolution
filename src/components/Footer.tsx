import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-tim-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12">
          {/* Logo and Description */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <span className="text-3xl font-bold">
                <span className="text-tim-red">TIM</span>
                <span className="text-white"> SOLUTION</span>
              </span>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed">
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
                <Link to="/" className="text-gray-300 hover:text-tim-red transition-colors text-sm">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-tim-red transition-colors text-sm">
                  Nos Services
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-gray-300 hover:text-tim-red transition-colors text-sm">
                  Comment ça marche ?
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="text-gray-300 hover:text-tim-red transition-colors text-sm">
                  Études de cas
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-gray-300 hover:text-tim-red transition-colors text-sm">
                  Témoignages
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-tim-red transition-colors text-sm">
                  Blog / Conseils
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-tim-red transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-tim-red pb-2 inline-block">Secteurs couverts</h4>
            <ul className="space-y-2">
              <li className="text-gray-300 hover:text-tim-red transition-colors text-sm">
                Isolation
              </li>
              <li className="text-gray-300 hover:text-tim-red transition-colors text-sm">
                Toiture
              </li>
              <li className="text-gray-300 hover:text-tim-red transition-colors text-sm">
                Charpente
              </li>
              <li className="text-gray-300 hover:text-tim-red transition-colors text-sm">
                Salle de bain
              </li>
              <li className="text-gray-300 hover:text-tim-red transition-colors text-sm">
                Menuiserie
              </li>
              <li className="text-gray-300 hover:text-tim-red transition-colors text-sm">
                Ventilation
              </li>
              <li className="text-gray-300 hover:text-tim-red transition-colors text-sm">
                Maçonnerie
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-tim-red pb-2 inline-block">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-300 hover:text-tim-red transition-colors">
                <Phone className="h-5 w-5 mr-2" />
                <span>+33 1 23 45 67 89</span>
              </li>
              <li className="flex items-center text-gray-300 hover:text-tim-red transition-colors">
                <Mail className="h-5 w-5 mr-2" />
                <span>contact@timsolution.fr</span>
              </li>
              <li className="flex items-center text-gray-300 hover:text-tim-red transition-colors">
                <MapPin className="h-5 w-5 mr-2" />
                <span>123 Rue du Bâtiment, 75000 Paris</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} TIM SOLUTION. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
