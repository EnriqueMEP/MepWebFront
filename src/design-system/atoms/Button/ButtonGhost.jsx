import React, { useRef, useState, useEffect } from 'react';
import { useComponentColors } from '../../foundations/theme-hooks.js';
import { textStyles } from '../../foundations/typography.js';
import Icon from '../../foundations/icons/Icon.jsx';

/**
 * ButtonGhost - Botón Ghost Unificado
 * Usa tokens semánticos adaptativos para light/dark mode
 * Tamaños: sm, md, lg, xl
 * Estados: normal, hover, selected, disabled
 * Background transparente, sin border
 */

const SIZES = {
  sm: {
    height: '32px',
    width: 'fit-content', // max-width fijo según Figma
    padding: '8px 12px',
    gap: '12px',
    typography: textStyles.buttonSmall,
    iconSize: 16
  },
  md: {
    height: '40px',
    width: 'fit-content', // se ajusta al contenido pero sin expandir
    padding: '8px 16px',
    gap: '12px',
    typography: textStyles.buttonMedium,
    iconSize: 20
  },
  lg: {
    height: '48px',
    width: 'fit-content', // se ajusta al contenido pero sin expandir
    padding: '8px 20px',
    gap: '12px',
    typography: textStyles.buttonLarge,
    iconSize: 24
  },
  xl: {
    height: '56px',
    width: 'fit-content', // se ajusta al contenido pero sin expandir
    padding: '8px 24px',
    gap: '12px',
    typography: { ...textStyles.buttonXL, fontWeight: 700 }, // XL usa font-weight: 700
    iconSize: 32
  }
};

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

