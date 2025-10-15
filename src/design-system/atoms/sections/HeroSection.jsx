import React from 'react';
import ButtonPrimary from '../Button/ButtonPrimary.jsx';
import BadgeText from '../Badge/BadgeText.jsx';
import { useSemanticTokens } from '../../foundations/theme-hooks.js';
import { injectResponsiveClasses } from '../../foundations/responsive-classes.js';
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
  subtitle = "Nuestra compañía refuerza su identidad de marca comunicando así su crecimiento y solidez dentro del mercado. Comprometiéndose a seguir aportando valor a futuro.",
  description = null, // Mantener compatibilidad
  buttonText = "Conocer más",
  onButtonClick = () => console.log('Hero button clicked'),
  videoSrc = "/video/vHome.mp4",
  videoWidth = null,
  videoHeight = null,
  showVideo = false,
  shapeImageSrc = "/img/shape.png",
  titleFontSize = null,
  descriptionFontSize = null
}) => {
  // Usar description si no hay subtitle (retrocompatibilidad)
  const finalSubtitle = subtitle || description;
  const semanticColors = useSemanticTokens();

  // Inyectar clases CSS responsivas al montar
  React.useEffect(() => {
    injectResponsiveClasses();
  }, []);

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
        padding: 1.25vw 3.5vw;
        flex-direction: row;
        justify-content: space-between;
        gap: 3.33vw;
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
        gap: 3.33vw;
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
        gap: 3.33vw;
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
      /* Ocultar completamente controles nativos en todos los navegadores */
      -webkit-controls-play-button: none !important;
      -webkit-media-controls: none !important;
      -webkit-media-controls-start-playback-button: none !important;
      -webkit-media-controls-overlay-play-button: none !important;
      -webkit-media-controls-play-button: none !important;
      -webkit-appearance: none !important;
      appearance: none !important;
    }

    .hero-video-container video::-webkit-media-controls {
      display: none !important;
    }

    .hero-video-container video::-webkit-media-controls-start-playback-button {
      display: none !important;
      -webkit-appearance: none !important;
    }

    .hero-video-container video::-webkit-media-controls-overlay-play-button {
      display: none !important;
      -webkit-appearance: none !important;
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

    /* Forzar tamaño específico del título */
    .hero-section .text-display-large {
      font-size: 2.25rem !important;
    }
    
    @media (min-width: 768px) {
      .hero-section .text-display-large {
        font-size: 2.5vw !important;
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
                  style={{ 
                    color: semanticColors.content.text
                  }}
                  dangerouslySetInnerHTML={{ __html: title }}
                />
                
                <div 
                  className="text-title-large" 
                  style={{ 
                    color: semanticColors.content.text
                  }}
                >
                  {finalSubtitle}
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

          <div 
            className="hero-video-container"
            style={videoWidth && videoHeight ? {
              width: videoWidth,
              height: videoHeight,
              maxWidth: 'none',
              aspectRatio: 'auto'
            } : {}}
          >
            <video
              ref={(el) => {
                if (el) {
                  // Forzar reproducción automática en móvil
                  el.muted = true;
                  el.autoplay = true;
                  el.loop = true;
                  el.playsInline = true;
                  el.controls = false;
                  
                  // Intentar reproducir cuando esté listo
                  const playVideo = () => {
                    el.play().catch(() => {
                      // Si falla, reintentamos en el próximo frame
                      setTimeout(() => el.play().catch(() => {}), 100);
                    });
                  };
                  
                  if (el.readyState >= 2) {
                    playVideo();
                  } else {
                    el.addEventListener('loadeddata', playVideo);
                    el.addEventListener('canplay', playVideo);
                  }
                }
              }}
              src={videoSrc}
              autoPlay
              loop
              muted
              playsInline
              webkit-playsinline="true"
              preload="auto"
              controls={false}
              onError={(e) => {
                console.log('Video error:', e);
                e.target.style.display = 'none';
              }}
              style={{
                ...(videoWidth ? { width: videoWidth } : { width: '100%' }),
                ...(videoHeight ? { height: videoHeight } : { height: '100%' }),
                objectFit: 'cover',
                display: showVideo ? 'block' : 'none',
                // Ocultar completamente cualquier control o overlay
                outline: 'none',
                border: 'none',
                WebkitTapHighlightColor: 'transparent',
                // Evitar que aparezcan controles nativos
                WebkitAppearance: 'none',
                appearance: 'none'
              }}
              // Evitar interacción del usuario
              onContextMenu={(e) => e.preventDefault()}
              onTouchStart={(e) => e.preventDefault()}
              onMouseDown={(e) => e.preventDefault()}
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