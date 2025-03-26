
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout';
import { Star, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const [isVisible, setIsVisible] = useState({
    hero: false,
    testimonials: false,
    caseStudies: false,
    cta: false,
  });

  useEffect(() => {
    // Trigger initial animation
    setTimeout(() => setIsVisible(prev => ({ ...prev, hero: true })), 100);

    const handleScroll = () => {
      // Set visibility for each section as they appear in viewport
      const sections = ['hero', 'testimonials', 'caseStudies', 'cta'];
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

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      name: "Jean Dupont",
      company: "Dupont Isolation",
      position: "Gérant",
      text: "Depuis que nous avons rejoint TIM SOLUTION, notre carnet de commandes est rempli à 3 mois d'avance. Les contacts sont véritablement qualifiés et nous permettent de gagner un temps considérable. Je recommande vivement leurs services à toutes les entreprises du bâtiment qui souhaitent développer leur activité.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    },
    {
      id: 2,
      name: "Sophie Martin",
      company: "EcoToiture",
      position: "Directrice commerciale",
      text: "La qualité des leads reçus est remarquable. Sur 10 contacts, nous concrétisons régulièrement 6 à 7 chantiers, ce qui est un excellent ratio dans notre secteur. L'équipe de TIM SOLUTION est toujours à l'écoute et réactive. C'est un partenariat gagnant-gagnant qui nous a permis d'augmenter notre chiffre d'affaires de 30% en un an.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1619895862022-09114b41f16f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    },
    {
      id: 3,
      name: "Pierre Leroy",
      company: "Bati-Rénov",
      position: "Fondateur",
      text: "TIM SOLUTION nous a aidés à développer notre activité dans une période difficile. Le processus est simple et l'équipe est toujours disponible pour nous accompagner. Nous collaborons depuis maintenant 2 ans et les résultats sont au rendez-vous. Un grand merci à toute l'équipe pour leur professionnalisme et leur accompagnement.",
      rating: 4,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    },
    {
      id: 4,
      name: "Marie Dubois",
      company: "Ventil'Air",
      position: "Co-gérante",
      text: "Grâce à TIM SOLUTION, nous avons pu nous concentrer sur notre cœur de métier en limitant les dépenses marketing. Les prospects sont de qualité et le service client est impeccable. Un vrai gain de temps et d'argent pour notre entreprise qui nous a permis d'embaucher deux techniciens supplémentaires.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    },
    {
      id: 5,
      name: "Thomas Bernard",
      company: "Menuiserie Bernard",
      position: "Dirigeant",
      text: "Après avoir testé plusieurs solutions pour développer notre activité, nous avons choisi TIM SOLUTION pour la qualité de leurs contacts et leur professionnalisme. Les projets sont bien qualifiés et correspondent parfaitement à nos critères. Une belle collaboration qui dure depuis plus de 3 ans maintenant.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    },
    {
      id: 6,
      name: "Émilie Laurent",
      company: "Maçonnerie Laurent",
      position: "Responsable développement",
      text: "Notre collaboration avec TIM SOLUTION nous a permis de doubler notre chiffre d'affaires en seulement un an. Les prospects sont bien ciblés et les projets correspondent parfaitement à notre domaine d'expertise. Je recommande vivement leurs services à toutes les entreprises du bâtiment.",
      rating: 4,
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    },
  ];

  // Case studies
  const caseStudies = [
    {
      id: 1,
      title: "Comment Dupont Isolation a augmenté son CA de 40% en 6 mois",
      description: "Découvrez comment cette entreprise spécialisée en isolation a transformé son activité grâce à TIM SOLUTION.",
      image: "https://images.unsplash.com/photo-1604754742629-3e0f4a58772a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      company: "Dupont Isolation",
      results: [
        "40% d'augmentation du CA en 6 mois",
        "Embauche de 3 nouveaux techniciens",
        "Extension de la zone d'intervention",
      ],
    },
    {
      id: 2,
      title: "EcoToiture : de l'artisanat local à l'entreprise régionale",
      description: "L'histoire d'une entreprise de toiture qui a su se développer tout en conservant ses valeurs.",
      image: "https://images.unsplash.com/photo-1622021142947-da7dedc7c39a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80",
      company: "EcoToiture",
      results: [
        "Passage de 4 à 12 employés en 2 ans",
        "Ouverture d'une seconde agence",
        "Obtention de nouvelles certifications",
      ],
    },
    {
      id: 3,
      title: "Ventil'Air : comment se spécialiser dans un marché de niche",
      description: "Une entreprise de ventilation qui a su se positionner comme leader sur son marché grâce à TIM SOLUTION.",
      image: "https://images.unsplash.com/photo-1621913214521-9b9e9483001e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      company: "Ventil'Air",
      results: [
        "Spécialisation en VMC double flux",
        "Augmentation des marges de 15%",
        "Reconnaissance comme expert dans le domaine",
      ],
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section id="hero" className="relative pt-32 pb-20 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center max-w-3xl mx-auto transition-all duration-700 ${isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-wider text-tim-red bg-tim-red/10 uppercase rounded-full">
              Témoignages
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Ils ont <span className="text-tim-red">réussi</span> avec TIM SOLUTION
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Découvrez les expériences de nos partenaires et comment nous les avons aidés à développer leur activité.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-700 ${isVisible.testimonials ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-wider text-tim-red bg-tim-red/10 uppercase rounded-full">
              Ce qu'ils disent de nous
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Témoignages de nos partenaires
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600 text-lg">
              Découvrez les retours d'expérience de professionnels qui nous font confiance pour développer leur activité.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className={`bg-white border border-gray-100 p-8 rounded-xl shadow-md transition-all duration-700 delay-${100 * (index % 3 + 1)} ${isVisible.testimonials ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              >
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-tim-red" 
                  />
                  <div>
                    <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                    <p className="text-gray-500 text-sm">{testimonial.position}</p>
                    <p className="text-tim-red font-medium text-sm">{testimonial.company}</p>
                  </div>
                </div>
                <div className="relative mb-6 text-gray-600">
                  <Quote className="absolute -top-4 -left-2 text-tim-red/10" size={42} />
                  <p className="italic relative z-10 pl-4">{testimonial.text}</p>
                </div>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={18} 
                      className={i < testimonial.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"} 
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="caseStudies" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-700 ${isVisible.caseStudies ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-wider text-tim-red bg-tim-red/10 uppercase rounded-full">
              Success stories
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Études de cas
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600 text-lg">
              Découvrez comment nos partenaires ont transformé leur activité grâce à TIM SOLUTION.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div 
                key={study.id}
                className={`group bg-white overflow-hidden rounded-xl shadow-md transition-all duration-700 delay-${100 * (index + 1)} hover:-translate-y-2 hover:shadow-xl ${isVisible.caseStudies ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={study.image} 
                    alt={study.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <p className="font-semibold">{study.company}</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-tim-red transition-colors">{study.title}</h3>
                  <p className="text-gray-600 mb-5">{study.description}</p>
                  <div className="space-y-2">
                    {study.results.map((result) => (
                      <div key={result} className="flex items-start">
                        <ChevronRight size={16} className="text-tim-red mr-2 mt-1 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{result}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6">
                    <Button variant="ghost" className="text-tim-red hover:bg-tim-red/5 hover:text-tim-red px-0">
                      Lire l'étude complète
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
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
              Rejoignez-les
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Vous aussi, réussissez avec TIM SOLUTION
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Rejoignez notre réseau de professionnels et développez votre activité grâce à des contacts qualifiés.
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

export default Testimonials;
