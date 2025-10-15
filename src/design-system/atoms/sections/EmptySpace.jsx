import React from 'react';

/**
 * EmptySpace - Espaciado en blanco reutilizable
 * 
 * Props:
 * - size: Tamaño del espacio ('sm', 'md', 'lg', 'xl' o valor custom)
 * - className: Clase CSS adicional opcional
 */
const EmptySpace = ({ size = 'md', className = '' }) => {
  // Ya está definido en PageTemplate con la clase .empty-space
  // Este componente simplemente usa esa clase base
  
  return (
    <div className={`empty-space ${className}`} />
  );
};

export default EmptySpace;