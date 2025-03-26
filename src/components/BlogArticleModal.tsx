
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowLeft, ChevronRight } from "lucide-react";
import { BlogArticle } from "@/types/blog";

interface BlogArticleModalProps {
  article: BlogArticle | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  relatedArticles: BlogArticle[];
}

const BlogArticleModal = ({ article, open, onOpenChange, relatedArticles }: BlogArticleModalProps) => {
  if (!article) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0 gap-0">
        <div className="sticky top-0 z-10 bg-white p-6 border-b">
          <DialogHeader className="text-left space-y-1">
            <Button 
              variant="ghost" 
              className="mb-3 text-tim-red hover:bg-tim-red/5 p-0 h-auto"
              onClick={() => onOpenChange(false)}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Retour aux articles
            </Button>
            <DialogTitle className="text-2xl md:text-3xl font-bold">
              {article.title}
            </DialogTitle>
            <div className="flex items-center flex-wrap gap-4 mt-2 text-sm text-gray-500">
              <div className="flex items-center">
                <Calendar size={14} className="mr-1" />
                <span>{article.date}</span>
              </div>
              <div className="flex items-center">
                <User size={14} className="mr-1" />
                <span>{article.author}</span>
              </div>
              <div>Temps de lecture : {article.readTime}</div>
              <div className="bg-tim-red/10 text-tim-red px-2 py-0.5 rounded text-xs font-medium">
                {article.category}
              </div>
            </div>
          </DialogHeader>
        </div>
        
        <div className="p-6 pt-3">
          <img 
            src={article.image} 
            alt={article.title} 
            className="w-full h-[300px] md:h-[400px] object-cover rounded-lg mb-8" 
          />
          
          <div className="prose prose-lg max-w-none">
            {article.content.map((paragraph, index) => (
              <div key={index} className="mb-6">
                {paragraph.type === 'heading' && (
                  <h2 className="text-xl md:text-2xl font-bold mb-4">{paragraph.content}</h2>
                )}
                {paragraph.type === 'paragraph' && (
                  <p className="text-gray-700">{paragraph.content}</p>
                )}
                {paragraph.type === 'list' && (
                  <ul className="list-disc pl-5 space-y-2 mt-4">
                    {paragraph.items.map((item, i) => (
                      <li key={i} className="text-gray-700">{item}</li>
                    ))}
                  </ul>
                )}
                {paragraph.type === 'quote' && (
                  <blockquote className="bg-gray-50 p-4 border-l-4 border-tim-red italic my-6">
                    <p className="text-gray-700">{paragraph.content}</p>
                    {paragraph.author && (
                      <footer className="mt-2 text-gray-600">
                        — {paragraph.author}
                        {paragraph.title && <span>, {paragraph.title}</span>}
                      </footer>
                    )}
                  </blockquote>
                )}
                {paragraph.type === 'image' && (
                  <div className="my-6">
                    <img 
                      src={paragraph.src} 
                      alt={paragraph.alt || ''}
                      className="w-full rounded-lg" 
                    />
                    {paragraph.caption && (
                      <p className="text-sm text-gray-500 text-center mt-2">{paragraph.caption}</p>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
          
          {relatedArticles.length > 0 && (
            <div className="mt-12 pt-8 border-t">
              <h3 className="text-xl font-bold mb-6">Articles similaires</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {relatedArticles.slice(0, 2).map((related) => (
                  <div 
                    key={related.id}
                    className="flex space-x-4 cursor-pointer hover:bg-gray-50 p-3 rounded-lg transition-colors"
                    onClick={() => {
                      // This will update the current article to the related one
                      onOpenChange(false);
                      setTimeout(() => {
                        // We use setTimeout to ensure the modal closes before reopening with new content
                        onOpenChange(true);
                      }, 100);
                    }}
                  >
                    <img 
                      src={related.image} 
                      alt={related.title}
                      className="w-20 h-20 object-cover rounded-md flex-shrink-0" 
                    />
                    <div className="flex-grow">
                      <h4 className="font-medium text-gray-900 line-clamp-2 hover:text-tim-red transition-colors">
                        {related.title}
                      </h4>
                      <p className="text-sm text-gray-500 mt-1">{related.date}</p>
                      <div className="flex items-center text-tim-red text-sm mt-1">
                        <span>Lire l'article</span>
                        <ChevronRight className="ml-1 h-3 w-3" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BlogArticleModal;
