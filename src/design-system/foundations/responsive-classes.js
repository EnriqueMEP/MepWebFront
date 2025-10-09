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
     TYPOGRAPHY SYSTEM - Escalado proporcional usando el sistema exitoso VW
     ======================================================================== */
  .text-display-large {
    font-size: 2rem;
    font-family: Ubuntu, sans-serif;
    font-weight: 400;
    line-height: 1.12;
    word-wrap: break-word;
  }

  @media (min-width: 768px) {
    .text-display-large {
      font-size: 3.96vw;
    }
  }

  .text-display-medium {
    font-size: 1.75rem;
    font-family: Ubuntu, sans-serif;
    font-weight: 400;
    line-height: 1.16;
    word-wrap: break-word;
  }

  @media (min-width: 768px) {
    .text-display-medium {
      font-size: 3.13vw;
    }
  }

  .text-display-medium-bold {
    font-size: 1.75rem;
    font-family: Ubuntu, sans-serif;
    font-weight: 700;
    line-height: 1.16;
    word-wrap: break-word;
  }

  @media (min-width: 768px) {
    .text-display-medium-bold {
      font-size: 3.13vw;
    }
  }

  .text-display-small {
    font-size: 1.5rem;
    font-family: Ubuntu, sans-serif;
    font-weight: 400;
    line-height: 1.22;
    word-wrap: break-word;
  }

  @media (min-width: 768px) {
    .text-display-small {
      font-size: 2.5vw;
    }
  }

  .text-title-large {
    font-size: 1rem;
    font-family: Ubuntu, sans-serif;
    font-weight: 400;
    line-height: 1.27;
    word-wrap: break-word;
  }

  @media (min-width: 768px) {
    .text-title-large {
      font-size: 1.53vw;
    }
  }

  .text-heading-large {
    font-size: 1.5rem;
    font-family: Ubuntu, sans-serif;
    font-weight: 500;
    line-height: 1.28;
    word-wrap: break-word;
  }

  @media (min-width: 768px) {
    .text-heading-large {
      font-size: 2.22vw;
    }
  }

  .text-heading-medium {
    font-size: 1.25rem;
    font-family: Ubuntu, sans-serif;
    font-weight: 500;
    line-height: 1.29;
    word-wrap: break-word;
  }

  @media (min-width: 768px) {
    .text-heading-medium {
      font-size: 1.94vw;
    }
  }

  .text-heading-small {
    font-size: 1rem;
    font-family: Ubuntu, sans-serif;
    font-weight: 400;
    line-height: 1.33;
    word-wrap: break-word;
  }

  @media (min-width: 768px) {
    .text-heading-small {
      font-size: 1.67vw;
    }
  }

  .text-body-large {
    font-size: 0.875rem;
    font-family: Ubuntu, sans-serif;
    font-weight: 400;
    line-height: 1.5;
    word-wrap: break-word;
  }

  @media (min-width: 768px) {
    .text-body-large {
      font-size: 1.11vw;
    }
  }

  .text-body-medium {
    font-size: 0.8125rem;
    font-family: Ubuntu, sans-serif;
    font-weight: 400;
    line-height: 1.46;
    word-wrap: break-word;
  }

  @media (min-width: 768px) {
    .text-body-medium {
      font-size: 1.04vw;
    }
  }

  .text-label-large {
    font-size: 0.75rem;
    font-family: Ubuntu, sans-serif;
    font-weight: 500;
    line-height: 1.43;
    word-wrap: break-word;
  }

  @media (min-width: 768px) {
    .text-label-large {
      font-size: 0.97vw;
    }
  }

  .text-label-medium {
    font-size: 0.688rem;
    font-family: Ubuntu, sans-serif;
    font-weight: 500;
    line-height: 1.33;
    word-wrap: break-word;
  }

  @media (min-width: 768px) {
    .text-label-medium {
      font-size: 0.83vw;
    }
  }

  .text-label-small {
    font-size: 0.625rem;
    font-family: Ubuntu, sans-serif;
    font-weight: 500;
    line-height: 1.45;
    word-wrap: break-word;
  }

  @media (min-width: 768px) {
    .text-label-small {
      font-size: 0.69vw;
    }
  }

  /* ========================================================================
     BUTTON SIZE SYSTEM - Escalado proporcional usando sistema VW exitoso
     ======================================================================== */
  .btn-size-sm {
    padding: 0.5rem 0.75rem;
    height: 2rem;
    gap: 0.75rem;
  }

  @media (min-width: 768px) {
    .btn-size-sm {
      padding: 0.56vw 0.83vw;
      height: 2.22vw;
      gap: 0.83vw;
    }
  }

  .btn-size-md {
    padding: 0.5rem 1rem;
    height: 2.5rem;
    gap: 0.75rem;
  }

  @media (min-width: 768px) {
    .btn-size-md {
      padding: 0.56vw 1.11vw;
      height: 2.78vw;
      gap: 0.83vw;
    }
  }

  .btn-size-lg {
    padding: 0.5rem 1.25rem;
    height: 3rem;
    gap: 0.75rem;
  }

  @media (min-width: 768px) {
    .btn-size-lg {
      padding: 0.56vw 1.39vw;
      height: 3.33vw;
      gap: 0.83vw;
    }
  }

  .btn-size-xl {
    padding: 0.5rem 1.5rem;
    height: 3.5rem;
    gap: 0.75rem;
  }

  @media (min-width: 768px) {
    .btn-size-xl {
      padding: 0.56vw 1.67vw;
      height: 3.89vw;
      gap: 0.83vw;
    }
  }

  /* ========================================================================
     BADGE SIZE SYSTEM - Escalado proporcional usando sistema VW exitoso
     ======================================================================== */
  .badge-size-sm {
    height: 1rem;
    padding: 0.125rem 0.375rem;
    border-radius: 0.125rem;
  }

  @media (min-width: 768px) {
    .badge-size-sm {
      height: 1.11vw;
      padding: 0.14vw 0.42vw;
      border-radius: 0.14vw;
    }
  }

  .badge-size-md {
    height: 1.25rem;
    padding: 0.25rem 0.75rem;
    border-radius: 0.125rem;
  }

  @media (min-width: 768px) {
    .badge-size-md {
      height: 1.39vw;
      padding: 0.28vw 0.83vw;
      border-radius: 0.14vw;
    }
  }

  .badge-size-lg {
    height: 1.5rem;
    padding: 0.25rem 1rem;
    border-radius: 0.125rem;
  }

  @media (min-width: 768px) {
    .badge-size-lg {
      height: 1.67vw;
      padding: 0.28vw 1.11vw;
      border-radius: 0.14vw;
    }
  }

  .badge-size-xl {
    height: 2rem;
    padding: 0.25rem 1.25rem;
    border-radius: 0.25rem;
  }

  @media (min-width: 768px) {
    .badge-size-xl {
      height: 2.22vw;
      padding: 0.28vw 1.39vw;
      border-radius: 0.28vw;
    }
  }

  /* ========================================================================
     CARD SIZE SYSTEM - Escalado proporcional
     ======================================================================== */
  .card-size-sm {
    padding: 0.75rem;
    border-radius: 0.25rem;
    gap: 0.5rem;
    width: 10rem;
  }

  .card-size-md {
    padding: 1rem;
    border-radius: 0.375rem;
    gap: 0.75rem;
    width: 12.5rem;
  }

  .card-size-lg {
    padding: 1.25rem;
    border-radius: 0.5rem;
    gap: 1rem;
    width: 14rem;
  }

  .card-size-xl {
    padding: 1.5rem;
    border-radius: 0.625rem;
    gap: 1.25rem;
    width: 16.67rem;
  }

  /* Card Image Specific Sizes for Horizontal Cards */
  .card-image-sm {
    width: 7.5rem;
    height: 7.5rem;
  }

  .card-image-md {
    width: 8rem;
    height: 8rem;
  }

  @media (min-width: 768px) {
    .card-size-sm {
      padding: 0.83vw;
      border-radius: 0.28vw;
      gap: 0.56vw;
      width: 11.11vw;
    }

    .card-size-md {
      padding: 1.11vw;
      border-radius: 0.42vw;
      gap: 0.83vw;
      width: 13.89vw;
    }

    .card-size-lg {
      padding: 1.39vw;
      border-radius: 0.56vw;
      gap: 1.11vw;
      width: 15.56vw;
    }

    .card-size-xl {
      padding: 1.67vw;
      border-radius: 0.69vw;
      gap: 1.39vw;
      width: 18.52vw;
    }

    .card-image-sm {
      width: 8.33vw;
      height: 8.33vw;
    }

    .card-image-md {
      width: 8.89vw;
      height: 8.89vw;
    }
  }

  /* ========================================================================
     ICON SIZE SYSTEM - Escalado proporcional usando sistema VW exitoso
     ======================================================================== */
  .icon-size-sm {
    width: 1rem;
    height: 1rem;
  }

  @media (min-width: 768px) {
    .icon-size-sm {
      width: 1.11vw;
      height: 1.11vw;
    }
  }

  .icon-size-md {
    width: 1.25rem;
    height: 1.25rem;
  }

  @media (min-width: 768px) {
    .icon-size-md {
      width: 1.39vw;
      height: 1.39vw;
    }
  }

  .icon-size-lg {
    width: 1.5rem;
    height: 1.5rem;
  }

  @media (min-width: 768px) {
    .icon-size-lg {
      width: 1.67vw;
      height: 1.67vw;
    }
  }

  .icon-size-xl {
    width: 1.75rem;
    height: 1.75rem;
  }

  @media (min-width: 768px) {
    .icon-size-xl {
      width: 1.94vw;
      height: 1.94vw;
    }
  }

  /* ========================================================================
     SPACING SYSTEM - Escalado proporcional usando sistema VW exitoso
     ======================================================================== */
  .spacing-xs {
    gap: 0.25rem;
  }

  @media (min-width: 768px) {
    .spacing-xs {
      gap: 0.28vw;
    }
  }

  .spacing-sm {
    gap: 0.5rem;
  }

  @media (min-width: 768px) {
    .spacing-sm {
      gap: 0.56vw;
    }
  }

  .spacing-md {
    gap: 0.75rem;
  }

  @media (min-width: 768px) {
    .spacing-md {
      gap: 0.83vw;
    }
  }

  .spacing-lg {
    gap: 1rem;
  }

  @media (min-width: 768px) {
    .spacing-lg {
      gap: 1.11vw;
    }
  }

  .spacing-xl {
    gap: 1.5rem;
  }

  @media (min-width: 768px) {
    .spacing-xl {
      gap: 1.67vw;
    }
  }

  .spacing-2xl {
    gap: 2rem;
  }

  @media (min-width: 768px) {
    .spacing-2xl {
      gap: 2.22vw;
    }
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
     HEADER COMPONENT - Sistema VW puro como layout.js exitoso
     ======================================================================== */
  .header-component {
    width: 100%;
    min-width: 100vw;
    height: 5rem;
    padding: 1rem 5rem;
    position: relative;
    box-sizing: border-box;
  }

  @media (min-width: 768px) {
    .header-component {
      height: 5.56vw;
      padding: 1.11vw 5.56vw;
    }
  }

  .header-container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .header-logo {
    width: 6.5rem;
    height: 2.5rem;
    position: relative;
    overflow: hidden;
  }

  @media (min-width: 768px) {
    .header-logo {
      width: 7.22vw;
      height: 2.78vw;
    }
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
    gap: 1rem;
    flex: 0 0 auto;
  }

  @media (min-width: 768px) {
    .header-nav {
      gap: 1.11vw;
    }
  }

  .header-actions {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 1rem;
  }

  @media (min-width: 768px) {
    .header-actions {
      gap: 1.11vw;
    }
  }

  .header-menu-button {
    width: 1.5rem;
    height: 1.5rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (min-width: 768px) {
    .header-menu-button {
      width: 1.67vw;
      height: 1.67vw;
    }
  }

  /* ========================================================================
     FOOTER COMPONENT - Sistema VW puro como layout.js exitoso
     ======================================================================== */
  .footer-component {
    width: 100%;
    height: 19.69rem;
    padding: 2.5rem 4rem;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    position: relative;
    box-sizing: border-box;
    flex-shrink: 0;
  }

  @media (min-width: 768px) {
    .footer-component {
      height: 21.81vw;
      padding: 2.78vw 4.44vw;
    }
  }

  .footer-container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  .footer-logo {
    width: 6.5rem;
    height: 2.5rem;
    position: relative;
    overflow: hidden;
  }

  @media (min-width: 768px) {
    .footer-logo {
      width: 7.22vw;
      height: 2.78vw;
    }
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
    gap: 1rem;
  }

  @media (min-width: 768px) {
    .footer-nav {
      gap: 1.11vw;
    }
  }

  /* ========================================================================
     FOOTER RESPONSIVE SYSTEM - Escalado VW para zoom consistente
     ======================================================================== */
  .footer-address-gap {
    gap: 0.25rem;
  }

  .footer-address-text {
    font-size: 1rem;
  }

  .footer-licencias {
    width: 18.5rem;
    height: 3.5rem;
  }

  .footer-right-gap {
    gap: 5rem;
  }

  .footer-column-gap {
    gap: 1.5rem;
  }

  .footer-column-title {
    font-size: 1.375rem;
  }

  .footer-column-items-gap {
    gap: 1rem;
  }

  /* ALINEACIÓN BOTONES: Eliminar padding extra de botones para alinear con títulos */
  .footer-column-items-gap button,
  .footer-mobile-buttons button {
    margin: 0 !important;
    padding-top: 0 !important;
    padding-bottom: 0 !important;
    align-items: flex-start !important;
    justify-content: flex-start !important;
    text-align: left !important;
    min-height: auto !important;
    line-height: 1.375rem !important;
  }

  @media (min-width: 768px) {
    .footer-address-gap {
      gap: 0.28vw;
    }

    .footer-address-text {
      font-size: 1.11vw;
    }

    .footer-licencias {
      width: 20.56vw;
      height: 3.89vw;
    }

    .footer-right-gap {
      gap: 5.56vw;
    }

    .footer-column-gap {
      gap: 1.67vw;
    }

    .footer-column-title {
      font-size: 1.53vw;
    }

    .footer-column-items-gap {
      gap: 1.11vw;
    }

    /* ALINEACIÓN BOTONES DESKTOP: Solo ajustar posición vertical, mantener formato original */
    .footer-column-items-gap button {
      margin-top: 0 !important;
      margin-bottom: 0 !important;
      vertical-align: top !important;
      display: inline-flex !important;
      align-items: center !important;
      justify-content: flex-start !important;
    }
  }

  /* ========================================================================
     CARD VERTICAL RESPONSIVE SYSTEM - Imagen con mismo ancho que contenido
     ======================================================================== */
  .card-vertical-sm {
    /* Dimensiones manejadas por estilos inline con clamp() */
  }

  /* CARD VERTICAL IMAGES - Mismo ancho que el contenedor del contenido */
  article.card-vertical-sm img.img,
  .card-vertical-sm img.img,
  .card-vertical-sm img {
    /* La imagen toma el mismo ancho que el contenedor .o-container */
    width: 100% !important;
    max-width: 100% !important;
    object-fit: cover !important;
    object-position: center !important;
    display: block !important;
    box-sizing: border-box !important;
  }

  .card-vertical-md {
    /* Dimensiones manejadas por estilos inline con clamp() */
  }

  article.card-vertical-md img.img,
  .card-vertical-md img.img,
  .card-vertical-md img {
    width: 100% !important;
    max-width: 100% !important;
    object-fit: cover !important;
    object-position: center !important;
    display: block !important;
    box-sizing: border-box !important;
  }

  .card-vertical-lg {
    /* Dimensiones manejadas por estilos inline con clamp() */
  }

  article.card-vertical-lg img.img,
  .card-vertical-lg img.img,
  .card-vertical-lg img {
    width: 100% !important;
    max-width: 100% !important;
    object-fit: cover !important;
    object-position: center !important;
    display: block !important;
    box-sizing: border-box !important;
  }

  .card-vertical-xl {
    /* Dimensiones manejadas por estilos inline con clamp() */
  }

  article.card-vertical-xl img.img,
  .card-vertical-xl img.img,
  .card-vertical-xl img {
    width: 100% !important;
    max-width: 100% !important;
    object-fit: cover !important;
    object-position: center !important;
    display: block !important;
    box-sizing: border-box !important;
  }

  /* FORZAR que la imagen tenga exactamente el mismo ancho que el contenido en MÓVIL */
  @media (max-width: 767px) {
    /* SOLUCIÓN INVERSA: Ampliar el contenedor verde para igualar al ancho de la imagen */
    .card-vertical-sm,
    .card-vertical-md,
    .card-vertical-lg,
    .card-vertical-xl {
      /* Card debe contener todo */
      max-width: 100vw !important;
      overflow: hidden !important;
      position: relative !important;
    }

    /* Imagen normal sin modificaciones */
    .card-vertical-sm img.img,
    .card-vertical-md img.img,
    .card-vertical-lg img.img,
    .card-vertical-xl img.img,
    .card-vertical-sm img,
    .card-vertical-md img,
    .card-vertical-lg img,
    .card-vertical-xl img {
      /* Imagen con comportamiento normal */
      width: 100% !important;
      max-width: 100% !important;
      margin: 0 !important;
      object-fit: cover !important;
      object-position: center !important;
      display: block !important;
      box-sizing: border-box !important;
    }

    /* AMPLIAR contenedor verde para igualar ancho de imagen */
    .card-vertical-sm .o-container,
    .card-vertical-md .o-container,
    .card-vertical-lg .o-container,
    .card-vertical-xl .o-container {
      /* Contenedor verde del mismo ancho que imagen */
      width: 100% !important;
      margin: 0 !important;
      padding: 16px !important;
    }
  }

  @media (min-width: 768px) {
    .card-vertical-sm {
      /* Dimensiones manejadas por estilos inline con clamp() */
    }

    article.card-vertical-sm img.img,
    .card-vertical-sm img.img,
    .card-vertical-sm img {
      width: 100% !important;
      max-width: 100% !important;
      object-fit: cover !important;
      object-position: center !important;
      display: block !important;
      box-sizing: border-box !important;
    }

    .card-vertical-md {
      /* Dimensiones manejadas por estilos inline con clamp() */
    }

    article.card-vertical-md img.img,
    .card-vertical-md img.img,
    .card-vertical-md img {
      width: 100% !important;
      max-width: 100% !important;
      object-fit: cover !important;
      object-position: center !important;
      display: block !important;
      box-sizing: border-box !important;
    }

    .card-vertical-lg {
      /* Dimensiones manejadas por estilos inline con clamp() */
    }

    article.card-vertical-lg img.img,
    .card-vertical-lg img.img,
    .card-vertical-lg img {
      width: 100% !important;
      max-width: 100% !important;
      object-fit: cover !important;
      object-position: center !important;
      display: block !important;
      box-sizing: border-box !important;
    }

    .card-vertical-xl {
      /* Dimensiones manejadas por estilos inline con clamp() */
    }

    article.card-vertical-xl img.img,
    .card-vertical-xl img.img,
    .card-vertical-xl img {
      width: 100% !important;
      max-width: 100% !important;
      object-fit: cover !important;
      object-position: center !important;
      display: block !important;
      box-sizing: border-box !important;
    }
  }

  /* ========================================================================
     FOOTER LAYOUT RESPONSIVE SYSTEM - Desktop vs Mobile Structure
     ======================================================================== */
  .footer-desktop {
    display: none;
  }

  .footer-mobile {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 2rem 1.5rem;
    gap: 3rem;
    min-height: auto;
  }

  .footer-mobile-navigation {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    width: 100%;
  }

  .footer-mobile-column {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
  }

  .footer-mobile-title {
    font-size: 1.375rem;
    margin: 0;
    padding: 0;
  }

  .footer-mobile-buttons {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
  }

  .footer-mobile-buttons button {
    width: 100% !important;
    justify-content: flex-start !important;
    text-align: left !important;
  }

  .footer-mobile-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    width: 100%;
    text-align: center;
    padding-top: 2rem;
    border-top: 1px solid rgba(255, 255, 255, 0.2);
  }

  .footer-mobile-logo {
    width: 140px;
    height: 54px;
  }

  .footer-mobile-logo img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .footer-mobile-address {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  .footer-mobile-address p {
    font-size: 1rem;
    margin: 0;
    text-align: center;
  }

  .footer-mobile-licenses {
    width: 296px;
    height: 56px;
    object-fit: contain;
  }

  @media (min-width: 768px) {
    .footer-desktop {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      height: 100%;
    }
    
    .footer-mobile {
      display: none;
    }
  }

  @media (max-width: 767px) {
    .footer-component {
      height: auto !important;
      padding: 0 !important;
    }
    
    .footer-desktop {
      display: none;
    }
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