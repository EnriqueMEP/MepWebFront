import React from 'react';
import ButtonPrimary from '../Button/ButtonPrimary.jsx';
import BadgeText from '../Badge/BadgeText.jsx';
import { useSemanticTokens } from '../../foundations/theme-hooks.js';
import { 
  breakpoints, 
  containers,
  spacing,
  shapes,
  scaling,
  generateResponsiveStyles,
  generateShapeStyles
} from '../../foundations/layout.js';

/**
 * HeroSection - Sección principal de hero
 * 
 * Props:
 * - badgeText: Texto del badge (ej: "Nuevo")
 * - badgeVariant: Variante del badge (default: "outline")
 * - badgeSize: Tamaño del badge (default: "lg")
 * - title: Título principal del hero
 * - description: Descripción del hero
 * - buttonText: Texto del botón principal
 * - onButtonClick: Función para click del botón
 * - videoSrc: Ruta del video de fondo
 * - shapeImageSrc: Ruta de la imagen decorativa
 */
const HeroSection = ({
  badgeText = "Nuevo",
  badgeVariant = "outline",
  badgeSize = "lg",
  title = "Avanzamos comprometidos",
  description = "Nuestra compañía refuerza su identidad de marca comunicando así su crecimiento y solidez dentro del mercado. Comprometiéndose a seguir aportando valor a futuro.",
  buttonText = "Conocer más",
  onButtonClick = () => console.log('Hero button clicked'),
  videoSrc = "/video/vHome.mp4",
  shapeImageSrc = "/img/shape.png"
}) => {
  const semanticColors = useSemanticTokens();

  const heroStyles = `
    /* Hero Section - Posición relativa para shapes */
    .hero-section {
      width: 100%;
      padding: 1.5rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2rem;
      position: relative;
      z-index: 1;
    }
    
    @media (min-width: ${breakpoints.tablet}) {
      .hero-section {
        padding: ${spacing.desktop.padding};
        flex-direction: row;
        justify-content: space-between;
        gap: ${spacing.desktop.heroGap};
      }
    }

    /* Hero Content Container */
    .hero-content-wrapper {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2rem;
      position: relative;
    }

    @media (min-width: ${breakpoints.tablet}) {
      .hero-content-wrapper {
        flex-direction: row;
        justify-content: space-between;
        gap: ${spacing.desktop.heroGap};
      }
    }

    /* Hero Text */
    .hero-text {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-end;
      gap: 2rem;
      order: 1; /* Texto primero en móvil */
    }
    
    @media (min-width: ${breakpoints.tablet}) {
      .hero-text {
        width: 35.56vw;
        gap: ${spacing.desktop.heroGap};
        order: 1;
      }
    }

    .hero-text-content {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1rem;
    }
    
    @media (min-width: ${breakpoints.tablet}) {
      .hero-text-content {
        gap: 1.11vw;
      }
    }

    .hero-text-inner {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1rem;
    }
    
    @media (min-width: ${breakpoints.tablet}) {
      .hero-text-inner {
        gap: 1.11vw;
      }
    }

    /* Hero Video - DETRÁS del shape (z-index: 1) */
    .hero-video-container {
      width: 100%;
      max-width: 500px;
      aspect-ratio: 16/10;
      position: relative;
      order: 2; /* Video segundo en móvil */
      z-index: 1;
    }
    
    @media (min-width: ${breakpoints.tablet}) {
      .hero-video-container {
        width: 44.86vw;
        height: 25.14vw;
        max-width: none;
        aspect-ratio: auto;
        order: 2;
      }
    }

    .hero-video-container video {
      /* Estilos manejados inline para mejor control de errores */
    }

    /* Shape Hero - DELANTE del video (z-index: 2), opacity: 1 */
    ${generateShapeStyles(shapes.hero, 'hero-shape')}

    /* Escalado del botón hero */
    @media (min-width: ${breakpoints.tablet}) {
      .hero-text > button {
        ${scaling.button.desktop.transform};
        transform-origin: ${scaling.button.desktop.transformOrigin};
      }
    }

    /* Escalado del badge */
    @media (min-width: ${breakpoints.tablet}) {
      .hero-text-content > div:first-child {
        ${scaling.badge.desktop.transform};
        transform-origin: ${scaling.badge.desktop.transformOrigin};
      }
    }
  `;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: heroStyles }} />
      
      <section className="hero-section">
        <div className="hero-content-wrapper">
          <div className="hero-text">
            <div className="hero-text-content">
              <BadgeText variant={badgeVariant} size={badgeSize}>
                {badgeText}
              </BadgeText>
              
              <div className="hero-text-inner">
                <div 
                  className="text-display-large" 
                  style={{ color: semanticColors.content.text }}
                  dangerouslySetInnerHTML={{ __html: title }}
                />
                
                <div 
                  className="text-title-large" 
                  style={{ color: semanticColors.content.text }}
                >
                  {description}
                </div>
              </div>
            </div>
            
            <ButtonPrimary 
              size="md"
              onClick={onButtonClick}
            >
              {buttonText}
            </ButtonPrimary>
          </div>

          <div className="hero-video-container">
            <video
              src={videoSrc}
              autoPlay 
              loop 
              muted 
              playsInline
              onError={(e) => {
                console.log('Video error:', e);
                e.target.style.display = 'none';
              }}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block'
              }}
            />
            
            {/* Shape DELANTE del video con opacity: 1 */}
            <div className="hero-shape">
              <img 
                src={shapeImageSrc} 
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;