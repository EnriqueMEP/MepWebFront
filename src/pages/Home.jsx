import React, { useState } from 'react';
import PageTemplate from '../design-system/atoms/PageTemplate.jsx';
import { 
  HeroSection, 
  StatsSection, 
  ProjectsSection, 
  BlogSection, 
  EmptySpace 
} from '../design-system/atoms/sections/index.js';
import { useSemanticTokens } from '../design-system/foundations/theme-hooks.js';

/**
 * Home - Página de inicio usando sistema de plantillas modular
 * 
 * Esta implementación demuestra cómo usar el sistema de plantillas
 * para crear páginas reutilizables y modulares.
 */

const Home = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedArticle, setSelectedArticle] = useState(null);
  
  const semanticColors = useSemanticTokens();

  // Data para las secciones
  const projectsData = [
    {
      id: 1,
      image: "/img/p1.png",
      badgeText: "Ing. de Detalle",
      title: "Planta Fotovoltaica \"Puerto Cruz I\" de 21,15MWp",
      description: "",
      buttonText: "Conocer más"
    },
    {
      id: 2,
      image: "/img/p2.png",
      badgeText: "Ing. de Detalle",
      title: "Planta Fotovoltaica \"Puerto Cruz II\" de 25,30MWp",
      description: "",
      buttonText: "Conocer más"
    },
    {
      id: 3,
      image: "/img/p3.png",
      badgeText: "Ing. Básica",
      title: "Planta Fotovoltaica \"Puerto Cruz I\" de 21,15MWp",
      description: "",
      buttonText: "Conocer más"
    },
    {
      id: 4,
      image: "/img/p4.png",
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

  // Handlers
  const handleProjectClick = (projectId) => {
    setSelectedProject(selectedProject === projectId ? null : projectId);
  };

  const handleArticleClick = (articleId) => {
    setSelectedArticle(selectedArticle === articleId ? null : articleId);
  };

  const handleHeroButtonClick = () => {
    console.log('Conocer más clicked');
  };

  return (
    <PageTemplate>
      {/* Hero Section */}
      <HeroSection
        badgeText="Nuevo"
        title="Avanzamos<br/>comprometidos"
        description="Nuestra compañía refuerza su identidad de marca comunicando así su crecimiento y solidez dentro del mercado. Comprometiéndose a seguir aportando valor a futuro."
        buttonText="Conocer más"
        onButtonClick={handleHeroButtonClick}
        videoSrc="/video/vHome.mp4"
        shapeImageSrc="/img/shape.png"
      />

      {/* Espacio después del hero */}
      <EmptySpace />

      {/* Statistics Section */}
      <StatsSection
        title="MEP en cifras"
        stats={statsData}
      />

      {/* Espacio después de estadísticas */}
      <EmptySpace />

      {/* Projects Section */}
      <ProjectsSection
        title="Nuestros proyectos"
        projects={projectsData}
        selectedProject={selectedProject}
        onProjectSelect={handleProjectClick}
        shapeImageSrc="/img/shape2.png"
      />

      {/* Espacio después de proyectos */}
      <EmptySpace />

      {/* Blog Section */}
      <BlogSection
        articles={blogArticles}
        selectedArticle={selectedArticle}
        onArticleSelect={handleArticleClick}
        buttonText="Me interesa"
        shapeImageSrc="/img/shape.png"
      />
    </PageTemplate>
  );
};

export default Home;