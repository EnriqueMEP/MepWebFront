import React from 'react';
import { useComponentColors, useTheme } from '../../foundations/theme-hooks.js';
import { injectResponsiveClasses } from '../../foundations/responsive-classes.js';
import ButtonGhost from '../Button/ButtonGhost.jsx';
import ButtonPrimary from '../Button/ButtonPrimary.jsx';
import ButtonOutline from '../Button/ButtonOutline.jsx';
import Icon from '../../foundations/icons/Icon.jsx';
import mepLogo from '../../foundations/img/mep_logo.svg';

/**
 * Header - Cabecera principal de la aplicación
 * 
 * Estructura:
 * - Logo MEP a la izquierda
 * - Navegación central con botones Ghost MD con dropdowns
 * - Sección derecha con botón Login Primary SM + icono menu
 * 
 * Usa colores semánticos primary-container para background
 * ACTUALIZADO: Usa clases CSS escalables como Home para comportamiento de zoom consistente
 * 
 * Ejemplo de uso con estado:
 * const [selectedDropdownItem, setSelectedDropdownItem] = useState(null);
 * 
 * <Header
 *   selectedDropdownItem={selectedDropdownItem}
 *   onDropdownItemClick={(itemId) => setSelectedDropdownItem(itemId)}
 * />
 */

const Header = ({
  activeNavItem = null,
  isLoginSelected = false,
  selectedDropdownItem = null,
  onNavClick = () => {},
  onLoginClick = () => {},
  onMenuClick = () => {},
  onDropdownItemClick = () => {},
  className = '',
  ...props
}) => {
  // Inyectar clases CSS responsivas al montar
  React.useEffect(() => {
    injectResponsiveClasses();
  }, []);

  // Colores semánticos para el header y sistema de tema
  const headerColors = useComponentColors('header');
  const ghostButtonColors = useComponentColors('buttonGhost');
  const { toggleTheme } = useTheme();

  const navigationItems = [
    { 
      id: 'about', 
      label: 'Sobre MEP Engineering',
      hasDropdown: true,
      dropdownItems: [] // Se llenará después con los botones ghost
    },
    { 
      id: 'projects', 
      label: 'Ingenierías',
      hasDropdown: true,
      dropdownItems: [] // Se llenará después con los botones ghost
    },
    { 
      id: 'contact', 
      label: 'Contacto',
      hasDropdown: false
    }
  ];

  // Estilos base mínimos (solo colores y propiedades no escalables)
  const headerStyles = {
    background: headerColors.background,
    ...props.style
  };

  // Generar className combinando clases escalables
  const headerClassName = [
    'component-base',
    'header-component',
    className
  ].filter(Boolean).join(' ');

  return (
    <header
      className={headerClassName}
      style={headerStyles}
      {...props}
    >
      <div className="header-container">
        {/* Logo Area */}
        <div className="header-logo">
          <img 
            src={mepLogo}
            alt="MEP Engineering"
          />
        </div>

        {/* Navigation Area - Hidden on mobile */}
        <nav className="header-nav" style={{ display: 'none' }}>
          {navigationItems.map((item) => (
            <div key={item.id} className="nav-item-container">
              <ButtonGhost
                size="md"
                selected={activeNavItem === item.id}
                onClick={() => onNavClick(item.id)}
                rightIcon={item.hasDropdown ? "arrowDownS" : undefined}
              >
                {item.label}
              </ButtonGhost>
              
              {/* Dropdown menu - solo se muestra en hover */}
              {item.hasDropdown && (
                <div className="dropdown-menu">
                  <div className="dropdown-content">
                    {/* Botones Ghost directos con funcionalidad de selección */}
                    {item.id === 'about' && (
                      <>
                        <ButtonGhost 
                          size="md"
                          selected={selectedDropdownItem === 'about-historia'}
                          onClick={() => onDropdownItemClick('about-historia')}
                        >
                          Historia
                        </ButtonGhost>
                        <ButtonGhost 
                          size="md"
                          selected={selectedDropdownItem === 'about-equipo'}
                          onClick={() => onDropdownItemClick('about-equipo')}
                        >
                          Equipo
                        </ButtonGhost>
                        <ButtonGhost 
                          size="md"
                          selected={selectedDropdownItem === 'about-mision'}
                          onClick={() => onDropdownItemClick('about-mision')}
                        >
                          Misión y Visión
                        </ButtonGhost>
                      </>
                    )}
                    {item.id === 'projects' && (
                      <>
                        <ButtonGhost 
                          size="md"
                          selected={selectedDropdownItem === 'projects-energia'}
                          onClick={() => onDropdownItemClick('projects-energia')}
                        >
                          Energía
                        </ButtonGhost>
                        <ButtonGhost 
                          size="md"
                          selected={selectedDropdownItem === 'projects-agua'}
                          onClick={() => onDropdownItemClick('projects-agua')}
                        >
                          Agua
                        </ButtonGhost>
                        <ButtonGhost 
                          size="md"
                          selected={selectedDropdownItem === 'projects-industria'}
                          onClick={() => onDropdownItemClick('projects-industria')}
                        >
                          Industria
                        </ButtonGhost>
                        <ButtonGhost 
                          size="md"
                          selected={selectedDropdownItem === 'projects-infraestructura'}
                          onClick={() => onDropdownItemClick('projects-infraestructura')}
                        >
                          Infraestructura
                        </ButtonGhost>
                      </>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Right Actions Area */}
        <div className="header-actions">
          <ButtonPrimary
            size="sm"
            leftIcon="user"
            selected={isLoginSelected}
            onClick={onLoginClick}
          >
            Log In
          </ButtonPrimary>
          
          {/* Botón de cambio de tema - siempre visible */}
          <button
            className="header-theme-button"
            onClick={toggleTheme}
            aria-label="Cambiar tema"
            style={{
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
<<<<<<< HEAD
              padding: 'clamp(0.5rem, 0.56vw, 0.56vw)'
=======
              padding: '8px'
>>>>>>> 1c2f8e479a4da00e94b650f0c970d265cb46ef08
            }}
          >
            <Icon 
              name="menu" 
<<<<<<< HEAD
              size="md"
=======
              size={20}
>>>>>>> 1c2f8e479a4da00e94b650f0c970d265cb46ef08
              color={headerColors.text || 'currentColor'}
            />
          </button>
          
          {/* Botón de menú original - solo visible en mobile */}
          <button
            className="header-menu-button"
            onClick={onMenuClick}
            aria-label="Menu"
            style={{
              background: 'transparent',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            <Icon 
              name="menu" 
<<<<<<< HEAD
              size="lg"
=======
              size={24}
>>>>>>> 1c2f8e479a4da00e94b650f0c970d265cb46ef08
              color={headerColors.text || 'currentColor'}
            />
          </button>
        </div>
      </div>

      {/* Navigation visible on tablet/desktop */}
      <style jsx>{`
        @media (min-width: 768px) {
          .header-nav {
            display: flex !important;
            width: clamp(33.5rem, 37.18vw, 37.18vw);
            gap: 1rem;
          }
          
          .header-menu-button {
            display: none !important;
          }
        }

        /* Dropdown Styles */
        .nav-item-container {
          position: relative;
          display: inline-block;
        }

        .dropdown-menu {
          position: absolute;
          top: 100%;
          left: 0;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 12px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
          min-width: 200px;
          z-index: 1000;
          opacity: 0;
          visibility: hidden;
          transform: translateY(-10px);
          transition: all 0.2s ease-in-out;
          margin-top: 8px;
        }

        .dropdown-content {
          padding: 12px;
          display: flex;
          flex-direction: column;
          gap: 8px;
          align-items: center;
        }

        .nav-item-container:hover .dropdown-menu {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }

        /* ButtonGhost dentro del dropdown centrados con select funcional */
        .dropdown-content button {
          width: auto;
          justify-content: center;
        }

        /* Asegurar que el estado selected sea visible */
        .dropdown-content button.selected,
        .dropdown-content button[data-selected="true"] {
          border-bottom: 2px solid currentColor !important;
        }
      `}</style>
    </header>
  );
};

export default Header;