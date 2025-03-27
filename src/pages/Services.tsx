import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout';
import { Shield, Home, LayoutGrid, Waves, Briefcase, Fan, Hammer, Plus, Users, Star, ChevronRight, Award, PercentCircle, AreaChart } from 'lucide-react';

const Services = () => {
  const [isVisible, setIsVisible] = useState({
    hero: false,
    services: false,
    benefits: false,
    certifications: false,
    cta: false,
  });

  useEffect(() => {
    // Trigger initial animation
    setTimeout(() => setIsVisible(prev => ({ ...prev, hero: true })), 100);

    const handleScroll = () => {
      // Set visibility for each section as they appear in viewport
      const sections = ['hero', 'services', 'benefits', 'certifications', 'cta'];
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const isInViewport = rect.top <= window.innerHeight * 0.8;
          setIsVisible(prev => ({ ...prev, [section]: isInViewport }));
        }
      });
    };

    // Set up scroll listener
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Services data
  const services = [
    {
      title: "Isolation",
      description: "Isolation des combles, murs, sols et toitures. Nous mettons en relation des particuliers cherchant à améliorer leur performance énergétique avec des professionnels qualifiés RGE.",
      icon: Shield,
      benefits: ["Confort thermique amélioré", "Économies d'énergie", "Éligible aux aides de l'État", "Valorisation du patrimoine"],
      image: "/personne-qui-isole-un-mur.png"
    },
    {
      title: "Toiture",
      description: "Réfection, réparation et étanchéité de toiture. Nos partenaires interviennent sur tous types de toitures pour garantir la protection de votre habitation.",
      icon: Home,
      benefits: ["Protection contre les intempéries", "Prévention des infiltrations", "Amélioration de l'isolation", "Esthétique préservée"],
      image: "/renovation-de-toiture.png"
    },
    {
      title: "Charpente",
      description: "Construction et rénovation de charpentes traditionnelles ou industrielles. Nos artisans charpentiers interviennent sur tous types de projets.",
      icon: LayoutGrid,
      benefits: ["Structure solide et durable", "Adaptation aux contraintes techniques", "Expertise artisanale", "Matériaux de qualité"],
      image: "/construction-de-charpente.png"
    },
    {
      title: "Salle de bain",
      description: "Rénovation complète de salle de bain, installation de douche à l'italienne, adaptation PMR. Nos professionnels vous accompagnent de la conception à la réalisation.",
      icon: Waves,
      benefits: ["Confort et fonctionnalité", "Design personnalisé", "Économies d'eau", "Accessibilité PMR"],
      image: "/salle.jpg"
    },
    {
      title: "Menuiserie",
      description: "Pose et remplacement de menuiseries extérieures et intérieures : fenêtres, portes, volets, etc. Des solutions adaptées pour améliorer votre confort et réduire vos factures.",
      icon: Briefcase,
      benefits: ["Isolation thermique et phonique", "Sécurité renforcée", "Design moderne", "Entretien facile"],
      image: "/Menuiserie.jpg"
    },
    {
      title: "Ventilation",
      description: "Installation de systèmes de ventilation (VMC simple et double flux). Une bonne ventilation est essentielle pour la qualité de l'air de votre logement.",
      icon: Fan,
      benefits: ["Air sain et renouvelé", "Prévention des moisissures", "Économies d'énergie", "Confort optimal"],
      image: "/vmc-double-flux.png"
    },
    {
      title: "Maçonnerie",
      description: "Travaux de maçonnerie générale et gros œuvre. Nos maçons qualifiés interviennent sur tous types de projets de construction et rénovation.",
      icon: Hammer,
      benefits: ["Solidité et durabilité", "Expertise technique", "Matériaux de qualité", "Finitions soignées"],
      image: "/masson.jpg"
    },
  ];

  // Benefits data
  const benefits = [
    {
      title: "Prospects qualifiés",
      description: "Nous ne vous transmettons que des contacts de clients réellement intéressés par vos services.",
      icon: Users,
    },
    {
      title: "Secteur géographique ciblé",
      description: "Recevez uniquement des demandes dans votre zone d'intervention.",
      icon: AreaChart,
    },
    {
      title: "Partenaires certifiés",
      description: "Nous travaillons exclusivement avec des entreprises certifiées et qualifiées.",
      icon: Award,
    },
    {
      title: "Aides financières",
      description: "Nous vous informons des dernières aides disponibles pour vos clients (MaPrimeRénov', CEE, etc.).",
      icon: PercentCircle,
    },
  ];

  // Certifications data
  const certifications = ["RGE", "Qualibat", "QualiPV", "QualiPAC", "Qualibois", "Handibat"];

  return (
    <Layout>
      {/* Hero Section */}
      <section id="hero" className="relative pt-32 pb-20 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center max-w-3xl mx-auto transition-all duration-700 ${isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-wider text-tim-red bg-tim-red/10 uppercase rounded-full">
              Nos services
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Des <span className="text-tim-red">solutions complètes</span> pour la rénovation énergétique
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              TIM SOLUTION vous connecte avec des clients qualifiés à la recherche d'artisans compétents pour leurs projets de rénovation énergétique.
            </p>
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
              Des expertises variées pour tous vos projets
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600 text-lg">
              Nous collaborons avec des professionnels qualifiés dans tous les domaines de la rénovation énergétique et de l'amélioration de l'habitat.
            </p>
          </div>

          <div className="space-y-24">
            {services.map((service, index) => (
              <div 
                key={service.title}
                className={`flex flex-col md:flex-row items-center gap-12 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} transition-all duration-700 ${isVisible.services ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              >
                <div className="w-full md:w-1/2 relative">
                  <div className="absolute inset-0 bg-tim-red/20 rounded-xl blur-3xl opacity-30"></div>
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="relative z-10 rounded-xl shadow-xl object-cover w-full h-64 md:h-80"
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <div className="flex items-center mb-4 text-tim-red">
                    <service.icon size={36} className="mr-3" />
                    <h3 className="text-2xl font-bold">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.benefits.map((benefit) => (
                      <div key={benefit} className="flex items-start">
                        <div className="text-tim-red mr-2 mt-1">
                          <Plus size={14} />
                        </div>
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-700 ${isVisible.benefits ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-wider text-tim-red bg-tim-red/10 uppercase rounded-full">
              Avantages
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Pourquoi choisir TIM SOLUTION ?
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600 text-lg">
              Nous nous engageons à vous fournir des services de qualité pour développer votre activité.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={benefit.title}
                className={`bg-white p-8 rounded-xl shadow-md transition-all duration-700 delay-${100 * (index + 1)} ${isVisible.benefits ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              >
                <div className="text-tim-red mb-4">
                  <benefit.icon size={40} />
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-700 ${isVisible.certifications ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-wider text-tim-red bg-tim-red/10 uppercase rounded-full">
              Certifications
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Nous travaillons avec des professionnels certifiés
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600 text-lg">
              Nos partenaires disposent des certifications nécessaires pour réaliser des travaux de qualité et permettre à vos clients de bénéficier des aides de l'État.
            </p>
          </div>

          <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 transition-all duration-700 delay-200 ${isVisible.certifications ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {certifications.map((certification) => (
              <div key={certification} className="bg-gray-50 p-6 rounded-lg shadow-sm flex items-center justify-center">
                <div className="text-center">
                  <div className="text-tim-red mb-2">
                    <Award size={28} className="mx-auto" />
                  </div>
                  <h4 className="font-semibold">{certification}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`transition-all duration-700 ${isVisible.cta ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-wider text-tim-red bg-tim-red/10 uppercase rounded-full">
              Rejoignez notre réseau
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Prêt à développer votre activité avec nous ?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Inscrivez-vous maintenant et commencez à recevoir des contacts qualifiés dans votre secteur d'activité dès aujourd'hui.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button className="bg-tim-red hover:bg-tim-red/90 text-white text-lg px-8 py-6 rounded-md transition-all shadow-lg shadow-tim-red/20 w-full sm:w-auto">
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
        </div>
      </section>
    </Layout>
  );
};

export default Services;
