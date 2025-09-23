import React, { useRef, useState, useEffect } from 'react';
import { useComponentColors } from '../../../foundations/theme-hooks.js';
import { textStyles } from '../../../foundations/typography.js';
import Icon from '../../../foundations/icons/Icon.jsx';

/**
 * ButtonSecondarySm - Botón Secondary Small con sistema semántico
 * Usa tokens semánticos adaptativos para light/dark mode
 * Soporta estados: normal, hover, selected, disabled
 */
export const ButtonSecondarySm = ({
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

  // Obtener colores semánticos para secondary button
  const secondaryColors = useComponentColors('buttonSecondary');
  const secondaryHoverColors = useComponentColors('buttonSecondaryHover');
  const secondaryDisabledColors = useComponentColors('buttonSecondaryDisabled');

  // Definir colores base según el estado actual (sin hover)
  const getBaseColors = () => {
    if (disabled) return secondaryDisabledColors; // Estado deshabilitado
    if (selected) return secondaryColors; // Estado seleccionado usa default
    return secondaryColors; // Estado normal usa secondary
  };

  // Definir colores de hover según el estado actual
  const getHoverColors = () => {
    if (disabled) return getBaseColors(); // Sin cambios si está disabled
    if (selected) return getBaseColors(); // Sin cambios si está selected
    // Estado normal hover: usar secondaryHover
    return secondaryHoverColors;
  };

  const baseColors = getBaseColors();
  const hoverColors = getHoverColors();

  // Estado para color actual del ícono
  const [currentIconColor, setCurrentIconColor] = useState(baseColors.text);

  // Sincronizar color del ícono cuando cambien los props
  useEffect(() => {
    setCurrentIconColor(baseColors.text);
  }, [baseColors.text]);

  const buttonStyles = {
    // Layout foundations
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '12px',

    // Size - SM
    height: '32px',
    padding: '8px 12px',
    minWidth: 'fit-content',

    // Colors from semantic tokens
    backgroundColor: baseColors.background,
    color: baseColors.text,
    border: 'none',
    borderRadius: '0',

    // Typography from foundations
    fontFamily: textStyles.buttonSmall.fontFamily,
    fontSize: textStyles.buttonSmall.fontSize,
    fontWeight: textStyles.buttonSmall.fontWeight,
    lineHeight: textStyles.buttonSmall.lineHeight,

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
      // Aplicar colores de hover
      buttonRef.current.style.backgroundColor = hoverColors.background;
      buttonRef.current.style.color = hoverColors.text;
      setCurrentIconColor(hoverColors.text);
    }
  };

  const handleMouseLeave = () => {
    if (!disabled && !selected && buttonRef.current) {
      // Restaurar colores base según estado actual
      buttonRef.current.style.backgroundColor = baseColors.background;
      buttonRef.current.style.color = baseColors.text;
      setCurrentIconColor(baseColors.text);
    }
  };

  const handleClick = (e) => {
    if (!disabled && onClick) onClick(e);
  };

  // Color dinámico para iconos
  const iconColor = currentIconColor;

  return (
    <button
      ref={buttonRef}
      className={`btn-secondary-sm ${className}`}
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
          color={iconColor}
        />
      )}
      <span>{children}</span>
      {rightIcon && (
        <Icon
          name={rightIcon}
          size={16}
          color={iconColor}
        />
      )}
    </button>
  );
};

export default ButtonSecondarySm;

