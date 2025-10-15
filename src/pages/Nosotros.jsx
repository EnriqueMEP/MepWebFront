import React from 'react';
import PageTemplate from '../design-system/atoms/PageTemplate.jsx';
import { 
  HeroSection, 
  StatsSection,
  EmptySpace 
} from '../design-system/atoms/sections/index.js';

/**
 * Nosotros - Página sobre MEP Engineering
 * 
 * Información sobre la empresa, equipo, historia, valores y misión.
 * Incluye estadísticas de la empresa y presentación del equipo.
 */

const Nosotros = () => {
  return (
    <PageTemplate
      title="Sobre Nosotros - MEP Engineering"
      description="Equipo de ingenieros especializados con más de 15 años de experiencia en el sector de la ingeniería en España. Conoce nuestra historia, valores y misión."
      currentPage="nosotros"
    >
      <HeroSection
        title="Avanzamos comprometidos con la excelencia en ingeniería"
        subtitle="Un equipo de profesionales dedicados a crear soluciones técnicas innovadoras y confiables"
        videoSrc="/video/vHome.mp4"
        showVideo={true}
      />
      
      <EmptySpace height="4rem" />
      
      <StatsSection
        title="MEP en cifras"
        stats={[
          { number: "15+", label: "Años de experiencia" },
          { number: "200+", label: "Proyectos completados" },
          { number: "50+", label: "Clientes satisfechos" },
          { number: "10+", label: "Profesionales especializados" }
        ]}
      />
      
      <EmptySpace height="4rem" />
      
      {/* Aquí se pueden agregar más secciones específicas como:
          - Historia de la empresa
          - Equipo y profesionales
          - Valores y misión
          - Certificaciones y acreditaciones
      */}
    </PageTemplate>
  );
};

export default Nosotros;