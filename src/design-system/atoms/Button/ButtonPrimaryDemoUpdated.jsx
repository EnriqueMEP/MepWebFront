import React, { useState } from 'react';
import { ButtonPrimarySm, ButtonPrimaryMd, ButtonPrimaryLg, ButtonPrimaryXl } from './index.js';

const ButtonPrimaryDemo = () => {
  const [selectedButtons, setSelectedButtons] = useState({
    sm: false,
    md: false,
    lg: false,
    xl: false
  });

  const toggleSelection = (size) => {
    setSelectedButtons(prev => ({
      ...prev,
      [size]: !prev[size]
    }));
  };

  const containerStyles = {
    padding: '40px',
    backgroundColor: '#1a1a1a',
    color: '#ffffff',
    fontFamily: 'Inter, system-ui, sans-serif',
    minHeight: '100vh'
  };

  const sectionStyles = {
    marginBottom: '40px',
    padding: '20px',
    backgroundColor: '#2a2a2a',
    borderRadius: '8px',
    border: '1px solid #3a3a3a'
  };

  const titleStyles = {
    fontSize: '24px',
    fontWeight: '600',
    marginBottom: '20px',
    color: '#ffffff'
  };

  const subtitleStyles = {
    fontSize: '18px',
    fontWeight: '500',
    marginBottom: '16px',
    color: '#cccccc'
  };

  const gridStyles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '20px',
    marginBottom: '30px'
  };

  const itemStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '12px',
    padding: '16px',
    backgroundColor: '#1a1a1a',
    borderRadius: '8px',
    border: '1px solid #444444'
  };

  const labelStyles = {
    fontSize: '14px',
    color: '#888888',
    fontWeight: '500'
  };

  const PlusIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
    </svg>
  );

  const StarIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
    </svg>
  );

  return (
    <div style={containerStyles}>
      <h1 style={titleStyles}>ButtonPrimary - Componentes Individuales</h1>
      
      {/* Sección: Tamaños básicos */}
      <div style={sectionStyles}>
        <h2 style={subtitleStyles}>Los 4 Tamaños</h2>
        <div style={gridStyles}>
          <div style={itemStyles}>
            <ButtonPrimarySm onClick={() => alert('Small button clicked!')}>
              Small (SM)
            </ButtonPrimarySm>
            <span style={labelStyles}>ButtonPrimarySm</span>
          </div>
          
          <div style={itemStyles}>
            <ButtonPrimaryMd onClick={() => alert('Medium button clicked!')}>
              Medium (MD)
            </ButtonPrimaryMd>
            <span style={labelStyles}>ButtonPrimaryMd</span>
          </div>
          
          <div style={itemStyles}>
            <ButtonPrimaryLg onClick={() => alert('Large button clicked!')}>
              Large (LG)
            </ButtonPrimaryLg>
            <span style={labelStyles}>ButtonPrimaryLg</span>
          </div>
          
          <div style={itemStyles}>
            <ButtonPrimaryXl onClick={() => alert('Extra Large button clicked!')}>
              Extra Large (XL)
            </ButtonPrimaryXl>
            <span style={labelStyles}>ButtonPrimaryXl</span>
          </div>
        </div>
      </div>

      {/* Sección: Estados - Con iconos */}
      <div style={sectionStyles}>
        <h2 style={subtitleStyles}>Con Iconos</h2>
        <div style={gridStyles}>
          <div style={itemStyles}>
            <ButtonPrimarySm leftIcon={<PlusIcon />}>
              Add Item
            </ButtonPrimarySm>
            <span style={labelStyles}>Con icono izquierdo</span>
          </div>
          
          <div style={itemStyles}>
            <ButtonPrimaryMd rightIcon={<StarIcon />}>
              Premium
            </ButtonPrimaryMd>
            <span style={labelStyles}>Con icono derecho</span>
          </div>
        </div>
      </div>

      {/* Sección: Estados - Seleccionables (sin popup) */}
      <div style={sectionStyles}>
        <h2 style={subtitleStyles}>Estados Seleccionables (sin popup)</h2>
        <div style={gridStyles}>
          <div style={itemStyles}>
            <ButtonPrimarySm 
              selected={selectedButtons.sm}
              onClick={() => toggleSelection('sm')}
            >
              {selectedButtons.sm ? 'Seleccionado' : 'Seleccionar'}
            </ButtonPrimarySm>
            <span style={labelStyles}>State: {selectedButtons.sm ? 'Selected' : 'Default'}</span>
          </div>
          
          <div style={itemStyles}>
            <ButtonPrimaryMd 
              selected={selectedButtons.md}
              onClick={() => toggleSelection('md')}
            >
              {selectedButtons.md ? 'Seleccionado' : 'Seleccionar'}
            </ButtonPrimaryMd>
            <span style={labelStyles}>State: {selectedButtons.md ? 'Selected' : 'Default'}</span>
          </div>
          
          <div style={itemStyles}>
            <ButtonPrimaryLg 
              selected={selectedButtons.lg}
              onClick={() => toggleSelection('lg')}
            >
              {selectedButtons.lg ? 'Seleccionado' : 'Seleccionar'}
            </ButtonPrimaryLg>
            <span style={labelStyles}>State: {selectedButtons.lg ? 'Selected' : 'Default'}</span>
          </div>
          
          <div style={itemStyles}>
            <ButtonPrimaryXl 
              selected={selectedButtons.xl}
              onClick={() => toggleSelection('xl')}
            >
              {selectedButtons.xl ? 'Seleccionado' : 'Seleccionar'}
            </ButtonPrimaryXl>
            <span style={labelStyles}>State: {selectedButtons.xl ? 'Selected' : 'Default'}</span>
          </div>
        </div>
      </div>

      {/* Sección: Estados disabled */}
      <div style={sectionStyles}>
        <h2 style={subtitleStyles}>Estados Deshabilitados</h2>
        <div style={gridStyles}>
          <div style={itemStyles}>
            <ButtonPrimarySm disabled>
              Disabled Small
            </ButtonPrimarySm>
            <span style={labelStyles}>Disabled State</span>
          </div>
          
          <div style={itemStyles}>
            <ButtonPrimaryMd disabled>
              Disabled Medium
            </ButtonPrimaryMd>
            <span style={labelStyles}>Disabled State</span>
          </div>
          
          <div style={itemStyles}>
            <ButtonPrimaryLg disabled>
              Disabled Large
            </ButtonPrimaryLg>
            <span style={labelStyles}>Disabled State</span>
          </div>
          
          <div style={itemStyles}>
            <ButtonPrimaryXl disabled>
              Disabled XL
            </ButtonPrimaryXl>
            <span style={labelStyles}>Disabled State</span>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default ButtonPrimaryDemo;