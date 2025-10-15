import React from 'react';
import PageTemplate from '../design-system/atoms/PageTemplate.jsx';
import { 
  HeroSection, 
  StatsSection, 
  EmptySpace 
} from '../design-system/atoms/sections/index.js';

/**
 * Servicios - Página de servicios de ingeniería MEP
 * 
 * Muestra los diferentes servicios ofrecidos por MEP Engineering:
 * - Ingeniería Estructural
 * - Ingeniería Mecánica  
 * - Ingeniería Eléctrica
 */

const Servicios = () => {
  return (
    <PageTemplate
      title="Servicios de Ingeniería - MEP Engineering"
      description="Servicios especializados en ingeniería estructural, mecánica y eléctrica. Diseño, cálculo y supervisión de proyectos con más de 15 años de experiencia."
      currentPage="servicios"
    >
      <HeroSection
        title="Nuestros Servicios"
        subtitle="Soluciones integrales de ingeniería para proyectos de cualquier envergadura"
        videoSrc="/video/vHome.mp4"
        showVideo={true}
      />
      
      <EmptySpace height="4rem" />
      
      {/* Aquí se agregarán secciones específicas de servicios */}
      <StatsSection
        title="Experiencia que respalda nuestros servicios"
        stats={[
          { number: "15+", label: "Años de experiencia" },
          { number: "200+", label: "Proyectos completados" },
          { number: "50+", label: "Clientes satisfechos" },
          { number: "3", label: "Áreas de especialización" }
        ]}
      />
      
      <EmptySpace height="4rem" />
    </PageTemplate>
  );
};

export default Servicios;