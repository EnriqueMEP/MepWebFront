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

// Función para crear valores clamp responsivos
export const createClamp = (minPx, vwValue, maxPx = null) => {
  const minRem = minPx / 16; // Convertir px a rem (16px = 1rem)
  const max = maxPx ? `${maxPx / 16}rem` : vwValue;
  return `clamp(${minRem}rem, ${vwValue}, ${max})`;
};

// Función para crear escalado proporcional como el usado en Home
export const createProportionalScale = (basePx, baseWidth = 1440) => {
  const vwValue = pxToVw(basePx, baseWidth);
  const minRem = basePx / 16;
  return `clamp(${minRem}rem, ${vwValue}, ${vwValue})`;
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

// Función para generar espaciado responsivo
export const getResponsiveSpacing = (size) => {
  const sizeMap = {
    xs: createClamp(4, '0.28vw'),
    sm: createClamp(8, '0.56vw'), 
    md: createClamp(12, '0.83vw'),
    lg: createClamp(16, '1.11vw'),
    xl: createClamp(24, '1.67vw'),
    '2xl': createClamp(32, '2.22vw'),
    '3xl': createClamp(48, '3.33vw')
  };
  
  return sizeMap[size] || sizeMap.md;
};

export default {
  breakpoints,
  mediaQuery, 
  getCurrentBreakpoint,
  pxToVw,
  createClamp,
  createProportionalScale,
  sizes,
  getResponsiveSpacing
};