import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout';
import { ChevronRight, Star, Users, Briefcase, CheckCircle, Home, AreaChart, Hammer, Wrench, LayoutGrid, Fan, Waves, Shield } from 'lucide-react';
import { Shield as ShieldIcon, Home as HomeIcon, Sparkles, ArrowRight } from 'lucide-react';

const Index = () => {
  const [isVisible, setIsVisible] = useState({
    hero: false,
    services: false,
    process: false,
    testimonials: false,
    stats: false,
    cta: false,
  });

  const [showNotification, setShowNotification] = useState(true);
  const [notificationPosition, setNotificationPosition] = useState({ x: 0, y: 0 });

  // Services data
  const services = [
    {
      title: "Isolation",
      description: "Isolation thermique et acoustique pour tous types de bâtiments",
      icon: ShieldIcon,
    },
    {
      title: "Toiture",
      description: "Réfection et rénovation de toiture, traitement de charpente",
      icon: HomeIcon,
    },
    {
      title: "Charpente",
      description: "Construction et rénovation de charpente traditionnelle et industrielle",
      icon: LayoutGrid,
    },
    {
      title: "Salle de bain",
      description: "Rénovation complète de salle de bain, accessibilité PMR",
      icon: Waves,
    },
    {
      title: "Menuiserie",
      description: "Pose et remplacement de menuiseries extérieures et intérieures",
      icon: Briefcase,
    },
    {
      title: "Ventilation",
      description: "Installation de VMC simple et double flux, amélioration de la qualité de l'air",
      icon: Fan,
    },
    {
      title: "Maçonnerie",
      description: "Travaux de maçonnerie générale et gros œuvre du bâtiment",
      icon: Hammer,
    },
  ];

  // Process steps
  const processSteps = [
    {
      number: "01",
      title: "Inscription",
      description: "Inscrivez-vous gratuitement et définissez les types de chantiers qui vous intéressent ainsi que votre zone géographique.",
    },
    {
      number: "02",
      title: "Réception de contacts",
      description: "Recevez quotidiennement des contacts de clients qualifiés correspondant à vos critères.",
    },
    {
      number: "03",
      title: "Transformation en chantiers",
      description: "Contactez les prospects, réalisez vos devis et transformez ces opportunités en chantiers concrets.",
    },
    {
      number: "04",
      title: "Développement",
      description: "Développez votre activité de façon régulière et pérenne grâce à un flux constant de nouveaux clients.",
    },
  ];

  // Testimonials
  const testimonials = [
    {
      id: 1,
      name: "Jean Dupont",
      company: "Dupont Isolation",
      text: "Depuis que nous avons rejoint TIM SOLUTION, notre carnet de commandes est rempli à 3 mois d'avance. Les contacts sont véritablement qualifiés et nous permettent de gagner un temps considérable.",
      rating: 5,
      image: "/personne-qui-isole-une-toiture.png",
    },
    {
      id: 2,
      name: "Sophie Martin",
      company: "EcoToiture",
      text: "La qualité des leads reçus est remarquable. Sur 10 contacts, nous concrétisons régulièrement 6 à 7 chantiers, ce qui est un excellent ratio dans notre secteur.",
      rating: 5,
      image: "/isolation-des-combles-par-soufflage.png",
    },
    {
      id: 3,
      name: "Pierre Leroy",
      company: "Bati-Rénov",
      text: "TIM SOLUTION nous a aidés à développer notre activité dans une période difficile. Le processus est simple et l'équipe est toujours disponible pour nous accompagner.",
      rating: 4,
      image: "/personne-qui-isole-un-mur.png",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Set visibility for each section as they appear in viewport
      const sections = ['hero', 'services', 'process', 'testimonials', 'stats', 'cta'];
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const isInViewport = rect.top <= window.innerHeight * 0.8;
          setIsVisible(prev => ({ ...prev, [section]: isInViewport }));
        }
      });
    };

    // Trigger once to show initial elements
    setTimeout(() => setIsVisible(prev => ({ ...prev, hero: true })), 100);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    // Masquer la pastille de notification
    setShowNotification(false);
    // Rediriger vers la page Contact
    window.location.href = '/contact';
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen bg-gradient-to-r from-gray-50 to-gray-100">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-[url('/bg-pattern.svg')] bg-repeat opacity-5 pointer-events-none" />

        {/* Hero content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-4xl mx-auto text-center">
            {/* Hero title */}
            <div className={`mb-8 ${isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-700`}>
              <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-wider text-tim-red bg-tim-red/10 uppercase rounded-full mb-4">
                Solution complète
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Des contacts qualifiés pour développer votre activité
              </h1>
            </div>

            {/* Hero description */}
            <div className={`mb-12 ${isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-700 delay-200`}>
              <p className="text-lg md:text-xl text-gray-600 mb-8">
                Nous vous aidons à trouver des clients qualifiés pour votre entreprise de bâtiment. Des prospects prêts à engager des travaux d'isolation, de toiture ou de menuiserie.
              </p>
            </div>

            {/* Hero button */}
            <div className={`flex justify-center ${isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-700 delay-400`}>
              <div className="relative">
                <div className="relative">
                  <Button 
                    className="bg-white hover:bg-gray-100 text-red-600 hover:text-red-700 px-8 md:px-12 py-4 md:py-6 text-lg md:text-xl rounded-full transition-all flex items-center gap-3 relative zoom-in shadow-md hover:shadow-lg border border-red-600"
                    onClick={handleButtonClick}
                  >
                    Je veux plus de chantiers
                    <ChevronRight className="h-5 md:h-6 w-5 md:w-6 text-red-600" />
                  </Button>
                  {/* Notification badge */}
                  {showNotification && (
                    <div 
                      className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-semibold w-6 h-6 rounded-full flex items-center justify-center badge-pulse shadow-lg"
                    >
                      1
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Hero images */}
          <div className="relative mt-16">
            {/* Image grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
              {/* Image 1 */}
              <div className={`relative overflow-hidden rounded-lg shadow-lg ${isVisible.hero ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'} transition-all duration-700 delay-600`}>
                <img
                  src="/personne-qui-isole-une-toiture.png"
                  alt="Personne qui isole une toiture"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-300" />
                <div className="absolute bottom-4 left-4 text-white">
                  <ShieldIcon className="h-5 md:h-6 w-5 md:w-6 text-tim-red mr-2" />
                  <span className="font-semibold">Isolation toiture</span>
                </div>
              </div>

              {/* Image 2 */}
              <div className={`relative overflow-hidden rounded-lg shadow-lg ${isVisible.hero ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'} transition-all duration-700 delay-700`}>
                <img
                  src="/isolation-des-combles-par-soufflage.png"
                  alt="Isolation des combles par soufflage"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10" />
                <div className="absolute bottom-4 left-4 text-white">
                  <HomeIcon className="h-5 md:h-6 w-5 md:w-6 text-tim-red mr-2" />
                  <span className="font-semibold">Isolation combles</span>
                </div>
              </div>

              {/* Image 3 */}
              <div className={`relative overflow-hidden rounded-lg shadow-lg ${isVisible.hero ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'} transition-all duration-700 delay-800`}>
                <img
                  src="/personne-qui-isole-un-mur.png"
                  alt="Personne qui isole un mur"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-300" />
                <div className="absolute bottom-4 left-4 text-white">
                  <Sparkles className="h-5 md:h-6 w-5 md:w-6 text-tim-red mr-2" />
                  <span className="font-semibold">Isolation mur</span>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className={`absolute -top-20 -right-20 ${isVisible.hero ? 'scale-100' : 'scale-0'} transition-all duration-1000 delay-500`}>
              <div className="w-40 h-40 bg-tim-red/10 rounded-full blur-2xl" />
            </div>

            <div className={`absolute -bottom-20 -left-20 ${isVisible.hero ? 'scale-100' : 'scale-0'} transition-all duration-1000 delay-600`}>
              <div className="w-32 h-32 bg-tim-red/5 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-700 ${isVisible.services ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-wider text-tim-red bg-tim-red/10 uppercase rounded-full">
              Nos secteurs d'activité
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Spécialistes de la rénovation énergétique
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600 text-lg">
              Nous mettons en relation les particuliers avec des professionnels qualifiés dans tous les domaines de la rénovation énergétique.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={service.title}
                className={`service-card transition-all duration-700 delay-${100 * (index + 1)} ${isVisible.services ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              >
                <div className="mb-4 text-tim-red">
                  <service.icon size={42} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            )) }
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="process" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-700 ${isVisible.process ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-wider text-tim-red bg-tim-red/10 uppercase rounded-full">
              Notre processus
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Comment ça marche ?
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600 text-lg">
              Nous simplifions votre recherche de nouveaux chantiers grâce à un processus en 4 étapes simples et efficaces.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div 
                key={step.number}
                className={`bg-white p-8 rounded-xl shadow-md relative transition-all duration-700 delay-${100 * (index + 1)} ${isVisible.process ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              >
                <div className="absolute -top-5 -left-5 bg-tim-red text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-3 mt-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>

          <div className={`mt-12 text-center transition-all duration-700 delay-500 ${isVisible.process ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Link to="/how-it-works">
              <Button className="bg-tim-red hover:bg-tim-red/90 text-white px-8 py-3 rounded-md transition-all">
                En savoir plus
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-700 ${isVisible.testimonials ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-wider text-tim-red bg-tim-red/10 uppercase rounded-full">
              Témoignages
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ce que disent nos partenaires
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600 text-lg">
              Découvrez comment TIM SOLUTION aide les entreprises du bâtiment à développer leur activité.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className={`testimonial-card transition-all duration-700 delay-${100 * (index + 1)} ${isVisible.testimonials ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              >
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-14 h-14 rounded-full object-cover mr-4" 
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-500 text-sm">{testimonial.company}</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={18} className="text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-gray-600 italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>

          <div className={`mt-12 text-center transition-all duration-700 delay-500 ${isVisible.testimonials ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Link to="/testimonials">
              <Button variant="outline" className="border-tim-red text-tim-red hover:bg-tim-red/5 px-8 py-3 rounded-md transition-all">
                Voir tous les témoignages
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section id="stats" className="py-20 bg-tim-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center transition-all duration-700 ${isVisible.stats ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="p-6">
              <div className="text-5xl font-bold text-tim-red mb-3">97%</div>
              <p className="text-gray-300">Taux de satisfaction de nos clients</p>
            </div>
            <div className="p-6">
              <div className="text-5xl font-bold text-tim-red mb-3">+15k</div>
              <p className="text-gray-300">Chantiers générés depuis 2020</p>
            </div>
            <div className="p-6">
              <div className="text-5xl font-bold text-tim-red mb-3">+1500</div>
              <p className="text-gray-300">Entreprises partenaires</p>
            </div>
            <div className="p-6">
              <div className="text-5xl font-bold text-tim-red mb-3">+30M€</div>
              <p className="text-gray-300">De CA généré pour nos partenaires</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`transition-all duration-700 ${isVisible.cta ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-wider text-tim-red bg-tim-red/10 uppercase rounded-full">
              Rejoignez-nous
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Prêt à développer votre activité ?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Inscrivez-vous maintenant et commencez à recevoir des contacts qualifiés dans votre secteur d'activité dès aujourd'hui.
            </p>
            <Link to="/contact">
              <Button className="bg-tim-red hover:bg-tim-red/90 text-white text-lg px-8 py-6 rounded-md transition-all shadow-lg shadow-tim-red/20">
                Je veux plus de chantiers
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
