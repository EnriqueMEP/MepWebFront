import React, { useRef, useState } from 'react';
import { useComponentColors } from '../../foundations/theme-hooks.js';
import { textStyles } from '../../foundations/typography.js';
import Icon from '../../foundations/icons/Icon.jsx';

/**
 * ButtonPrimary - Botón Primary Unificado
 * Fondo sólido olive con texto neutral[50]
 * Usa useComponentColors para soporte automático de dark/light mode
 * Tamaños: sm, md, lg, xl
 * Estados: default, hover, selected, disabled
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

export const ButtonPrimary = ({ 
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

  // Obtener colores semánticos para primary button
  const primaryColors = useComponentColors('buttonPrimaryDefault');
  const primaryHoverColors = useComponentColors('buttonPrimaryHover');
  const primarySelectedColors = useComponentColors('buttonPrimarySelected');
  const primaryDisabledColors = useComponentColors('buttonPrimaryDisabled');

  const getStateColors = () => {
    if (disabled) return {
      backgroundColor: primaryDisabledColors.background,
      color: primaryDisabledColors.text
    };
    if (selected) return {
      backgroundColor: primarySelectedColors.background,
      color: primarySelectedColors.text
    };
    if (isHovering && !disabled && !selected) return {
      backgroundColor: primaryHoverColors.background,
      color: primaryHoverColors.text
    };
    return {
      backgroundColor: primaryColors.background,
      color: primaryColors.text
    };
  };

  const stateColors = getStateColors();

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
    
    // Colors from semantic-colors with theme support
    backgroundColor: stateColors.backgroundColor,
    color: stateColors.color,
    border: 'none',
    borderRadius: '0',
    
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
    if (!disabled && !selected) {
      setIsHovering(true);
    }
  };

  const handleMouseLeave = () => {
    if (!disabled && !selected) {
      setIsHovering(false);
    }
  };

  const handleClick = (e) => {
    if (!disabled && onClick) onClick(e);
  };

  return (
    <button
      ref={buttonRef}
      className={`btn-primary-${size} ${className}`}
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
          color={stateColors.color}
        />
      )}
      <span>{children}</span>
      {rightIcon && (
        <Icon 
          name={rightIcon} 
          size={sizeConfig.iconSize} 
          color={stateColors.color}
        />
      )}
    </button>
  );
};

export default ButtonPrimary;



