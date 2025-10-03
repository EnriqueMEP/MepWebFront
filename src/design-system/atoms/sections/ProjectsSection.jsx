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
  shapeImageSrc = "/src/design-system/foundations/img/shape2.png"
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
      justify-content: flex-start;
      align-items: center;
      position: relative;
      margin-bottom: 0.5rem;
      z-index: 20;
    }
    
    @media (min-width: ${breakpoints.tablet}) {
      .projects-title-container {
        margin-bottom: -0.3vw;
      }
    }

    /* Projects Shape - Ajustado con el texto "Nuestros proyectos", opacity: 1 */
    ${generateShapeStyles(shapes.projects, 'projects-shape')}

    /* Projects Grid - cards más juntas con márgenes laterales */
    ${generateGridStyles(grids.projects, 'projects-grid')}

    /* Escalado de Cards - removido para mantener tamaños naturales */
    .projects-grid > * {
      transform-origin: center;
      /* transform: scale() removido - las cards usan clamp() interno */
    }
  `;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: projectsStyles }} />
      
      <section className="projects-section">
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