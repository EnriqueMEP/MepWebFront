import React, { useEffect } from 'react';
import { svgLineIcons, svgFillIcons } from './svg-imports.js';
import { injectResponsiveClasses } from '../responsive-classes.js';

/**
 * Componente Icon Universal
 * Usa exactamente los archivos SVG originales importados directamente
 * Sin copias ni inventos - solo los SVGs reales
 * ACTUALIZADO: Usa clases CSS escalables como Home para comportamiento de zoom consistente
 */
const Icon = ({ 
  name, 
  type = 'line', 
  size = 'md', // Cambiado a usar tamaños semánticos: sm, md, lg, xl (pero con compatibilidad hacia atrás)
  color = 'currentColor',
  className = '',
  style = {},
  ...props 
}) => {
  // Inyectar clases CSS responsivas al montar
  useEffect(() => {
    injectResponsiveClasses();
  }, []);

  // Seleccionar el conjunto de iconos correcto
  const iconSet = type === 'fill' ? svgFillIcons : svgLineIcons;
  const svgContent = iconSet[name];

  // Mapear tamaño semántico a clase CSS con compatibilidad hacia atrás
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

  // Si no existe el icono, mostrar error
  if (!svgContent) {
    const availableIcons = Object.keys(iconSet);
    console.warn(`Icon "${name}" not found in ${type} set. Available: ${availableIcons.join(', ')}`);
    
    return (
      <div 
        className={`icon-error ${sizeClass} ${className}`}
        style={{ 
          backgroundColor: '#fef2f2', 
          display: 'inline-flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          fontSize: 'clamp(0.5rem, 0.56vw, 0.56vw)',
          color: '#dc2626',
          borderRadius: '2px',
          fontWeight: 'bold',
          border: '1px solid #fecaca',
          ...style
        }}
        title={`Icon not found: ${name} (${type})`}
        {...props}
      >
        !
      </div>
    );
  }

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
      {...props}
      aria-label={name}
      dangerouslySetInnerHTML={{ __html: processedSvg }}
    />
  );
};

export default Icon;