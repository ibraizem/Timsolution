
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout';
import { ChevronRight, Star, Users, Briefcase, CheckCircle, Home, AreaChart, Hammer, Wrench, LayoutGrid, Fan, Waves, Shield } from 'lucide-react';

const Index = () => {
  const [isVisible, setIsVisible] = useState({
    hero: false,
    services: false,
    process: false,
    testimonials: false,
    stats: false,
    cta: false,
  });

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
    
    // Set up scroll listener
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      name: "Jean Dupont",
      company: "Dupont Isolation",
      text: "Depuis que nous avons rejoint TIM SOLUTION, notre carnet de commandes est rempli à 3 mois d'avance. Les contacts sont véritablement qualifiés et nous permettent de gagner un temps considérable.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    },
    {
      id: 2,
      name: "Sophie Martin",
      company: "EcoToiture",
      text: "La qualité des leads reçus est remarquable. Sur 10 contacts, nous concrétisons régulièrement 6 à 7 chantiers, ce qui est un excellent ratio dans notre secteur.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1619895862022-09114b41f16f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    },
    {
      id: 3,
      name: "Pierre Leroy",
      company: "Bati-Rénov",
      text: "TIM SOLUTION nous a aidés à développer notre activité dans une période difficile. Le processus est simple et l'équipe est toujours disponible pour nous accompagner.",
      rating: 4,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    },
  ];

  // Services data
  const services = [
    {
      title: "Isolation",
      description: "Isolation thermique et acoustique pour tous types de bâtiments",
      icon: Shield,
    },
    {
      title: "Toiture",
      description: "Réfection et rénovation de toiture, traitement de charpente",
      icon: Home,
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

  return (
    <Layout>
      {/* Hero Section */}
      <section id="hero" className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className={`max-w-xl mb-12 lg:mb-0 lg:mr-8 transition-all duration-700 ${isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-wider text-tim-red bg-tim-red/10 uppercase rounded-full">
                Spécialiste de la rénovation énergétique
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Trouvez vos <span className="text-tim-red">prochains chantiers</span> dès aujourd'hui !
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8">
                TIM SOLUTION vous met en relation avec des clients qualifiés à la recherche d'artisans pour leurs projets de rénovation énergétique.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button className="bg-tim-red hover:bg-tim-red/90 text-white text-lg px-8 py-6 rounded-md transition-all animate-pulse-scale shadow-lg shadow-tim-red/20 w-full sm:w-auto">
                    Je veux plus de chantiers
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/how-it-works">
                  <Button variant="outline" className="border-tim-red text-tim-red hover:bg-tim-red/5 text-lg px-8 py-6 rounded-md transition-all w-full sm:w-auto">
                    Comment ça marche ?
                  </Button>
                </Link>
              </div>
            </div>
            <div className={`relative transition-all duration-700 delay-300 ${isVisible.hero ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="relative w-full max-w-md mx-auto">
                <div className="absolute inset-0 bg-tim-red/20 rounded-full blur-3xl opacity-30 animate-pulse"></div>
                <img 
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" 
                  alt="Artisan du bâtiment" 
                  className="relative z-10 rounded-lg shadow-2xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Stats bar */}
        <div className="max-w-7xl mx-auto mt-16 px-4 sm:px-6 lg:px-8">
          <div className={`bg-white rounded-xl shadow-xl p-8 glass-card transition-all duration-700 delay-500 ${isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-tim-red mb-2">+5000</div>
                <p className="text-gray-600">Chantiers réalisés</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-tim-red mb-2">+1500</div>
                <p className="text-gray-600">Entreprises partenaires</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-tim-red mb-2">97%</div>
                <p className="text-gray-600">De satisfaction client</p>
              </div>
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
            ))}
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
