import React from 'react';
import { useComponentColors } from '../../foundations/theme-hooks.js';
import { injectResponsiveClasses } from '../../foundations/responsive-classes.js';
import { textStyles } from '../../foundations/typography.js';
import ButtonGhost from '../Button/ButtonGhost.jsx';
import mepLogo from '../../foundations/img/mep_logo.svg';
import licenciasImg from '../../foundations/img/licencias.png';

/**
 * Footer - Pie de página principal de la aplicación
 * 
 * Estructura:
 * - Logo MEP arriba a la izquierda
 * - Navegación vertical con botones Ghost MD con iconos left/right
 * 
 * Usa colores semánticos primary-container para background
 * ACTUALIZADO: Usa clases CSS escalables como Home para comportamiento de zoom consistente
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

  // Colores semánticos para el footer
  const footerColors = useComponentColors('footer');

  // Datos de navegación organizados por columnas como en la imagen
  const navigationColumns = [
    {
      title: 'Sobre MEP Engineering',
      items: [
        { id: 'vision', label: 'Ingenieria con visión de futuro' },
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

  // Estilos base con el sistema responsive
  const footerStyles = {
    width: '100%',
    maxWidth: '100vw', // Evitar desbordamiento
    height: 'clamp(19.63rem, 21.81vw, 21.81vw)', // 314px responsive - solo para desktop
    padding: '4.17vw 5.56vw', // 60px arriba/abajo (4.17vw), 80px izquierda/derecha (5.56vw) - solo desktop
    background: footerColors.background,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxSizing: 'border-box',
    // overflow removido para permitir contenido móvil
    ...props.style
  };

  // Estilos para la sección izquierda
  const leftSectionStyles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    gap: 'clamp(1.5rem, 1.67vw, 1.67vw)' // 24px responsive
  };

  const logoStyles = {
    width: 'clamp(8.75rem, 9.72vw, 9.72vw)', // 140px responsive  
    height: 'clamp(3.375rem, 3.75vw, 3.75vw)', // 54px responsive
    position: 'relative',
    overflow: 'hidden'
  };

  const addressContainerStyles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    gap: 'clamp(0.25rem, 0.28vw, 0.28vw)' // 4px responsive
  };

  const addressTextStyles = {
    color: footerColors.text,
    fontSize: 'clamp(1rem, 1.11vw, 1.11vw)', // 16px responsive
    fontFamily: textStyles.bodyLarge.fontFamily,
    fontWeight: textStyles.bodyLarge.fontWeight,
    lineHeight: textStyles.bodyLarge.lineHeight,
    margin: 0
  };

  const licenciasStyles = {
    width: 'clamp(18.5rem, 20.56vw, 20.56vw)', // 296px responsive
    height: 'clamp(3.5rem, 3.89vw, 3.89vw)' // 56px responsive
  };

  // Estilos para la sección derecha
  const rightSectionStyles = {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    gap: 'clamp(5rem, 5.56vw, 5.56vw)' // 80px responsive - ORIGINAL
  };

  const columnStyles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    gap: 'clamp(1.5rem, 1.67vw, 1.67vw)' // 24px responsive - ORIGINAL
  };

  const columnTitleStyles = {
    color: footerColors.text,
    fontSize: 'clamp(1.375rem, 1.53vw, 1.53vw)', // 22px responsive
    fontFamily: textStyles.titleLargeEmphasis.fontFamily,
    fontWeight: textStyles.titleLargeEmphasis.fontWeight,
    lineHeight: textStyles.titleLargeEmphasis.lineHeight,
    margin: 0
  };

  const columnItemsStyles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    gap: 'clamp(1rem, 1.11vw, 1.11vw)' // 16px responsive
  };

  // Generar className combinando clases escalables
  const footerClassName = [
    'component-base',
    'footer-component',
    className
  ].filter(Boolean).join(' ');

  return (
    <footer
      className={footerClassName}
      style={footerStyles}
      {...props}
    >
      {/* Estructura para PC/Tablet (>= 768px) */}
      <div className="footer-desktop">
        {/* Sección Izquierda */}
        <div style={leftSectionStyles}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(1.5rem, 1.67vw, 1.67vw)' }}>
            {/* Logo */}
            <div style={logoStyles}>
              <img 
                src={mepLogo}
                alt="MEP Engineering"
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              />
            </div>

            {/* Dirección */}
            <div style={addressContainerStyles}>
              <p style={addressTextStyles}>Calle Diego LLorente, 40.</p>
              <p style={addressTextStyles}>Los Palacios y Villafranca.</p>
              <p style={addressTextStyles}>41720 Sevilla</p>
            </div>
          </div>

          {/* Imagen de licencias */}
          <img 
            src={licenciasImg}
            alt="Licencias"
            style={licenciasStyles}
          />
        </div>

        {/* Sección Derecha - Columnas de navegación */}
        <div style={rightSectionStyles}>
          {navigationColumns.map((column, index) => (
            <div key={index} style={columnStyles}>
              <h3 style={columnTitleStyles}>{column.title}</h3>
              <div style={columnItemsStyles}>
                {column.items.map((item) => (
                  <ButtonGhost
                    key={item.id}
                    size="md"
                    selected={selectedItem === item.id}
                    disabled={false}
                    onClick={() => onNavClick(item.id)}
                  >
                    {item.label}
                  </ButtonGhost>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Estructura para Móvil (< 768px) - Completamente nueva */}
      <div className="footer-mobile">
        {/* Navegación primero */}
        <div className="footer-mobile-navigation">
          {navigationColumns.map((column, index) => (
            <div key={index} className="footer-mobile-column">
              <h3 className="footer-mobile-title">{column.title}</h3>
              <div className="footer-mobile-buttons">
                {column.items.map((item) => (
                  <ButtonGhost
                    key={item.id}
                    size="md"
                    selected={selectedItem === item.id}
                    disabled={false}
                    onClick={() => onNavClick(item.id)}
                  >
                    {item.label}
                  </ButtonGhost>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Logo y dirección al final */}
        <div className="footer-mobile-info">
          <div className="footer-mobile-logo">
            <img 
              src={mepLogo}
              alt="MEP Engineering"
            />
          </div>
          <div className="footer-mobile-address">
            <p>Calle Diego LLorente, 40.</p>
            <p>Los Palacios y Villafranca.</p>
            <p>41720 Sevilla</p>
          </div>
          <img 
            className="footer-mobile-licenses"
            src={licenciasImg}
            alt="Licencias"
          />
        </div>
      </div>

      {/* CSS responsivo - Estructuras completamente separadas */}
      <style jsx>{`
        /* PC y Tablet (768px+) - Solo mostrar estructura desktop */
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

        /* Móvil (<768px) - Solo mostrar estructura móvil */
        @media (max-width: 767px) {
          .footer-component {
            height: auto !important;
            padding: 0 !important;
          }
          
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
          
          /* Navegación móvil */
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
            color: ${footerColors.text || '#000'};
            font-size: 1.375rem;
            font-family: ${textStyles.titleLargeEmphasis.fontFamily};
            font-weight: ${textStyles.titleLargeEmphasis.fontWeight};
            line-height: ${textStyles.titleLargeEmphasis.lineHeight};
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
          
          /* Información empresa móvil */
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
            color: ${footerColors.text || '#000'};
            font-size: 1rem;
            font-family: ${textStyles.bodyLarge.fontFamily};
            font-weight: ${textStyles.bodyLarge.fontWeight};
            line-height: ${textStyles.bodyLarge.lineHeight};
            margin: 0;
            text-align: center;
          }
          
          .footer-mobile-licenses {
            width: 296px;
            height: 56px;
            object-fit: contain;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
