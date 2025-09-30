import React, { useState } from 'react';
import ButtonPrimary from '../design-system/atoms/Button/ButtonPrimary.jsx';
import BadgeText from '../design-system/atoms/Badge/BadgeText.jsx';
import CardVertical from '../design-system/atoms/Card/CardVertical.jsx';
import { textStyles } from '../design-system/foundations/typography.js';
import { useSemanticTokens } from '../design-system/foundations/theme-hooks.js';

/**
 * Home - Página principal adaptada desde diseño de Figma
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

  // Estilos con tamaño fijo para consistencia visual - usando foundations
  const homeStyles = {
    width: '100%',
    minHeight: 'calc(100vh - 80px)', // Al menos altura de pantalla menos header
    paddingTop: '150px', // Espacio superior para separar del header fijo
    paddingBottom: '150px',
    paddingLeft: '80px',
    paddingRight: '64px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: '80px',
    backgroundColor: semanticColors?.surface?.background || '#FFFFFF' // Usando semantic token para background de página
  };

  // Container interno simplificado
  const contentContainerStyles = {
    width: '100%', // Usar todo el ancho disponible dentro del padding
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '0', // Sin gap - usaremos margin individual en cada sección
    position: 'relative',
    boxSizing: 'border-box'
  };

  return (
    <div style={homeStyles}>
      <div style={contentContainerStyles}>
        
        {/* Hero Section - Usando solo vw para mantener proporciones exactas */}
        <section style={{
          width: '100%',
          minWidth: '100vw', // Se extiende de extremo a extremo
          height: '33.33vw', // 480px convertido a vw (480/1440*100)
          paddingTop: '2.78vw', // 40px convertido a vw (40/1440*100)
          paddingBottom: '2.78vw', // 40px convertido a vw
          display: 'flex',
          justifyContent: 'center', // Centra el contenido interno
          alignItems: 'center',
          position: 'relative',
          boxSizing: 'border-box'
        }}>
          {/* Contenedor interno responsive */}
          <div style={{
            width: '88.89vw', // 1280px convertido a vw (1280/1440*100)
            maxWidth: 'calc(100vw - 11.11vw)', // Respeta margen mínimo
            height: '27.78vw', // 400px convertido a vw (400/1440*100)
            padding: '0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            position: 'relative',
            boxSizing: 'border-box',
            gap: '3.33vw' // 48px convertido a vw (48/1440*100)
          }}>
            {/* Contenedor de texto usando solo vw */}
          <div style={{
            width: '35.56vw', // 512px convertido a vw (512/1440*100)
            height: '27.78vw', // 400px convertido a vw (400/1440*100)
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'flex-start'
          }}>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: '16px',
              width: '100%'
            }}>
              <BadgeText variant="outline" size="lg">
                Nuevo
              </BadgeText>
              
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                gap: '16px',
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
            
            {/* Contenedor del botón alineado a la derecha */}
            <div style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'flex-end'
            }}>
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
          
          {/* Video usando solo vw */}
          <div style={{
            width: '55.56vw', // 800px convertido a vw (800/1440*100)
            height: '25.14vw', // 362px convertido a vw (362/1440*100)
            position: 'relative'
          }}>
            <video 
              style={{
                width: '44.86vw', // 646px convertido a vw (646/1440*100)
                height: '100%', 
                objectFit: 'cover'
              }}
              src="/src/design-system/foundations/video/vHome.mp4" 
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
          
          {/* Shape.png: responsive usando unidades relativas al viewport */}
          <div style={{
            position: 'absolute',
            bottom: '-2.78vw', // -40px convertido a vw (40/1440*100)
            right: '-5.56vw', // -80px convertido a vw (80/1440*100)
            width: '49.38vw', // 711px convertido a vw (711/1440*100)
            height: '14.17vw', // 204px convertido a vw (204/1440*100)
            zIndex: 1
          }}>
            <img 
              src="/src/design-system/foundations/img/shape.png"
              alt="Shape decoration"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain'
              }}
            />
          </div>
          </div>
        </section>

        {/* Statistics Section - Adaptado desde ProjectsOverviewSection */}
        <section style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: '40',
          width: '100%',
          marginTop: '80px' // Espacio desde la sección anterior
        }}>
          <h2 style={{
            ...textStyles.displayMedium,
            color: semanticColors.content.text,
            margin: 0,
            width: 'fit-content'
          }}>
            MEP en cifras
          </h2>
          
          <div style={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            padding: '0 40px',
            width: '100%'
          }}>
            {statsData.map((stat, index) => (
              <div
                key={index}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-end',
                  justifyContent: 'flex-end',
                  gap: '4px'
                }}
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

        {/* Projects Section - Adaptado desde StatisticsSection */}
        <section style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: '40px',
          width: '100%',
          marginTop: '80px' // Espacio desde la sección anterior
        }}>
          <h2 style={{
            ...textStyles.displayMedium,
            color: semanticColors.content.text,
            margin: 0,
            width: '100%',
            textAlign: 'center'
          }}>
            Nuestros proyectos
          </h2>
          
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '32px',
            width: '100%'
          }}>
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

        {/* Blog Section - Adaptado desde ProjectDetailsSection */}
        <section style={{
          display: 'flex',
          alignItems: 'flex-start',
          gap: '24px',
          width: '100%',
          marginTop: '80px' // Espacio desde la sección anterior
        }}>
          {blogArticles.map((article) => (
            <article
              key={article.id}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-end',
                gap: '24px',
                padding: '32px',
                flex: 1,
                borderRadius: '8px',
                backgroundColor: semanticColors.surface?.secondary || '#f8f9fa'
              }}
            >
              <time style={{
                ...textStyles.labelLarge,
                color: semanticColors.content.text,
                margin: 0,
                width: '100%',
                height: '20px'
              }}>
                {article.date}
              </time>
              
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                gap: '16px',
                width: '100%'
              }}>
                <h2 style={{
                  ...textStyles.headingMedium,
                  fontWeight: 600,
                  color: semanticColors.content.text,
                  margin: 0,
                  width: '100%',
                  height: '80px',
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
                  width: '100%',
                  height: '51px',
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
  );
};

export default Home;