import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout';
import { 
  ArrowRight, 
  Building, 
  Users, 
  Calendar, 
  Bookmark, 
  CheckCircle, 
  PieChart, 
  ArrowUp, 
  Sun, 
  Coins, 
  Quote, 
  AlertTriangle,
  Lightbulb,
  X
} from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface CaseStudy {
  id: number;
  title: string;
  client: string;
  sector: string;
  date: string;
  duration: string;
  challenge: string;
  solution: string;
  results: string[];
  testimonial?: {
    quote: string;
    author: string;
    position: string;
  };
  stats?: {
    label: string;
    value: string;
    icon: React.ReactNode;
  }[];
  modalContent?: {
    details: string[];
    challenges: string[];
    solutions: string[];
    results: string[];
    testimonial?: {
      quote: string;
      author: string;
      position: string;
    };
  };
}

const CaseStudies = () => {
  const [isVisible, setIsVisible] = useState({
    hero: false,
    studies: false,
  });

  const [selectedStudy, setSelectedStudy] = useState<CaseStudy | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAllStudiesModalOpen, setIsAllStudiesModalOpen] = useState(false);

  useEffect(() => {
    // Trigger initial animation
    setTimeout(() => setIsVisible(prev => ({ ...prev, hero: true })), 100);

    const handleScroll = () => {
      const sections = ['hero', 'studies'];
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const isInViewport = rect.top <= window.innerHeight * 0.8;
          setIsVisible(prev => ({ ...prev, [section]: isInViewport }));
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Case studies data
  const caseStudies: CaseStudy[] = [
    {
      id: 1,
      title: "Augmentation de 35% du chiffre d'affaires pour une entreprise d'isolation",
      client: "IsoPlus Aquitaine",
      sector: "Isolation",
      date: "Janvier 2023",
      duration: "6 mois",
      challenge: "IsoPlus Aquitaine, entreprise spécialisée dans l'isolation thermique, cherchait à développer son activité sur la région bordelaise face à une concurrence accrue et une baisse des demandes spontanées.",
      solution: "TIM SOLUTION a mis en place une stratégie d'acquisition de contacts qualifiés, ciblant spécifiquement les propriétaires de maisons individuelles éligibles aux aides de l'État pour des travaux d'isolation des combles et des murs extérieurs.",
      results: [
        "35% d'augmentation du chiffre d'affaires en 6 mois",
        "27 nouveaux chantiers signés",
        "Taux de conversion des leads de 38%",
        "Valeur moyenne des devis signés : 8 500€"
      ],
      testimonial: {
        quote: "Grâce à TIM SOLUTION, nous avons pu nous concentrer sur notre cœur de métier tout en développant notre activité. Les contacts fournis étaient précisément qualifiés selon nos critères, ce qui nous a permis d'atteindre un excellent taux de conversion.",
        author: "Thierry Martin",
        position: "Directeur, IsoPlus Aquitaine"
      },
      stats: [
        {
          label: "Augmentation CA",
          value: "+35%",
          icon: <ArrowUp size={24} className="text-tim-red" />
        },
        {
          label: "Nouveaux chantiers",
          value: "27",
          icon: <Building size={24} className="text-tim-red" />
        },
        {
          label: "Taux de conversion",
          value: "38%",
          icon: <CheckCircle size={24} className="text-tim-red" />
        }
      ],
      modalContent: {
        details: [
          "Spécialisée dans l'isolation des combles et des murs extérieurs",
          "Certifiée RGE pour les travaux d'isolation thermique",
          "Équipe de 15 techniciens qualifiés",
          "Zone d'intervention : Gironde et Charente-Maritime"
        ],
        challenges: [
          "Concurrence accrue sur le marché de l'isolation",
          "Baisse des demandes spontanées",
          "Nécessité de se différencier sur le marché",
          "Besoin de développer une clientèle fidèle"
        ],
        solutions: [
          "Campagne ciblée sur les propriétaires éligibles aux aides",
          "Stratégie de communication sur la qualité des services",
          "Accompagnement personnalisé pour les démarches administratives",
          "Suivi client personnalisé pour optimiser la conversion"
        ],
        results: [
          "35% d'augmentation du chiffre d'affaires en 6 mois",
          "27 nouveaux chantiers signés",
          "Taux de conversion des leads de 38%",
          "Valeur moyenne des devis signés : 8 500€",
          "Création d'un département dédié au développement commercial"
        ],
        testimonial: {
          quote: "Grâce à TIM SOLUTION, nous avons pu nous concentrer sur notre cœur de métier tout en développant notre activité. Les contacts fournis étaient précisément qualifiés selon nos critères, ce qui nous a permis d'atteindre un excellent taux de conversion.",
          author: "Thierry Martin",
          position: "Directeur, IsoPlus Aquitaine"
        }
      }
    },
    {
      id: 2,
      title: "Conquête d'un nouveau secteur géographique pour un artisan menuisier",
      client: "Menuiserie Durand",
      sector: "Menuiserie",
      date: "Mars 2023",
      duration: "4 mois",
      challenge: "La Menuiserie Durand, artisan reconnu sur Libourne, souhaitait étendre son activité vers la métropole bordelaise mais manquait de visibilité et de contacts dans cette zone géographique.",
      solution: "TIM SOLUTION a élaboré une campagne ciblée de prospection pour identifier les propriétaires intéressés par le remplacement de menuiseries dans l'agglomération bordelaise, en mettant l'accent sur la qualité artisanale et les certifications RGE de l'entreprise.",
      results: [
        "Implantation réussie sur un nouveau secteur géographique",
        "15 chantiers réalisés en 4 mois sur la métropole bordelaise",
        "Augmentation de 22% du chiffre d'affaires global",
        "Recrutement de 2 nouveaux collaborateurs pour répondre à la demande"
      ],
      testimonial: {
        quote: "Sans TIM SOLUTION, jamais nous n'aurions pu nous développer aussi rapidement sur Bordeaux. Les contacts étaient non seulement nombreux mais surtout pertinents, ce qui nous a permis de nous constituer une clientèle fidèle et de développer le bouche-à-oreille.",
        author: "Jean Durand",
        position: "Gérant, Menuiserie Durand"
      },
      stats: [
        {
          label: "Nouveaux chantiers",
          value: "15",
          icon: <Building size={24} className="text-tim-red" />
        },
        {
          label: "Augmentation CA",
          value: "+22%",
          icon: <ArrowUp size={24} className="text-tim-red" />
        },
        {
          label: "Nouveaux collaborateurs",
          value: "2",
          icon: <Users size={24} className="text-tim-red" />
        }
      ],
      modalContent: {
        details: [
          "Spécialisée dans les menuiseries sur mesure",
          "Certifiée RGE et Qualibat",
          "Équipe de 8 artisans qualifiés",
          "Zone d'intervention : Gironde et Dordogne"
        ],
        challenges: [
          "Extension sur un nouveau marché",
          "Concurrence des grandes enseignes",
          "Nécessité de se différencier par la qualité artisanale",
          "Besoin de fidéliser une nouvelle clientèle"
        ],
        solutions: [
          "Campagne ciblée sur les propriétaires de maisons anciennes",
          "Mise en avant de la qualité artisanale et des certifications",
          "Accompagnement personnalisé pour les projets de rénovation",
          "Stratégie de communication sur la durabilité des produits"
        ],
        results: [
          "15 chantiers réalisés en 4 mois",
          "Augmentation de 22% du chiffre d'affaires",
          "Recrutement de 2 nouveaux collaborateurs",
          "Implantation réussie sur Bordeaux",
          "Création d'un pôle dédié à la clientèle bordelaise"
        ],
        testimonial: {
          quote: "Sans TIM SOLUTION, jamais nous n'aurions pu nous développer aussi rapidement sur Bordeaux. Les contacts étaient non seulement nombreux mais surtout pertinents, ce qui nous a permis de nous constituer une clientèle fidèle et de développer le bouche-à-oreille.",
          author: "Jean Durand",
          position: "Gérant, Menuiserie Durand"
        }
      }
    },
    {
      id: 3,
      title: "Diversification de l'activité d'une entreprise de couverture vers le solaire",
      client: "Toitures Girondines",
      sector: "Toiture / Énergie renouvelable",
      date: "Juin 2023",
      duration: "8 mois",
      challenge: "Toitures Girondines, entreprise spécialisée dans la rénovation de toitures, souhaitait se diversifier vers l'installation de panneaux photovoltaïques. L'entreprise disposait des compétences techniques mais pas d'un portefeuille clients intéressés par cette solution.",
      solution: "TIM SOLUTION a créé une campagne de génération de leads spécifiquement orientée vers les propriétaires intéressés par la transition énergétique, en mettant en avant les avantages économiques et écologiques des installations photovoltaïques ainsi que les aides disponibles.",
      results: [
        "18 installations photovoltaïques réalisées en 8 mois",
        "Chiffre d'affaires additionnel de 246 000€",
        "Développement d'une nouvelle expertise valorisante pour l'entreprise",
        "Création d'un département dédié au solaire avec 3 techniciens spécialisés"
      ],
      testimonial: {
        quote: "TIM SOLUTION nous a aidés à saisir l'opportunité du marché photovoltaïque en pleine expansion. La qualité des contacts fournis et leur intérêt manifeste pour le solaire nous ont permis de démarrer cette activité sur les chapeaux de roue.",
        author: "Sophie Legrand",
        position: "Directrice commerciale, Toitures Girondines"
      },
      stats: [
        {
          label: "Installations solaires",
          value: "18",
          icon: <Sun size={24} className="text-tim-red" />
        },
        {
          label: "CA additionnel",
          value: "246 000€",
          icon: <Coins size={24} className="text-tim-red" />
        },
        {
          label: "Nouveaux techniciens",
          value: "3",
          icon: <Users size={24} className="text-tim-red" />
        }
      ],
      modalContent: {
        details: [
          "Spécialisée dans la rénovation de toitures",
          "Expertise en installation de panneaux photovoltaïques",
          "Équipe de 12 techniciens qualifiés",
          "Zone d'intervention : Gironde et Lot-et-Garonne"
        ],
        challenges: [
          "Diversification vers un nouveau marché",
          "Nécessité de se positionner comme expert solaire",
          "Besoin de fidéliser une clientèle intéressée par l'énergie renouvelable",
          "Concurrence des installateurs spécialisés en énergie"
        ],
        solutions: [
          "Campagne ciblée sur les propriétaires intéressés par l'autoproduction d'énergie",
          "Mise en avant des avantages économiques et écologiques",
          "Accompagnement personnalisé pour les démarches administratives",
          "Stratégie de communication sur la durabilité et les économies"
        ],
        results: [
          "18 installations photovoltaïques en 8 mois",
          "Chiffre d'affaires additionnel de 246 000€",
          "Création d'un département dédié au solaire",
          "Recrutement de 3 techniciens spécialisés",
          "Développement d'une expertise reconnue en énergie solaire"
        ],
        testimonial: {
          quote: "TIM SOLUTION nous a aidés à saisir l'opportunité du marché photovoltaïque en pleine expansion. La qualité des contacts fournis et leur intérêt manifeste pour le solaire nous ont permis de démarrer cette activité sur les chapeaux de roue.",
          author: "Sophie Legrand",
          position: "Directrice commerciale, Toitures Girondines"
        }
      }
    }
  ];

  const handleModalOpen = (study: CaseStudy) => {
    setSelectedStudy(study);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setSelectedStudy(null);
    setIsModalOpen(false);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section id="hero" className="relative pt-32 pb-16 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center max-w-3xl mx-auto transition-all duration-700 ${isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-wider text-tim-red bg-tim-red/10 uppercase rounded-full">
              Success Stories
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Des <span className="text-tim-red">résultats concrets</span> pour nos partenaires
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Découvrez comment des entreprises du secteur de la rénovation énergétique ont développé leur activité grâce à notre expertise.
            </p>
            <Button className="bg-tim-red hover:bg-tim-red/90 text-white px-6 py-3 rounded-full transition-all" onClick={() => setIsAllStudiesModalOpen(true)}>
              Voir tous nos cas clients
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section id="studies" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div 
                key={study.id}
                className={`bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-700 delay-${index * 100} ${isVisible.studies ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <Building size={24} className="text-tim-red" />
                      <div>
                        <p className="text-sm text-gray-500">Client</p>
                        <h3 className="font-semibold text-lg">{study.client}</h3>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Calendar size={16} className="text-tim-red" />
                      <span className="text-sm text-gray-500">{study.date}</span>
                    </div>
                  </div>

                  <h2 className="text-xl md:text-2xl font-bold mb-4">
                    {study.title}
                  </h2>

                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-gray-600 mb-2">Secteur</h3>
                    <p className="text-gray-800">{study.sector}</p>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-gray-600 mb-2">Durée</h3>
                    <p className="text-gray-800">{study.duration}</p>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-gray-600 mb-2">Problématique</h3>
                    <p className="text-gray-700">{study.challenge}</p>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-gray-600 mb-2">Notre solution</h3>
                    <p className="text-gray-700">{study.solution}</p>
                  </div>

                  {study.stats && (
                    <div className="mb-6">
                      <h3 className="text-sm font-semibold text-gray-600 mb-4">Résultats clés</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {study.stats.map((stat, i) => (
                          <div key={i} className="p-4 text-center bg-gray-50 rounded-lg">
                            {stat.icon}
                            <p className="text-2xl font-bold mt-2">{stat.value}</p>
                            <p className="text-sm text-gray-500">{stat.label}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {study.testimonial && (
                    <div className="relative p-4 bg-gray-50 rounded-lg">
                      <div className="absolute -top-3 -left-3 bg-tim-red text-white rounded-full w-8 h-8 flex items-center justify-center">
                        <Quote size={16} />
                      </div>
                      <p className="text-gray-700 italic mb-4">{study.testimonial.quote}</p>
                      <div className="flex items-center justify-center space-x-2">
                        <p className="font-semibold">{study.testimonial.author}</p>
                        <p className="text-sm text-gray-500">{study.testimonial.position}</p>
                      </div>
                    </div>
                  )}

                  <div className="mt-6">
                    <Button variant="outline" className="w-full justify-center hover:bg-tim-red/5" onClick={() => handleModalOpen(study)}>
                      En savoir plus
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Prêt à développer votre activité ?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Contactez-nous pour discuter de votre projet et découvrir comment nous pouvons vous aider à atteindre vos objectifs commerciaux.
            </p>
            <Button className="bg-tim-red hover:bg-tim-red/90 text-white px-6 py-3 rounded-full transition-all">
              Prendre rendez-vous
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* All Case Studies Modal */}
      <Dialog open={isAllStudiesModalOpen} onOpenChange={setIsAllStudiesModalOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">Nos cas clients</DialogTitle>
          </DialogHeader>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {caseStudies.map((study) => (
              <div key={study.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <Building size={24} className="text-tim-red" />
                      <div>
                        <p className="text-sm text-gray-500">Client</p>
                        <h3 className="font-semibold text-lg">{study.client}</h3>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Calendar size={16} className="text-tim-red" />
                      <span className="text-sm text-gray-500">{study.date}</span>
                    </div>
                  </div>

                  <h2 className="text-xl md:text-2xl font-bold mb-4">
                    {study.title}
                  </h2>

                  <div className="mb-4">
                    <h3 className="text-sm font-semibold text-gray-600 mb-2">Secteur</h3>
                    <p className="text-gray-800">{study.sector}</p>
                  </div>

                  <div className="mb-4">
                    <h3 className="text-sm font-semibold text-gray-600 mb-2">Durée</h3>
                    <p className="text-gray-800">{study.duration}</p>
                  </div>

                  <div className="mb-4">
                    <h3 className="text-sm font-semibold text-gray-600 mb-2">Problématique</h3>
                    <p className="text-gray-700">{study.challenge}</p>
                  </div>

                  <div className="mb-4">
                    <h3 className="text-sm font-semibold text-gray-600 mb-2">Notre solution</h3>
                    <p className="text-gray-700">{study.solution}</p>
                  </div>

                  {study.stats && (
                    <div className="mb-4">
                      <h3 className="text-sm font-semibold text-gray-600 mb-4">Résultats clés</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {study.stats.map((stat, i) => (
                          <div key={i} className="p-4 text-center bg-gray-50 rounded-lg">
                            {stat.icon}
                            <p className="text-2xl font-bold mt-2">{stat.value}</p>
                            <p className="text-sm text-gray-500">{stat.label}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {study.testimonial && (
                    <div className="relative p-4 bg-gray-50 rounded-lg">
                      <div className="absolute -top-3 -left-3 bg-tim-red text-white rounded-full w-8 h-8 flex items-center justify-center">
                        <Quote size={16} />
                      </div>
                      <p className="text-gray-700 italic mb-4">{study.testimonial.quote}</p>
                      <div className="flex items-center justify-center space-x-2">
                        <p className="font-semibold">{study.testimonial.author}</p>
                        <p className="text-sm text-gray-500">{study.testimonial.position}</p>
                      </div>
                    </div>
                  )}

                  <div className="mt-6">
                    <Button variant="outline" className="w-full justify-center hover:bg-tim-red/5" onClick={() => handleModalOpen(study)}>
                      En savoir plus
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>

      {/* Case Study Modal */}
      <Dialog open={isModalOpen} onOpenChange={handleModalClose}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center space-x-3">
              <Building size={24} className="text-tim-red" />
              <div>
                <h2 className="text-2xl font-bold">{selectedStudy?.title}</h2>
                <p className="text-sm text-gray-500">{selectedStudy?.client}</p>
              </div>
            </DialogTitle>
          </DialogHeader>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
            {/* Left Column */}
            <div>
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4">Détails de l'entreprise</h3>
                <ul className="space-y-3">
                  {selectedStudy?.modalContent?.details?.map((detail, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle size={18} className="text-tim-red mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4">Défis rencontrés</h3>
                <ul className="space-y-3">
                  {selectedStudy?.modalContent?.challenges?.map((challenge, i) => (
                    <li key={i} className="flex items-start">
                      <AlertTriangle size={18} className="text-tim-red mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column */}
            <div>
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4">Notre solution</h3>
                <ul className="space-y-3">
                  {selectedStudy?.modalContent?.solutions?.map((solution, i) => (
                    <li key={i} className="flex items-start">
                      <Lightbulb size={18} className="text-tim-red mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{solution}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4">Résultats obtenus</h3>
                <ul className="space-y-3">
                  {selectedStudy?.modalContent?.results?.map((result, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle size={18} className="text-tim-red mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Testimonial */}
          {selectedStudy?.modalContent?.testimonial && (
            <div className="mt-8 p-6 bg-gray-50 rounded-lg">
              <div className="relative">
                <div className="absolute -top-3 -left-3 bg-tim-red text-white rounded-full w-8 h-8 flex items-center justify-center">
                  <Quote size={16} />
                </div>
                <p className="text-gray-700 italic mb-4">{selectedStudy.modalContent.testimonial.quote}</p>
                <div className="flex items-center justify-end space-x-2">
                  <p className="font-semibold">{selectedStudy.modalContent.testimonial.author}</p>
                  <p className="text-sm text-gray-500">{selectedStudy.modalContent.testimonial.position}</p>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default CaseStudies;
