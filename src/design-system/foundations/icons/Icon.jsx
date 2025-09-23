import React from 'react';
import { svgLineIcons, svgFillIcons } from './svg-imports.js';

/**
 * Componente Icon Universal
 * Usa exactamente los archivos SVG originales importados directamente
 * Sin copias ni inventos - solo los SVGs reales
 */
const Icon = ({ 
  name, 
  type = 'line', 
  size = 24, 
  color = 'currentColor',
  className = '',
  style = {},
  ...props 
}) => {
  // Seleccionar el conjunto de iconos correcto
  const iconSet = type === 'fill' ? svgFillIcons : svgLineIcons;
  const svgContent = iconSet[name];

  // Si no existe el icono, mostrar error
  if (!svgContent) {
    const availableIcons = Object.keys(iconSet);
    console.warn(`Icon "${name}" not found in ${type} set. Available: ${availableIcons.join(', ')}`);
    
    return (
      <div 
        style={{ 
          width: size, 
          height: size, 
          backgroundColor: '#fef2f2', 
          display: 'inline-flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          fontSize: Math.max(8, size * 0.3),
          color: '#dc2626',
          borderRadius: '2px',
          fontWeight: 'bold',
          border: '1px solid #fecaca',
          ...style
        }}
        className={`icon-error ${className}`}
        title={`Icon not found: ${name} (${type})`}
        {...props}
      >
        !
      </div>
    );
  }

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
      {...props}
      aria-label={name}
      dangerouslySetInnerHTML={{ __html: processedSvg }}
    />
  );
};

export default Icon;