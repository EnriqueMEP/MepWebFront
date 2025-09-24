import React from 'react';
import BadgeDo from './BadgeDo.jsx';
import BadgeText from './BadgeText.jsx';
import BadgeNumber from './BadgeNumber.jsx';

/**
 * BadgeDemoWithAllTypes - Demo completo del sistema Badge
 * 
 * Muestra todos los tipos y variantes de Badge:
 * - BadgeDo: Puntos visuales en 4 tamaños y 3 variantes
 * - BadgeText: Etiquetas con texto en 4 tamaños y 3 variantes  
 * - BadgeNumber: Contadores numéricos en 4 tamaños y 3 variantes
 */
const BadgeDemoWithAllTypes = () => {
  const containerStyle = {
    padding: '32px',
    fontFamily: 'Ubuntu, sans-serif',
    maxWidth: '1200px',
    margin: '0 auto'
  };

  const sectionStyle = {
    marginBottom: '48px'
  };

  const titleStyle = {
    fontSize: '24px',
    fontWeight: '700',
    marginBottom: '8px',
    color: '#3f762f'
  };

  const subtitleStyle = {
    fontSize: '16px',
    color: '#6b7280',
    marginBottom: '24px',
    lineHeight: '1.5'
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '32px'
  };

  const variantGroupStyle = {
    padding: '24px',
    border: '1px solid #e5e7eb',
    borderRadius: '8px',
    backgroundColor: '#fafafa'
  };

  const variantTitleStyle = {
    fontSize: '18px',
    fontWeight: '600',
    marginBottom: '16px',
    color: '#374151'
  };

  const sizeRowStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    marginBottom: '12px',
    padding: '8px',
    backgroundColor: '#ffffff',
    borderRadius: '4px'
  };

  const labelStyle = {
    minWidth: '40px',
    fontSize: '14px',
    fontWeight: '500',
    color: '#6b7280'
  };

  return (
    <div style={containerStyle}>
      <h1 style={{
        fontSize: '32px',
        fontWeight: '700',
        marginBottom: '16px',
        color: '#1f2937'
      }}>
        Badge System Demo
      </h1>
      <p style={{
        fontSize: '18px',
        color: '#6b7280',
        marginBottom: '48px',
        lineHeight: '1.6'
      }}>
        Sistema completo de badges: puntos visuales, etiquetas con texto y contadores numéricos. 
        Todos con soporte para light/dark mode automático y tokens semánticos.
      </p>

      {/* Badge Do - Puntos Visuales */}
      <section style={sectionStyle}>
        <h2 style={titleStyle}>Badge Do - Puntos Visuales</h2>
        <p style={subtitleStyle}>
          Punto visual sin texto que actúa como indicador de estado. 
          Útil para señalar estado activo/inactivo o alertas ligeras.
        </p>
        
        <div style={gridStyle}>
          <div style={variantGroupStyle}>
            <h3 style={variantTitleStyle}>🟢 Primary</h3>
            <div style={sizeRowStyle}>
              <span style={labelStyle}>SM:</span>
              <BadgeDo variant="primary" size="sm" />
            </div>
            <div style={sizeRowStyle}>
              <span style={labelStyle}>MD:</span>
              <BadgeDo variant="primary" size="md" />
            </div>
            <div style={sizeRowStyle}>
              <span style={labelStyle}>LG:</span>
              <BadgeDo variant="primary" size="lg" />
            </div>
            <div style={sizeRowStyle}>
              <span style={labelStyle}>XL:</span>
              <BadgeDo variant="primary" size="xl" />
            </div>
          </div>

          <div style={variantGroupStyle}>
            <h3 style={variantTitleStyle}>🟢 Secondary</h3>
            <div style={sizeRowStyle}>
              <span style={labelStyle}>SM:</span>
              <BadgeDo variant="secondary" size="sm" />
            </div>
            <div style={sizeRowStyle}>
              <span style={labelStyle}>MD:</span>
              <BadgeDo variant="secondary" size="md" />
            </div>
            <div style={sizeRowStyle}>
              <span style={labelStyle}>LG:</span>
              <BadgeDo variant="secondary" size="lg" />
            </div>
            <div style={sizeRowStyle}>
              <span style={labelStyle}>XL:</span>
              <BadgeDo variant="secondary" size="xl" />
            </div>
          </div>

          <div style={variantGroupStyle}>
            <h3 style={variantTitleStyle}>🔴 Warning</h3>
            <div style={sizeRowStyle}>
              <span style={labelStyle}>SM:</span>
              <BadgeDo variant="warning" size="sm" />
            </div>
            <div style={sizeRowStyle}>
              <span style={labelStyle}>MD:</span>
              <BadgeDo variant="warning" size="md" />
            </div>
            <div style={sizeRowStyle}>
              <span style={labelStyle}>LG:</span>
              <BadgeDo variant="warning" size="lg" />
            </div>
            <div style={sizeRowStyle}>
              <span style={labelStyle}>XL:</span>
              <BadgeDo variant="warning" size="xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Badge Text - Etiquetas */}
      <section style={sectionStyle}>
        <h2 style={titleStyle}>Badge Text - Etiquetas</h2>
        <p style={subtitleStyle}>
          Etiqueta con texto corto para clasificar o resaltar. 
          Ideal para categorías, estados o etiquetas contextuales.
        </p>
        
        <div style={gridStyle}>
          <div style={variantGroupStyle}>
            <h3 style={variantTitleStyle}>🟢 Primary</h3>
            <div style={sizeRowStyle}>
              <span style={labelStyle}>SM:</span>
              <BadgeText variant="primary" size="sm">Label</BadgeText>
            </div>
            <div style={sizeRowStyle}>
              <span style={labelStyle}>MD:</span>
              <BadgeText variant="primary" size="md">Label</BadgeText>
            </div>
            <div style={sizeRowStyle}>
              <span style={labelStyle}>LG:</span>
              <BadgeText variant="primary" size="lg">Label</BadgeText>
            </div>
            <div style={sizeRowStyle}>
              <span style={labelStyle}>XL:</span>
              <BadgeText variant="primary" size="xl">Label</BadgeText>
            </div>
          </div>

          <div style={variantGroupStyle}>
            <h3 style={variantTitleStyle}>🟢 Secondary</h3>
            <div style={sizeRowStyle}>
              <span style={labelStyle}>SM:</span>
              <BadgeText variant="secondary" size="sm">Label</BadgeText>
            </div>
            <div style={sizeRowStyle}>
              <span style={labelStyle}>MD:</span>
              <BadgeText variant="secondary" size="md">Label</BadgeText>
            </div>
            <div style={sizeRowStyle}>
              <span style={labelStyle}>LG:</span>
              <BadgeText variant="secondary" size="lg">Label</BadgeText>
            </div>
            <div style={sizeRowStyle}>
              <span style={labelStyle}>XL:</span>
              <BadgeText variant="secondary" size="xl">Label</BadgeText>
            </div>
          </div>

          <div style={variantGroupStyle}>
            <h3 style={variantTitleStyle}>⭕ Outline</h3>
            <div style={sizeRowStyle}>
              <span style={labelStyle}>SM:</span>
              <BadgeText variant="outline" size="sm">Label</BadgeText>
            </div>
            <div style={sizeRowStyle}>
              <span style={labelStyle}>MD:</span>
              <BadgeText variant="outline" size="md">Label</BadgeText>
            </div>
            <div style={sizeRowStyle}>
              <span style={labelStyle}>LG:</span>
              <BadgeText variant="outline" size="lg">Label</BadgeText>
            </div>
            <div style={sizeRowStyle}>
              <span style={labelStyle}>XL:</span>
              <BadgeText variant="outline" size="xl">Label</BadgeText>
            </div>
          </div>
        </div>
      </section>

      {/* Badge Number - Contadores */}
      <section style={sectionStyle}>
        <h2 style={titleStyle}>Badge Number - Contadores</h2>
        <p style={subtitleStyle}>
          Contador numérico para notificaciones o ítems pendientes. 
          Perfecto para navegación o íconos de acción.
        </p>
        
        <div style={gridStyle}>
          <div style={variantGroupStyle}>
            <h3 style={variantTitleStyle}>🟢 Primary</h3>
            <div style={sizeRowStyle}>
              <span style={labelStyle}>SM:</span>
              <BadgeNumber variant="primary" size="sm">1</BadgeNumber>
            </div>
            <div style={sizeRowStyle}>
              <span style={labelStyle}>MD:</span>
              <BadgeNumber variant="primary" size="md">12</BadgeNumber>
            </div>
            <div style={sizeRowStyle}>
              <span style={labelStyle}>LG:</span>
              <BadgeNumber variant="primary" size="lg">123</BadgeNumber>
            </div>
            <div style={sizeRowStyle}>
              <span style={labelStyle}>XL:</span>
              <BadgeNumber variant="primary" size="xl">99+</BadgeNumber>
            </div>
          </div>

          <div style={variantGroupStyle}>
            <h3 style={variantTitleStyle}>🟢 Secondary</h3>
            <div style={sizeRowStyle}>
              <span style={labelStyle}>SM:</span>
              <BadgeNumber variant="secondary" size="sm">2</BadgeNumber>
            </div>
            <div style={sizeRowStyle}>
              <span style={labelStyle}>MD:</span>
              <BadgeNumber variant="secondary" size="md">24</BadgeNumber>
            </div>
            <div style={sizeRowStyle}>
              <span style={labelStyle}>LG:</span>
              <BadgeNumber variant="secondary" size="lg">456</BadgeNumber>
            </div>
            <div style={sizeRowStyle}>
              <span style={labelStyle}>XL:</span>
              <BadgeNumber variant="secondary" size="xl">99+</BadgeNumber>
            </div>
          </div>

          <div style={variantGroupStyle}>
            <h3 style={variantTitleStyle}>⭕ Outline</h3>
            <div style={sizeRowStyle}>
              <span style={labelStyle}>SM:</span>
              <BadgeNumber variant="outline" size="sm">3</BadgeNumber>
            </div>
            <div style={sizeRowStyle}>
              <span style={labelStyle}>MD:</span>
              <BadgeNumber variant="outline" size="md">36</BadgeNumber>
            </div>
            <div style={sizeRowStyle}>
              <span style={labelStyle}>LG:</span>
              <BadgeNumber variant="outline" size="lg">789</BadgeNumber>
            </div>
            <div style={sizeRowStyle}>
              <span style={labelStyle}>XL:</span>
              <BadgeNumber variant="outline" size="xl">99+</BadgeNumber>
            </div>
          </div>
        </div>
      </section>

      {/* Casos de Uso */}
      <section style={sectionStyle}>
        <h2 style={titleStyle}>Casos de Uso Prácticos</h2>
        <div style={gridStyle}>
          <div style={variantGroupStyle}>
            <h3 style={variantTitleStyle}>🔔 Notificaciones</h3>
            <div style={{...sizeRowStyle, justifyContent: 'space-between'}}>
              <span>Mensajes nuevos</span>
              <BadgeNumber variant="primary" size="md">5</BadgeNumber>
            </div>
            <div style={{...sizeRowStyle, justifyContent: 'space-between'}}>
              <span>Usuario en línea</span>
              <BadgeDo variant="secondary" size="sm" />
            </div>
          </div>

          <div style={variantGroupStyle}>
            <h3 style={variantTitleStyle}>🏷️ Estados</h3>
            <div style={{...sizeRowStyle, justifyContent: 'flex-start'}}>
              <span>Producto</span>
              <BadgeText variant="primary" size="sm">Nuevo</BadgeText>
            </div>
            <div style={{...sizeRowStyle, justifyContent: 'flex-start'}}>
              <span>Función</span>
              <BadgeText variant="secondary" size="sm">Beta</BadgeText>
            </div>
          </div>

          <div style={variantGroupStyle}>
            <h3 style={variantTitleStyle}>⚠️ Alertas</h3>
            <div style={{...sizeRowStyle, justifyContent: 'space-between'}}>
              <span>Error crítico</span>
              <BadgeDo variant="warning" size="md" />
            </div>
            <div style={{...sizeRowStyle, justifyContent: 'flex-start'}}>
              <span>Status</span>
              <BadgeText variant="outline" size="sm">Pendiente</BadgeText>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BadgeDemoWithAllTypes;