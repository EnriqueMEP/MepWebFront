import React from 'react';
// Ghost buttons
import ButtonGhostSm from './Ghost/ButtonGhostSm.jsx';
import ButtonGhostMd from './Ghost/ButtonGhostmD.jsx';
import ButtonGhostLg from './Ghost/ButtonGhostLg.jsx';
import ButtonGhostXl from './Ghost/ButtonGhostXl.jsx';
// Primary buttons
import ButtonPrimarySm from './Primary/ButtonPrimarySm.jsx';
import ButtonPrimaryMd from './Primary/ButtonPrimaryMd.jsx';
import ButtonPrimaryLg from './Primary/ButtonPrimaryLg.jsx';
import ButtonPrimaryXl from './Primary/ButtonPrimaryXl.jsx';
// Secondary buttons
import ButtonSecondarySm from './Secondary/ButtonSecondarySm.jsx';
import ButtonSecondaryMd from './Secondary/ButtonSecondaryMd.jsx';
import ButtonSecondaryLg from './Secondary/ButtonSecondaryLg.jsx';
import ButtonSecondaryXl from './Secondary/ButtonSecondaryXl.jsx';
// Outline buttons
import ButtonOutlineSm from './Outline/ButtonOutlineSm.jsx';
import ButtonOutlineMd from './Outline/ButtonOutlineMd.jsx';
import ButtonOutlineLg from './Outline/ButtonOutlineLg.jsx';
import ButtonOutlineXl from './Outline/ButtonOutlineXl.jsx';

/**
 * Demo de Botones Migrados
 * Muestra los botones de design-system que ahora usan semantic-colors
 * pero mantienen el MISMO estilo visual que los de la raíz
 */
export const ButtonsMigratedDemo = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Inter, sans-serif' }}>
      <h2 style={{ color: '#333', marginBottom: '30px' }}>
        🎯 Botones Migrados - MISMO estilo que raíz + semantic-colors
      </h2>
      
      {/* GHOST BUTTONS */}
      <div style={{ marginBottom: '40px' }}>
        <h3 style={{ color: '#8B5CF6', marginBottom: '20px', fontSize: '18px' }}>
          👻 Ghost Buttons
        </h3>
        
        <div style={{ marginBottom: '25px' }}>
          <h4 style={{ color: '#666', marginBottom: '10px' }}>ButtonGhostSm (Small)</h4>
          <div style={{ display: 'flex', gap: '15px', alignItems: 'center', flexWrap: 'wrap' }}>
            <ButtonGhostSm>Default</ButtonGhostSm>
            <ButtonGhostSm selected>Selected</ButtonGhostSm>
            <ButtonGhostSm disabled>Disabled</ButtonGhostSm>
            <ButtonGhostSm leftIcon="ri_search-fill">Con icono</ButtonGhostSm>
          </div>
        </div>

        <div style={{ marginBottom: '25px' }}>
          <h4 style={{ color: '#666', marginBottom: '10px' }}>ButtonGhostMd (Medium)</h4>
          <div style={{ display: 'flex', gap: '15px', alignItems: 'center', flexWrap: 'wrap' }}>
            <ButtonGhostMd>Default</ButtonGhostMd>
            <ButtonGhostMd selected>Selected</ButtonGhostMd>
            <ButtonGhostMd disabled>Disabled</ButtonGhostMd>
            <ButtonGhostMd leftIcon="ri_search-fill">Con icono</ButtonGhostMd>
          </div>
        </div>

        <div style={{ marginBottom: '25px' }}>
          <h4 style={{ color: '#666', marginBottom: '10px' }}>ButtonGhostLg (Large)</h4>
          <div style={{ display: 'flex', gap: '15px', alignItems: 'center', flexWrap: 'wrap' }}>
            <ButtonGhostLg>Default</ButtonGhostLg>
            <ButtonGhostLg selected>Selected</ButtonGhostLg>
            <ButtonGhostLg disabled>Disabled</ButtonGhostLg>
            <ButtonGhostLg leftIcon="ri_search-fill">Con icono</ButtonGhostLg>
          </div>
        </div>

        <div style={{ marginBottom: '25px' }}>
          <h4 style={{ color: '#666', marginBottom: '10px' }}>ButtonGhostXl (Extra Large)</h4>
          <div style={{ display: 'flex', gap: '15px', alignItems: 'center', flexWrap: 'wrap' }}>
            <ButtonGhostXl>Default</ButtonGhostXl>
            <ButtonGhostXl selected>Selected</ButtonGhostXl>
            <ButtonGhostXl disabled>Disabled</ButtonGhostXl>
            <ButtonGhostXl leftIcon="ri_search-fill">Con icono</ButtonGhostXl>
          </div>
        </div>
      </div>

      {/* PRIMARY BUTTONS */}
      <div style={{ marginBottom: '40px' }}>
        <h3 style={{ color: '#059669', marginBottom: '20px', fontSize: '18px' }}>
          🟢 Primary Buttons
        </h3>
        
        <div style={{ marginBottom: '25px' }}>
          <h4 style={{ color: '#666', marginBottom: '10px' }}>ButtonPrimarySm (Small)</h4>
          <div style={{ display: 'flex', gap: '15px', alignItems: 'center', flexWrap: 'wrap' }}>
            <ButtonPrimarySm>Default</ButtonPrimarySm>
            <ButtonPrimarySm selected>Selected</ButtonPrimarySm>
            <ButtonPrimarySm disabled>Disabled</ButtonPrimarySm>
            <ButtonPrimarySm leftIcon="ri_user-3-fill">Con icono</ButtonPrimarySm>
          </div>
        </div>

        <div style={{ marginBottom: '25px' }}>
          <h4 style={{ color: '#666', marginBottom: '10px' }}>ButtonPrimaryMd (Medium)</h4>
          <div style={{ display: 'flex', gap: '15px', alignItems: 'center', flexWrap: 'wrap' }}>
            <ButtonPrimaryMd>Default</ButtonPrimaryMd>
            <ButtonPrimaryMd selected>Selected</ButtonPrimaryMd>
            <ButtonPrimaryMd disabled>Disabled</ButtonPrimaryMd>
            <ButtonPrimaryMd leftIcon="ri_user-3-fill">Con icono</ButtonPrimaryMd>
          </div>
        </div>

        <div style={{ marginBottom: '25px' }}>
          <h4 style={{ color: '#666', marginBottom: '10px' }}>ButtonPrimaryLg (Large)</h4>
          <div style={{ display: 'flex', gap: '15px', alignItems: 'center', flexWrap: 'wrap' }}>
            <ButtonPrimaryLg>Default</ButtonPrimaryLg>
            <ButtonPrimaryLg selected>Selected</ButtonPrimaryLg>
            <ButtonPrimaryLg disabled>Disabled</ButtonPrimaryLg>
            <ButtonPrimaryLg leftIcon="ri_user-3-fill">Con icono</ButtonPrimaryLg>
          </div>
        </div>

        <div style={{ marginBottom: '25px' }}>
          <h4 style={{ color: '#666', marginBottom: '10px' }}>ButtonPrimaryXl (Extra Large)</h4>
          <div style={{ display: 'flex', gap: '15px', alignItems: 'center', flexWrap: 'wrap' }}>
            <ButtonPrimaryXl>Default</ButtonPrimaryXl>
            <ButtonPrimaryXl selected>Selected</ButtonPrimaryXl>
            <ButtonPrimaryXl disabled>Disabled</ButtonPrimaryXl>
            <ButtonPrimaryXl leftIcon="ri_user-3-fill">Con icono</ButtonPrimaryXl>
          </div>
        </div>
      </div>

      {/* SECONDARY BUTTONS */}
      <div style={{ marginBottom: '40px' }}>
        <h3 style={{ color: '#059669', marginBottom: '20px', fontSize: '18px' }}>
          🟩 Secondary Buttons (Green)
        </h3>
        
        <div style={{ marginBottom: '25px' }}>
          <h4 style={{ color: '#666', marginBottom: '10px' }}>ButtonSecondarySm (Small)</h4>
          <div style={{ display: 'flex', gap: '15px', alignItems: 'center', flexWrap: 'wrap' }}>
            <ButtonSecondarySm>Default</ButtonSecondarySm>
            <ButtonSecondarySm selected>Selected</ButtonSecondarySm>
            <ButtonSecondarySm disabled>Disabled</ButtonSecondarySm>
            <ButtonSecondarySm leftIcon="ri_user-3-fill">Con icono</ButtonSecondarySm>
          </div>
        </div>

        <div style={{ marginBottom: '25px' }}>
          <h4 style={{ color: '#666', marginBottom: '10px' }}>ButtonSecondaryMd (Medium)</h4>
          <div style={{ display: 'flex', gap: '15px', alignItems: 'center', flexWrap: 'wrap' }}>
            <ButtonSecondaryMd>Default</ButtonSecondaryMd>
            <ButtonSecondaryMd selected>Selected</ButtonSecondaryMd>
            <ButtonSecondaryMd disabled>Disabled</ButtonSecondaryMd>
            <ButtonSecondaryMd leftIcon="ri_user-3-fill">Con icono</ButtonSecondaryMd>
          </div>
        </div>

        <div style={{ marginBottom: '25px' }}>
          <h4 style={{ color: '#666', marginBottom: '10px' }}>ButtonSecondaryLg (Large)</h4>
          <div style={{ display: 'flex', gap: '15px', alignItems: 'center', flexWrap: 'wrap' }}>
            <ButtonSecondaryLg>Default</ButtonSecondaryLg>
            <ButtonSecondaryLg selected>Selected</ButtonSecondaryLg>
            <ButtonSecondaryLg disabled>Disabled</ButtonSecondaryLg>
            <ButtonSecondaryLg leftIcon="ri_user-3-fill">Con icono</ButtonSecondaryLg>
          </div>
        </div>

        <div style={{ marginBottom: '25px' }}>
          <h4 style={{ color: '#666', marginBottom: '10px' }}>ButtonSecondaryXl (Extra Large)</h4>
          <div style={{ display: 'flex', gap: '15px', alignItems: 'center', flexWrap: 'wrap' }}>
            <ButtonSecondaryXl>Default</ButtonSecondaryXl>
            <ButtonSecondaryXl selected>Selected</ButtonSecondaryXl>
            <ButtonSecondaryXl disabled>Disabled</ButtonSecondaryXl>
            <ButtonSecondaryXl leftIcon="ri_user-3-fill">Con icono</ButtonSecondaryXl>
          </div>
        </div>
      </div>

      {/* OUTLINE BUTTONS */}
      <div style={{ marginBottom: '40px' }}>
        <h3 style={{ color: '#6366F1', marginBottom: '20px', fontSize: '18px' }}>
          ⭕ Outline Buttons
        </h3>
        
        <div style={{ marginBottom: '25px' }}>
          <h4 style={{ color: '#666', marginBottom: '10px' }}>ButtonOutlineSm (Small)</h4>
          <div style={{ display: 'flex', gap: '15px', alignItems: 'center', flexWrap: 'wrap' }}>
            <ButtonOutlineSm>Default</ButtonOutlineSm>
            <ButtonOutlineSm selected>Selected</ButtonOutlineSm>
            <ButtonOutlineSm disabled>Disabled</ButtonOutlineSm>
            <ButtonOutlineSm leftIcon="ri_search-fill">Con icono</ButtonOutlineSm>
          </div>
        </div>

        <div style={{ marginBottom: '25px' }}>
          <h4 style={{ color: '#666', marginBottom: '10px' }}>ButtonOutlineMd (Medium)</h4>
          <div style={{ display: 'flex', gap: '15px', alignItems: 'center', flexWrap: 'wrap' }}>
            <ButtonOutlineMd>Default</ButtonOutlineMd>
            <ButtonOutlineMd selected>Selected</ButtonOutlineMd>
            <ButtonOutlineMd disabled>Disabled</ButtonOutlineMd>
            <ButtonOutlineMd leftIcon="ri_search-fill">Con icono</ButtonOutlineMd>
          </div>
        </div>

        <div style={{ marginBottom: '25px' }}>
          <h4 style={{ color: '#666', marginBottom: '10px' }}>ButtonOutlineLg (Large)</h4>
          <div style={{ display: 'flex', gap: '15px', alignItems: 'center', flexWrap: 'wrap' }}>
            <ButtonOutlineLg>Default</ButtonOutlineLg>
            <ButtonOutlineLg selected>Selected</ButtonOutlineLg>
            <ButtonOutlineLg disabled>Disabled</ButtonOutlineLg>
            <ButtonOutlineLg leftIcon="ri_search-fill">Con icono</ButtonOutlineLg>
          </div>
        </div>

        <div style={{ marginBottom: '25px' }}>
          <h4 style={{ color: '#666', marginBottom: '10px' }}>ButtonOutlineXl (Extra Large)</h4>
          <div style={{ display: 'flex', gap: '15px', alignItems: 'center', flexWrap: 'wrap' }}>
            <ButtonOutlineXl>Default</ButtonOutlineXl>
            <ButtonOutlineXl selected>Selected</ButtonOutlineXl>
            <ButtonOutlineXl disabled>Disabled</ButtonOutlineXl>
            <ButtonOutlineXl leftIcon="ri_search-fill">Con icono</ButtonOutlineXl>
          </div>
        </div>
      </div>

      {/* SUMMARY */}
      <div style={{ 
        backgroundColor: '#f0fdf4', 
        border: '1px solid #bbf7d0',
        padding: '20px', 
        borderRadius: '12px',
        marginTop: '30px'
      }}>
        <h4 style={{ color: '#059669', margin: '0 0 15px 0', fontSize: '16px' }}>
          🎉 Migración COMPLETA - Todos los Botones del Design System:
        </h4>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '15px' }}>
          <ul style={{ color: '#374151', fontSize: '14px', lineHeight: '1.6', margin: 0 }}>
            <li>🎨 Colores EXACTOS de la raíz preservados</li>
            <li>🎯 Tokens semantic-colors implementados</li>
            <li>🖱️ Comportamiento hover idéntico</li>
            <li>⚡ Estados disabled/selected correctos</li>
          </ul>
          <ul style={{ color: '#374151', fontSize: '14px', lineHeight: '1.6', margin: 0 }}>
            <li>👻 Ghost: Transparente con borde inferior (olive)</li>
            <li>🟢 Primary: Fondos sólidos (olive)</li>
            <li>� Secondary: Fondos sólidos (green)</li>
            <li>⭕ Outline: Bordes con fondo transparente</li>
          </ul>
        </div>
        <div style={{ 
          marginTop: '15px', 
          padding: '12px', 
          backgroundColor: '#ecfdf5', 
          border: '1px solid #a7f3d0',
          borderRadius: '8px'
        }}>
          <p style={{ margin: 0, fontSize: '14px', color: '#065f46', fontWeight: '500' }}>
            ✅ <strong>16 Componentes Migrados:</strong> 4 tipos × 4 tamaños (Sm, Md, Lg, Xl) = Biblioteca completa con useComponentColors y semantic-colors
          </p>
        </div>
      </div>
    </div>
  );
};

export default ButtonsMigratedDemo;