import React, { useState } from 'react';
import ButtonPrimary from '../design-system/atoms/Button/ButtonPrimary.jsx';
import BadgeText from '../design-system/atoms/Badge/BadgeText.jsx';
import CardVertical from '../design-system/atoms/Card/CardVertical.jsx';
import { textStyles } from '../design-system/foundations/typography.js';
import { useSemanticTokens } from '../design-system/foundations/theme-hooks.js';
import { injectResponsiveClasses } from '../design-system/foundations/responsive-classes.js';

/**
 * Home - Layout con escalado proporcional completo
 */

const Home = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedArticle, setSelectedArticle] = useState(null);
  
  const semanticColors = useSemanticTokens();

  // Inyectar clases responsivas al montar el componente
  React.useEffect(() => {
    injectResponsiveClasses();
  }, []);

  const projectsData = [
    {
      id: 1,
      image: "src/design-system/foundations/img/p1.png",
      badgeText: "Ing. de Detalle",
      title: "Planta Fotovoltaica \"Puerto Cruz I\" de 21,15MWp",
      description: "",
      buttonText: "Conocer más"
    },
    {
      id: 2,
      image: "src/design-system/foundations/img/p2.png",
      badgeText: "Ing. de Detalle",
      title: "Planta Fotovoltaica \"Puerto Cruz II\" de 25,30MWp",
      description: "",
      buttonText: "Conocer más"
    },
    {
      id: 3,
      image: "src/design-system/foundations/img/p3.png",
      badgeText: "Ing. Básica",
      title: "Planta Fotovoltaica \"Puerto Cruz I\" de 21,15MWp",
      description: "",
      buttonText: "Conocer más"
    },
    {
      id: 4,
      image: "src/design-system/foundations/img/p4.png",
      badgeText: "BIM",
      title: "Instalaciones Industriales \"Complejo Agua Verde\"",
      description: "",
      buttonText: "Conocer más"
    }
  ];

  const statsData = [
    {
      value: "3,6Gw",
      label: "proyectados",
      description: "",
    },
     {
      value: "+3,6m3",
      label: "agua",
      description: "",
    },
    {
      value: "+25%",
      label: "Crecimiento anual",
      description: "en últimos 5 años",
    },
    {
      value: "+70K hrs",
      label: "anuales",
      description: "de ingeniería",
    },
    {
      value: "+4500M €",
      label: "CAPEX",
      description: "",
    },
  ];

  const blogArticles = [
    {
      id: 1,
      date: "6 febrero, 2024",
      title: "INSTALACIONES ELÉCTRICAS EN PROYECTOS DE AGUA",
      excerpt: "En los últimos años, el equipo de MEP-Projects ha desempeñado un papel fundamental, liderando la ejecución de importantes proyectos de tratamiento de aguas.\nLa interconexión entre el agua y la energía se revela no solo como una necesidad crítica, sino como un desafío. Esta complejidad no solo radica en la imperiosa necesidad de agua para la producción de energía, sino también en la interrelación entre la energía, el agua, el clima y el cambio climático."
    },
    {
      id: 2, 
      date: "26 febrero, 2024",
      title: "LA METODOLOGÍA BIM EN MEP-PROJECTS",
      excerpt: "El modelado BIM (Modelado de Información de Construcción), es un enfoque integral para la planificación, diseño, construcción y gestión de edificaciones e infraestructuras. Proporciona una representación digital en 3D de un proyecto, junto con información adicional que abarca aspectos físicos y funcionales de los elementos involucrados en la construcción y operación de una estructura."
    },
    {
      id: 3,
      date: "28 diciembre, 2024", 
      title: "INGENIERÍA DE PLANTAS FOTOVOLTAICAS EN MEP-PROJECTS",
      excerpt: "En este contexto dinámico, MEP-Projects se erige como líder en la ingeniería de plantas fotovoltaicas, ofreciendo soluciones integrales desde la ingeniería básica hasta la ingeniería de detalle. Nos enorgullece formar parte de esta revolución hacia un futuro más sostenible, proporcionando servicios que aborden la creciente complejidad de los proyectos de energía solar, aportando nuestra amplia experiencia en proyectos nacionales (España) e internacionales."
    }
  ];

  const breakpoints = {
    mobile: '480px',
    tablet: '768px'
  };

  const responsiveStyles = `
    * {
      box-sizing: border-box;
    }

    /* Container principal - Escalado proporcional */
    .home-container {
      width: 100vw;
      min-height: 100vh;
      padding: 2rem 1.5rem;
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      background-color: ${semanticColors?.surface?.background || '#FFFFFF'};
      gap: 3rem;
    }
    
    @media (min-width: ${breakpoints.tablet}) {
      .home-container {
        padding: 10.42vw 5.56vw;
        gap: 5.56vw;
      }
    }

    /* Content wrapper - Ancho máximo proporcional */
    .content-wrapper {
      width: 100%;
      max-width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 3rem;
    }

    @media (min-width: ${breakpoints.tablet}) {
      .content-wrapper {
        max-width: 88.89vw;
        gap: 5.56vw;
      }
    }

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
        padding: 2.78vw;
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
      order: 2;
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
      order: 1;
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
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }

    /* Shape Hero - DELANTE del video (z-index: 2), opacity: 1 */
    .hero-shape {
      display: none;
    }

    @media (min-width: ${breakpoints.tablet}) {
      .hero-shape {
        display: block;
        position: absolute;
        top: -5vw;
        right: -10vw;
        width: 40vw;
        height: 52vw;
        z-index: 2;
        pointer-events: none;
        opacity: 1;
      }

      .hero-shape img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }

    /* Projects Section con shape relativo al título */
    .projects-section {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 2rem;
      position: relative;
      z-index: 1;
    }
    
    @media (min-width: ${breakpoints.tablet}) {
      .projects-section {
        gap: 2.22vw;
      }
    }

    .projects-title-container {
      width: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      position: relative;
    }

    /* Projects Shape - Ajustado con el texto "Nuestros proyectos", opacity: 1 */
    .projects-shape {
      display: none;
    }

    @media (min-width: ${breakpoints.tablet}) {
      .projects-shape {
        display: block;
        position: absolute;
        top: -7vw;
        left: -20vw;
        width: 51.77vw;
        height: 14.17vw;
        z-index: -1;
        pointer-events: none;
        opacity: 1;
      }

      .projects-shape img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }

    /* Projects Grid - gap: 8 (0.56vw) */
    .projects-grid {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      gap: 1.5rem;
    }
    
    @media (min-width: ${breakpoints.tablet}) {
      .projects-grid {
        justify-content: space-between;
        gap: 0.56vw;
      }
    }

    /* Escalado de Cards */
    .projects-grid > * {
      transform-origin: center;
    }

    @media (min-width: ${breakpoints.tablet}) {
      .projects-grid > * {
        transform: scale(calc(1vw / 14.4));
      }
    }

    /* Statistics Section */
    .stats-section {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 2rem;
      position: relative;
      z-index: 1;
    }
    
    @media (min-width: ${breakpoints.tablet}) {
      .stats-section {
        gap: 2.78vw;
      }
    }

    .stats-grid {
      width: 100%;
      padding: 1rem 2rem;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      flex-wrap: wrap;
      gap: 2rem;
    }
    
    @media (min-width: ${breakpoints.tablet}) {
      .stats-grid {
        padding: 0 2.78vw;
        flex-wrap: nowrap;
        gap: 2vw;
      }
    }

    .stat-item {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-end;
      gap: 0.14vw;
      min-width: 150px;
    }

    @media (min-width: ${breakpoints.tablet}) {
      .stat-item {
        min-width: auto;
        flex: 1;
      }
    }

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
        flex-direction: row;
        justify-content: space-between;
        gap: 1.67vw;
      }
    }

    /* Blog Shape - Posicionado en la esquina derecha del blog, opacity: 1 */
    .blog-shape {
      display: none;
    }

    @media (min-width: ${breakpoints.tablet}) {
      .blog-shape {
        display: block;
        position: absolute;
        top: -9.8vw;
        right: -9.5vw;
        width: 42vw;
        height: 45.8vw;
        z-index: -1;
        pointer-events: none;
        opacity: 1;
      }

      .blog-shape img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }

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
        transform: scale(calc(1vw / 14.4));
        transform-origin: right center;
      }
    }

    /* Escalado del botón hero */
    @media (min-width: ${breakpoints.tablet}) {
      .hero-text > button {
        transform: scale(calc(1vw / 14.4));
        transform-origin: right center;
      }
    }

    /* Escalado del badge */
    @media (min-width: ${breakpoints.tablet}) {
      .hero-text-content > div:first-child {
        transform: scale(calc(1vw / 14.4));
        transform-origin: left center;
      }
    }

    /* Espacios en blanco - sin contenido ni color */
    .empty-space {
      width: 100%;
      height: 4rem;
      background: transparent;
    }
    
    @media (min-width: ${breakpoints.tablet}) {
      .empty-space {
        height: 4vw;
      }
    }
  `;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: responsiveStyles }} />

      <div className="home-container">
        <div className="content-wrapper">
          {/* Hero Section */}
          <section className="hero-section">
            <div className="hero-content-wrapper">
              <div className="hero-text">
                <div className="hero-text-content">
                  <BadgeText variant="outline" size="lg">
                    Nuevo
                  </BadgeText>
                  
                  <div className="hero-text-inner">
                    <div className="text-display-large" style={{ color: semanticColors.content.text }}>
                      Avanzamos<br/>comprometidos
                    </div>
                    
                    <div className="text-title-large" style={{ color: semanticColors.content.text }}>
                      Nuestra compañía refuerza su identidad de marca comunicando así su crecimiento y solidez dentro del mercado. Comprometiéndose a seguir aportando valor a futuro.
                    </div>
                  </div>
                </div>
                
                <ButtonPrimary 
                  size="md"
                  onClick={() => console.log('Conocer más clicked')}
                >
                  Conocer más
                </ButtonPrimary>
              </div>

              <div className="hero-video-container">
                <video
                  src="/src/design-system/foundations/video/vHome.mp4"
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                />
                
                {/* Shape DELANTE del video con opacity: 1 */}
                <div className="hero-shape">
                  <img 
                    src="/src/design-system/foundations/img/shape.png" 
                    alt=""
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Espacio vacío 1 - después del hero */}
          <div className="empty-space"></div>

          {/* Statistics Section */}
          <section className="stats-section">
            <div className="text-display-medium" style={{ color: semanticColors.content.text }}>
              MEP en cifras
            </div>

            <div className="stats-grid">
              {statsData.map((stat, index) => (
                <div key={index} className="stat-item">
                  <div className="text-display-medium-bold" style={{ 
                    color: semanticColors.content.text,
                    textAlign: 'center'
                  }}>
                    {stat.value}
                  </div>
                  
                  <div className="text-display-small" style={{ 
                    color: semanticColors.content.text,
                    textAlign: index === 2 ? 'right' : 'center'
                  }}>
                    {stat.label}
                  </div>
                  
                  {stat.description && (
                    <div className="text-heading-small" style={{ 
                      color: semanticColors.content.text,
                      textAlign: 'center'
                    }}>
                      {stat.description}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Espacio vacío 2 - después de estadísticas */}
          <div className="empty-space"></div>

          {/* Projects Section */}
          <section className="projects-section">
            <div className="projects-title-container">
              <div className="text-display-medium" style={{ color: semanticColors.content.text }}>
                Nuestros proyectos
              </div>
              
              {/* Projects Shape ajustado con el título, opacity: 1 */}
              <div className="projects-shape">
                <img 
                  src="/src/design-system/foundations/img/shape2.png" 
                  alt=""
                />
              </div>
            </div>
            
            <div className="projects-grid">
              {projectsData.map((project) => (
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
                    setSelectedProject(selectedProject === project.id ? null : project.id);
                  }}
                />
              ))}
            </div>
          </section>

          {/* Espacio vacío 3 - después de proyectos */}
          <div className="empty-space"></div>

          {/* Blog Section */}
          <section className="blog-section">
            {/* Blog Shape - similar al del hero pero posicionado en el blog */}
            <div className="blog-shape">
              <img 
                src="/src/design-system/foundations/img/shape.png" 
                alt=""
              />
            </div>

            {blogArticles.map((article) => (
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
                    setSelectedArticle(selectedArticle === article.id ? null : article.id);
                  }}
                >
                  Me interesa
                </ButtonPrimary>
              </article>
            ))}
          </section>
        </div>
      </div>
    </>
  );
};

export default Home;