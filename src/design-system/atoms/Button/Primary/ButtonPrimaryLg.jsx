import React, { useRef } from 'react';
import { primitiveColors } from '../../../foundations/colors.js';
import { textStyles } from '../../../foundations/typography.js';
import Icon from '../../../foundations/icons/Icon.jsx';

/**
 * ButtonPrimaryLg - Botón Primary Large
 * Extrae todos los valores de foundations (sin hardcodeo)
 * Usa el sistema de iconos foundations
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

  const getBackgroundColor = () => {
    if (disabled) return primitiveColors.olive[300];
    if (selected) return primitiveColors.olive[700];
    return primitiveColors.olive[500];
  };

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
    
    // Colors from foundations
    backgroundColor: getBackgroundColor(),
    color: primitiveColors.neutral[50],
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
      buttonRef.current.style.backgroundColor = primitiveColors.olive[700];
    }
  };

  const handleMouseLeave = () => {
    if (!disabled && !selected && buttonRef.current) {
      buttonRef.current.style.backgroundColor = primitiveColors.olive[500];
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
          size={18} 
          color={primitiveColors.neutral[50]}
        />
      )}
      <span>{children}</span>
      {rightIcon && (
        <Icon 
          name={rightIcon} 
          size={18} 
          color={primitiveColors.neutral[50]}
        />
      )}
    </button>
  );
};

export default ButtonPrimaryLg;

