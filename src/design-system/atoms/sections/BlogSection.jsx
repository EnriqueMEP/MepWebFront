import React from 'react';
import ButtonPrimary from '../Button/ButtonPrimary.jsx';
import { useSemanticTokens } from '../../foundations/theme-hooks.js';
import { 
  breakpoints, 
  shapes,
  scaling,
  generateShapeStyles
} from '../../foundations/layout.js';

/**
 * BlogSection - Sección de blog/artículos
 * 
 * Props:
 * - title: Título opcional de la sección
 * - articles: Array de objetos con { id, date, title, excerpt }
 * - selectedArticle: ID del artículo seleccionado
 * - onArticleSelect: Función para manejar selección de artículo
 * - buttonText: Texto del botón (default: "Me interesa")
 * - shapeImageSrc: Ruta de la imagen decorativa
 */
const BlogSection = ({
  title = "",
  articles = [],
  selectedArticle = null,
  onArticleSelect = () => {},
  buttonText = "Me interesa",
  shapeImageSrc = "src/design-system/foundations/img/shape.png"
}) => {
  const semanticColors = useSemanticTokens();

  const blogStyles = `
    /* Blog Section */
    .blog-section {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1.5rem;
      position: relative;
      z-index: 1;
    }
    
    @media (min-width: ${breakpoints.tablet}) {
      .blog-section {
        gap: 2rem;
      }
    }

    .blog-title-container {
      width: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      position: relative;
      margin-bottom: 1rem;
      z-index: 2;
    }

    .blog-articles-container {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1.5rem;
      position: relative;
      z-index: 1;
    }
    
    @media (min-width: ${breakpoints.tablet}) {
      .blog-articles-container {
        flex-direction: row;
        justify-content: space-between;
        gap: 1.67vw;
      }
    }

    /* Blog Shape - Posicionado en la esquina derecha del blog, opacity: 1 */
    ${generateShapeStyles(shapes.blog, 'blog-shape')}

    .blog-article {
      width: 100%;
      max-width: 400px;
      padding: 1.5rem;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: 1rem;
      background-color: transparent;
    }

    @media (min-width: ${breakpoints.tablet}) {
      .blog-article {
        width: calc(33.33% - 1.11vw);
        max-width: none;
        padding: 1.67vw;
        gap: 1.11vw;
      }
    }

    .blog-date {
      width: 100%;
      text-align: left;
    }

    .blog-content {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 0.5rem;
      flex: 1;
    }
    
    @media (min-width: ${breakpoints.tablet}) {
      .blog-content {
        gap: 0.56vw;
      }
    }

    .blog-title {
      width: 100%;
      height: 80px;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      text-overflow: ellipsis;
    }

    @media (min-width: ${breakpoints.tablet}) {
      .blog-title {
        height: 5.56vw;
      }
    }

    .blog-excerpt {
      width: 100%;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      text-overflow: ellipsis;
    }

    /* Escalado de botones del blog */
    @media (min-width: ${breakpoints.tablet}) {
      .blog-article button {
        ${scaling.blogButton.desktop.transform};
        transform-origin: ${scaling.blogButton.desktop.transformOrigin};
      }
    }
  `;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: blogStyles }} />
      
      <section className="blog-section">
        {/* Blog Shape - similar al del hero pero posicionado en el blog */}
        <div className="blog-shape">
          <img 
            src={shapeImageSrc} 
            alt=""
          />
        </div>

        {/* Título opcional */}
        {title && (
          <div className="blog-title-container">
            <div className="text-display-medium" style={{ color: semanticColors.content.text }}>
              {title}
            </div>
          </div>
        )}

        {/* Container de artículos */}
        <div className="blog-articles-container">
          {articles.map((article) => (
          <article key={article.id} className="blog-article">
            <div className="blog-date text-label-large" style={{ 
              color: semanticColors.content.text
            }}>
              {article.date}
            </div>
            
            <div className="blog-content">
              <div className="blog-title text-heading-medium" style={{ 
                color: semanticColors.content.text
              }}>
                {article.title}
              </div>
              
              <div className="blog-excerpt text-body-large" style={{ 
                color: semanticColors.content.text
              }}>
                {article.excerpt}
              </div>
            </div>
            
            <ButtonPrimary 
              size="md"
              selected={selectedArticle === article.id}
              onClick={() => {
                onArticleSelect(selectedArticle === article.id ? null : article.id);
              }}
            >
              {buttonText}
            </ButtonPrimary>
          </article>
        ))}
        </div>
      </section>
    </>
  );
};

export default BlogSection;