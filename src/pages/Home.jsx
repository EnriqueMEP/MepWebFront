import React, { useState } from 'react';
import ButtonPrimary from '../design-system/atoms/Button/ButtonPrimary.jsx';
import BadgeText from '../design-system/atoms/Badge/BadgeText.jsx';
import CardVertical from '../design-system/atoms/Card/CardVertical.jsx';
import { textStyles } from '../design-system/foundations/typography.js';
import { useSemanticTokens } from '../design-system/foundations/theme-hooks.js';

/**
 * Home - Página principal con tamaño fijo para desktop
 * 
 * Diseño fijo de 1440px que se centra en pantallas más grandes
 * y mantiene proporciones consistentes independientemente del viewport
 */

const Home = () => {
  // Estados para manejar interacciones
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedArticle, setSelectedArticle] = useState(null);
  
  // Obtener colores semánticos para el tema actual
  const semanticColors = useSemanticTokens();

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

  const blogArticles = [
    {
      id: 1,
      date: "6 febrero, 2024",
      title: "INSTALACIONES ELÉCTRICAS EN PROYECTOS DE AGUA",
      excerpt: "En los últimos años, el equipo de MEP-Projects ha desempeñado un papel fundamental, liderando la ejecución de importantes proyectos de tratamiento de aguas. La interconexión entre el agua y la energía se revela no solo como una necesidad crítica, sino como un desafío. Esta complejidad no solo radica en la imperiosa necesidad de agua para la producción de energía, sino también en la interrelación entre la energía, el agua, el clima y el cambio climático."
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

  // Estilos con tamaño fijo para consistencia visual
  const homeStyles = {
    width: '100%', // Todo el ancho del contenedor de 1440px
    minHeight: 'calc(100vh - 80px)', // Al menos altura de pantalla menos header
    padding: '80px 64px', // Padding fijo igual al header/footer
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: '80px',
    background: 'var(--Semantic-Color-Surfaces-background-default, #FAFAFA)'
  };

  // Container interno simplificado
  const contentContainerStyles = {
    width: '100%', // Usar todo el ancho disponible dentro del padding
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '80px',
    position: 'relative',
    boxSizing: 'border-box'
  };

  const heroSectionStyles = {
    width: '100%', // Usar todo el ancho del contenedor
    padding: '40px 0',
    display: 'flex',
    justifyContent: 'space-between', 
    alignItems: 'center',
    gap: '40px'
  };

  const heroContentStyles = {
    width: '512px',
    minWidth: '400px', // Ancho mínimo para evitar encogimiento
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-end', 
    gap: '48px'
  };

  const heroTextStyles = {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    gap: '16px'
  };

  // Usar tipografías del design system
  const heroTitleStyles = {
    ...textStyles.displayLarge,
    color: semanticColors.content.text, // Token semántico para contenido
    margin: 0
  };

  const heroDescriptionStyles = {
    ...textStyles.titleLarge,
    color: semanticColors.content.text, // Token semántico para contenido
    margin: 0
  };

  const statsSectionStyles = {
    width: '100%', // Usar todo el ancho del contenedor
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    gap: '40px'
  };

  const sectionTitleStyles = {
    ...textStyles.displayMedium,
    color: semanticColors.content.text, // Token semántico para contenido
    width: '100%', // Usar todo el ancho disponible
    textAlign: 'center',
    margin: 0
  };

  const statsGridStyles = {
    width: '100%', // Usar todo el ancho disponible
    paddingLeft: '40px',
    paddingRight: '40px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start'
  };

  const statItemStyles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    gap: '2px'
  };

  const statNumberStyles = {
    ...textStyles.displayMedium,
    fontWeight: 700,
    color: semanticColors.content.text, // Token semántico para contenido
    textAlign: 'center',
    margin: 0
  };

  const statLabelStyles = {
    ...textStyles.headingSmall,
    color: semanticColors.content.text, // Token semántico para contenido
    textAlign: 'center',
    margin: 0
  };

  const statDescriptionStyles = {
    ...textStyles.titleLarge,
    color: semanticColors.content.text, // Token semántico para contenido
    textAlign: 'right',
    margin: 0
  };

  const projectsSectionStyles = {
    width: '100%', // Usar todo el ancho del contenedor
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    gap: '32px'
  };

  const projectsGridStyles = {
    width: '100%', // Usar todo el ancho disponible
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '24px',
    flexWrap: 'wrap'
  };

  const blogSectionStyles = {
    width: '100%', // Usar todo el ancho del contenedor
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    gap: '24px'
  };

  const blogCardStyles = {
    flex: '1',
    padding: '24px',
    borderRadius: '8px',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    alignItems: 'flex-end'
  };

  const blogDateStyles = {
    ...textStyles.labelLarge,
    fontWeight: 500,
    color: semanticColors.content.text, // Token semántico para contenido
    width: '100%',
    margin: 0
  };

  const blogContentStyles = {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    flex: '1'
  };

  const blogTitleStyles = {
    ...textStyles.headingMedium,
    fontWeight: 500,
    color: semanticColors.content.text, // Token semántico para contenido
    margin: 0
  };

  const blogExcerptStyles = {
    ...textStyles.bodyLarge,
    color: semanticColors.content.text, // Token semántico para contenido
    margin: 0
  };

  return (
    <div style={homeStyles}>
      <div style={contentContainerStyles}>
        {/* Imagen decorativa de fondo */}
        <img 
          style={{
            width: '711px',
            height: '204px',
            left: '-265px',
            top: '600px',
            position: 'absolute',
            opacity: '0.40',
            zIndex: 0
          }}
          src="https://placehold.co/711x204" 
          alt="Decorative background"
        />

        {/* Hero Section */}
        <div style={heroSectionStyles}>
        <div style={heroContentStyles}>
          <div style={heroTextStyles}>
            <BadgeText variant="outline" size="lg">
              Nuevo
            </BadgeText>
            <h1 style={heroTitleStyles}>
              Avanzamos<br/>comprometidos
            </h1>
            <p style={heroDescriptionStyles}>
              Nuestra compañía refuerza su identidad de marca comunicando así su 
              crecimiento y solidez dentro del mercado. Comprometiéndose a seguir 
              aportando valor a futuro.
            </p>
          </div>
          <ButtonPrimary 
            size="xl"
            onClick={() => {
              console.log('Conocer más - Hero button clicked');
              // Aquí podrías navegar a una página "sobre nosotros" o mostrar más información
            }}
          >
            Conocer más
          </ButtonPrimary>
        </div>
        <div style={{ position: 'relative' }}>
          <video 
            style={{width: '646px', height: '362px'}}
            src="/src/design-system/foundations/video/vHome.mp4" 
            autoPlay
            loop
            muted
            playsInline
          />
             <img 
            style={{
              position: 'absolute',
              bottom: '-20px',
              right: '-20px',
              width: '180px',
              height: '120px',
              opacity: 0.7
            }}
            src="/src/design-system/foundations/img/shape.png" 
            alt="Shape decoration"
          />
        </div>
      </div>

      {/* Stats Section */}
      <div style={statsSectionStyles}>
        <h2 style={sectionTitleStyles}>MEP en cifras</h2>
        <div style={statsGridStyles}>
          <div style={statItemStyles}>
            <div style={statNumberStyles}>3,6Gw</div>
            <div style={statLabelStyles}>proyectados</div>
            <div style={statDescriptionStyles}>en el último año</div>
          </div>
          <div style={statItemStyles}>
            <div style={statNumberStyles}>+25%</div>
            <div style={statLabelStyles}>Crecimiento anual</div>
            <div style={statDescriptionStyles}>en últimos 5 años</div>
          </div>
          <div style={statItemStyles}>
            <div style={statNumberStyles}>+68K hrs</div>
            <div style={statLabelStyles}>anuales</div>
            <div style={statDescriptionStyles}>de ingeniería</div>
          </div>
          <div style={statItemStyles}>
            <div style={statNumberStyles}>+365 Mkw</div>
            <div style={{...statDescriptionStyles, ...textStyles.bodyLarge}}>
              generados en el último año
            </div>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div style={projectsSectionStyles}>
        <h2 style={sectionTitleStyles}>
          Nuestros proyectos
        </h2>
        <div style={projectsGridStyles}>
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
                // Aquí podrías navegar a la página del proyecto específico
              }}
            />
          ))}
        </div>
      </div>

      {/* Blog Section */}
      <div style={blogSectionStyles}>
        {blogArticles.map((article) => (
          <article key={article.id} style={blogCardStyles}>
            <div style={blogDateStyles}>{article.date}</div>
            <div style={blogContentStyles}>
              <h3 style={blogTitleStyles}>{article.title}</h3>
              <p style={blogExcerptStyles}>{article.excerpt}</p>
            </div>
            <ButtonPrimary 
              size="md"
              selected={selectedArticle === article.id}
              onClick={() => {
                setSelectedArticle(selectedArticle === article.id ? null : article.id);
                console.log(`Me interesa - Article ${article.id} clicked`);
                // Aquí podrías navegar al artículo completo o mostrar más información
              }}
            >
              Me interesa
            </ButtonPrimary>
          </article>
        ))}
      </div>
      </div>
    </div>
  );
};

export default Home;