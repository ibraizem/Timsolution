
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout';
import { ArrowRight, Building, Users, Calendar, Bookmark, CheckCircle, PieChart } from 'lucide-react';

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
  image: string;
  testimonial?: {
    quote: string;
    author: string;
    position: string;
  };
}

const CaseStudies = () => {
  const [isVisible, setIsVisible] = useState({
    hero: false,
    studies: false,
  });

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
      image: "/images/case-study-1.jpg",
      testimonial: {
        quote: "Grâce à TIM SOLUTION, nous avons pu nous concentrer sur notre cœur de métier tout en développant notre activité. Les contacts fournis étaient précisément qualifiés selon nos critères, ce qui nous a permis d'atteindre un excellent taux de conversion.",
        author: "Thierry Martin",
        position: "Directeur, IsoPlus Aquitaine"
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
      image: "/images/case-study-2.jpg",
      testimonial: {
        quote: "Sans TIM SOLUTION, jamais nous n'aurions pu nous développer aussi rapidement sur Bordeaux. Les contacts étaient non seulement nombreux mais surtout pertinents, ce qui nous a permis de nous constituer une clientèle fidèle et de développer le bouche-à-oreille.",
        author: "Jean Durand",
        position: "Gérant, Menuiserie Durand"
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
      image: "/images/case-study-3.jpg",
      testimonial: {
        quote: "TIM SOLUTION nous a aidés à saisir l'opportunité du marché photovoltaïque en pleine expansion. La qualité des contacts fournis et leur intérêt manifeste pour le solaire nous ont permis de démarrer cette activité sur les chapeaux de roue.",
        author: "Sophie Legrand",
        position: "Directrice commerciale, Toitures Girondines"
      }
    }
  ];

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
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="studies" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <div 
                key={study.id}
                className={`bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-700 delay-${index * 100} ${isVisible.studies ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              >
                <div className="flex flex-col lg:flex-row">
                  <div className="w-full lg:w-1/2 order-2 lg:order-1 p-8 lg:p-12">
                    <h2 className="text-2xl md:text-3xl font-bold mb-6">
                      {study.title}
                    </h2>

                    <div className="grid grid-cols-2 gap-4 mb-8">
                      <div className="flex items-center space-x-2">
                        <Building size={18} className="text-tim-red" />
                        <div>
                          <p className="text-sm text-gray-500">Client</p>
                          <p className="font-medium">{study.client}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Bookmark size={18} className="text-tim-red" />
                        <div>
                          <p className="text-sm text-gray-500">Secteur</p>
                          <p className="font-medium">{study.sector}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar size={18} className="text-tim-red" />
                        <div>
                          <p className="text-sm text-gray-500">Date</p>
                          <p className="font-medium">{study.date}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users size={18} className="text-tim-red" />
                        <div>
                          <p className="text-sm text-gray-500">Durée</p>
                          <p className="font-medium">{study.duration}</p>
                        </div>
                      </div>
                    </div>

                    <div className="mb-8">
                      <h3 className="text-lg font-semibold mb-2">Problématique</h3>
                      <p className="text-gray-700">{study.challenge}</p>
                    </div>

                    <div className="mb-8">
                      <h3 className="text-lg font-semibold mb-2">Notre solution</h3>
                      <p className="text-gray-700">{study.solution}</p>
                    </div>

                    <div className="mb-8">
                      <h3 className="text-lg font-semibold mb-2">Résultats</h3>
                      <ul className="space-y-2">
                        {study.results.map((result, i) => (
                          <li key={i} className="flex items-start">
                            <CheckCircle size={18} className="text-tim-red mt-0.5 mr-2 flex-shrink-0" />
                            <span>{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {study.testimonial && (
                      <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-tim-red italic mb-8">
                        <p className="mb-4">"{study.testimonial.quote}"</p>
                        <p className="font-semibold">{study.testimonial.author}</p>
                        <p className="text-sm text-gray-600">{study.testimonial.position}</p>
                      </div>
                    )}

                    <Button className="bg-tim-red hover:bg-tim-red/90 text-white px-6 py-2 rounded-full transition-all">
                      Discuter de votre projet
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                  <div className="w-full lg:w-1/2 order-1 lg:order-2">
                    <img 
                      src={study.image} 
                      alt={study.title} 
                      className="w-full h-64 lg:h-full object-cover" 
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold mb-6">Prêt à développer votre activité ?</h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Rejoignez nos entreprises partenaires et bénéficiez de contacts qualifiés dans votre secteur d'activité.
            </p>
            <Link to="/contact">
              <Button className="bg-tim-red hover:bg-tim-red/90 text-white px-8 py-3 rounded-full text-lg transition-all">
                Contactez-nous
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CaseStudies;
