import React, { useState } from 'react';
import ButtonPrimary from '../design-system/atoms/Button/ButtonPrimary.jsx';
import BadgeText from '../design-system/atoms/Badge/BadgeText.jsx';
import CardVertical from '../design-system/atoms/Card/CardVertical.jsx';
import { textStyles } from '../design-system/foundations/typography.js';
import { useSemanticTokens } from '../design-system/foundations/theme-hooks.js';

/**
 * Home -                 width: '5.56vw', // 80px convertido a vw (80/1440*100)
                height: '1.39vw' // 20px convertido a vw (20/1440*100)
              }}>ina principal adaptada desde diseño de Figma
 * 
 * Estructura basada en la exportación de Figma pero usando
 * los componentes del design system existente
 */

const Home = () => {
  // Estados para manejar interacciones
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedArticle, setSelectedArticle] = useState(null);
  
  // Obtener colores semánticos para el tema actual
  const semanticColors = useSemanticTokens();

  // Datos de proyectos adaptados desde Figma
  const projectsData = [
    {
      id: 1,
      image: "https://placehold.co/240x120",
      badgeText: "Ing. de Detalle",
      title: "Planta Fotovoltaica \"Puerto Cruz I\" de 21,15MWp",
      description: "",
      buttonText: "Ver más"
    },
    {
      id: 2,
      image: "https://placehold.co/240x120",
      badgeText: "Ing. de Detalle", 
      title: "Planta Fotovoltaica \"Puerto Cruz II\" de 25,30MWp",
      description: "",
      buttonText: "Ver más"
    },
    {
      id: 3,
      image: "https://placehold.co/240x120",
      badgeText: "Ing. Básica",
      title: "Parque Eólico \"Viento Norte\" de 45MWp",
      description: "",
      buttonText: "Ver más"
    },
    {
      id: 4,
      image: "https://placehold.co/240x120",
      badgeText: "BIM",
      title: "Instalaciones Industriales \"Complejo Agua Verde\"",
      description: "",
      buttonText: "Ver más"
    }
  ];

  // Datos de estadísticas adaptados desde Figma
  const statsData = [
    {
      value: "3,6Gw",
      label: "proyectados",
      description: "en el útimo año",
    },
    {
      value: "+25%",
      label: "Crecimiento anual",
      description: "en últimos 5 años",
    },
    {
      value: "+68K hrs",
      label: "anuales",
      description: "de ingeniería",
    },
    {
      value: "+365 Mkw",
      label: "generados en el último año",
      description: "",
    },
  ];

  // Datos de blog adaptados desde Figma
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

  // Sistema responsive con breakpoints y media queries
  const breakpoints = {
    mobile: '480px',
    tablet: '768px', 
    desktop: '1024px',
    large: '1440px'
  };

  // CSS responsive usando media queries
  const responsiveStyles = `
    /* Shape - Linked to video container */
    .hero-shape {
      display: none;
    }
    
    @media (min-width: ${breakpoints.tablet}) {
      .hero-shape {
        display: block;
        position: absolute;
        top: 0;
        right: -20%;
        /* Same width as video but positioned outside */
        width: 50%;
        /* Same aspect ratio as video */
        height: auto;
        aspect-ratio: 16/9;
        z-index: 3;
        opacity: 0.8;
      }
    }
    
    @media (min-width: ${breakpoints.large}) {
      .hero-shape {
        right: -25%;
        width: 50.47%;
        /* Follows video height pattern */
        height: 90.5%;
        aspect-ratio: auto;
        opacity: 0.85;
      }
    }

    .hero-shape img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      filter: opacity(0.8) saturate(1.1);
      transition: all 0.3s ease;
    }
    
    @media (min-width: ${breakpoints.large}) {
      .hero-shape img {
        filter: opacity(0.85) saturate(1.2);
      }
    }

    .home-container {
      width: 100vw;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      background-color: ${semanticColors?.surface?.background || '#FFFFFF'};
      box-sizing: border-box;
      
      /* Fixed 5.56vw margins (equivalent to 80px at 1440px) on all screen sizes */
      padding: 2rem 5.56vw;
      gap: 2rem;
    }
    
    @media (min-width: ${breakpoints.mobile}) {
      .home-container {
        padding: 3rem 5.56vw;
        gap: 3rem;
      }
    }
    
    @media (min-width: ${breakpoints.tablet}) {
      .home-container {
        padding: 4rem 5.56vw;
        gap: 4rem;
      }
    }
    
    @media (min-width: ${breakpoints.desktop}) {
      .home-container {
        padding: 6rem 5.56vw;
        gap: 5rem;
      }
    }
    
    @media (min-width: ${breakpoints.large}) {
      .home-container {
        padding: 8rem 5.56vw;
        gap: 6rem;
      }
    }

    .content-container {
      width: 100%;
      max-width: calc(100vw - 11.12vw); /* Full width minus 5.56vw on each side */
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0;
      position: relative;
      box-sizing: border-box;
    }
    
    @media (min-width: ${breakpoints.large}) {
      .content-container {
        max-width: 88.89vw; /* Equivalent to 1280px at 1440px viewport */
      }
    }

    /* Hero Section Responsive */
    .hero-section {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: relative;
      box-sizing: border-box;
      padding: 1.5rem 0;
      min-height: 60vh;
    }
    
    @media (min-width: ${breakpoints.tablet}) {
      .hero-section {
        flex-direction: row;
        padding: 2.5rem 0;
        min-height: 50vh;
      }
    }
    
    @media (min-width: ${breakpoints.large}) {
      .hero-section {
        height: 33.33vw;
        padding: 2.78vw 0;
        min-height: auto;
      }
    }

    .hero-content {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2rem;
      position: relative;
      box-sizing: border-box;
    }
    
    @media (min-width: ${breakpoints.tablet}) {
      .hero-content {
        flex-direction: row;
        justify-content: space-between;
        gap: 3rem;
      }
    }
    
    @media (min-width: ${breakpoints.large}) {
      .hero-content {
        gap: 3.33vw;
        height: 27.78vw;
      }
    }

    /* Text Column */
    .hero-text {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
      gap: 1.5rem;
      order: 2;
    }
    
    @media (min-width: ${breakpoints.tablet}) {
      .hero-text {
        width: 45%;
        order: 1;
      }
    }
    
    @media (min-width: ${breakpoints.large}) {
      .hero-text {
        width: 40%;
        height: 100%;
        gap: 0;
      }
    }

    .hero-text-content {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1rem;
      width: 100%;
    }
    
    @media (min-width: ${breakpoints.large}) {
      .hero-text-content {
        gap: 1.11vw;
      }
    }

    .hero-button-container {
      width: 100%;
      display: flex;
      justify-content: center;
      margin-top: 1rem;
    }
    
    @media (min-width: ${breakpoints.tablet}) {
      .hero-button-container {
        justify-content: flex-end;
      }
    }

    /* Video Container - Complemented with shape */
    .hero-video {
      width: 100%;
      max-width: 500px;
      aspect-ratio: 16/10;
      position: relative;
      order: 1;
      z-index: 2;
    }
    
    @media (min-width: ${breakpoints.tablet}) {
      .hero-video {
        width: 50%;
        max-width: none;
        order: 2;
        aspect-ratio: 16/9;
        z-index: 2;
      }
    }
    
    @media (min-width: ${breakpoints.large}) {
      .hero-video {
        width: 50.47%;
        height: 90.5%;
        aspect-ratio: auto;
        z-index: 2;
      }
    }

    .hero-video video {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 0;
      box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);
    }

    /* Statistics Section */
    .stats-section {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2rem;
      margin-top: 4rem;
      padding: 0;
      box-sizing: border-box;
    }
    
    @media (min-width: ${breakpoints.tablet}) {
      .stats-section {
        gap: 3rem;
        margin-top: 5rem;
      }
    }
    
    @media (min-width: ${breakpoints.large}) {
      .stats-section {
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
        gap: 4rem;
        margin-top: 6rem;
      }
    }

    .stats-title {
      width: 100%;
      text-align: center;
    }
    
    @media (min-width: ${breakpoints.large}) {
      .stats-title {
        width: auto;
        text-align: left;
        min-width: 300px;
      }
    }

    .stats-grid {
      width: 100%;
      display: grid;
      grid-template-columns: 1fr;
      gap: 2rem;
      justify-items: center;
    }
    
    @media (min-width: ${breakpoints.mobile}) {
      .stats-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 1.5rem;
      }
    }
    
    @media (min-width: ${breakpoints.tablet}) {
      .stats-grid {
        grid-template-columns: repeat(4, 1fr);
        gap: 1rem;
      }
    }
    
    @media (min-width: ${breakpoints.large}) {
      .stats-grid {
        display: flex;
        gap: 2rem;
        flex: 1;
        justify-content: space-between;
      }
    }

    .stat-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      text-align: center;
      box-sizing: border-box;
      min-width: 120px;
    }
    
    @media (min-width: ${breakpoints.large}) {
      .stat-item {
        min-width: 180px;
        gap: 0.75rem;
      }
    }

    /* Projects Section */
    .projects-section {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2rem;
      margin-top: 4rem;
      padding: 0;
      box-sizing: border-box;
    }
    
    @media (min-width: ${breakpoints.tablet}) {
      .projects-section {
        gap: 3rem;
        margin-top: 5rem;
      }
    }
    
    @media (min-width: ${breakpoints.large}) {
      .projects-section {
        gap: 4rem;
        margin-top: 6rem;
      }
    }

    .projects-title {
      width: 100%;
      text-align: center;
    }

    .projects-grid {
      width: 100%;
      display: grid;
      grid-template-columns: 1fr;
      gap: 2rem;
      justify-items: center;
    }
    
    @media (min-width: ${breakpoints.mobile}) {
      .projects-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 1.5rem;
      }
    }
    
    @media (min-width: ${breakpoints.tablet}) {
      .projects-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 2rem;
      }
    }
    
    @media (min-width: ${breakpoints.desktop}) {
      .projects-grid {
        grid-template-columns: repeat(4, 1fr);
        gap: 2rem;
      }
    }
    
    @media (min-width: ${breakpoints.large}) {
      .projects-grid {
        grid-template-columns: repeat(4, 1fr);
        gap: 2.5rem;
      }
    }

    /* Blog Section */
    .blog-section {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2rem;
      margin-top: 4rem;
      padding: 0;
      box-sizing: border-box;
    }
    
    @media (min-width: ${breakpoints.tablet}) {
      .blog-section {
        gap: 3rem;
        margin-top: 5rem;
      }
    }
    
    @media (min-width: ${breakpoints.desktop}) {
      .blog-section {
        flex-direction: row;
        align-items: flex-start;
        justify-content: space-between;
        gap: 2rem;
      }
    }
    
    @media (min-width: ${breakpoints.large}) {
      .blog-section {
        gap: 3rem;
        margin-top: 6rem;
      }
    }

    .blog-article {
      width: 100%;
      max-width: 400px;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      justify-content: space-between;
      gap: 1.5rem;
      padding: 2rem;
      border-radius: 0;
      box-sizing: border-box;
      background-color: ${semanticColors.surface?.secondary || '#f8f9fa'};
      min-height: 400px;
    }
    
    @media (min-width: ${breakpoints.desktop}) {
      .blog-article {
        width: calc(33.333% - 1rem);
        max-width: none;
        min-height: 450px;
      }
    }
    
    @media (min-width: ${breakpoints.large}) {
      .blog-article {
        min-height: 500px;
        padding: 2.5rem;
        gap: 2rem;
      }
    }

    .blog-content {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 0.5rem;
      flex: 1;
    }
    
    @media (min-width: ${breakpoints.large}) {
      .blog-content {
        gap: 1rem;
      }
    }
  `;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: responsiveStyles }} />

      <div className="home-container">
        <div className="content-container">
        {/* Hero Section - Responsive */}
        <section className="hero-section">
          <div className="hero-content">
            {/* Columna texto */}
            <div className="hero-text">
              <div className="hero-text-content">
                <BadgeText variant="outline" size="lg">
                  Nuevo
                </BadgeText>
                
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  gap: '1rem',
                  width: '100%'
                }}>
                  <h1 style={{
                    ...textStyles.displayLarge,
                    color: semanticColors.content.text,
                    margin: 0,
                    width: '100%'
                  }}>
                    Avanzamos<br/>comprometidos
                  </h1>
                  
                  <p style={{
                    ...textStyles.titleLarge,
                    color: semanticColors.content.text,
                    margin: 0,
                    width: '100%'
                  }}>
                    Nuestra compañía refuerza su identidad de marca comunicando así su 
                    crecimiento y solidez dentro del mercado. Comprometiéndose a seguir 
                    aportando valor a futuro.
                  </p>
                </div>
              </div>
              
              <div className="hero-button-container">
                <ButtonPrimary 
                  size="xl"
                  onClick={() => {
                    console.log('Conocer más - Hero button clicked');
                  }}
                >
                  Conocer más
                </ButtonPrimary>
              </div>
            </div>

            {/* Video */}
            <div className="hero-video">
              <video
                src="/src/design-system/foundations/video/vHome.mp4"
                autoPlay 
                loop 
                muted 
                playsInline
              />
            </div>

            {/* Shape - Linked to video within same container */}
            <div className="hero-shape">
              <img 
                src="/src/design-system/foundations/img/shape.png" 
                alt="Shape decoration"
              />
            </div>
          </div>
        </section>

        {/* Statistics Section - Responsive */}
        <section className="stats-section">
          <h2 
            className="stats-title"
            style={{
              ...textStyles.displayMedium,
              color: semanticColors.content.text,
              margin: 0
            }}
          >
            MEP en cifras
          </h2>
          
          <div className="stats-grid">
            {statsData.map((stat, index) => (
              <div
                key={index}
                className="stat-item"
              >
                <div style={{
                  ...textStyles.displayMedium,
                  fontWeight: 600,
                  color: semanticColors.content.text,
                  margin: 0,
                  textAlign: 'center',
                  whiteSpace: 'nowrap'
                }}>
                  {stat.value}
                </div>
                
                {index === 3 ? (
                  <p style={{
                    ...textStyles.bodyLarge,
                    color: semanticColors.content.text,
                    margin: 0,
                    textAlign: 'center',
                    whiteSpace: 'nowrap'
                  }}>
                    {stat.label}
                  </p>
                ) : (
                  <>
                    <div style={{
                      ...textStyles.displaySmall,
                      color: semanticColors.content.text,
                      margin: 0,
                      textAlign: 'center',
                      whiteSpace: 'nowrap'
                    }}>
                      {stat.label}
                    </div>
                    
                    {stat.description && (
                      <div style={{
                        ...textStyles.headingSmall,
                        color: semanticColors.content.text,
                        margin: 0,
                        textAlign: 'right',
                        whiteSpace: 'nowrap'
                      }}>
                        {stat.description}
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section - Responsive */}
        <section className="projects-section">
          <h2 
            className="projects-title"
            style={{
              ...textStyles.displayMedium,
              color: semanticColors.content.text,
              margin: 0
            }}
          >
            Nuestros proyectos
          </h2>
          
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
                  console.log(`Ver proyecto ${project.id} clicked`);
                }}
              />
            ))}
          </div>
        </section>

        {/* Blog Section - Responsive */}
        <section className="blog-section">
          {blogArticles.map((article) => (
            <article
              key={article.id}
              className="blog-article"
            >
              <time style={{
                ...textStyles.labelLarge,
                color: semanticColors.content.text,
                margin: 0
              }}>
                {article.date}
              </time>
              
              <div className="blog-content">
                <h2 style={{
                  ...textStyles.headingMedium,
                  fontWeight: 600,
                  color: semanticColors.content.text,
                  margin: 0,
                  overflow: 'hidden',
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  textOverflow: 'ellipsis'
                }}>
                  {article.title}
                </h2>
                
                <p style={{
                  ...textStyles.bodyLarge,
                  color: semanticColors.content.text,
                  margin: 0,
                  overflow: 'hidden',
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  textOverflow: 'ellipsis'
                }}>
                  {article.excerpt.split('\n').map((line, lineIndex) => (
                    <React.Fragment key={lineIndex}>
                      {line}
                      {lineIndex < article.excerpt.split('\n').length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </p>
              </div>
              
              <ButtonPrimary 
                size="md"
                selected={selectedArticle === article.id}
                onClick={() => {
                  setSelectedArticle(selectedArticle === article.id ? null : article.id);
                  console.log(`Me interesa - Article ${article.id} clicked`);
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