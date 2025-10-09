import React from 'react';
import { Helmet } from 'react-helmet';
import Header from './Header/Header.jsx';
import Footer from './Footer/Footer.jsx';
import { useSemanticTokens } from '../foundations/theme-hooks.js';
import { injectResponsiveClasses } from '../foundations/responsive-classes.js';
import { injectGlobalVWSystem } from '../foundations/global-vw-system.js';

/**
 * PageTemplate - Plantilla base para todas las páginas
 * 
 * Incluye:
 * - Meta tags para SEO (title, description)
 * - Header con navegación
 * - Contenido principal
 * - Footer
 * - Estilos responsivos
 */
const PageTemplate = ({ 
  children, 
  title = "MEP Engineering", 
  description = "Ingeniería especializada en proyectos técnicos y soluciones innovadoras",
  currentPage = "",
  className = '' 
}) => {
  const semanticColors = useSemanticTokens();

  // Inyectar clases responsivas y sistema VW global al montar el componente
  React.useEffect(() => {
    injectResponsiveClasses();
    injectGlobalVWSystem();
  }, []);

  // Estilos para el layout de la página usando el sistema VW exitoso
  const templateStyles = `
    .page-layout {
      width: 100vw;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }
    
    .page-header {
      flex-shrink: 0;
      position: relative;
      z-index: 100;
    }
    
    .page-main {
      flex: 1;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    
    .content-wrapper {
      width: 100%;
      max-width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 3rem;
      padding: 2rem 1.5rem;
    }
    
    .page-footer {
      flex-shrink: 0;
      position: relative;
      z-index: 100;
    }
    
    @media (min-width: 768px) {
      .content-wrapper {
        max-width: 88.89vw;
        gap: 5.56vw;
        padding: 5.56vw;
      }
    }
  `;

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
      </Helmet>
      
      <style dangerouslySetInnerHTML={{ __html: templateStyles }} />
      
      <div 
        className={`page-layout ${className}`}
        style={{ backgroundColor: semanticColors?.surface?.background || '#FFFFFF' }}
      >
        {/* Header */}
        <header className="page-header">
          <Header currentPage={currentPage} />
        </header>
        
        {/* Contenido Principal */}
        <main className="page-main">
          <div className="content-wrapper">
            {children}
          </div>
        </main>
        
        {/* Footer */}
        <footer className="page-footer">
          <Footer />
        </footer>
      </div>
    </>
  );
};

export default PageTemplate;