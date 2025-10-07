import React from 'react';
import { ButtonPrimarySm } from './ButtonPrimarySm.jsx';
import { ButtonPrimaryMd } from './ButtonPrimaryMd.jsx';
import { ButtonPrimaryLg } from './ButtonPrimaryLg.jsx';
import { ButtonPrimaryXl } from './ButtonPrimaryXl.jsx';

/**
 * ButtonPrimarySimpleDemo - Demo simple de botones primarios
 * Muestra todos los tamaños sin iconos para referencia básica
 */
export const ButtonPrimarySimpleDemo = ({ isDarkMode = false }) => {
  const containerStyle = {
    padding: '24px',
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    fontFamily: 'Inter, system-ui, sans-serif',
    color: isDarkMode ? '#ffffff' : '#1a1a1a',
    backgroundColor: isDarkMode ? '#1a1a1a' : '#ffffff',
    minHeight: '100vh'
  };

  const sectionStyle = {
    display: 'flex',
    gap: '16px',
    alignItems: 'center',
    flexWrap: 'wrap'
  };

  const titleStyle = {
    margin: '0 0 16px 0',
    color: isDarkMode ? '#e5e7eb' : '#4a4a4a'
  };

  return (
    <div style={containerStyle}>
      <h1 style={{ margin: 0 }}>
        ButtonPrimary - Demo Simple
      </h1>
      
      <section>
        <h2 style={titleStyle}>Tamaños Disponibles</h2>
        <div style={sectionStyle}>
          <ButtonPrimarySm>Small</ButtonPrimarySm>
          <ButtonPrimaryMd>Medium</ButtonPrimaryMd>
          <ButtonPrimaryLg>Large</ButtonPrimaryLg>
          <ButtonPrimaryXl>Extra Large</ButtonPrimaryXl>
        </div>
      </section>

      <section>
        <h2 style={titleStyle}>Estados</h2>
        <div style={sectionStyle}>
          <ButtonPrimaryMd>Normal</ButtonPrimaryMd>
          <ButtonPrimaryMd disabled>Disabled</ButtonPrimaryMd>
          <ButtonPrimaryMd selected>Selected</ButtonPrimaryMd>
        </div>
      </section>

      <section>
        <h2 style={titleStyle}>Con Acciones</h2>
        <div style={sectionStyle}>
          <ButtonPrimaryMd onClick={() => alert('Botón clickeado!')}>
            Click Me
          </ButtonPrimaryMd>
          <ButtonPrimaryLg onClick={() => console.log('Logged!')}>
            Log Action
          </ButtonPrimaryLg>
        </div>
      </section>
    </div>
  );
};

export default ButtonPrimarySimpleDemo;
