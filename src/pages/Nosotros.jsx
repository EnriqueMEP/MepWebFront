import React from 'react';
import PageTemplate from '../design-system/atoms/PageTemplate.jsx';
import { 
  HeroSection, 
  StatsSection,
  EmptySpace,
  BlogSection 
} from '../design-system/atoms/sections/index.js';

/**
 * SobreNosotros - Página sobre MEP Engineering
 * 
 * Información sobre la empresa, equipo, historia, valores y misión.
 * Incluye estadísticas de la empresa y presentación del equipo.
 */

const SobreNosotros = () => {
  return (
    <PageTemplate
      title="Sobre Nosotros - MEP Engineering"
      description="Somos MEP Engineering, una compañía española de ingeniería multidisciplinar con más de una década de trayectoria. Conoce nuestro equipo y compromiso."
      currentPage="sobre_nosotros"
    >
      <HeroSection
        title="Nuestro compromiso"
        subtitle="Somos MEP Engineering, una compañía española de ingeniería multidisciplinar que ofrece experiencia independiente en ingeniería, ciencia y consultoría técnica, dirigida a gobiernos, industrias, promotores y empresas constructoras. Con más de una década de trayectoria, desarrollamos nuestra actividad tanto a nivel nacional como internacional, con sede central en Sevilla.

Nuestro equipo está formado por ingenieros y especialistas altamente cualificados, con amplia experiencia en los principales sectores de actividad: energía, agua, industria e infraestructuras. Gracias a la utilización de herramientas de diseño, análisis y cálculo de última generación, ofrecemos soluciones de ingeniería óptimas, eficientes y adaptadas a las necesidades de cada cliente.

En MEP Engineering abordamos cada proyecto con un fuerte compromiso ético, garantizando integridad, calidad y compromiso en cada etapa del proceso. Nuestra visión está orientada hacia la innovación y la sostenibilidad, aportando valor en la construcción de un futuro más eficiente y responsable."
        videoSrc="/video/vHome.mp4"
        videoWidth="410px"
        videoHeight="718px"
        showVideo={true}
      />
      
      <EmptySpace height="4rem" />
      
      <BlogSection 
        title="Parte del equipo"
        posts={[
          {
            id: 1,
            title: "Ingeniero Senior",
            excerpt: "Especialista en estructuras con más de 10 años de experiencia en proyectos internacionales.",
            image: "/img/p1.png",
            category: "Equipo"
          },
          {
            id: 2,
            title: "Directora Técnica",
            excerpt: "Líder en innovación y desarrollo sostenible, experta en eficiencia energética.",
            image: "/img/p2.png",
            category: "Equipo"
          },
          {
            id: 3,
            title: "Consultor Principal",
            excerpt: "Especializado en infraestructuras hidráulicas y gestión de proyectos complejos.",
            image: "/img/p3.png",
            category: "Equipo"
          },
          {
            id: 4,
            title: "Ingeniero de Diseño",
            excerpt: "Experto en herramientas CAD avanzadas y modelado 3D para proyectos industriales.",
            image: "/img/p4.png",
            category: "Equipo"
          }
        ]}
      />
      
      <EmptySpace height="4rem" />
    </PageTemplate>
  );
};

export default SobreNosotros;