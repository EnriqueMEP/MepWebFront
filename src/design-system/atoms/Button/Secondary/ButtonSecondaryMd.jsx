import React, { useRef } from 'react';
import { primitiveColors } from '../../../foundations/colors.js';
import { textStyles } from '../../../foundations/typography.js';
import { lightElevation } from '../../../foundations/elevation.js';
import Icon from '../../../foundations/icons/Icon.jsx';

/**
 * ButtonSecondaryMd - Botón Secondary Medium
 * Extrae todos los valores de foundations (sin hardcodeo)
 * Usa el sistema de iconos foundations
 * Colores: Default green[500], Hover green[700], Selected green[500], Disabled green[400]
 */
export const ButtonSecondaryMd = ({
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
    if (disabled) return primitiveColors.green[400]; // #6fbc5e
    if (selected) return primitiveColors.green[500]; // #53AF32
    return primitiveColors.green[500]; // #53AF32
  };

  const buttonStyles = {
    // Layout foundations
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',

    // Size - MD
    height: '44px',
    padding: '12px 20px',
    minWidth: 'fit-content',

    // Colors from foundations
    backgroundColor: getBackgroundColor(),
    color: primitiveColors.neutral[50],
    border: 'none',
    borderRadius: '0',

    // Typography from foundations
    fontFamily: textStyles.buttonMedium.fontFamily,
    fontSize: textStyles.buttonMedium.fontSize,
    fontWeight: textStyles.buttonMedium.fontWeight,
    lineHeight: textStyles.buttonMedium.lineHeight,

    // Elevation from foundations
    boxShadow: lightElevation.surface,

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
      buttonRef.current.style.backgroundColor = primitiveColors.green[700]; // #367b23
    }
  };

  const handleMouseLeave = () => {
    if (!disabled && !selected && buttonRef.current) {
      buttonRef.current.style.backgroundColor = primitiveColors.green[500]; // #53AF32
    }
  };

  const handleClick = (e) => {
    if (!disabled && onClick) onClick(e);
  };

  return (
    <button
      ref={buttonRef}
      className={`btn-secondary-md ${className}`}
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
          size={16}
          color={primitiveColors.neutral[50]}
        />
      )}
      <span>{children}</span>
      {rightIcon && (
        <Icon
          name={rightIcon}
          size={16}
          color={primitiveColors.neutral[50]}
        />
      )}
    </button>
  );
};

export default ButtonSecondaryMd;
