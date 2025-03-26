
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout';
import { Check, Mail, MapPin, Phone, Send, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    zipCode: '',
    sector: '',
    message: '',
    termsAccepted: false,
  });

  // Form fields validation
  const [errors, setErrors] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    zipCode: '',
    sector: '',
    termsAccepted: '',
  });

  useEffect(() => {
    // Trigger animation
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));

    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {
      name: formData.name ? '' : 'Le nom est requis',
      company: formData.company ? '' : 'Le nom de l\'entreprise est requis',
      email: formData.email ? (
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) ? '' : 'Email invalide'
      ) : 'L\'email est requis',
      phone: formData.phone ? '' : 'Le téléphone est requis',
      zipCode: formData.zipCode ? '' : 'Le code postal est requis',
      sector: formData.sector ? '' : 'Veuillez sélectionner un secteur',
      termsAccepted: formData.termsAccepted ? '' : 'Vous devez accepter les conditions',
    };

    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error);
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        toast({
          title: "Demande envoyée !",
          description: "Nous avons bien reçu votre demande et nous vous contacterons dans les plus brefs délais.",
          variant: "default",
        });
        
        // Reset form
        setFormData({
          name: '',
          company: '',
          email: '',
          phone: '',
          zipCode: '',
          sector: '',
          message: '',
          termsAccepted: false,
        });
      }, 1500);
    }
  };

  return (
    <Layout>
      <section className="relative pt-32 pb-20 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center max-w-3xl mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-wider text-tim-red bg-tim-red/10 uppercase rounded-full">
              Contact
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Rejoignez le réseau <span className="text-tim-red">TIM SOLUTION</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Inscrivez-vous dès aujourd'hui et commencez à recevoir des contacts qualifiés dans votre secteur d'activité.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex flex-col lg:flex-row gap-12 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Contact Form */}
            <div className="w-full lg:w-2/3 bg-white rounded-xl shadow-xl p-8 md:p-12">
              <h2 className="text-2xl font-bold mb-8">Formulaire d'inscription</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Nom et prénom *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-md border ${errors.name ? 'border-red-500' : 'border-gray-200'} focus:border-tim-red focus:ring-1 focus:ring-tim-red focus:outline-none transition-colors`}
                      placeholder="Votre nom complet"
                    />
                    {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                  </div>
                  
                  {/* Company */}
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                      Nom de l'entreprise *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-md border ${errors.company ? 'border-red-500' : 'border-gray-200'} focus:border-tim-red focus:ring-1 focus:ring-tim-red focus:outline-none transition-colors`}
                      placeholder="Nom de votre entreprise"
                    />
                    {errors.company && <p className="mt-1 text-sm text-red-500">{errors.company}</p>}
                  </div>
                  
                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email professionnel *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-md border ${errors.email ? 'border-red-500' : 'border-gray-200'} focus:border-tim-red focus:ring-1 focus:ring-tim-red focus:outline-none transition-colors`}
                      placeholder="votre@email.com"
                    />
                    {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                  </div>
                  
                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Téléphone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-md border ${errors.phone ? 'border-red-500' : 'border-gray-200'} focus:border-tim-red focus:ring-1 focus:ring-tim-red focus:outline-none transition-colors`}
                      placeholder="Votre numéro de téléphone"
                    />
                    {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
                  </div>
                  
                  {/* Zip Code */}
                  <div>
                    <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-1">
                      Code postal *
                    </label>
                    <input
                      type="text"
                      id="zipCode"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-md border ${errors.zipCode ? 'border-red-500' : 'border-gray-200'} focus:border-tim-red focus:ring-1 focus:ring-tim-red focus:outline-none transition-colors`}
                      placeholder="Votre code postal"
                    />
                    {errors.zipCode && <p className="mt-1 text-sm text-red-500">{errors.zipCode}</p>}
                  </div>
                  
                  {/* Sector */}
                  <div>
                    <label htmlFor="sector" className="block text-sm font-medium text-gray-700 mb-1">
                      Secteur d'activité *
                    </label>
                    <select
                      id="sector"
                      name="sector"
                      value={formData.sector}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-md border ${errors.sector ? 'border-red-500' : 'border-gray-200'} focus:border-tim-red focus:ring-1 focus:ring-tim-red focus:outline-none transition-colors bg-white`}
                    >
                      <option value="" disabled>Sélectionnez un secteur</option>
                      <option value="isolation">Isolation</option>
                      <option value="toiture">Toiture</option>
                      <option value="charpente">Charpente</option>
                      <option value="salle-de-bain">Salle de bain</option>
                      <option value="menuiserie">Menuiserie</option>
                      <option value="ventilation">Ventilation</option>
                      <option value="maconnerie">Maçonnerie</option>
                      <option value="autre">Autre</option>
                    </select>
                    {errors.sector && <p className="mt-1 text-sm text-red-500">{errors.sector}</p>}
                  </div>
                </div>
                
                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message (facultatif)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-md border border-gray-200 focus:border-tim-red focus:ring-1 focus:ring-tim-red focus:outline-none transition-colors"
                    placeholder="Précisez votre demande ou vos questions..."
                  />
                </div>
                
                {/* Terms & Conditions */}
                <div>
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="termsAccepted"
                        name="termsAccepted"
                        type="checkbox"
                        checked={formData.termsAccepted}
                        onChange={handleChange}
                        className="h-4 w-4 text-tim-red focus:ring-tim-red border-gray-300 rounded"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="termsAccepted" className="text-gray-600">
                        J'accepte les <Link to="/terms" className="text-tim-red font-medium">conditions générales</Link> et la <Link to="/privacy" className="text-tim-red font-medium">politique de confidentialité</Link> *
                      </label>
                    </div>
                  </div>
                  {errors.termsAccepted && <p className="mt-1 text-sm text-red-500">{errors.termsAccepted}</p>}
                </div>
                
                {/* Submit Button */}
                <div>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-tim-red hover:bg-tim-red/90 text-white text-lg px-8 py-3 rounded-md transition-all shadow-lg shadow-tim-red/20 w-full md:w-auto flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        Envoyer ma demande
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </div>
            
            {/* Contact Information */}
            <div className="w-full lg:w-1/3 space-y-8">
              {/* Info Card */}
              <div className="bg-gray-50 rounded-xl p-8">
                <h3 className="text-xl font-semibold mb-6">Informations de contact</h3>
                <ul className="space-y-6">
                  <li className="flex items-start">
                    <MapPin className="text-tim-red mt-1 mr-4" size={20} />
                    <div>
                      <p className="font-medium">Adresse</p>
                      <p className="text-gray-600">3 ter rue condorcet<br />33150 CENON</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Mail className="text-tim-red mt-1 mr-4" size={20} />
                    <div>
                      <p className="font-medium">Email</p>
                      <a href="mailto:timsolution33@outlook.com" className="text-tim-red hover:underline">
                        timsolution33@outlook.com
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Phone className="text-tim-red mt-1 mr-4" size={20} />
                    <div>
                      <p className="font-medium">Téléphone</p>
                      <a href="tel:+33000000000" className="text-tim-red hover:underline">
                        +33 (0) 00 00 00 00
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
              
              {/* Why Join Us Card */}
              <div className="bg-tim-black text-white rounded-xl p-8">
                <h3 className="text-xl font-semibold mb-6">Pourquoi nous rejoindre ?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Check className="text-tim-red mt-1 mr-3 flex-shrink-0" size={18} />
                    <span>Contacts qualifiés et motivés</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-tim-red mt-1 mr-3 flex-shrink-0" size={18} />
                    <span>Prospects dans votre zone géographique</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-tim-red mt-1 mr-3 flex-shrink-0" size={18} />
                    <span>Aucun frais d'inscription</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-tim-red mt-1 mr-3 flex-shrink-0" size={18} />
                    <span>Support et accompagnement personnalisés</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-tim-red mt-1 mr-3 flex-shrink-0" size={18} />
                    <span>Développez votre activité rapidement</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
