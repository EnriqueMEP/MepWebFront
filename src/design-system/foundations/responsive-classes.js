// Sistema de clases CSS escalables UNIFICADO para toda la aplicación
// Garantiza escalado proporcional consistente usando vw y clamp
// Basado en el exitoso sistema de Home.jsx

import { breakpoints } from './responsive-utils.js';

export const responsiveClasses = `
  /* ========================================================================
     GLOBAL RESET & BASE
     ======================================================================== */
  * {
    box-sizing: border-box;
  }

  /* ========================================================================
     TYPOGRAPHY SYSTEM - Escalado proporcional con clamp
     ======================================================================== */
  .text-display-large {
    font-size: clamp(2rem, 3.96vw, 3.96vw);
    font-family: Ubuntu, sans-serif;
    font-weight: 400;
    line-height: 1.12;
    word-wrap: break-word;
  }

  .text-display-medium {
    font-size: clamp(1.75rem, 3.13vw, 3.13vw);
    font-family: Ubuntu, sans-serif;
    font-weight: 400;
    line-height: 1.16;
    word-wrap: break-word;
  }

  .text-display-medium-bold {
    font-size: clamp(1.75rem, 3.13vw, 3.13vw);
    font-family: Ubuntu, sans-serif;
    font-weight: 700;
    line-height: 1.16;
    word-wrap: break-word;
  }

  .text-display-small {
    font-size: clamp(1.5rem, 2.5vw, 2.5vw);
    font-family: Ubuntu, sans-serif;
    font-weight: 400;
    line-height: 1.22;
    word-wrap: break-word;
  }

  .text-title-large {
    font-size: clamp(1rem, 1.53vw, 1.53vw);
    font-family: Ubuntu, sans-serif;
    font-weight: 400;
    line-height: 1.27;
    word-wrap: break-word;
  }

  .text-heading-large {
    font-size: clamp(1.5rem, 2.22vw, 2.22vw);
    font-family: Ubuntu, sans-serif;
    font-weight: 500;
    line-height: 1.28;
    word-wrap: break-word;
  }

  .text-heading-medium {
    font-size: clamp(1.25rem, 1.94vw, 1.94vw);
    font-family: Ubuntu, sans-serif;
    font-weight: 500;
    line-height: 1.29;
    word-wrap: break-word;
  }

  .text-heading-small {
    font-size: clamp(1rem, 1.67vw, 1.67vw);
    font-family: Ubuntu, sans-serif;
    font-weight: 400;
    line-height: 1.33;
    word-wrap: break-word;
  }

  .text-body-large {
    font-size: clamp(0.875rem, 1.11vw, 1.11vw);
    font-family: Roboto, sans-serif;
    font-weight: 400;
    line-height: 1.5;
    word-wrap: break-word;
  }

  .text-body-medium {
    font-size: clamp(0.8125rem, 1.04vw, 1.04vw);
    font-family: Roboto, sans-serif;
    font-weight: 400;
    line-height: 1.46;
    word-wrap: break-word;
  }

  .text-label-large {
    font-size: clamp(0.75rem, 0.97vw, 0.97vw);
    font-family: Ubuntu, sans-serif;
    font-weight: 500;
    line-height: 1.43;
    word-wrap: break-word;
  }

  .text-label-medium {
    font-size: clamp(0.688rem, 0.83vw, 0.83vw);
    font-family: Ubuntu, sans-serif;
    font-weight: 500;
    line-height: 1.33;
    word-wrap: break-word;
  }

  .text-label-small {
    font-size: clamp(0.625rem, 0.69vw, 0.69vw);
    font-family: Ubuntu, sans-serif;
    font-weight: 500;
    line-height: 1.45;
    word-wrap: break-word;
  }

  /* ========================================================================
     BUTTON SIZE SYSTEM - Escalado proporcional
     ======================================================================== */
  .btn-size-sm {
    padding: clamp(0.5rem, 0.56vw, 0.56vw) clamp(0.75rem, 0.83vw, 0.83vw);
    height: clamp(2rem, 2.22vw, 2.22vw);
    gap: clamp(0.75rem, 0.83vw, 0.83vw);
  }

  .btn-size-md {
    padding: clamp(0.5rem, 0.56vw, 0.56vw) clamp(1rem, 1.11vw, 1.11vw);
    height: clamp(2.5rem, 2.78vw, 2.78vw);
    gap: clamp(0.75rem, 0.83vw, 0.83vw);
  }

  .btn-size-lg {
    padding: clamp(0.5rem, 0.56vw, 0.56vw) clamp(1.25rem, 1.39vw, 1.39vw);
    height: clamp(3rem, 3.33vw, 3.33vw);
    gap: clamp(0.75rem, 0.83vw, 0.83vw);
  }

  .btn-size-xl {
    padding: clamp(0.5rem, 0.56vw, 0.56vw) clamp(1.5rem, 1.67vw, 1.67vw);
    height: clamp(3.5rem, 3.89vw, 3.89vw);
    gap: clamp(0.75rem, 0.83vw, 0.83vw);
  }

  /* ========================================================================
     BADGE SIZE SYSTEM - Escalado proporcional
     ======================================================================== */
  .badge-size-sm {
    height: clamp(1rem, 1.11vw, 1.11vw);
    padding: clamp(0.125rem, 0.14vw, 0.14vw) clamp(0.375rem, 0.42vw, 0.42vw);
    border-radius: clamp(0.125rem, 0.14vw, 0.14vw);
  }

  .badge-size-md {
    height: clamp(1.25rem, 1.39vw, 1.39vw);
    padding: clamp(0.25rem, 0.28vw, 0.28vw) clamp(0.75rem, 0.83vw, 0.83vw);
    border-radius: clamp(0.125rem, 0.14vw, 0.14vw);
  }

  .badge-size-lg {
    height: clamp(1.5rem, 1.67vw, 1.67vw);
    padding: clamp(0.25rem, 0.28vw, 0.28vw) clamp(1rem, 1.11vw, 1.11vw);
    border-radius: clamp(0.125rem, 0.14vw, 0.14vw);
  }

  .badge-size-xl {
    height: clamp(2rem, 2.22vw, 2.22vw);
    padding: clamp(0.25rem, 0.28vw, 0.28vw) clamp(1.25rem, 1.39vw, 1.39vw);
    border-radius: clamp(0.25rem, 0.28vw, 0.28vw);
  }

  /* ========================================================================
     CARD SIZE SYSTEM - Escalado proporcional
     ======================================================================== */
  .card-size-sm {
    padding: clamp(0.75rem, 0.83vw, 0.83vw);
    border-radius: clamp(0.25rem, 0.28vw, 0.28vw);
    gap: clamp(0.5rem, 0.56vw, 0.56vw);
    width: clamp(10rem, 11.11vw, 11.11vw);
  }

  .card-size-md {
    padding: clamp(1rem, 1.11vw, 1.11vw);
    border-radius: clamp(0.375rem, 0.42vw, 0.42vw);
    gap: clamp(0.75rem, 0.83vw, 0.83vw);
    width: clamp(12.5rem, 13.89vw, 13.89vw);
  }

  .card-size-lg {
    padding: clamp(1.25rem, 1.39vw, 1.39vw);
    border-radius: clamp(0.5rem, 0.56vw, 0.56vw);
    gap: clamp(1rem, 1.11vw, 1.11vw);
    width: clamp(14rem, 15.56vw, 15.56vw);
  }

  .card-size-xl {
    padding: clamp(1.5rem, 1.67vw, 1.67vw);
    border-radius: clamp(0.625rem, 0.69vw, 0.69vw);
    gap: clamp(1.25rem, 1.39vw, 1.39vw);
    width: clamp(16.67rem, 18.52vw, 18.52vw);
  }

  /* Card Image Specific Sizes for Horizontal Cards */
  .card-image-sm {
    width: clamp(7.5rem, 8.33vw, 8.33vw);
    height: clamp(7.5rem, 8.33vw, 8.33vw);
  }

  .card-image-md {
    width: clamp(8rem, 8.89vw, 8.89vw);
    height: clamp(8rem, 8.89vw, 8.89vw);
  }

  /* ========================================================================
     ICON SIZE SYSTEM - Escalado proporcional
     ======================================================================== */
  .icon-size-sm {
    width: clamp(1rem, 1.11vw, 1.11vw);
    height: clamp(1rem, 1.11vw, 1.11vw);
  }

  .icon-size-md {
    width: clamp(1.25rem, 1.39vw, 1.39vw);
    height: clamp(1.25rem, 1.39vw, 1.39vw);
  }

  .icon-size-lg {
    width: clamp(1.5rem, 1.67vw, 1.67vw);
    height: clamp(1.5rem, 1.67vw, 1.67vw);
  }

  .icon-size-xl {
    width: clamp(1.75rem, 1.94vw, 1.94vw);
    height: clamp(1.75rem, 1.94vw, 1.94vw);
  }

  /* ========================================================================
     SPACING SYSTEM - Escalado proporcional
     ======================================================================== */
  .spacing-xs {
    gap: clamp(0.25rem, 0.28vw, 0.28vw);
  }

  .spacing-sm {
    gap: clamp(0.5rem, 0.56vw, 0.56vw);
  }

  .spacing-md {
    gap: clamp(0.75rem, 0.83vw, 0.83vw);
  }

  .spacing-lg {
    gap: clamp(1rem, 1.11vw, 1.11vw);
  }

  .spacing-xl {
    gap: clamp(1.5rem, 1.67vw, 1.67vw);
  }

  .spacing-2xl {
    gap: clamp(2rem, 2.22vw, 2.22vw);
  }

  /* ========================================================================
     LAYOUT UTILITIES - Base component behaviors
     ======================================================================== */
  .component-base {
    box-sizing: border-box;
    transition: all 0.2s ease;
  }

  .component-interactive {
    cursor: pointer;
    user-select: none;
  }

  .component-disabled {
    cursor: not-allowed;
    opacity: 0.6;
    pointer-events: none;
  }

  .component-flex-center {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .component-flex-start {
    display: inline-flex;
    align-items: center;
    justify-content: flex-start;
  }

  .component-flex-end {
    display: inline-flex;
    align-items: center;
    justify-content: flex-end;
  }

  .component-flex-between {
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
  }

  .component-flex-column {
    display: flex;
    flex-direction: column;
  }

  .component-no-wrap {
    white-space: nowrap;
  }

  .component-full-width {
    width: 100%;
  }

  /* ========================================================================
     HEADER COMPONENT - Escalado proporcional
     ======================================================================== */
  .header-component {
    width: 100%;
    min-width: 100vw;
    height: clamp(5rem, 5.56vw, 5.56vw);
    padding: clamp(1rem, 1.11vw, 1.11vw) clamp(5rem, 5.56vw, 5.56vw);
    position: relative;
    box-sizing: border-box;
  }

  .header-container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .header-logo {
    width: clamp(6.5rem, 7.22vw, 7.22vw);
    height: clamp(2.5rem, 2.78vw, 2.78vw);
    position: relative;
    overflow: hidden;
  }

  .header-logo img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .header-nav {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: clamp(1rem, 1.11vw, 1.11vw);
    flex: 0 0 auto;
  }

  .header-actions {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: clamp(1rem, 1.11vw, 1.11vw);
  }

  .header-menu-button {
    width: clamp(1.5rem, 1.67vw, 1.67vw);
    height: clamp(1.5rem, 1.67vw, 1.67vw);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* ========================================================================
     FOOTER COMPONENT - Escalado proporcional
     ======================================================================== */
  .footer-component {
    width: 100%;
    height: clamp(19.69rem, 21.81vw, 21.81vw);
    padding: clamp(2.5rem, 2.78vw, 2.78vw) clamp(4rem, 4.44vw, 4.44vw);
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    position: relative;
    box-sizing: border-box;
    flex-shrink: 0;
  }

  .footer-container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  .footer-logo {
    width: clamp(6.5rem, 7.22vw, 7.22vw);
    height: clamp(2.5rem, 2.78vw, 2.78vw);
    position: relative;
    overflow: hidden;
  }

  .footer-logo img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .footer-nav {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: clamp(1rem, 1.11vw, 1.11vw);
  }
`;

// Función para inyectar las clases CSS globalmente (solo una vez)
let isInjected = false;

export const injectResponsiveClasses = () => {
  if (isInjected) return;
  
  // Verificar si ya existe
  if (document.getElementById('responsive-classes-global')) {
    isInjected = true;
    return;
  }
  
  const style = document.createElement('style');
  style.id = 'responsive-classes-global';
  style.textContent = responsiveClasses;
  document.head.appendChild(style);
  isInjected = true;
};

// Mapeo de tamaños de componentes a clases de tipografía
export const getTypographyClass = (componentType, size) => {
  const mappings = {
    button: {
      sm: 'text-label-medium',
      md: 'text-body-large', 
      lg: 'text-heading-small',
      xl: 'text-heading-medium'
    },
    badge: {
      sm: 'text-label-small',
      md: 'text-label-small',
      lg: 'text-label-medium',
      xl: 'text-body-large'
    },
    card: {
      sm: 'text-body-medium',
      md: 'text-body-large',
      lg: 'text-heading-small',
      xl: 'text-heading-medium'
    },
    header: {
      sm: 'text-body-large',
      md: 'text-heading-small',
      lg: 'text-heading-medium',
      xl: 'text-heading-large'
    },
    footer: {
      sm: 'text-label-large',
      md: 'text-body-large',
      lg: 'text-heading-small',
      xl: 'text-heading-medium'
    }
  };

  return mappings[componentType]?.[size] || 'text-body-large';
};

// Mapeo de tamaños a valores numéricos (para compatibilidad con componentes legacy)
export const getSizeValue = (componentType, size, property) => {
  const sizeMappings = {
    button: {
      sm: { height: 32, iconSize: 16, fontSize: 12 },
      md: { height: 40, iconSize: 20, fontSize: 14 },
      lg: { height: 48, iconSize: 24, fontSize: 16 },
      xl: { height: 56, iconSize: 32, fontSize: 18 }
    },
    badge: {
      sm: { height: 16, fontSize: 10, padding: 6 },
      md: { height: 20, fontSize: 10, padding: 12 },
      lg: { height: 24, fontSize: 12, padding: 16 },
      xl: { height: 32, fontSize: 14, padding: 20 }
    },
    icon: {
      sm: { size: 16 },
      md: { size: 20 },
      lg: { size: 24 },
      xl: { size: 32 }
    }
  };

  return sizeMappings[componentType]?.[size]?.[property] || 20;
};

export default responsiveClasses;