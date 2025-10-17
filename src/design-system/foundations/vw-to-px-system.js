// Sistema de conversión VW a PX para pantallas ≥1440px
// Mapeo de valores VW a sus equivalentes PX exactos

// Mapeo VW → PX (base 1440px, 1vw = 14.4px)
const vwToPxMap = {
  // Medidas pequeñas
  '0.07': '1px',    // border width
  '0.14': '2px',
  '0.21': '3px',    // mobile border
  '0.28': '4px',    // footer address gap
  '0.42': '6px',
  '0.56': '8px',
  '0.69': '10px',
  '0.83': '12px',   // dropdown gap/padding
  '0.97': '14px',   // dropdown font-size, footer text
  '1.11': '16px',   // footer title, links gap
  '1.25': '18px',
  '1.39': '20px',   // dropdown line-height, footer line-height
  '1.5': '22px',
  '1.53': '22px',
  '1.67': '24px',   // footer sections gap, column gap
  '1.94': '28px',
  '2.22': '32px',   // footer logo height
  '2.33': '34px',
  '2.39': '34px',
  '2.5': '36px',    // mobile dropdown gap
  '2.78': '40px',   // footer padding, columns gap
  '2.92': '42px',   // mobile dropdown font-size
  '3.33': '48px',
  '3.75': '54px',
  '3.89': '56px',   // footer licencias height
  '4.17': '60px',   // mobile dropdown line-height
  '5.56': '80px',
  '5.76': '83px',   // footer logo width
  '6.25': '90px',
  '6.94': '100px',
  '8.33': '120px',
  '9.93': '143px',  // dropdown button width
  '10.42': '150px',
  '11.11': '160px', // dropdown menu min-width
  '12.5': '180px',
  '13.89': '200px', // footer horizontal padding
  '15.56': '224px',
  '16.67': '240px',
  '18.06': '260px',
  '18.52': '267px',
  '18.56': '267px',
  '19.44': '280px',
  '20.56': '296px', // footer licencias width
  '21.81': '314px', // footer height
  '22.22': '320px',
  '24.8': '357px',
  '25.14': '362px',
  '33.33': '480px',
  'neg-0.3': '-4px',
  '35.56': '512px',
  '40': '576px',
  '42': '605px',
  '44.86': '646px',
  '45.8': '659px',
  '51.77': '745px',
  '52': '749px',
  '88.89': '1280px'
};

// Función para actualizar variables CSS según breakpoint
function updateCSSVariables() {
  const root = document.documentElement;
  const breakpoint = window.innerWidth >= 1440 ? 'wide' : 'mobile';
  
  // Limpiar variables anteriores
  Object.keys(vwToPxMap).forEach(vw => {
    root.style.removeProperty(`--vw-${vw.replace('.', '-').replace('neg-', 'neg')}`);
  });
  
  // Aplicar nuevas variables según breakpoint
  Object.entries(vwToPxMap).forEach(([vw, px]) => {
    const varName = `--vw-${vw.replace('.', '-').replace('neg-', 'neg')}`;
    
    if (breakpoint === 'wide') {
      // Pantallas ≥1440px: usar valores PX fijos
      root.style.setProperty(varName, px);
    } else {
      // Pantallas menores: usar valores VW
      const vwValue = vw.includes('neg-') ? `-${vw.replace('neg-', '')}vw` : `${vw}vw`;
      root.style.setProperty(varName, vwValue);
    }
  });
  
  console.log(`[VW→PX System] Updated to ${breakpoint} breakpoint`);
}

// Función para inicializar el sistema
export function initVwToPxSystem() {
  console.log('[VW→PX System] Initializing...');
  
  // Configurar variables iniciales
  updateCSSVariables();
  
  // Listener para cambios de tamaño
  let resizeTimeout;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(updateCSSVariables, 100);
  });
  
  console.log('[VW→PX System] Initialized successfully');
}

// Auto-inicializar si estamos en el navegador
if (typeof window !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initVwToPxSystem);
  } else {
    initVwToPxSystem();
  }
}