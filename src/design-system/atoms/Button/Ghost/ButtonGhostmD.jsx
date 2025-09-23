import React, { useRef } from 'react';
import { lightTheme } from '../../../foundations/semantic-colors.js';
import { textStyles } from '../../../foundations/typography.js';
import Icon from '../../../foundations/icons/Icon.jsx';

/**
 * ButtonGhostMd - Botón Ghost Medium (Migrado)
 * Fondo y borde transparente por defecto
 * Solo muestra borde inferior cuando está seleccionado
 * Usa semantic-colors para los tokens de color
 * Colores olive: Default olive[500], Hover olive[700], Selected olive[500], Disabled olive[300]
 */
export const ButtonGhostMd = ({
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
    if (disabled) return { color: lightTheme.buttonGhostDisabled.text };
    if (selected) return { color: lightTheme.buttonGhostSelected.text };
    return { color: lightTheme.buttonGhostDefault.text };
  };

  const colors = getColors();

  const buttonStyles = {
    // Layout foundations
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '12px',

    // Size - MD
    height: '40px',
    padding: '12px 16px',
    minWidth: 'fit-content',

    // Colors from semantic-colors - Ghost style
    backgroundColor: 'transparent',
    color: colors.color,
    border: 'none',
    borderRadius: '0',

    // Borde inferior solo cuando está seleccionado
    borderBottom: selected ? `2px solid ${colors.color}` : '2px solid transparent',

    // Typography from foundations
    fontFamily: textStyles.buttonMedium.fontFamily,
    fontSize: textStyles.buttonMedium.fontSize,
    fontWeight: textStyles.buttonMedium.fontWeight,
    lineHeight: textStyles.buttonMedium.lineHeight,

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
      buttonRef.current.style.color = lightTheme.buttonGhostHover.text;
    }
  };

  const handleMouseLeave = () => {
    if (!disabled && !selected && buttonRef.current) {
      buttonRef.current.style.color = lightTheme.buttonGhostDefault.text;
    }
  };

  const handleClick = (e) => {
    if (!disabled && onClick) onClick(e);
  };

  return (
    <button
      ref={buttonRef}
      className={`btn-ghost-md ${className}`}
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
          color={colors.color}
        />
      )}
      <span>{children}</span>
      {rightIcon && (
        <Icon
          name={rightIcon}
          size={18}
          color={colors.color}
        />
      )}
    </button>
  );
};

export default ButtonGhostMd;

