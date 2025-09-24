import React, { useRef, useState, useEffect } from 'react';
import { useComponentColors } from '../../foundations/theme-hooks.js';
import { textStyles } from '../../foundations/typography.js';
import Icon from '../../foundations/icons/Icon.jsx';

/**
 * ButtonSecondary - Botón Secondary Unificado
 * Usa tokens semánticos adaptativos para light/dark mode
 * Tamaños: sm, md, lg, xl
 * Estados: normal, hover, selected, disabled
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

export const ButtonSecondary = ({
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
    gap: sizeConfig.gap,

    // Fixed sizing - no expansion on zoom
    height: sizeConfig.height,
    width: sizeConfig.width,
    padding: sizeConfig.padding,
    flexShrink: 0, // Prevent shrinking on zoom

    // Colors from semantic tokens
    backgroundColor: baseColors.background,
    color: baseColors.text,
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
      className={`btn-secondary-${size} ${className}`}
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
          color={iconColor}
        />
      )}
      <span>{children}</span>
      {rightIcon && (
        <Icon
          name={rightIcon}
          size={sizeConfig.iconSize}
          color={iconColor}
        />
      )}
    </button>
  );
};

export default ButtonSecondary;

