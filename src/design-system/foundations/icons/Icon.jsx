<<<<<<< HEAD
import React, { useEffect } from 'react';
import { svgLineIcons, svgFillIcons } from './svg-imports.js';
import { injectResponsiveClasses } from '../responsive-classes.js';
=======
import React from 'react';
import { svgLineIcons, svgFillIcons } from './svg-imports.js';
>>>>>>> 1c2f8e479a4da00e94b650f0c970d265cb46ef08

/**
 * Componente Icon Universal
 * Usa exactamente los archivos SVG originales importados directamente
 * Sin copias ni inventos - solo los SVGs reales
<<<<<<< HEAD
 * ACTUALIZADO: Usa clases CSS escalables como Home para comportamiento de zoom consistente
=======
>>>>>>> 1c2f8e479a4da00e94b650f0c970d265cb46ef08
 */
const Icon = ({ 
  name, 
  type = 'line', 
<<<<<<< HEAD
  size = 'md', // Cambiado a usar tamaños semánticos: sm, md, lg, xl
=======
  size = 24, 
>>>>>>> 1c2f8e479a4da00e94b650f0c970d265cb46ef08
  color = 'currentColor',
  className = '',
  style = {},
  ...props 
}) => {
<<<<<<< HEAD
  // Inyectar clases CSS responsivas al montar
  useEffect(() => {
    injectResponsiveClasses();
  }, []);

=======
>>>>>>> 1c2f8e479a4da00e94b650f0c970d265cb46ef08
  // Seleccionar el conjunto de iconos correcto
  const iconSet = type === 'fill' ? svgFillIcons : svgLineIcons;
  const svgContent = iconSet[name];

<<<<<<< HEAD
  // Mapear tamaño semántico a clase CSS
  const getSizeClass = (size) => {
    if (typeof size === 'number') {
      // Compatibilidad hacia atrás - convertir px a tamaño semántico más cercano
      if (size <= 16) return 'icon-size-sm';
      if (size <= 20) return 'icon-size-md';
      if (size <= 24) return 'icon-size-lg';
      return 'icon-size-xl';
    }
    
    // Usar tamaños semánticos directamente
    const sizeMap = {
      sm: 'icon-size-sm',
      md: 'icon-size-md', 
      lg: 'icon-size-lg',
      xl: 'icon-size-xl'
    };
    
    return sizeMap[size] || 'icon-size-md';
  };

  const sizeClass = getSizeClass(size);

=======
>>>>>>> 1c2f8e479a4da00e94b650f0c970d265cb46ef08
  // Si no existe el icono, mostrar error
  if (!svgContent) {
    const availableIcons = Object.keys(iconSet);
    console.warn(`Icon "${name}" not found in ${type} set. Available: ${availableIcons.join(', ')}`);
    
    return (
      <div 
<<<<<<< HEAD
        className={`icon-error ${sizeClass} ${className}`}
        style={{ 
=======
        style={{ 
          width: size, 
          height: size, 
>>>>>>> 1c2f8e479a4da00e94b650f0c970d265cb46ef08
          backgroundColor: '#fef2f2', 
          display: 'inline-flex', 
          alignItems: 'center', 
          justifyContent: 'center',
<<<<<<< HEAD
          fontSize: 'clamp(0.5rem, 0.56vw, 0.56vw)',
=======
          fontSize: Math.max(8, size * 0.3),
>>>>>>> 1c2f8e479a4da00e94b650f0c970d265cb46ef08
          color: '#dc2626',
          borderRadius: '2px',
          fontWeight: 'bold',
          border: '1px solid #fecaca',
          ...style
        }}
<<<<<<< HEAD
=======
        className={`icon-error ${className}`}
>>>>>>> 1c2f8e479a4da00e94b650f0c970d265cb46ef08
        title={`Icon not found: ${name} (${type})`}
        {...props}
      >
        !
      </div>
    );
  }

<<<<<<< HEAD
  // Procesar el SVG original para aplicar color (tamaño se maneja con CSS)
  const processedSvg = svgContent
    .replace(/width="[^"]*"/g, 'width="100%"')
    .replace(/height="[^"]*"/g, 'height="100%"')
    .replace(/fill="[^"]*"/g, `fill="${color}"`);

  // Generar className combinando clases escalables
  const combinedClassName = [
    'component-base',
    'component-flex-center',
    `icon-${type}`,
    sizeClass,
    className
  ].filter(Boolean).join(' ');

  return (
    <div
      className={combinedClassName}
      style={{
        color: color,
        ...style
      }}
=======
  // Procesar el SVG original para aplicar tamaño y color
  const processedSvg = svgContent
    .replace(/width="[^"]*"/g, `width="${size}"`)
    .replace(/height="[^"]*"/g, `height="${size}"`)
    .replace(/fill="[^"]*"/g, `fill="${color}"`);

  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: size,
        height: size,
        color: color,
        ...style
      }}
      className={`icon-${type} ${className}`}
>>>>>>> 1c2f8e479a4da00e94b650f0c970d265cb46ef08
      {...props}
      aria-label={name}
      dangerouslySetInnerHTML={{ __html: processedSvg }}
    />
  );
};

export default Icon;