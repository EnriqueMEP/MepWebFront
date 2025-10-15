// Utilidades responsivas para el sistema de design
// Define breakpoints y funciones helper para comportamiento responsivo

export const breakpoints = {
  mobile: '0px',
  tablet: '768px', // 768px en adelante
  desktop: '1024px', // 1024px en adelante
  wide: '1440px' // 1440px en adelante
};

// Función para generar media queries
export const mediaQuery = (breakpoint) => `@media (min-width: ${breakpoints[breakpoint]})`;

// Función helper para obtener breakpoint actual
export const getCurrentBreakpoint = () => {
  const width = window.innerWidth;
  
  if (width >= parseInt(breakpoints.wide)) return 'wide';
  if (width >= parseInt(breakpoints.desktop)) return 'desktop';  
  if (width >= parseInt(breakpoints.tablet)) return 'tablet';
  return 'mobile';
};

// Función para convertir px a vw basado en el ancho de diseño de 1440px
export const pxToVw = (px, baseWidth = 1440) => {
  return `${(px / baseWidth) * 100}vw`;
};

// Función para crear valores clamp responsivos - DESACTIVADA, usar sistema VW puro
export const createClamp = (minPx, vwValue, maxPx = null) => {
  // Sistema VW puro es más efectivo - usar createVWSystem en su lugar
  const minRem = minPx / 16;
  const max = maxPx ? `${maxPx / 16}rem` : vwValue;
  return `clamp(${minRem}rem, ${vwValue}, ${max})`;
};

// NUEVO: Sistema VW puro como el exitoso de layout.js
export const createVWSystem = (mobilePx, vwValue) => {
  const mobileRem = mobilePx / 16;
  return {
    mobile: `${mobileRem}rem`,
    desktop: vwValue
  };
};

// NUEVO: Función para generar CSS con el patrón exitoso
export const generateVWPattern = (selector, property, mobilePx, vwValue) => {
  const mobileRem = mobilePx / 16;
  return `
    ${selector} {
      ${property}: ${mobileRem}rem;
    }
    
    @media (min-width: 768px) {
      ${selector} {
        ${property}: ${vwValue};
      }
    }
  `;
};

// Función para crear escalado proporcional mejorado usando sistema VW puro
export const createProportionalScale = (basePx, baseWidth = 1440) => {
  const vwValue = pxToVw(basePx, baseWidth);
  const mobileRem = basePx / 16;
  
  return {
    mobile: `${mobileRem}rem`,
    desktop: vwValue,
    css: (selector, property) => generateVWPattern(selector, property, basePx, vwValue)
  };
};

// Mapeo de tamaños estándar del sistema
export const sizes = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 18,
  xl: 20,
  '2xl': 24,
  '3xl': 28,
  '4xl': 32
};

// Función para generar espaciado responsivo usando sistema VW exitoso
export const getResponsiveSpacing = (size) => {
  const spacingMap = {
    xs: createVWSystem(4, '0.28vw'),
    sm: createVWSystem(8, '0.56vw'), 
    md: createVWSystem(12, '0.83vw'),
    lg: createVWSystem(16, '1.11vw'),
    xl: createVWSystem(24, '1.67vw'),
    '2xl': createVWSystem(32, '2.22vw'),
    '3xl': createVWSystem(48, '3.33vw')
  };
  
  return spacingMap[size] || spacingMap.md;
};

// NUEVO: Sistema global de escalado bidireccional
export const createGlobalScale = (basePx, property = 'font-size') => {
  const vwValue = pxToVw(basePx, 1440);
  const mobileRem = basePx / 16;
  
  return {
    mobile: `${mobileRem}rem`,
    desktop: vwValue,
    css: (selector) => `
      ${selector} {
        ${property}: ${mobileRem}rem;
      }
      
      @media (min-width: 768px) {
        ${selector} {
          ${property}: ${vwValue};
        }
      }
    `
  };
};

// NUEVO: Función para aplicar el escalado a cualquier valor existente con clamp
export const convertClampToVWSystem = (clampValue) => {
  // Extraer valores del clamp(min, ideal, max)
  const clampMatch = clampValue.match(/clamp\(([^,]+),\s*([^,]+),\s*([^)]+)\)/);
  if (!clampMatch) return clampValue;
  
  const [, minValue, idealValue, maxValue] = clampMatch;
  
  // Si el ideal es en vw, usamos ese valor para desktop
  if (idealValue.includes('vw')) {
    const mobileValue = minValue.trim();
    const desktopValue = idealValue.trim();
    
    return {
      mobile: mobileValue,
      desktop: desktopValue,
      css: (selector, property) => `
        ${selector} {
          ${property}: ${mobileValue};
        }
        
        @media (min-width: 768px) {
          ${selector} {
            ${property}: ${desktopValue};
          }
        }
      `
    };
  }
  
  return clampValue;
};

// NUEVO: Función helper para generar el CSS completo de un componente
export const generateComponentVWCSS = (componentName, styles) => {
  let css = `
    /* ${componentName} - Sistema VW Bidireccional */
  `;
  
  Object.entries(styles).forEach(([selector, properties]) => {
    css += `
    ${selector} {
    `;
    
    Object.entries(properties).forEach(([property, value]) => {
      if (typeof value === 'object' && value.mobile && value.desktop) {
        css += `  ${property}: ${value.mobile};\n`;
      } else {
        css += `  ${property}: ${value};\n`;
      }
    });
    
    css += `}
    
    @media (min-width: 768px) {
      ${selector} {
    `;
    
    Object.entries(properties).forEach(([property, value]) => {
      if (typeof value === 'object' && value.mobile && value.desktop) {
        css += `    ${property}: ${value.desktop};\n`;
      }
    });
    
    css += `  }
    }
    `;
  });
  
  return css;
};

export default {
  breakpoints,
  mediaQuery,
  getCurrentBreakpoint,
  pxToVw,
  createClamp,
  createVWSystem,
  generateVWPattern,
  createProportionalScale,
  createGlobalScale,
  convertClampToVWSystem,
  generateComponentVWCSS,
  sizes,
  getResponsiveSpacing
};