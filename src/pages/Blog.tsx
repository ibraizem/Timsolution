
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout';
import { Calendar, User, ChevronRight, ArrowRight, Search } from 'lucide-react';

const Blog = () => {
  const [isVisible, setIsVisible] = useState({
    hero: false,
    featured: false,
    articles: false,
    categories: false,
  });

  useEffect(() => {
    // Trigger initial animation
    setTimeout(() => setIsVisible(prev => ({ ...prev, hero: true })), 100);

    const handleScroll = () => {
      // Set visibility for each section as they appear in viewport
      const sections = ['hero', 'featured', 'articles', 'categories'];
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

  // Blog posts data
  const featuredPost = {
    id: 1,
    title: "MaPrimeRénov' 2023 : Tout ce que vous devez savoir pour vos clients",
    excerpt: "Guide complet des évolutions de MaPrimeRénov' en 2023 : montants, conditions d'éligibilité et processus de demande pour aider vos clients à financer leurs travaux de rénovation énergétique.",
    date: "15 mai 2023",
    author: "Olivier Pinheiro",
    category: "Aides financières",
    image: "https://images.unsplash.com/photo-1556156653-e5a7676c4e29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80",
    readTime: "8 min"
  };

  const blogPosts = [
    {
      id: 2,
      title: "Les 7 arguments qui convainquent vos prospects à passer à l'action",
      excerpt: "Découvrez les techniques de vente les plus efficaces pour transformer vos prospects en clients satisfaits dans le secteur de la rénovation énergétique.",
      date: "3 juin 2023",
      author: "Sophie Martin",
      category: "Commercialisation",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1774&q=80",
      readTime: "5 min"
    },
    {
      id: 3,
      title: "RE2020 : Les nouvelles normes pour les professionnels du bâtiment",
      excerpt: "Tout ce que vous devez savoir sur la nouvelle réglementation environnementale 2020 et son impact sur votre métier au quotidien.",
      date: "21 mai 2023",
      author: "Pierre Dupont",
      category: "Réglementation",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      readTime: "7 min"
    },
    {
      id: 4,
      title: "Comment optimiser votre trésorerie en période d'inflation",
      excerpt: "Conseils pratiques pour les artisans et entreprises du bâtiment pour mieux gérer leur trésorerie dans un contexte économique tendu.",
      date: "12 mai 2023",
      author: "Jean-Michel Roux",
      category: "Gestion d'entreprise",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1772&q=80",
      readTime: "6 min"
    },
    {
      id: 5,
      title: "Les matériaux biosourcés : un marché en plein essor",
      excerpt: "Zoom sur les opportunités offertes par les matériaux écologiques dans le secteur du bâtiment et de la rénovation énergétique.",
      date: "28 avril 2023",
      author: "Marie Leclerc",
      category: "Tendances",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      readTime: "4 min"
    },
    {
      id: 6,
      title: "Guide complet des CEE pour vos clients en 2023",
      excerpt: "Tout savoir sur les Certificats d'Économies d'Énergie : fonctionnement, barèmes et démarches pour en faire bénéficier vos clients.",
      date: "15 avril 2023",
      author: "Olivier Pinheiro",
      category: "Aides financières",
      image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      readTime: "9 min"
    },
  ];

  // Categories
  const categories = [
    "Aides financières",
    "Commercialisation",
    "Réglementation",
    "Gestion d'entreprise",
    "Tendances",
    "Marketing",
    "RH et recrutement",
    "Outils numériques"
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section id="hero" className="relative pt-32 pb-16 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center max-w-3xl mx-auto transition-all duration-700 ${isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-wider text-tim-red bg-tim-red/10 uppercase rounded-full">
              Blog & Conseils
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Ressources pour <span className="text-tim-red">développer</span> votre activité
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Découvrez nos articles, guides et conseils pour optimiser votre entreprise dans le secteur de la rénovation énergétique.
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-lg mx-auto mt-8 mb-4">
              <input
                type="text"
                placeholder="Rechercher un article..."
                className="w-full px-5 py-3 rounded-full border border-gray-200 focus:border-tim-red focus:ring-1 focus:ring-tim-red focus:outline-none transition-colors pr-12"
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2 text-tim-red">
                <Search size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section id="featured" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`mb-12 transition-all duration-700 ${isVisible.featured ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              Article à la une
            </h2>
          </div>

          <div className={`bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-700 ${isVisible.featured ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex flex-col lg:flex-row">
              <div className="w-full lg:w-1/2">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title} 
                  className="w-full h-72 lg:h-full object-cover" 
                />
              </div>
              <div className="w-full lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                <span className="text-xs font-semibold text-tim-red uppercase tracking-wider mb-2">
                  {featuredPost.category}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  {featuredPost.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center mb-8 text-sm text-gray-500">
                  <div className="flex items-center mr-4">
                    <Calendar size={14} className="mr-1" />
                    <span>{featuredPost.date}</span>
                  </div>
                  <div className="flex items-center mr-4">
                    <User size={14} className="mr-1" />
                    <span>{featuredPost.author}</span>
                  </div>
                  <div>Temps de lecture : {featuredPost.readTime}</div>
                </div>
                <Button className="bg-tim-red hover:bg-tim-red/90 text-white px-6 py-2 rounded-full transition-all self-start">
                  Lire l'article complet
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section id="articles" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`mb-12 transition-all duration-700 ${isVisible.articles ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              Nos derniers articles
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <div 
                key={post.id}
                className={`bg-white rounded-xl overflow-hidden shadow-md transition-all duration-700 hover:-translate-y-2 hover:shadow-lg delay-${100 * (index % 3 + 1)} ${isVisible.articles ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              >
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-48 object-cover" 
                />
                <div className="p-6">
                  <span className="text-xs font-semibold text-tim-red uppercase tracking-wider mb-2 inline-block">
                    {post.category}
                  </span>
                  <h3 className="text-xl font-bold mb-3 hover:text-tim-red transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-6 text-sm line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between mb-4 text-xs text-gray-500">
                    <div className="flex items-center">
                      <Calendar size={12} className="mr-1" />
                      <span>{post.date}</span>
                    </div>
                    <div>Temps de lecture : {post.readTime}</div>
                  </div>
                  <Button variant="ghost" className="text-tim-red hover:bg-tim-red/5 hover:text-tim-red p-0">
                    Lire l'article
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" className="border-tim-red text-tim-red hover:bg-tim-red/5 rounded-full px-8 py-3 transition-all">
              Voir plus d'articles
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section id="categories" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`mb-12 transition-all duration-700 ${isVisible.categories ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              Parcourir par catégorie
            </h2>
          </div>

          <div className={`flex flex-wrap justify-center gap-4 transition-all duration-700 delay-200 ${isVisible.categories ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {categories.map((category) => (
              <Link key={category} to={`/blog/category/${category.toLowerCase().replace(/\s+/g, '-')}`}>
                <div className="bg-gray-50 hover:bg-tim-red hover:text-white px-6 py-3 rounded-full shadow-sm transition-all text-gray-700 font-medium text-sm">
                  {category}
                </div>
              </Link>
            ))}
          </div>

          <div className={`mt-16 text-center bg-gray-50 p-10 rounded-xl transition-all duration-700 delay-300 ${isVisible.categories ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h3 className="text-xl font-bold mb-4">Abonnez-vous à notre newsletter</h3>
            <p className="text-gray-600 mb-6">
              Recevez nos derniers articles et conseils directement dans votre boîte mail.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="flex-grow px-4 py-3 rounded-full border border-gray-200 focus:border-tim-red focus:ring-1 focus:ring-tim-red focus:outline-none transition-colors"
              />
              <Button className="bg-tim-red hover:bg-tim-red/90 text-white rounded-full transition-all">
                S'abonner
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
