import React, { useState } from 'react';
import PageTemplate from '../design-system/atoms/PageTemplate.jsx';
import { 
  HeroSection, 
  ProjectsSection, 
  EmptySpace 
} from '../design-system/atoms/sections/index.js';

/**
 * Proyectos - Página de portfolio de proyectos MEP
 * 
 * Muestra el portfolio completo de proyectos realizados por MEP Engineering
 * con filtros por categoría y detalle de cada proyecto.
 */

const Proyectos = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  // Data expandida para proyectos
  const allProjectsData = [
    {
      id: 1,
      image: "src/design-system/foundations/img/p1.png",
      badgeText: "Ing. de Detalle",
      title: "Planta Fotovoltaica \"Puerto Cruz I\" de 21,15MWp",
      description: "Proyecto completo de ingeniería de detalle para planta solar fotovoltaica",
      buttonText: "Ver detalles",
      category: "energia-renovable"
    },
    {
      id: 2,
      image: "src/design-system/foundations/img/p2.png",
      badgeText: "Ing. de Detalle", 
      title: "Planta Fotovoltaica \"Puerto Cruz II\" de 25,30MWp",
      description: "Segundo proyecto de la serie Puerto Cruz con mayor capacidad",
      buttonText: "Ver detalles",
      category: "energia-renovable"
    },
    {
      id: 3,
      image: "src/design-system/foundations/img/p3.png",
      badgeText: "Ing. Básica",
      title: "Planta Fotovoltaica \"Puerto Cruz III\" de 21,15MWp",
      description: "Ingeniería básica para expansión del complejo Puerto Cruz",
      buttonText: "Ver detalles", 
      category: "energia-renovable"
    },
    {
      id: 4,
      image: "src/design-system/foundations/img/p4.png",
      badgeText: "Ing. Estructural",
      title: "Edificio Residencial Torrecilla",
      description: "Cálculo estructural completo para edificio de 8 plantas",
      buttonText: "Ver detalles",
      category: "estructural"
    }
  ];

  return (
    <PageTemplate
      title="Portfolio de Proyectos - MEP Engineering"
      description="Conoce nuestros proyectos de ingeniería realizados. Estructuras, instalaciones y soluciones técnicas innovadoras en energía renovable e ingeniería estructural."
      currentPage="proyectos"
    >
      <HeroSection
        title="Nuestros Proyectos"
        subtitle="Portfolio de soluciones de ingeniería que transforman ideas en realidad"
        videoSrc="src/design-system/foundations/video/vHome.mp4"
        showVideo={true}
      />
      
      <EmptySpace height="2rem" />
      
      <ProjectsSection
        title="Portfolio Completo"
        subtitle="Explora todos nuestros proyectos de ingeniería"
        projects={allProjectsData}
        onProjectSelect={setSelectedProject}
        selectedProject={selectedProject}
        showAllProjects={true}
      />
      
      <EmptySpace height="4rem" />
    </PageTemplate>
  );
};

export default Proyectos;