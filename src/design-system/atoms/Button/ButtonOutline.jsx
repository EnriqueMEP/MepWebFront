import React, { useRef, useState, useEffect } from 'react';
import { useComponentColors } from '../../foundations/theme-hooks.js';
import { injectResponsiveClasses, getTypographyClass, getSizeValue } from '../../foundations/responsive-classes.js';
import Icon from '../../foundations/icons/Icon.jsx';

/**
 * ButtonOutline - Botón Outline Unificado
 * Usa tokens semánticos adaptativos para light/dark mode
 * Tamaños: sm, md, lg, xl
 * Estados: normal, hover, selected, disabled
 * Background transparente, border color igual al texto
 * ACTUALIZADO: Usa clases CSS escalables como Home para comportamiento de zoom consistente
 */

export const ButtonOutline = ({
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

  // Obtener colores semánticos para outline button
  const outlineColors = useComponentColors('buttonOutlineDefault');
  const outlineHoverColors = useComponentColors('buttonOutlineHover');
  const outlineSelectedColors = useComponentColors('buttonOutlineSelected'); 
  const outlineDisabledColors = useComponentColors('buttonOutlineDisabled');

  // Obtener clases CSS escalables
  const typographyClass = getTypographyClass('button', size);
  const sizeClass = `btn-size-${size}`;
  
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

  const getColors = () => {
    if (disabled) return outlineDisabledColors;
    if (selected) return outlineSelectedColors;
    if (isHovering && !disabled && !selected) return outlineHoverColors;
    return outlineColors;
  };

  const currentColors = getColors();

  // Estilos base mínimos (solo colores y propiedades no escalables)
  const buttonStyles = {
    // Colors from semantic-colors - Outline style
    backgroundColor: currentColors.backgroundColor || 'transparent',
    color: currentColors.color || currentColors.text,
    border: `1px solid ${currentColors.borderColor || currentColors.color || currentColors.text}`,
    borderRadius: '0',

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

export default ButtonOutline;