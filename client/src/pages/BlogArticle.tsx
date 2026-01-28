import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react";
import { articles } from "./Blog";

// Fonction pour convertir le Markdown en HTML propre
function markdownToHtml(markdown: string): string {
  let html = markdown;
  
  // Traitement des tableaux Markdown
  const lines = html.split('\n');
  let inTable = false;
  let tableHtml = '';
  let headerProcessed = false;
  const processedLines: string[] = [];
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    
    // Détection d'une ligne de tableau
    if (line.startsWith('|') && line.endsWith('|')) {
      // Ligne de séparation (|---|---|)
      if (line.match(/^\|[\s-:|]+\|$/)) {
        continue; // On ignore la ligne de séparation
      }
      
      if (!inTable) {
        inTable = true;
        headerProcessed = false;
        tableHtml = '<div class="overflow-x-auto my-6"><table class="w-full border-collapse bg-white rounded-lg shadow-sm border border-gray-200">';
      }
      
      const cells = line.split('|').filter(cell => cell.trim() !== '');
      
      if (!headerProcessed) {
        // Première ligne = en-tête
        tableHtml += '<thead><tr>';
        cells.forEach(cell => {
          tableHtml += `<th class="px-4 py-3 text-left text-sm font-semibold text-gray-900 bg-gray-100 border-b border-gray-200">${cell.trim()}</th>`;
        });
        tableHtml += '</tr></thead><tbody>';
        headerProcessed = true;
      } else {
        // Lignes de données
        tableHtml += '<tr class="hover:bg-gray-50">';
        cells.forEach(cell => {
          tableHtml += `<td class="px-4 py-3 text-sm text-gray-700 border-b border-gray-100">${cell.trim()}</td>`;
        });
        tableHtml += '</tr>';
      }
    } else {
      // Fin du tableau
      if (inTable) {
        tableHtml += '</tbody></table></div>';
        processedLines.push(tableHtml);
        inTable = false;
        tableHtml = '';
        headerProcessed = false;
      }
      processedLines.push(line);
    }
  }
  
  // Fermer le tableau si on est encore dedans à la fin
  if (inTable) {
    tableHtml += '</tbody></table></div>';
    processedLines.push(tableHtml);
  }
  
  html = processedLines.join('\n');
  
  // Titres H2
  html = html.replace(/^## (.+)$/gm, '<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">$1</h2>');
  
  // Titres H3
  html = html.replace(/^### (.+)$/gm, '<h3 class="text-xl font-semibold text-gray-800 mt-8 mb-3">$1</h3>');
  
  // Paragraphes - lignes non vides qui ne commencent pas par < (HTML)
  const finalLines = html.split('\n');
  const outputLines: string[] = [];
  
  for (const line of finalLines) {
    const trimmed = line.trim();
    if (trimmed && !trimmed.startsWith('<') && !trimmed.startsWith('|')) {
      outputLines.push(`<p class="text-gray-700 leading-relaxed mb-4">${trimmed}</p>`);
    } else if (trimmed) {
      outputLines.push(trimmed);
    }
  }
  
  return outputLines.join('\n');
}

export default function BlogArticle() {
  const { articleId } = useParams<{ articleId: string }>();
  const article = articles.find(a => a.id === articleId);

  useEffect(() => {
    if (article) {
      document.title = `${article.title} | Blog Wattsun Énergie`;
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute("content", article.excerpt);
      }
    }
  }, [article]);

  if (!article) {
    return (
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Article non trouvé</h1>
            <Link to="/blog">
              <Button className="bg-[#fcad0d] text-gray-900 hover:bg-[#5e8a92] hover:text-white">
                Retour au blog
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const htmlContent = markdownToHtml(article.content);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-grow">
        {/* Hero Image */}
        <div className="relative h-64 md:h-96">
          <img 
            src={article.image} 
            alt={article.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="container mx-auto">
              <span className="bg-[#fcad0d] text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                {article.category}
              </span>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <article className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            {/* Back Link */}
            <Link 
              to="/blog" 
              onClick={() => window.scrollTo(0, 0)}
              className="inline-flex items-center gap-2 text-[#5e8a92] hover:text-[#fcad0d] mb-6 transition-colors"
            >
              <ArrowLeft size={16} />
              Retour au blog
            </Link>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {article.title}
            </h1>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-4 text-gray-500 mb-8 pb-8 border-b border-gray-200">
              <div className="flex items-center gap-2">
                <Calendar size={18} />
                <span>{article.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={18} />
                <span>{article.readTime} de lecture</span>
              </div>
              <button className="flex items-center gap-2 ml-auto text-[#5e8a92] hover:text-[#fcad0d] transition-colors">
                <Share2 size={18} />
                Partager
              </button>
            </div>

            {/* Content */}
            <div 
              className="article-content"
              dangerouslySetInnerHTML={{ __html: htmlContent }} 
            />

            {/* CTA Box */}
            <div className="mt-12 p-8 bg-gradient-to-r from-[#5e8a92] to-[#7ca0a8] rounded-2xl text-center text-white">
              <h3 className="text-2xl font-bold mb-4">Besoin d'un conseil personnalisé ?</h3>
              <p className="text-white/90 mb-6">
                Nos experts sont à votre disposition pour répondre à toutes vos questions et vous accompagner dans votre projet.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/demande-devis" onClick={() => window.scrollTo(0, 0)}>
                  <Button
                    size="lg"
                    className="bg-[#fcad0d] text-gray-900 hover:bg-white transition-all duration-300 font-bold px-8 py-6"
                  >
                    Demander un Devis Gratuit
                  </Button>
                </Link>
                <a href="tel:0786731033">
                  <Button
                    size="lg"
                    className="bg-white/10 text-white border-2 border-white/30 hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold px-8 py-6"
                  >
                    📞 07 86 73 10 33
                  </Button>
                </a>
              </div>
            </div>

            {/* Related Articles */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Articles similaires</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {articles.filter(a => a.id !== article.id).slice(0, 2).map((relatedArticle) => (
                  <Link 
                    key={relatedArticle.id}
                    to={`/blog/${relatedArticle.id}`}
                    onClick={() => window.scrollTo(0, 0)}
                    className="group"
                  >
                    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-4 flex gap-4">
                      <img 
                        src={relatedArticle.image} 
                        alt={relatedArticle.title}
                        className="w-24 h-24 object-cover rounded-lg flex-shrink-0"
                      />
                      <div>
                        <span className="text-xs text-[#fcad0d] font-semibold">{relatedArticle.category}</span>
                        <h4 className="font-semibold text-gray-900 group-hover:text-[#5e8a92] transition-colors line-clamp-2">
                          {relatedArticle.title}
                        </h4>
                        <span className="text-sm text-gray-500">{relatedArticle.readTime}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
