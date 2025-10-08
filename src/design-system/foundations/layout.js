/**
 * Layout System - Sistema de diseño proporcional y responsive
 * 
 * Este archivo contiene toda la lógica de escalado proporcional,
 * breakpoints, grids y containers que se usan a través de la aplicación.
 */

// Breakpoints estándar del sistema
export const breakpoints = {
  mobile: '480px',
  tablet: '768px'
};

// Sistema de espaciado proporcional
export const spacing = {
  // Base spacing (mobile first)
  base: {
    padding: '1.5rem',
    gap: '2rem',
    containerGap: '3rem'
  },
  // Desktop spacing (escalado proporcional)
  desktop: {
    padding: '2.78vw',
    gap: '3.33vw',
    containerGap: '5.56vw',
    heroGap: '3.33vw',
    sectionGap: '2.78vw',
    statsGap: '1.5vw',
    blogGap: '1.67vw'
  }
};

// Configuraciones de grids específicos
export const grids = {
  // Grid principal de proyectos
  projects: {
    mobile: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '1.5rem'
    },
    desktop: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '1.6vw',
      padding: '0 2.78vw'
    }
  },
  
  // Grid de estadísticas
  stats: {
    mobile: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)', // 2 columnas en móvil
      gap: '1.5rem',
      justifyItems: 'center',
      padding: '0 1rem'
    },
    desktop: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      flexWrap: 'nowrap',
      gap: '1.5vw',
      padding: '0'
    }
  }
};

// Containers del sistema
export const containers = {
  // Container principal de página
  main: {
    mobile: {
      width: '100vw',
      minHeight: '100vh',
      padding: '2rem 1.5rem',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '3rem'
    },
    desktop: {
      padding: '10.42vw 5.56vw',
      gap: '5.56vw'
    }
  },
  
  // Content wrapper interno
  content: {
    mobile: {
      width: '100%',
      maxWidth: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '3rem'
    },
    desktop: {
      maxWidth: '88.89vw',
      gap: '5.56vw'
    }
  },
  
  // Section containers
  section: {
    mobile: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: '2rem',
      position: 'relative',
      zIndex: 1
    },
    desktop: {
      gap: '2.78vw'
    }
  }
};

// Sistema de shapes (decoraciones de fondo)
export const shapes = {
  hero: {
    display: 'block',
    position: 'absolute',
    top: '-1rem', // Mantengo la altura original
    right: '-8rem', // Solo pegado a la pared derecha
    width: '20rem',
    height: '26rem',
    zIndex: 2,
    pointerEvents: 'none',
    opacity: 1,
    desktop: {
      display: 'block',
      position: 'absolute',
      top: '-5vw',
      right: '-10vw',
      width: '40vw',
      height: '52vw',
      zIndex: 2,
      pointerEvents: 'none',
      opacity: 1
    }
  },
  
  projects: {
    display: 'block',
    position: 'absolute',
    top: '-11rem', // Subido aún más arriba
    left: '-4rem', // Posición izquierda mantenida
    width: '20rem', // Tamaño grande mantenido
    height: '26rem', // Tamaño grande mantenido
    zIndex: -1,
    pointerEvents: 'none',
    opacity: 1,
    desktop: {
      display: 'block',
      position: 'absolute',
      top: '-7vw',
      left: '-20vw',
      width: '51.77vw',
      height: '14.17vw',
      zIndex: -100,
      pointerEvents: 'none',
      opacity: 1
    }
  },
  
  blog: {
    display: 'block',
    position: 'absolute',
    top: 'auto', // No desde arriba
    bottom: '-8rem', // Desde abajo, más cerca del footer
    right: '-3rem',
    width: '20rem', // Mucho más grande para igualar PC
    height: '22rem', // Proporción mantenida pero más grande
    zIndex: -1,
    pointerEvents: 'none',
    opacity: 1,
    desktop: {
      display: 'block',
      position: 'absolute',
      top: '-9.8vw',
      right: '-9.5vw',
      bottom: 'auto', // Reset bottom en desktop
      width: '42vw',
      height: '45.8vw',
      zIndex: -1,
      pointerEvents: 'none',
      opacity: 1
    }
  }
};

// Sistema de escalado para elementos específicos
export const scaling = {
  // Escalado de botones en desktop
  button: {
    desktop: {
      transform: 'scale(calc(1vw / 14.4))',
      transformOrigin: 'right center'
    }
  },
  
  // Escalado de badges en desktop
  badge: {
    desktop: {
      transform: 'scale(calc(1vw / 14.4))',
      transformOrigin: 'left center'
    }
  },
  
  // Escalado de botones del blog
  blogButton: {
    desktop: {
      transform: 'scale(calc(1vw / 14.4))',
      transformOrigin: 'right center'
    }
  }
};

// Utilidad para generar estilos responsivos
export const generateResponsiveStyles = (baseStyles, desktopStyles, breakpoint = breakpoints.tablet) => {
  const baseCSS = Object.entries(baseStyles)
    .map(([property, value]) => `${property}: ${value};`)
    .join('\n      ');
    
  const desktopCSS = Object.entries(desktopStyles)
    .map(([property, value]) => `${property}: ${value};`)
    .join('\n        ');
    
  return `
    ${baseCSS}
    
    @media (min-width: ${breakpoint}) {
      ${desktopCSS}
    }
  `;
};

// Utilidad para generar clases de container
export const generateContainerStyles = (containerConfig, className) => {
  return `
    .${className} {
      ${generateResponsiveStyles(containerConfig.mobile, containerConfig.desktop)}
    }
  `;
};

// Utilidad para generar clases de grid
export const generateGridStyles = (gridConfig, className) => {
  return `
    .${className} {
      ${generateResponsiveStyles(gridConfig.mobile, gridConfig.desktop)}
    }
  `;
};

// Utilidad para generar estilos de shapes
export const generateShapeStyles = (shapeConfig, className) => {
  // Generar estilos móvil basados en la configuración
  const mobileProperties = Object.entries(shapeConfig)
    .filter(([key]) => key !== 'desktop')
    .map(([property, value]) => `${property}: ${value};`)
    .join('\n      ');
    
  const mobileCSS = `
    .${className} {
      ${mobileProperties}
    }
    
    .${className} img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  `;
  
  const desktopCSS = Object.entries(shapeConfig.desktop)
    .map(([property, value]) => `${property}: ${value};`)
    .join('\n        ');
    
  return `
    ${mobileCSS}
    
    @media (min-width: ${breakpoints.tablet}) {
      .${className} {
        ${desktopCSS}
      }
    }
  `;
};

// Espacios en blanco estándar
export const emptySpace = {
  mobile: {
    width: '100%',
    height: '4rem',
    background: 'transparent'
  },
  desktop: {
    height: '4vw'
  }
};