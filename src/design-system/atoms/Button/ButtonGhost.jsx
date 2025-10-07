import React, { useRef, useState, useEffect } from 'react';
import { useComponentColors } from '../../foundations/theme-hooks.js';
import { injectResponsiveClasses, getTypographyClass, getSizeValue } from '../../foundations/responsive-classes.js';
import Icon from '../../foundations/icons/Icon.jsx';

/**
 * ButtonGhost - Botón Ghost Unificado
 * Usa tokens semánticos adaptativos para light/dark mode
 * Tamaños: sm, md, lg, xl
 * Estados: normal, hover, selected, disabled
 * Background transparente, sin border
 * ACTUALIZADO: Usa clases CSS escalables como Home para comportamiento de zoom consistente
 */

export const ButtonGhost = ({
  children = 'Button',
  size = 'md',
  leftIcon,  // Nombre del icono (string) o null
  rightIcon, // Nombre del icono (string) o null
  onClick,
  disabled = false,
  selected = false,
  className = '',
  style = {},
  ...props
}) => {
  // Inyectar clases CSS responsivas al montar
  useEffect(() => {
    injectResponsiveClasses();
  }, []);

  const buttonRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  // Limpiar estado hover cuando el botón cambia a selected
  useEffect(() => {
    if (selected) {
      setIsHovering(false);
    }
  }, [selected]);

  // Obtener colores semánticos para ghost button
  const ghostColors = useComponentColors('buttonGhostDefault');
  const ghostHoverColors = useComponentColors('buttonGhostHover');
  const ghostSelectedColors = useComponentColors('buttonGhostSelected'); 
  const ghostDisabledColors = useComponentColors('buttonGhostDisabled');

  // Obtener clases CSS escalables
  const typographyClass = getTypographyClass('button', size);
  const sizeClass = `btn-size-${size}`;
  
<<<<<<< HEAD
  // Mapear tamaño de botón a tamaño de icono semántico
  const getIconSize = (buttonSize) => {
    const sizeMap = {
      sm: 'sm',    // 16px -> sm
      md: 'md',    // 20px -> md  
      lg: 'lg',    // 24px -> lg
      xl: 'xl'     // 32px -> xl
    };
    return sizeMap[buttonSize] || 'md';
  };
  
  const iconSize = getIconSize(size);
=======
  // Para iconos mantenemos compatibilidad con valores numéricos
  const iconSize = getSizeValue('button', size, 'iconSize');
>>>>>>> 1c2f8e479a4da00e94b650f0c970d265cb46ef08

  const getColors = () => {
    if (disabled) return { color: ghostDisabledColors.text };
    if (selected) return { color: ghostSelectedColors.text };
    if (isHovering && !disabled && !selected) return { color: ghostHoverColors.text };
    return { color: ghostColors.text };
  };

  const currentColors = getColors();

  // Estilos base mínimos (solo colores y propiedades no escalables)
  const buttonStyles = {
    // Colors from semantic-colors - Ghost style
    backgroundColor: 'transparent',
    color: currentColors.color,
    border: 'none',
    borderRadius: '0',

    // Borde inferior solo cuando está seleccionado
    borderBottom: selected ? `2px solid ${currentColors.color}` : '2px solid transparent',

    // Interactions
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'all 0.2s ease-in-out',
    userSelect: 'none',
    outline: 'none',
    opacity: disabled ? 0.6 : 1,

    // Typography weight específico para XL
    fontWeight: size === 'xl' ? 700 : 500,
    fontFamily: 'Ubuntu, sans-serif',

    // Custom styles
    ...style
  };

  // Generar className combinando clases escalables
  const combinedClassName = [
    'component-base',
    'component-flex-center', 
    'component-interactive',
    typographyClass,
    sizeClass,
    disabled && 'component-disabled',
    className
  ].filter(Boolean).join(' ');

  const handleMouseEnter = () => {
    if (!disabled) {
      setIsHovering(true);
    }
  };

  const handleMouseLeave = () => {
    if (!disabled) {
      setIsHovering(false);
    }
  };

  const handleClick = (e) => {
    if (!disabled && onClick) onClick(e);
  };

  return (
    <button
      ref={buttonRef}
      className={combinedClassName}
      style={buttonStyles}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      disabled={disabled}
      {...props}
    >
      {leftIcon && (
        <Icon 
          name={leftIcon} 
          size={iconSize}
          color="currentColor" 
        />
      )}
      
      <span className="component-flex-center component-no-wrap">
        {children}
      </span>
      
      {rightIcon && (
        <Icon 
          name={rightIcon} 
          size={iconSize}
          color="currentColor" 
        />
      )}
    </button>
  );
};

export default ButtonGhost;