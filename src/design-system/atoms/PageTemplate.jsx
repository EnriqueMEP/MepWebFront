import React from 'react';
import { useSemanticTokens } from '../foundations/theme-hooks.js';
import { injectResponsiveClasses } from '../foundations/responsive-classes.js';

/**
 * PageTemplate - Plantilla base simplificada para debug
 */
const PageTemplate = ({ children, className = '' }) => {
  const semanticColors = useSemanticTokens();

  // Inyectar clases responsivas al montar el componente
  React.useEffect(() => {
    injectResponsiveClasses();
  }, []);

  // Estilos simplificados para debug
  const templateStyles = `
    * {
      box-sizing: border-box;
    }

    .page-container {
      width: 100vw;
      min-height: 100vh;
      padding: 2rem 1.5rem;
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 3rem;
    }
    
    .content-wrapper {
      width: 100%;
      max-width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 3rem;
    }
    
    @media (min-width: 768px) {
      .page-container {
        padding: 10.42vw 5.56vw;
        gap: 5.56vw;
      }
      
      .content-wrapper {
        max-width: 88.89vw;
        gap: 5.56vw;
      }
    }
  `;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: templateStyles }} />
      
      <div 
        className={`page-container ${className}`}
        style={{ backgroundColor: semanticColors?.surface?.background || '#FFFFFF' }}
      >
        <div className="content-wrapper">
          {children}
        </div>
      </div>
    </>
  );
};

export default PageTemplate;