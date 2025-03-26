
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout';
import { Check, ChevronRight, HelpCircle, Phone, ClipboardCheck, Coins, BarChart } from 'lucide-react';

const HowItWorks = () => {
  const [isVisible, setIsVisible] = useState({
    hero: false,
    process: false,
    faq: false,
    cta: false,
  });

  useEffect(() => {
    // Trigger initial animation
    setTimeout(() => setIsVisible(prev => ({ ...prev, hero: true })), 100);

    const handleScroll = () => {
      // Set visibility for each section as they appear in viewport
      const sections = ['hero', 'process', 'faq', 'cta'];
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

  // Process Steps
  const steps = [
    {
      number: "01",
      title: "Inscrivez-vous gratuitement",
      description: "Remplissez notre formulaire d'inscription en précisant vos domaines d'expertise et votre zone géographique d'intervention.",
      icon: ClipboardCheck,
      details: [
        "Processus rapide en quelques minutes",
        "Spécifiez vos qualifications et certifications",
        "Définissez votre rayon d'action",
        "Précisez vos domaines d'intervention",
      ]
    },
    {
      number: "02",
      title: "Recevez des contacts qualifiés",
      description: "Nous vous transmettons uniquement des demandes correspondant à vos critères et provenant de clients véritablement intéressés.",
      icon: Phone,
      details: [
        "Clients préqualifiés par nos équipes",
        "Projets concrets et détaillés",
        "Coordonnées complètes des prospects",
        "Notifications par email et SMS",
      ]
    },
    {
      number: "03",
      title: "Transformez en chantiers",
      description: "Contactez les prospects, réalisez vos devis et accompagnez-les pour transformer ces opportunités en chantiers concrets.",
      icon: Coins,
      details: [
        "Support pour optimiser votre taux de transformation",
        "Aide pour les dossiers d'aides financières",
        "Suivi personnalisé de vos contacts",
        "Assistance technique si nécessaire",
      ]
    },
    {
      number: "04",
      title: "Développez votre activité",
      description: "Augmentez votre chiffre d'affaires et développez votre entreprise grâce à un flux constant de nouveaux clients qualifiés.",
      icon: BarChart,
      details: [
        "Flux régulier de prospects",
        "Visibilité sur votre activité future",
        "Développement de votre notoriété",
        "Croissance maîtrisée de votre entreprise",
      ]
    },
  ];

  // FAQ questions
  const faqItems = [
    {
      question: "Combien coûte votre service ?",
      answer: "Notre tarification est basée sur une commission par contact qualifié transmis. Aucun frais d'inscription ou d'abonnement n'est requis. Vous ne payez que pour les contacts que vous recevez, avec un tarif dégressif en fonction du volume."
    },
    {
      question: "Quelles certifications sont requises pour s'inscrire ?",
      answer: "Pour les travaux de rénovation énergétique, la certification RGE (Reconnu Garant de l'Environnement) est généralement nécessaire. Selon votre domaine d'activité, d'autres certifications spécifiques comme Qualibat, QualiPV, QualiPAC ou Qualibois peuvent être requises."
    },
    {
      question: "Quelle est la zone géographique couverte par TIM SOLUTION ?",
      answer: "Nous intervenons actuellement dans toute la France métropolitaine. Lors de votre inscription, vous pourrez définir précisément votre zone d'intervention par départements ou par rayon kilométrique autour de votre siège."
    },
    {
      question: "Comment sont qualifiés les contacts que vous transmettez ?",
      answer: "Chaque contact est préqualifié par notre équipe qui vérifie la nature du projet, sa faisabilité, le budget prévisionnel et la motivation du client. Nous nous assurons que les demandes correspondent parfaitement à vos critères avant de vous les transmettre."
    },
    {
      question: "Quel est le délai pour contacter un prospect après réception ?",
      answer: "Nous recommandons de contacter les prospects dans les 24 heures suivant la réception de leurs coordonnées. Cette réactivité augmente significativement votre taux de transformation."
    },
    {
      question: "Comment puis-je suivre la performance de mes contacts ?",
      answer: "Vous disposez d'un espace personnel sur notre plateforme qui vous permet de suivre en temps réel tous vos contacts, leur statut et vos performances de conversion. Des statistiques détaillées vous aident à optimiser votre approche commerciale."
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section id="hero" className="relative pt-32 pb-20 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center max-w-3xl mx-auto transition-all duration-700 ${isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-wider text-tim-red bg-tim-red/10 uppercase rounded-full">
              Notre processus
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Comment <span className="text-tim-red">ça marche</span> ?
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              TIM SOLUTION simplifie votre recherche de nouveaux chantiers grâce à un processus en 4 étapes simples et efficaces.
            </p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {steps.map((step, index) => (
              <div 
                key={step.number}
                className={`flex flex-col md:flex-row items-center gap-12 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} transition-all duration-700 delay-${100 * (index + 1)} ${isVisible.process ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              >
                <div className="w-full md:w-1/2">
                  <div className="bg-gray-50 p-10 rounded-xl relative">
                    <div className="absolute -top-6 -left-6 bg-tim-red text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-2xl shadow-lg">
                      {step.number}
                    </div>
                    <div className="text-tim-red mb-6">
                      <step.icon size={48} />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                    <p className="text-gray-600 mb-6">{step.description}</p>
                    <ul className="space-y-3">
                      {step.details.map((detail) => (
                        <li key={detail} className="flex items-start">
                          <Check size={18} className="text-tim-red mr-2 mt-1 flex-shrink-0" />
                          <span className="text-gray-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <img 
                    src={`https://images.unsplash.com/photo-${1600000000000 + index * 10000}?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80`} 
                    alt={`Étape ${step.number}`} 
                    className="rounded-xl shadow-xl object-cover w-full h-80"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-700 ${isVisible.faq ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-wider text-tim-red bg-tim-red/10 uppercase rounded-full">
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Questions fréquentes
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600 text-lg">
              Vous avez des questions sur notre fonctionnement ? Consultez notre FAQ ci-dessous.
            </p>
          </div>

          <div className="space-y-6">
            {faqItems.map((item, index) => (
              <div 
                key={index}
                className={`bg-white rounded-xl shadow-md overflow-hidden transition-all duration-700 delay-${100 * (index + 1)} ${isVisible.faq ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              >
                <div className="p-6">
                  <div className="flex items-start">
                    <div className="text-tim-red mr-4 flex-shrink-0">
                      <HelpCircle size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3">{item.question}</h3>
                      <p className="text-gray-600">{item.answer}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className={`mt-12 text-center transition-all duration-700 delay-500 ${isVisible.faq ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <p className="text-gray-600 mb-4">
              Vous avez d'autres questions ?
            </p>
            <Link to="/contact">
              <Button variant="outline" className="border-tim-red text-tim-red hover:bg-tim-red/5 px-8 py-3 rounded-md transition-all">
                Contactez-nous
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
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
              Prêt à commencer l'aventure avec TIM SOLUTION ?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Inscrivez-vous dès maintenant et recevez vos premiers contacts qualifiés dans les prochaines 48 heures.
            </p>
            <Link to="/contact">
              <Button className="bg-tim-red hover:bg-tim-red/90 text-white text-lg px-8 py-6 rounded-md transition-all shadow-lg shadow-tim-red/20">
                Je m'inscris maintenant
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HowItWorks;
