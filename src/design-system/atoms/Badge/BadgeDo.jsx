import React from 'react';
import { useComponentColors } from '../../foundations/theme-hooks.js';

/**
 * BadgeDo - Punto visual (sin texto) que actúa como indicador de estado
 * 
 * Características:
 * - Punto visual circular sin texto
 * - 4 tamaños: sm (16px), md (20px), lg (24px), xl (32px)  
 * - 3 variantes: primary, secondary, warning
 * - Soporte para light/dark mode automático
 * 
 * Casos de uso:
 * - Señalar estado activo/inactivo (ej.: usuario en línea)
 * - Mostrar alertas ligeras sin interrumpir
 * - Complementar con tooltips cuando el significado no sea obvio
 * 
 * @param {string} variant - Variante del badge: 'primary' | 'secondary' | 'warning'
 * @param {string} size - Tamaño del badge: 'sm' | 'md' | 'lg' | 'xl'
 * @param {string} className - Clases CSS adicionales
 * @param {object} style - Estilos inline adicionales
 * @param {object} props - Props adicionales HTML
 */
const BadgeDo = ({
  variant = 'primary',
  size = 'md',
  className = '',
  style = {},
  ...props
}) => {
  // Obtener colores del sistema semántico
  const colors = useComponentColors(`badge${variant.charAt(0).toUpperCase() + variant.slice(1)}`);

  // Configuración de tamaños
  const sizeConfig = {
    sm: { 
      width: 16, 
      height: 16,
      borderRadius: 8 
    },
    md: { 
      width: 20, 
      height: 20,
      borderRadius: 10 
    },
    lg: { 
      width: 24, 
      height: 24,
      borderRadius: 12 
    },
    xl: { 
      width: 32, 
      height: 32,
      borderRadius: 16 
    }
  };

  const currentSize = sizeConfig[size] || sizeConfig.md;

  // Estilos del badge
  const badgeStyles = {
    display: 'inline-block',
    width: currentSize.width,
    height: currentSize.height,
    borderRadius: currentSize.borderRadius,
    backgroundColor: colors.backgroundColor,
    border: colors.borderColor !== 'transparent' ? `1px solid ${colors.borderColor}` : 'none',
    flexShrink: 0,
    ...style
  };

  return (
    <div
      className={`badge-do badge-do-${variant} badge-do-${size} ${className}`}
      style={badgeStyles}
      role="status"
      aria-label={`Badge ${variant}`}
      {...props}
    />
  );
};

export default BadgeDo;