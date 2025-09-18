// foundations-showcase.jsx
import React, { useState, useEffect } from "react";

// Import dinámico de todos los archivos de foundations
import * as colors from "./foundations/colors.js";
import * as elevation from "./foundations/elevation.js";
import * as semanticColors from "./foundations/semantic-colors.js";
import * as typography from "./foundations/typography.js";
import { lineIcons, fillIcons, availableIcons } from "./foundations/icons.jsx";
import Icon from "./foundations/icons/Icon.jsx";

export default function FoundationsShowcase({ isDarkMode = false }) {
  const [foundations, setFoundations] = useState({});
  const [showCode, setShowCode] = useState(false);

  useEffect(() => {
    // Construimos el objeto automáticamente
    setFoundations({
      colors,
      elevation,
      semanticColors,
      typography,
      icons: { lineIcons, fillIcons, availableIcons }
    });
    console.log('Typography foundations:', typography); // Debug
  }, []);

  // Componente para mostrar paletas de colores primitivos
  const ColorPalette = ({ colorName, shades }) => (
    <div style={{ marginBottom: '8px' }}>
      <div style={{ 
        fontSize: '10px', 
        fontWeight: '400', 
        marginBottom: '4px',
        color: isDarkMode ? '#9ca3af' : '#6b7280',
        textTransform: 'capitalize'
      }}>
        {colorName}
      </div>
      <div style={{ display: 'flex', gap: '1px' }}>
        {Object.entries(shades).map(([shade, color]) => (
          <div
            key={shade}
            style={{
              width: '24px',
              height: '24px',
              backgroundColor: color,
              borderRadius: '2px',
              border: shade === '50' ? '1px solid rgba(255,255,255,0.2)' : 'none',
              cursor: 'pointer'
            }}
            title={`${colorName}-${shade}: ${color}`}
          />
        ))}
      </div>
    </div>
  );

  // Componente para mostrar colores semánticos
  const SemanticColor = ({ name, lightColor, darkColor }) => (
    <div style={{ 
      display: 'flex', 
      alignItems: 'center', 
      marginBottom: '6px',
      padding: '8px 12px',
      backgroundColor: 'rgba(255,255,255,0.05)',
      borderRadius: '4px'
    }}>
      <div style={{ 
        width: '120px', 
        fontSize: '11px', 
        fontWeight: '400',
        color: '#4299e1',
        textTransform: 'capitalize'
      }}>
        {name}
      </div>
      <div style={{ display: 'flex', gap: '6px' }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{
            width: '28px',
            height: '28px',
            backgroundColor: lightColor,
            borderRadius: '3px',
            border: '1px solid rgba(255,255,255,0.1)',
            marginBottom: '2px'
          }} />
          <div style={{ fontSize: '8px', color: '#a0aec0' }}>Light</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{
            width: '28px',
            height: '28px',
            backgroundColor: darkColor,
            borderRadius: '3px',
            border: '1px solid rgba(255,255,255,0.1)',
            marginBottom: '2px'
          }} />
          <div style={{ fontSize: '8px', color: '#a0aec0' }}>Dark</div>
        </div>
      </div>
    </div>
  );

  // Componente para mostrar iconos
  const IconExample = ({ name, type = 'line', category }) => (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '12px',
      backgroundColor: '#1f2937', // Siempre fondo oscuro para que se vean los iconos
      borderRadius: '8px',
      border: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
      minWidth: '120px'
    }}>
      <div style={{
        width: '32px',
        height: '32px',
        color: '#ffffff', // Siempre iconos blancos para que se vean en fondo oscuro
        marginBottom: '8px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <Icon name={name} type={type} size={32} />
      </div>
      <div style={{
        fontSize: '11px',
        fontWeight: '500',
        color: '#ffffff', // Texto blanco para que se vea en fondo oscuro
        textAlign: 'center',
        marginBottom: '4px'
      }}>
        {name}
      </div>
      <div style={{
        fontSize: '9px',
        color: '#d1d5db', // Texto gris claro para que se vea en fondo oscuro
        textAlign: 'center'
      }}>
        {type} • {category}
      </div>
    </div>
  );

  // Componente para mostrar tipografía
  const TypographyExample = ({ name, style }) => {
    console.log('Typography style:', name, style); // Debug
    return (
      <div style={{ 
        marginBottom: '12px', 
        padding: '8px', 
        backgroundColor: isDarkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)', 
        borderRadius: '4px' 
      }}>
        <div style={{ 
          fontSize: '10px', 
          fontWeight: '500', 
          marginBottom: '4px',
          color: isDarkMode ? '#9ca3af' : '#6b7280',
          textTransform: 'capitalize'
        }}>
          {name}
        </div>
        <div style={{
          fontFamily: style?.fontFamily || 'Roboto, sans-serif',
          fontSize: style?.fontSize || '16px',
          fontWeight: style?.fontWeight || '400',
          lineHeight: style?.lineHeight || '1.5',
          color: isDarkMode ? '#ffffff' : '#1f2937',
          margin: '0'
        }}>
          {name.includes('display') || name.includes('Display') ? 'Display Large / Primary' :
           name.includes('heading') || name.includes('Heading') ? 'Heading Large / Primary' :
           name.includes('title') || name.includes('Title') ? 'Title Large / Primary' :
           name.includes('label') || name.includes('Label') ? 'Label Large / Primary' :
           name.includes('body') || name.includes('Body') ? 'Body Large / Primary' :
           'The quick brown fox'}
        </div>
        <div style={{ 
          fontSize: '8px', 
          color: isDarkMode ? '#718096' : '#a0aec0',
          marginTop: '2px',
          fontFamily: 'monospace'
        }}>
          {style?.fontFamily || 'N/A'} • {style?.fontSize || 'N/A'} • {style?.fontWeight || 'N/A'}
        </div>
      </div>
    );
  };

  // Componente para mostrar elevaciones
  const ElevationExample = ({ name, boxShadow, isDark = false }) => (
    <div style={{ 
      display: 'inline-block', 
      margin: '4px',
      textAlign: 'center'
    }}>
      <div style={{
        width: '50px',
        height: '35px',
        backgroundColor: isDark ? '#374151' : 'white',
        borderRadius: '4px',
        boxShadow: boxShadow === 'none' ? 'none' : boxShadow,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: isDark ? '#e5e7eb' : '#374151',
        fontSize: '8px',
        fontWeight: '500'
      }}>
        {name}
      </div>
    </div>
  );

  // Función para separar los estilos de tipografía en baseline y emphasis
  const getTypographyStyles = () => {
    if (!foundations.typography?.textStyles) return { baseline: {}, emphasis: {} };
    
    const baseline = {};
    const emphasis = {};
    
    Object.entries(foundations.typography.textStyles).forEach(([key, style]) => {
      if (key.includes('Emphasis')) {
        emphasis[key] = style;
      } else {
        baseline[key] = style;
      }
    });
    
    return { baseline, emphasis };
  };

  const { baseline, emphasis } = getTypographyStyles();

  return (
    <div style={{ 
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      backgroundColor: isDarkMode ? '#2B2B2B' : '#ffffff',
      minHeight: '100vh'
    }}>
      {/* Header */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        padding: '16px 20px',
        backgroundColor: isDarkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)',
        borderBottom: `1px solid ${isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`
      }}>
        <h1 style={{ 
          fontSize: '20px', 
          fontWeight: '600', 
          margin: '0',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          color: isDarkMode ? '#ffffff' : '#1f2937'
        }}>
          🎨 Design Foundations Live Viewer
        </h1>
        <button
          onClick={() => setShowCode(!showCode)}
          style={{
            padding: '6px 12px',
            backgroundColor: '#4299e1',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '11px',
            fontWeight: '500'
          }}
        >
          {showCode ? 'Hide Code' : 'Show Code'}
        </button>
      </div>

      {/* Main Content - Single Layout */}
      <div style={{ padding: '20px', backgroundColor: isDarkMode ? '#2B2B2B' : '#ffffff' }}>
        
        {/* Colors Section */}
        <div style={{ marginBottom: '32px' }}>
          <h2 style={{ 
            fontSize: '24px', 
            fontWeight: '600', 
            marginBottom: '24px',
            color: isDarkMode ? 'white' : '#1f2937',
            backgroundColor: isDarkMode ? '#2B2B2B' : '#ffffff',
            padding: '16px 20px',
            borderRadius: '8px 8px 0 0',
            margin: '0 0 0 0'
          }}>
            Color
          </h2>
          
          {/* Primitive Colors Section */}
          <div style={{ backgroundColor: '#2B2B2B', padding: '0 20px 20px', borderRadius: '0 0 8px 8px' }}>
            <h3 style={{ 
              color: '#a0aec0', 
              fontSize: '14px', 
              fontWeight: '500', 
              paddingTop: '16px',
              marginBottom: '16px',
              borderBottom: '1px solid rgba(255,255,255,0.1)',
              paddingBottom: '8px'
            }}>
              Primitive
            </h3>
            
            {/* All color palettes in rows */}
            {foundations.colors?.primitiveColors && Object.entries(foundations.colors.primitiveColors).map(([colorName, shades]) => (
              <div key={colorName} style={{ 
                display: 'flex', 
                alignItems: 'center', 
                marginBottom: '12px',
                padding: '8px 0'
              }}>
                <div style={{ 
                  width: '80px', 
                  fontSize: '12px', 
                  fontWeight: '400',
                  color: '#e2e8f0',
                  textTransform: 'capitalize',
                  paddingRight: '16px'
                }}>
                  {colorName}
                </div>
                <div style={{ display: 'flex', gap: '1px' }}>
                  {Object.entries(shades).map(([shade, color]) => (
                    <div key={shade} style={{ textAlign: 'center' }}>
                      <div
                        style={{
                          width: '80px',
                          height: '32px',
                          backgroundColor: color,
                          cursor: 'pointer',
                          position: 'relative'
                        }}
                        title={`${colorName}-${shade}: ${color}`}
                      />
                      <div style={{ 
                        fontSize: '9px', 
                        color: '#a0aec0', 
                        padding: '2px 4px',
                        backgroundColor: 'rgba(0,0,0,0.3)'
                      }}>
                        {shade}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Semantic Colors Section */}
          <div style={{ backgroundColor: '#2B2B2B', padding: '20px', borderRadius: '8px', marginTop: '2px' }}>
            <h3 style={{ 
              color: '#a0aec0', 
              fontSize: '14px', 
              fontWeight: '500', 
              marginBottom: '16px',
              borderBottom: '1px solid rgba(255,255,255,0.1)',
              paddingBottom: '8px'
            }}>
              Semantic
            </h3>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr auto', gap: '20px' }}>
              {/* Light Theme Column */}
              <div style={{ backgroundColor: 'rgba(255,255,255,0.02)', borderRadius: '6px', padding: '16px' }}>
                <h4 style={{ color: '#a0aec0', fontSize: '12px', marginBottom: '12px', fontWeight: '500' }}>
                  Light
                </h4>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px' }}>
                  {foundations.semanticColors?.lightTheme && Object.entries(foundations.semanticColors.lightTheme).map(([name, color]) => (
                    <div key={name} style={{ 
                      backgroundColor: color,
                      borderRadius: '4px',
                      padding: '12px 8px',
                      minHeight: '45px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: name.includes('primary') ? 'white' : name.includes('secondary') ? 'white' : '#1a202c',
                      fontSize: '9px',
                      fontWeight: '500',
                      textAlign: 'center',
                      textTransform: 'capitalize'
                    }}>
                      {name.replace(/([A-Z])/g, ' $1').trim()}
                    </div>
                  ))}
                </div>
              </div>

              {/* Dark Theme Column */}
              <div style={{ backgroundColor: 'rgba(0,0,0,0.3)', borderRadius: '6px', padding: '16px' }}>
                <h4 style={{ color: '#a0aec0', fontSize: '12px', marginBottom: '12px', fontWeight: '500' }}>
                  Dark
                </h4>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px' }}>
                  {foundations.semanticColors?.darkTheme && Object.entries(foundations.semanticColors.darkTheme).map(([name, color]) => (
                    <div key={name} style={{ 
                      backgroundColor: color,
                      borderRadius: '4px',
                      padding: '12px 8px',
                      minHeight: '45px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: name.includes('primary') ? 'white' : name.includes('secondary') ? 'white' : '#e2e8f0',
                      fontSize: '9px',
                      fontWeight: '500',
                      textAlign: 'center',
                      textTransform: 'capitalize'
                    }}>
                      {name.replace(/([A-Z])/g, ' $1').trim()}
                    </div>
                  ))}
                </div>
              </div>

              {/* Error/Success Column */}
              <div style={{ minWidth: '140px' }}>
                {/* Error Section */}
                <div style={{ marginBottom: '16px' }}>
                  <div style={{ 
                    backgroundColor: '#ef4444',
                    borderRadius: '4px',
                    padding: '16px',
                    marginBottom: '6px',
                    color: 'white',
                    fontSize: '11px',
                    fontWeight: '600',
                    textAlign: 'center'
                  }}>
                    Error
                  </div>
                  
                  <div style={{ 
                    backgroundColor: '#fca5a5',
                    borderRadius: '3px',
                    padding: '8px',
                    marginBottom: '3px',
                    color: '#7f1d1d',
                    fontSize: '9px',
                    fontWeight: '500',
                    textAlign: 'center'
                  }}>
                    On Error
                  </div>
                  
                  <div style={{ 
                    backgroundColor: '#f87171',
                    borderRadius: '3px',
                    padding: '8px',
                    color: '#7f1d1d',
                    fontSize: '9px',
                    fontWeight: '500',
                    textAlign: 'center'
                  }}>
                    Error Container
                  </div>
                  
                  <div style={{ 
                    backgroundColor: '#991b1b',
                    borderRadius: '3px',
                    padding: '8px',
                    marginTop: '3px',
                    color: 'white',
                    fontSize: '9px',
                    fontWeight: '500',
                    textAlign: 'center'
                  }}>
                    On Error Container
                  </div>
                </div>

                {/* Success Section */}
                <div>
                  <div style={{ 
                    backgroundColor: '#10b981',
                    borderRadius: '4px',
                    padding: '16px',
                    marginBottom: '6px',
                    color: 'white',
                    fontSize: '11px',
                    fontWeight: '600',
                    textAlign: 'center'
                  }}>
                    Success
                  </div>
                  
                  <div style={{ 
                    backgroundColor: '#6ee7b7',
                    borderRadius: '3px',
                    padding: '8px',
                    marginBottom: '3px',
                    color: '#064e3b',
                    fontSize: '9px',
                    fontWeight: '500',
                    textAlign: 'center'
                  }}>
                    On Success
                  </div>
                  
                  <div style={{ 
                    backgroundColor: '#34d399',
                    borderRadius: '3px',
                    padding: '8px',
                    color: '#064e3b',
                    fontSize: '9px',
                    fontWeight: '500',
                    textAlign: 'center'
                  }}>
                    Success Container
                  </div>
                  
                  <div style={{ 
                    backgroundColor: '#047857',
                    borderRadius: '3px',
                    padding: '8px',
                    marginTop: '3px',
                    color: 'white',
                    fontSize: '9px',
                    fontWeight: '500',
                    textAlign: 'center'
                  }}>
                    On Error Container
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Typography Section */}
        <div style={{ marginBottom: '32px' }}>
          <h2 style={{ 
            fontSize: '24px', 
            fontWeight: '600', 
            marginBottom: '0',
            color: isDarkMode ? 'white' : '#1f2937',
            backgroundColor: isDarkMode ? '#2B2B2B' : '#ffffff',
            padding: '16px 20px',
            borderRadius: '8px 8px 0 0'
          }}>
            Typography
          </h2>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: '1fr 1fr', 
            backgroundColor: isDarkMode ? '#2B2B2B' : '#ffffff',
            borderRadius: '0 0 8px 8px'
          }}>
            {/* Baseline Typography */}
            <div style={{ 
              padding: '20px', 
              borderRight: `1px solid ${isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`
            }}>
              <h3 style={{ 
                fontSize: '14px', 
                fontWeight: '500', 
                marginBottom: '16px',
                color: isDarkMode ? '#9ca3af' : '#6b7280',
                borderBottom: `1px solid ${isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`,
                paddingBottom: '8px'
              }}>
                Baseline
              </h3>
              <div style={{ 
                backgroundColor: isDarkMode ? '#2B2B2B' : '#ffffff', 
                padding: '16px', 
                borderRadius: '6px', 
                maxHeight: '400px', 
                overflowY: 'auto' 
              }}>
                {Object.keys(baseline).length > 0 ? (
                  Object.entries(baseline).slice(0, 12).map(([name, style]) => (
                    <TypographyExample key={name} name={name} style={style} />
                  ))
                ) : (
                  foundations.typography?.textStyles && Object.entries(foundations.typography.textStyles)
                    .filter(([key]) => !key.includes('Emphasis'))
                    .slice(0, 12)
                    .map(([name, style]) => (
                      <TypographyExample key={name} name={name} style={style} />
                    ))
                )}
              </div>
            </div>

            {/* Emphasis Typography */}
            <div style={{ padding: '20px' }}>
              <h3 style={{ 
                fontSize: '14px', 
                fontWeight: '500', 
                marginBottom: '16px',
                color: isDarkMode ? '#9ca3af' : '#6b7280',
                borderBottom: `1px solid ${isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`,
                paddingBottom: '8px'
              }}>
                Emphasis
              </h3>
              <div style={{ 
                backgroundColor: isDarkMode ? '#2B2B2B' : '#ffffff', 
                padding: '16px', 
                borderRadius: '6px', 
                maxHeight: '400px', 
                overflowY: 'auto' 
              }}>
                {Object.keys(emphasis).length > 0 ? (
                  Object.entries(emphasis).slice(0, 12).map(([name, style]) => (
                    <TypographyExample key={name} name={name} style={style} />
                  ))
                ) : (
                  foundations.typography?.textStyles && Object.entries(foundations.typography.textStyles)
                    .filter(([key]) => key.includes('Emphasis'))
                    .slice(0, 12)
                    .map(([name, style]) => (
                      <TypographyExample key={name} name={name} style={style} />
                    ))
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Icons Section */}
        <div style={{ marginBottom: '32px' }}>
          <h2 style={{ 
            fontSize: '24px', 
            fontWeight: '600', 
            marginBottom: '0',
            color: isDarkMode ? 'white' : '#1f2937',
            backgroundColor: isDarkMode ? '#2B2B2B' : '#ffffff',
            padding: '16px 20px',
            borderRadius: '8px 8px 0 0'
          }}>
            Icons
          </h2>
          
          <div style={{ 
            backgroundColor: isDarkMode ? '#2B2B2B' : '#ffffff',
            padding: '20px',
            borderRadius: '0 0 8px 8px'
          }}>
            {/* Line Icons */}
            <div style={{ marginBottom: '24px' }}>
              <h3 style={{ 
                fontSize: '14px', 
                fontWeight: '500', 
                marginBottom: '16px',
                color: isDarkMode ? '#9ca3af' : '#6b7280',
                borderBottom: `1px solid ${isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`,
                paddingBottom: '8px'
              }}>
                Line Icons (Outline)
              </h3>
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))', 
                gap: '12px'
              }}>
                {Object.keys(lineIcons).map((name) => (
                  <IconExample 
                    key={name} 
                    name={name} 
                    type="line"
                    category="line" 
                  />
                ))}
              </div>
            </div>

            {/* Fill Icons */}
            <div style={{ marginBottom: '24px' }}>
              <h3 style={{ 
                fontSize: '14px', 
                fontWeight: '500', 
                marginBottom: '16px',
                color: isDarkMode ? '#9ca3af' : '#6b7280',
                borderBottom: `1px solid ${isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`,
                paddingBottom: '8px'
              }}>
                Fill Icons (Filled)
              </h3>
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))', 
                gap: '12px'
              }}>
                {Object.keys(fillIcons).map((name) => (
                  <IconExample 
                    key={name} 
                    name={name} 
                    type="fill"
                    category="fill" 
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Elevation Section */}
        {foundations.elevation && (
          <div style={{ marginBottom: '32px' }}>
            <h2 style={{ 
              fontSize: '24px', 
              fontWeight: '600', 
              marginBottom: '0',
              color: isDarkMode ? 'white' : '#1f2937',
              backgroundColor: isDarkMode ? '#2B2B2B' : '#ffffff',
              padding: '16px 20px',
              borderRadius: '8px 8px 0 0'
            }}>
              Elevation
            </h2>
            
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: '1fr 1fr', 
              backgroundColor: isDarkMode ? '#2B2B2B' : '#ffffff',
              padding: '20px',
              borderRadius: '0 0 8px 8px'
            }}>
              {/* Light Elevation */}
              <div style={{ paddingRight: '16px' }}>
                <h3 style={{ 
                  fontSize: '14px', 
                  fontWeight: '500', 
                  marginBottom: '16px',
                  color: '#a0aec0'
                }}>
                  Light
                </h3>
                <div style={{ padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '6px' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px' }}>
                    {(foundations.elevation.lightElevation || foundations.elevation.light) && Object.entries(foundations.elevation.lightElevation || foundations.elevation.light).map(([name, boxShadow]) => (
                      <div key={name} style={{ textAlign: 'center' }}>
                        <div style={{
                          width: '60px',
                          height: '40px',
                          backgroundColor: 'white',
                          borderRadius: '6px',
                          boxShadow: boxShadow === 'none' ? 'none' : boxShadow,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#374151',
                          fontSize: '9px',
                          fontWeight: '500',
                          margin: '0 auto 6px'
                        }}>
                          {name}
                        </div>
                        <div style={{ 
                          fontSize: '8px', 
                          color: '#6b7280',
                          fontWeight: '500'
                        }}>
                          {name}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Dark Elevation */}
              <div style={{ paddingLeft: '16px' }}>
                <h3 style={{ 
                  fontSize: '14px', 
                  fontWeight: '500', 
                  marginBottom: '16px',
                  color: '#a0aec0'
                }}>
                  Dark
                </h3>
                <div style={{ padding: '20px', backgroundColor: '#1f2937', borderRadius: '6px' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px' }}>
                    {(foundations.elevation.darkElevation || foundations.elevation.dark) && Object.entries(foundations.elevation.darkElevation || foundations.elevation.dark).map(([name, boxShadow]) => (
                      <div key={name} style={{ textAlign: 'center' }}>
                        <div style={{
                          width: '60px',
                          height: '40px',
                          backgroundColor: '#374151',
                          borderRadius: '6px',
                          boxShadow: boxShadow === 'none' ? 'none' : boxShadow,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#e5e7eb',
                          fontSize: '9px',
                          fontWeight: '500',
                          margin: '0 auto 6px'
                        }}>
                          {name}
                        </div>
                        <div style={{ 
                          fontSize: '8px', 
                          color: '#9ca3af',
                          fontWeight: '500'
                        }}>
                          {name}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Show Code Section */}
        {showCode && (
          <div style={{ marginTop: '32px' }}>
            <h2 style={{ 
              fontSize: '18px', 
              fontWeight: '600', 
              marginBottom: '16px',
              color: isDarkMode ? '#ffffff' : '#1f2937'
            }}>
              Foundations Code
            </h2>
            <pre style={{ 
              backgroundColor: isDarkMode ? '#1a1a1a' : '#f8f9fa', 
              color: isDarkMode ? '#68d391' : '#1f2937', 
              padding: '16px', 
              borderRadius: '8px', 
              overflow: 'auto',
              fontSize: '11px',
              maxHeight: '400px',
              border: `1px solid ${isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`
            }}>
              {JSON.stringify({
                primitiveColors: foundations.colors?.primitiveColors,
                semanticColors: foundations.semanticColors,
                typography: foundations.typography,
                elevation: foundations.elevation
              }, null, 2)}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}