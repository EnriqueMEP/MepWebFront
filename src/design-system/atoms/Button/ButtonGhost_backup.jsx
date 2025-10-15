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

const ButtonGhost = ({
  children = 'Button',
  size = 'md',
  leftIcon,
  rightIcon,
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

  // Determinar el estado para los colores
  const colorState = disabled ? 'buttonGhostDisabled' :
                    selected ? 'buttonGhostSelected' :
                    'buttonGhost';
  
  const colors = useComponentColors(colorState);
  const hoverColors = useComponentColors('buttonGhostHover');

  // Obtener clases CSS escalables
  const typographyClass = getTypographyClass('button', size);
  const sizeClass = `btn-size-${size}`;
  
  // Para iconos mantenemos compatibilidad con valores numéricos
  const iconSize = getSizeValue('button', size, 'iconSize');

  // Estilos base mínimos (solo colores y propiedades no escalables)
  const buttonStyles = {
    backgroundColor: 'transparent',
    color: colors.color,
    border: 'none',
    cursor: disabled ? 'not-allowed' : 'pointer',
    fontFamily: 'Ubuntu, sans-serif',
    fontWeight: size === 'xl' ? 700 : 500,
    outline: 'none',
    ...style
  };

  const [isHovered, setIsHovered] = useState(false);

  const finalStyles = {
    ...buttonStyles,
    ...(isHovered && !disabled && !selected ? {
      color: hoverColors.color
    } : {})
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
  const buttonRef = useRef(null);
  const sizeConfig = SIZES[size] || SIZES.md;
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

  const getColors = () => {
    if (disabled) return { color: ghostDisabledColors.text };
    if (selected) return { color: ghostSelectedColors.text };
    if (isHovering && !disabled && !selected) return { color: ghostHoverColors.text };
    return { color: ghostColors.text };
  };

  const currentColors = getColors();

  const buttonStyles = {
    // Layout foundations
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: sizeConfig.gap,

    // Fixed sizing - no expansion on zoom
    height: sizeConfig.height,
    width: sizeConfig.width,
    padding: sizeConfig.padding,
    flexShrink: 0, // Prevent shrinking on zoom

    // Colors from semantic-colors - Ghost style
    backgroundColor: 'transparent',
    color: currentColors.color,
    border: 'none',
    borderRadius: '0',

    // Borde inferior solo cuando está seleccionado
    borderBottom: selected ? `2px solid ${currentColors.color}` : '2px solid transparent',

    // Dynamic typography from foundations
    fontFamily: sizeConfig.typography.fontFamily,
    fontSize: sizeConfig.typography.fontSize,
    fontWeight: sizeConfig.typography.fontWeight,
    lineHeight: sizeConfig.typography.lineHeight,

    // Interactions
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'all 0.2s ease-in-out',
    userSelect: 'none',
    outline: 'none',
    opacity: disabled ? 0.6 : 1,

    // Custom styles
    ...style
  };

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
      className={`btn-ghost-${size} ${className}`}
      style={buttonStyles}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      disabled={disabled}
      type="button"
      {...props}
    >
      {leftIcon && (
        <Icon
          name={leftIcon}
          size={sizeConfig.iconSize}
          color={currentColors.color}
        />
      )}
      <span>{children}</span>
      {rightIcon && (
        <Icon
          name={rightIcon}
          size={sizeConfig.iconSize}
          color={currentColors.color}
        />
      )}
    </button>
  );
};

export default ButtonGhost;

