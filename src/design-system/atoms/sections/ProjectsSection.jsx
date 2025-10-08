import React from 'react';
import CardVertical from '../Card/CardVertical.jsx';
import { useSemanticTokens } from '../../foundations/theme-hooks.js';
import { 
  breakpoints, 
  containers,
  grids,
  shapes,
  generateContainerStyles,
  generateGridStyles,
  generateShapeStyles
} from '../../foundations/layout.js';

/**
 * ProjectsSection - Sección de proyectos
 * 
 * Props:
 * - title: Título de la sección (default: "Nuestros proyectos")
 * - projects: Array de objetos con datos para CardVertical
 * - selectedProject: ID del proyecto seleccionado
 * - onProjectSelect: Función para manejar selección de proyecto
 * - shapeImageSrc: Ruta de la imagen decorativa
 */
const ProjectsSection = ({
  title = "Nuestros proyectos",
  projects = [],
  selectedProject = null,
  onProjectSelect = () => {},
  shapeImageSrc = "src/design-system/foundations/img/shape2.png"
}) => {
  const semanticColors = useSemanticTokens();

  const projectsStyles = `
    /* Projects Section con spacing consistente */
    .projects-section {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2rem;
      position: relative;
      z-index: 50;
      isolation: isolate;
      position: relative;
      z-index: 10;
    }
    
    @media (min-width: ${breakpoints.tablet}) {
      .projects-section {
        gap: 2.78vw;
      }
    }

    .projects-title-container {
      width: 100%;
      display: flex;
      justify-content: center; /* Centrado en móvil */
      align-items: center;
      position: relative;
      margin-bottom: 0.5rem;
      z-index: 100 !important;
      isolation: isolate;
    }
    
    @media (min-width: ${breakpoints.tablet}) {
      .projects-title-container {
        justify-content: flex-start; /* Izquierda en desktop */
        margin-bottom: -0.3vw;
      }
    }

    /* Projects Shape - Ajustado con el texto "Nuestros proyectos", opacity: 1 */
    .projects-shape {
      display: block;
      position: absolute;
      top: -11rem; /* Subido aún más arriba */
      left: -4rem; /* Posición izquierda mantenida */
      width: 20rem; /* Tamaño grande mantenido */
      height: 26rem; /* Tamaño grande mantenido */
      z-index: -1 !important;
      pointer-events: none;
      opacity: 1;
    }

    .projects-shape img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      z-index: -1 !important;
    }

    @media (min-width: ${breakpoints.tablet}) {
      .projects-shape {
        top: -7vw;
        left: -20vw;
        width: 51.77vw;
        height: 14.17vw;
        z-index: -100 !important;
        opacity: 1;
      }

      .projects-shape img {
        z-index: -100 !important;
      }
    }

    /* Projects Grid - cards más juntas con márgenes laterales */
    ${generateGridStyles(grids.projects, 'projects-grid')}

    /* Centrado global de cards en móvil - se aplica donde sea que se use esta sección */
    @media (max-width: calc(${breakpoints.tablet} - 1px)) {
      .projects-section .projects-grid > * {
        display: block !important;
        margin-left: auto !important;
        margin-right: auto !important;
        text-align: center !important;
      }
      
      /* Centrado del contenido interno de cada card */
      .projects-section .projects-grid > * > * {
        margin-left: auto !important;
        margin-right: auto !important;
      }
    }

    /* Estilos móvil específicos para centrar las cards */
    @media (max-width: calc(${breakpoints.tablet} - 1px)) {
      .projects-grid {
        display: flex !important;
        flex-direction: column !important;
        align-items: center !important;
        gap: 1.5rem !important;
        max-width: 320px !important;
        margin: 0 auto !important;
        padding: 0 !important;
      }
      
      .projects-grid > * {
        width: 280px !important;
        max-width: 100% !important;
        margin: 0 auto !important;
      }
    }

    .projects-grid {
      position: relative;
      z-index: 150 !important;
      isolation: isolate;
    }

    /* Escalado de Cards - removido para mantener tamaños naturales */
    .projects-grid > * {
      transform-origin: center;
      position: relative;
      z-index: 160 !important;
      /* transform: scale() removido - las cards usan clamp() interno */
    }
  `;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: projectsStyles }} />
      
      <section className="projects-section" style={{ position: 'relative', zIndex: 50, isolation: 'isolate' }}>
        <div className="projects-title-container">
          <div className="text-display-medium" style={{ color: semanticColors.content.text }}>
            {title}
          </div>
          
          {/* Projects Shape ajustado con el título, opacity: 1 */}
          <div className="projects-shape">
            <img 
              src={shapeImageSrc} 
              alt=""
            />
          </div>
        </div>
        
        <div className="projects-grid">
          {projects.map((project) => (
            <CardVertical
              key={project.id}
              size="xl"
              image={project.image}
              badgeText={project.badgeText}
              title={project.title}
              description={project.description}
              buttonText={project.buttonText}
              buttonSelected={selectedProject === project.id}
              onButtonClick={() => {
                onProjectSelect(selectedProject === project.id ? null : project.id);
              }}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default ProjectsSection;