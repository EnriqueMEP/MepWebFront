/**
 * Global VW Scaling System
 * 
 * Sistema global de escalado que replica el comportamiento exitoso de layout.js
 * para que funcione perfectamente en ambas direcciones de zoom (aumentar y reducir).
 * 
 * Principios del sistema:
 * 1. Móvil: Valores fijos en rem/px
 * 2. Desktop: Valores proporcionales en vw
 * 3. No usar clamp() - usar media queries separadas
 * 4. Basado en diseño de 1440px como base
 */

import { 
  createGlobalScale, 
  convertClampToVWSystem,
  generateComponentVWCSS 
} from './responsive-utils.js';

// Sistema de escalado global para tipografía
export const globalTypographyScale = {
  'display-large': createGlobalScale(57, 'font-size'),
  'display-medium': createGlobalScale(45, 'font-size'),
  'display-small': createGlobalScale(36, 'font-size'),
  'heading-large': createGlobalScale(32, 'font-size'),
  'heading-medium': createGlobalScale(28, 'font-size'),
  'heading-small': createGlobalScale(24, 'font-size'),
  'body-large': createGlobalScale(16, 'font-size'),
  'body-medium': createGlobalScale(14, 'font-size'),
  'label-large': createGlobalScale(12, 'font-size'),
  'label-medium': createGlobalScale(11, 'font-size'),
  'label-small': createGlobalScale(10, 'font-size')
};

// Sistema de escalado global para espaciado
export const globalSpacingScale = {
  'xs': createGlobalScale(4, 'gap'),
  'sm': createGlobalScale(8, 'gap'),
  'md': createGlobalScale(12, 'gap'),
  'lg': createGlobalScale(16, 'gap'),
  'xl': createGlobalScale(24, 'gap'),
  '2xl': createGlobalScale(32, 'gap'),
  '3xl': createGlobalScale(48, 'gap'),
  '4xl': createGlobalScale(64, 'gap'),
  '5xl': createGlobalScale(80, 'gap')
};

// Sistema de escalado global para dimensiones
export const globalDimensionScale = {
  'btn-sm': {
    height: createGlobalScale(32, 'height'),
    padding: createGlobalScale(8, 'padding-top'),
    paddingX: createGlobalScale(12, 'padding-left')
  },
  'btn-md': {
    height: createGlobalScale(40, 'height'),
    padding: createGlobalScale(8, 'padding-top'),
    paddingX: createGlobalScale(16, 'padding-left')
  },
  'btn-lg': {
    height: createGlobalScale(48, 'height'),
    padding: createGlobalScale(8, 'padding-top'),
    paddingX: createGlobalScale(20, 'padding-left')
  },
  'btn-xl': {
    height: createGlobalScale(56, 'height'),
    padding: createGlobalScale(8, 'padding-top'),
    paddingX: createGlobalScale(24, 'padding-left')
  }
};

// Función para generar todo el CSS global
export const generateGlobalVWCSS = () => {
  let css = `
    /* ========================================================================
       GLOBAL VW SCALING SYSTEM - Comportamiento perfecto en ambas direcciones de zoom
       ========================================================================
       Basado en el sistema exitoso de layout.js que mantiene proporciones perfectas
       tanto al aumentar como al reducir zoom.
       ======================================================================== */
  `;

  // Tipografía global
  Object.entries(globalTypographyScale).forEach(([name, scale]) => {
    css += scale.css(`.text-${name}`);
  });

  // Espaciado global
  Object.entries(globalSpacingScale).forEach(([name, scale]) => {
    css += scale.css(`.spacing-${name}`);
  });

  // Botones globales
  Object.entries(globalDimensionScale).forEach(([name, dimensions]) => {
    css += `
    .${name} {
      height: ${dimensions.height.mobile};
      padding: ${dimensions.padding.mobile} ${dimensions.paddingX.mobile};
    }
    
    @media (min-width: 768px) {
      .${name} {
        height: ${dimensions.height.desktop};
        padding: ${dimensions.padding.desktop} ${dimensions.paddingX.desktop};
      }
    }
    `;
  });

  return css;
};

// Función para inyectar el sistema global
let isGlobalVWInjected = false;

export const injectGlobalVWSystem = () => {
  if (isGlobalVWInjected) return;
  
  // Verificar si ya existe
  if (document.getElementById('global-vw-scaling-system')) {
    isGlobalVWInjected = true;
    return;
  }
  
  const style = document.createElement('style');
  style.id = 'global-vw-scaling-system';
  style.textContent = generateGlobalVWCSS();
  document.head.appendChild(style);
  isGlobalVWInjected = true;
  
  console.log('🎯 Global VW Scaling System injected - Perfect zoom behavior enabled');
};

// Sistema de conversión para componentes existentes con clamp
export const migrateFromClamp = (clampValue) => {
  return convertClampToVWSystem(clampValue);
};

export default {
  globalTypographyScale,
  globalSpacingScale,
  globalDimensionScale,
  generateGlobalVWCSS,
  injectGlobalVWSystem,
  migrateFromClamp
};