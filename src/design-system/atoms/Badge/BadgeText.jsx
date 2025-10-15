import React from 'react';
import { useComponentColors } from '../../foundations/theme-hooks.js';
import { injectResponsiveClasses, getTypographyClass } from '../../foundations/responsive-classes.js';

/**
 * BadgeText - Etiqueta con texto corto, útil para clasificar o resaltar
 * 
 * Características:
 * - Etiqueta rectangular con texto
 * - 4 tamaños: sm, md, lg, xl con diferentes paddings y fuentes
 * - 3 variantes: primary, secondary, outline
 * - Soporte para light/dark mode automático
 * - ACTUALIZADO: Usa clases CSS escalables como Home para comportamiento de zoom consistente
 * 
 * Casos de uso:
 * - Mostrar categorías o estados nominales (ej. Beta, Nuevo, Activo)
 * - Resaltar prioridad o etiquetas contextuales
 * - Usar tamaño sm para tablas, md o lg en contextos destacados
 * 
 * @param {string} children - Texto del badge
 * @param {string} variant - Variante del badge: 'primary' | 'secondary' | 'outline'
 * @param {string} size - Tamaño del badge: 'sm' | 'md' | 'lg' | 'xl'
 * @param {string} className - Clases CSS adicionales
 * @param {object} style - Estilos inline adicionales
 * @param {object} props - Props adicionales HTML
 */
const BadgeText = ({
  children = 'Label',
  variant = 'primary',
  size = 'md',
  className = '',
  style = {},
  ...props
}) => {
  // Inyectar clases CSS responsivas al montar
  React.useEffect(() => {
    injectResponsiveClasses();
  }, []);

  // Obtener colores del sistema semántico
  const colors = useComponentColors(`badge${variant.charAt(0).toUpperCase() + variant.slice(1)}`);

  // Obtener clases CSS escalables
  const typographyClass = getTypographyClass('badge', size);
  const sizeClass = `badge-size-${size}`;

  // Estilos base mínimos (solo colores y propiedades no escalables)
  const badgeStyles = {
    backgroundColor: colors.backgroundColor,
    color: colors.color,
    fontFamily: 'Ubuntu, sans-serif',
    fontWeight: size === 'sm' ? '500' : '700',
    textAlign: 'center',
    // Para variante outline
    ...(variant === 'outline' && {
      outline: `1px solid ${colors.borderColor}`,
      outlineOffset: '-1px',
      backgroundColor: 'transparent'
    }),
    ...style
  };

  // Generar className combinando clases escalables
  const combinedClassName = [
    'component-base',
    'component-flex-center',
    'component-no-wrap',
    typographyClass,
    sizeClass,
    className
  ].filter(Boolean).join(' ');

  return (
    <span
      className={combinedClassName}
      style={badgeStyles}
      role="status"
      aria-label={`Badge ${variant}: ${children}`}
      {...props}
    >
      {children}
    </span>
  );
};

export default BadgeText;