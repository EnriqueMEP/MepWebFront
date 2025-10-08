import React from 'react';
import PageTemplate from '../design-system/atoms/PageTemplate.jsx';
import { 
  HeroSection, 
  EmptySpace 
} from '../design-system/atoms/sections/index.js';

/**
 * NotFound - Página 404 - Página no encontrada
 * 
 * Página de error personalizada para rutas no encontradas.
 * Incluye navegación de regreso y enlaces útiles.
 */

const NotFound = () => {
  return (
    <PageTemplate
      title="Página no encontrada - MEP Engineering"
      description="La página que buscas no existe. Vuelve al inicio o explora nuestros servicios de ingeniería."
      currentPage="404"
    >
      <HeroSection
        title="Página no encontrada"
        subtitle="Lo sentimos, la página que buscas no existe o ha sido movida"
        showVideo={false}
      />
      
      <EmptySpace height="2rem" />
      
      {/* Sección 404 */}
      <section className="not-found-section">
        <div className="not-found-container">
          <div className="not-found-content">
            <div className="error-code">
              <h1>404</h1>
            </div>
            
            <div className="error-message">
              <h2>¡Oops! Parece que te has perdido</h2>
              <p>
                La página que estás buscando no existe o ha sido movida. 
                Pero no te preocupes, podemos ayudarte a encontrar lo que necesitas.
              </p>
            </div>
            
            <div className="navigation-options">
              <h3>¿Qué puedes hacer?</h3>
              <ul>
                <li>
                  <a href="/">🏠 Volver al inicio</a>
                </li>
                <li>
                  <a href="/servicios">🔧 Ver nuestros servicios</a>
                </li>
                <li>
                  <a href="/proyectos">📁 Explorar nuestros proyectos</a>
                </li>
                <li>
                  <a href="/nosotros">👥 Conocer nuestro equipo</a>
                </li>
                <li>
                  <a href="/contacto">📞 Ponerte en contacto</a>
                </li>
              </ul>
            </div>
            
            <div className="search-help">
              <h3>¿Necesitas ayuda?</h3>
              <p>
                Si llegaste aquí desde un enlace externo o marcador, 
                es posible que la URL haya cambiado. 
              </p>
              <p>
                <strong>Contáctanos:</strong> info@mepengineering.es
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <EmptySpace height="4rem" />
      
      <style jsx>{`
        .not-found-section {
          padding: 2rem 1rem;
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
        }
        
        .not-found-container {
          width: 100%;
        }
        
        .not-found-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 3rem;
        }
        
        .error-code h1 {
          font-size: 8rem;
          color: #1B365D;
          margin: 0;
          font-weight: 900;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
        }
        
        @media (max-width: 768px) {
          .error-code h1 {
            font-size: 5rem;
          }
        }
        
        .error-message h2 {
          color: #1B365D;
          font-size: 2rem;
          margin-bottom: 1rem;
        }
        
        .error-message p {
          color: #555;
          font-size: 1.2rem;
          line-height: 1.6;
          max-width: 600px;
        }
        
        .navigation-options,
        .search-help {
          background: #f8f9fa;
          padding: 2rem;
          border-radius: 8px;
          border-left: 4px solid #1B365D;
          width: 100%;
          max-width: 600px;
        }
        
        .navigation-options h3,
        .search-help h3 {
          color: #1B365D;
          font-size: 1.5rem;
          margin-bottom: 1rem;
        }
        
        .navigation-options ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .navigation-options li {
          margin: 1rem 0;
        }
        
        .navigation-options a {
          color: #1B365D;
          text-decoration: none;
          font-size: 1.1rem;
          font-weight: 500;
          display: inline-block;
          padding: 0.5rem 1rem;
          border-radius: 4px;
          transition: all 0.3s ease;
        }
        
        .navigation-options a:hover {
          background: #1B365D;
          color: white;
          transform: translateY(-2px);
        }
        
        .search-help p {
          color: #555;
          font-size: 1rem;
          line-height: 1.6;
          margin: 0.5rem 0;
        }
        
        .search-help strong {
          color: #1B365D;
        }
      `}</style>
    </PageTemplate>
  );
};

export default NotFound;