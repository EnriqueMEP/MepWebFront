import React, { useRef } from 'react';
import { lightTheme } from '../../../foundations/semantic-colors.js';
import { textStyles } from '../../../foundations/typography.js';
import Icon from '../../../foundations/icons/Icon.jsx';

/**
 * ButtonPrimaryLg - Botón Primary Large (Migrado)
 * Fondo sólido olive con texto neutral[50]
 * Usa semantic-colors para los tokens de color
 * Colores: Default olive[500], Hover olive[700], Selected olive[700], Disabled olive[300]
 */
export const ButtonPrimaryLg = ({ 
  children = 'Button', 
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

  const getColors = () => {
    if (disabled) return { 
      backgroundColor: lightTheme.buttonPrimaryDisabled.background, 
      color: lightTheme.buttonPrimaryDisabled.text 
    };
    if (selected) return { 
      backgroundColor: lightTheme.buttonPrimarySelected.background, 
      color: lightTheme.buttonPrimarySelected.text 
    };
    return { 
      backgroundColor: lightTheme.buttonPrimaryDefault.background, 
      color: lightTheme.buttonPrimaryDefault.text 
    };
  };

  const colors = getColors();

  const buttonStyles = {
    // Layout foundations
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '12px',
    
    // Size - LG
    height: '48px',
    padding: '16px 20px',
    minWidth: 'fit-content',
    
    // Colors from semantic-colors
    backgroundColor: colors.backgroundColor,
    color: colors.color,
    border: 'none',
    borderRadius: '0',
    
    // Typography from foundations
    fontFamily: textStyles.buttonLarge.fontFamily,
    fontSize: textStyles.buttonLarge.fontSize,
    fontWeight: textStyles.buttonLarge.fontWeight,
    lineHeight: textStyles.buttonLarge.lineHeight,

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
    if (!disabled && !selected && buttonRef.current) {
      buttonRef.current.style.backgroundColor = lightTheme.buttonPrimaryHover.background;
    }
  };

  const handleMouseLeave = () => {
    if (!disabled && !selected && buttonRef.current) {
      buttonRef.current.style.backgroundColor = lightTheme.buttonPrimaryDefault.background;
    }
  };

  const handleClick = (e) => {
    if (!disabled && onClick) onClick(e);
  };

  return (
    <button
      ref={buttonRef}
      className={`btn-primary-lg ${className}`}
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
          size={20} 
          color={colors.color}
        />
      )}
      <span>{children}</span>
      {rightIcon && (
        <Icon 
          name={rightIcon} 
          size={20} 
          color={colors.color}
        />
      )}
    </button>
  );
};

export default ButtonPrimaryLg;


