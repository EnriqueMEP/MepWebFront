import React, { useRef } from 'react';
import { primitiveColors } from '../../../foundations/colors.js';
import { textStyles } from '../../../foundations/typography.js';
import { lightElevation } from '../../../foundations/elevation.js';
import Icon from '../../../foundations/icons/Icon.jsx';

/**
 * ButtonPrimaryXl - BotÃ³n Primary Extra Large
 * Extrae todos los valores de foundations (sin hardcodeo)
 * Usa el sistema de iconos foundations
 */
export const ButtonPrimaryXl = ({ 
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
    if (selected) return primitiveColors.olive[800];
    return primitiveColors.olive[600];
  };

  const buttonStyles = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '12px',
    
    // Size - XL
    height: '56px',
    padding: '8px 24px',
    minWidth: 'fit-content',
    
    // Colors from foundations
    backgroundColor: getBackgroundColor(),
    color: primitiveColors.neutral[50],
    border: 'none',
    borderRadius: '0',
    
    // Typography from foundations
    fontFamily: textStyles.buttonXL.fontFamily,
    fontSize: textStyles.buttonXL.fontSize,
    fontWeight: textStyles.buttonXL.fontWeight,
    lineHeight: textStyles.buttonXL.lineHeight,
    
    // Elevation from foundations
    boxShadow: lightElevation.surface,
    
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'all 0.2s ease-in-out',
    userSelect: 'none',
    outline: 'none',
    opacity: disabled ? 0.6 : 1,
    
    ...style
  };

  const handleMouseEnter = () => {
    if (!disabled && !selected && buttonRef.current) {
      buttonRef.current.style.backgroundColor = primitiveColors.olive[700];
    }
  };

  const handleMouseLeave = () => {
    if (!disabled && !selected && buttonRef.current) {
      buttonRef.current.style.backgroundColor = primitiveColors.olive[600];
    }
  };

  const handleClick = (e) => {
    if (!disabled && onClick) onClick(e);
  };

  return (
    <button
      ref={buttonRef}
      className={`btn-primary-xl ${className}`}
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
          size={24} 
          color={primitiveColors.neutral[50]}
        />
      )}
      <span>{children}</span>
      {rightIcon && (
        <Icon 
          name={rightIcon} 
          size={24} 
          color={primitiveColors.neutral[50]}
        />
      )}
    </button>
  );
};

export default ButtonPrimaryXl;

