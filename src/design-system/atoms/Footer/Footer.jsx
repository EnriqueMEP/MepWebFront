import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useComponentColors } from '../../foundations/theme-hooks.js';
import { injectResponsiveClasses } from '../../foundations/responsive-classes.js';
import { breakpoints } from '../../foundations/layout.js';
import mepLogo from '../../foundations/img/mep_logo.svg';
import licenciasImg from '../../foundations/img/licencias.png';

/**
 * Footer - Pie de página principal de la aplicación
 * 
 * Estructura actualizada basada en el diseño foot:
 * - Layout horizontal: Logo/dirección/licencias | Navegación por columnas
 * - Sistema VW responsivo
 * - Colores semánticos adaptativos al tema
 * - Links con underline y hover
 */

const Footer = ({
  selectedItem = null,
  onNavClick = () => {},
  className = '',
  ...props
}) => {
  // Inyectar clases CSS responsivas al montar
  React.useEffect(() => {
    injectResponsiveClasses();
  }, []);

  // Hook de navegación
  const navigate = useNavigate();

  // Colores semánticos para el footer
  const footerColors = useComponentColors('footer');

  // Función para manejar navegación funcional
  const handleNavigation = (itemId) => {
    const routes = {
      // Sobre MEP Engineering
      'vision': '/nosotros',
      'nosotros': '/nosotros',
      
      // Líneas de negocio
      'energia': '/servicios',
      'agua': '/servicios', 
      'industria': '/servicios',
      'infraestructuras': '/servicios',
      
      // Grupo (sin rutas definidas aún)
      'facilities': null,
      'canada': null,
      'industria-grupo': null,
      'infraestructuras-grupo': null,
      
      // Contacto
      'conocenos': '/contacto'
    };

    const route = routes[itemId];
    if (route) {
      navigate(route);
    }
    onNavClick(itemId);
  };

  // Datos de navegación organizados por columnas
  const navigationColumns = [
    {
      title: 'Sobre MEP Engineering',
      items: [
        { id: 'vision', label: 'Ingeniería con visión de futuro' },
        { id: 'nosotros', label: 'Nosotros' }
      ]
    },
    {
      title: 'Lineas de negocio',
      items: [
        { id: 'energia', label: 'Energia' },
        { id: 'agua', label: 'Agua' },
        { id: 'industria', label: 'Industria' },
        { id: 'infraestructuras', label: 'Infraestructuras' }
      ]
    },
    {
      title: 'Grupo',
      items: [
        { id: 'facilities', label: 'MEP Facilities' },
        { id: 'canada', label: 'MEP Canada' },
        { id: 'industria-grupo', label: 'Industria' },
        { id: 'infraestructuras-grupo', label: 'Infraestructuras' }
      ]
    },
    {
      title: 'Contacto',
      items: [
        { id: 'conocenos', label: '¡Conócenos!' }
      ]
    }
  ];

  return (
    <footer 
      className={`footer-component ${className}`}
      style={{ background: footerColors.background, ...props.style }}
      {...props}
    >
      <style dangerouslySetInnerHTML={{ __html: `
        /* FOOTER COMPONENT STYLES - Sistema VW Responsivo */
        .footer-component {
          background: ${footerColors.background};
          padding: 2.78vw 13.89vw;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          height: 21.81vw;
          position: relative;
          width: 100%;
          box-sizing: border-box;
        }

        /* Sección izquierda con logo, dirección e imagen de licencias */
        .footer-left-section {
          display: flex;
          flex-direction: column;
          gap: 1.67vw;
          align-items: flex-start;
          justify-content: center;
          flex-shrink: 0;
          position: relative;
        }

        .footer-logo-container {
          display: flex;
          flex-direction: column;
          gap: 1.67vw;
          align-items: flex-start;
          justify-content: center;
          width: 100%;
          flex-shrink: 0;
          position: relative;
        }

        .footer-logo {
          flex-shrink: 0;
          width: 5.76vw;
          height: 2.22vw;
          position: relative;
          overflow: hidden;
        }

        .footer-address-container {
          display: flex;
          flex-direction: column;
          gap: 0.28vw;
          align-items: flex-start;
          justify-content: flex-start;
          width: 100%;
          flex-shrink: 0;
          position: relative;
        }

        .footer-address-line {
          color: ${footerColors.text};
          text-align: left;
          font-family: "Roboto-Regular", sans-serif;
          font-size: 0.97vw;
          line-height: 1.39vw;
          font-weight: 400;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          margin: 0;
        }

        .footer-licencias {
          flex-shrink: 0;
          width: 20.56vw;
          height: 3.89vw;
          position: relative;
          object-fit: cover;
        }

        /* Sección derecha con navegación */
        .footer-right-section {
          display: flex;
          flex-direction: row;
          gap: 2.78vw;
          align-items: flex-start;
          justify-content: flex-start;
          flex-shrink: 0;
          position: relative;
        }

        .footer-column {
          display: flex;
          flex-direction: column;
          gap: 1.67vw;
          align-items: flex-start;
          justify-content: center;
          flex-shrink: 0;
          position: relative;
        }

        .footer-column-title {
          color: ${footerColors.text};
          text-align: left;
          font-family: "Ubuntu-Bold", sans-serif;
          font-size: 1.11vw;
          line-height: 1.67vw;
          font-weight: 700;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          margin: 0;
        }

        .footer-column-links {
          display: flex;
          flex-direction: column;
          gap: 1.11vw;
          align-items: flex-start;
          justify-content: flex-start;
          flex-shrink: 0;
          position: relative;
        }

        .footer-link {
          color: ${footerColors.text};
          text-align: left;
          font-family: "Ubuntu-Medium", sans-serif;
          font-size: 0.97vw;
          line-height: 1.39vw;
          font-weight: 500;
          text-decoration: none;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          cursor: pointer;
          transition: opacity 0.2s ease;
          background: none;
          border: none;
          padding: 0;
          margin: 0;
        }

        .footer-link:hover {
          opacity: 0.8;
        }

        /* Media query para tablet - mantener VW */
        @media (min-width: ${breakpoints.tablet}) {
          .footer-component {
            padding: 2.78vw 13.89vw;
            height: 21.81vw;
          }
        }

        /* Responsive: Mobile */
        @media (max-width: 767px) {
          .footer-component {
            padding: 8vw 4vw;
            flex-direction: column;
            height: auto;
            gap: 8vw;
            align-items: center;
            text-align: center;
          }

          .footer-left-section {
            gap: 6vw;
            align-items: center;
            width: 100%;
          }

          .footer-logo-container {
            align-items: center;
            gap: 6vw;
          }

          .footer-logo {
            width: 25vw;
            height: 10vw;
          }

          .footer-address-container {
            align-items: center;
            gap: 1.5vw;
          }

          .footer-address-line {
            font-size: 4vw;
            line-height: 6vw;
            text-align: center;
          }

          .footer-licencias {
            width: 70vw;
            height: 14vw;
          }

          .footer-right-section {
            flex-direction: column;
            gap: 8vw;
            width: 100%;
            align-items: center;
          }

          .footer-column {
            gap: 4vw;
            align-items: center;
            width: 100%;
          }

          .footer-column-title {
            font-size: 5vw;
            line-height: 7vw;
            text-align: center;
          }

          .footer-column-links {
            gap: 3.5vw;
            align-items: center;
          }

          .footer-link {
            font-size: 4.5vw;
            line-height: 6.5vw;
            text-align: center;
            padding: 1vw 2vw;
            min-height: 6vw;
          }
        }
      `}} />
      
      {/* Sección Izquierda: Logo, Dirección y Licencias */}
      <div className="footer-left-section">
        <div className="footer-logo-container">
          <div className="footer-logo">
            <img 
              src={mepLogo} 
              alt="MEP Engineering Logo" 
              style={{ width: '100%', height: '100%', objectFit: 'contain' }}
            />
          </div>
          <div className="footer-address-container">
            <div className="footer-address-line">Calle Diego LLorente, 40.</div>
            <div className="footer-address-line">Los Palacios y Villafranca.</div>
            <div className="footer-address-line">41720 Sevilla</div>
          </div>
        </div>
        <img 
          src={licenciasImg} 
          alt="Licencias y certificaciones" 
          className="footer-licencias"
        />
      </div>

      {/* Sección Derecha: Navegación por Columnas */}
      <div className="footer-right-section">
        {navigationColumns.map((column, columnIndex) => (
          <div key={columnIndex} className="footer-column">
            <div className="footer-column-title">{column.title}</div>
            <div className="footer-column-links">
              {column.items.map((item) => (
                <button
                  key={item.id}
                  className="footer-link"
                  onClick={() => handleNavigation(item.id)}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;