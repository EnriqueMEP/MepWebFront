// Sistema de forzado directo VW a PX para pantallas ≥1440px
export function forceVwToPxConversion() {
  const isWideScreen = window.innerWidth >= 1440;
  
  if (!isWideScreen) return;
  
  // Crear o actualizar el estilo de override
  let styleElement = document.getElementById('force-vw-to-px');
  if (!styleElement) {
    styleElement = document.createElement('style');
    styleElement.id = 'force-vw-to-px';
    document.head.appendChild(styleElement);
  }
  
  // CSS directo con !important para override todo
  styleElement.textContent = `
    /* FORZAR CONVERSIÓN VW A PX PARA PANTALLAS ≥1440px */
    @media (min-width: 1440px) {
      /* PageTemplate - Content Wrapper */
      .content-wrapper {
        max-width: 1440px !important;
        margin: 0 auto !important;
        gap: 80px !important; /* 5.56vw */
        padding: 34px 80px !important; /* 2.39vw 5.56vw */
      }
      
      /* Hero Section */
      .hero-section {
        gap: 48px !important; /* 3.33vw */
      }
      
      .hero-content-wrapper {
        gap: 34px !important; /* 2.33vw */
      }
      
      .hero-text {
        width: 357px !important; /* 24.8vw */
        gap: 48px !important; /* 3.33vw */
      }
      
      .hero-text-content {
        gap: 16px !important; /* 1.11vw */
      }
      
      .hero-text-inner {
        gap: 16px !important; /* 1.11vw */
      }
      
      .hero-video-container {
        width: 646px !important; /* 44.86vw */
        height: 362px !important; /* 25.14vw */
      }
      
      /* Dropdown Desktop */
      .dropdown-menu {
        min-width: 160px !important; /* 11.11vw */
        transform: translateX(-50%) translateY(-10px) !important;
      }
      
      .nav-item-container:hover .dropdown-menu {
        transform: translateX(-50%) translateY(0) !important;
      }
      
      .dropdown-content button {
        width: 143px !important; /* 9.93vw */
        padding: 8px 12px !important; /* 0.56vw 0.83vw */
        gap: 12px !important; /* 0.83vw */
        font-size: 14px !important; /* 0.97vw */
        line-height: 20px !important; /* 1.39vw */
        border-left-width: 1px !important; /* 0.07vw */
      }
      
      /* Dropdown Mobile */
      .mobile-dropdown-items button {
        padding: 24px 36px !important; /* 1.67vw 2.5vw */
        gap: 36px !important; /* 2.5vw */
        font-size: 42px !important; /* 2.92vw */
        line-height: 60px !important; /* 4.17vw */
        border-left-width: 3px !important; /* 0.21vw */
      }
      
      /* Stats Section */
      .stats-section {
        gap: 40px !important; /* 2.78vw */
      }
      
      .stats-title {
        margin-bottom: 22px !important; /* 1.5vw */
      }
      
      .stat-item {
        gap: 2px !important; /* 0.14vw */
      }
      
      /* Projects Section */
      .projects-section {
        gap: 40px !important; /* 2.78vw */
      }
      
      .projects-title {
        margin-bottom: 22px !important; /* 1.5vw */
      }
      
      .project-card {
        gap: 16px !important; /* 1.11vw */
      }
      
      /* Blog Section */
      .blog-section {
        gap: 40px !important; /* 2.78vw */
      }
      
      .blog-title {
        margin-bottom: 22px !important; /* 1.5vw */
      }
      
      .blog-card {
        gap: 16px !important; /* 1.11vw */
      }
      
      /* Footer */
      .footer-component {
        height: 314px !important; /* 21.81vw */
        padding: 40px 200px !important; /* 2.78vw 13.89vw */
      }
      
      .footer-left-section {
        gap: 24px !important; /* 1.67vw */
      }
      
      .footer-logo-container {
        gap: 24px !important; /* 1.67vw */
      }
      
      .footer-logo {
        width: 83px !important; /* 5.76vw */
        height: 32px !important; /* 2.22vw */
      }
      
      .footer-address-container {
        gap: 4px !important; /* 0.28vw */
      }
      
      .footer-address-line {
        font-size: 14px !important; /* 0.97vw */
        line-height: 20px !important; /* 1.39vw */
      }
      
      .footer-licencias {
        width: 296px !important; /* 20.56vw */
        height: 56px !important; /* 3.89vw */
      }
      
      .footer-right-section {
        gap: 40px !important; /* 2.78vw */
      }
      
      .footer-column {
        gap: 24px !important; /* 1.67vw */
      }
      
      .footer-column-title {
        font-size: 16px !important; /* 1.11vw */
        line-height: 24px !important; /* 1.67vw */
      }
      
      .footer-column-links {
        gap: 16px !important; /* 1.11vw */
      }
      
      .footer-link {
        font-size: 14px !important; /* 0.97vw */
        line-height: 20px !important; /* 1.39vw */
      }
      
      /* Shapes - mantener centrados */
      .shape-image {
        transform: translateX(-50%) !important;
        left: 50% !important;
      }
    }
  `;
  
  console.log('🔧 FORZANDO conversión VW→PX para pantalla ≥1440px');
}

// Auto-inicializar
if (typeof window !== 'undefined') {
  // Ejecutar al cargar
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', forceVwToPxConversion);
  } else {
    forceVwToPxConversion();
  }
  
  // Ejecutar al redimensionar
  window.addEventListener('resize', forceVwToPxConversion);
}