# Typography - Sistema Tipográfico MEP

## 📋 Índice
- [Introducción](#introducción)
- [Estilos Disponibles](#estilos-disponibles)
- [Uso](#uso)
- [Responsive Design](#responsive-design)
- [Extensión](#extensión)

## 📝 Introducción

El sistema tipográfico MEP define una jerarquía consistente de estilos de texto que se adaptan responsivamente a diferentes tamaños de pantalla, basado en las mejores prácticas de diseño web moderno.

### Principios
- **Jerarquía clara**: Escalas definidas para diferentes tipos de contenido
- **Responsive**: Tamaños que se adaptan automáticamente al viewport
- **Legibilidad**: Line heights optimizados para cada tamaño
- **Performance**: Fuentes web optimizadas con fallbacks

---

## 🎨 Estilos Disponibles

### Display Styles (Headers Principales)

#### Display Large
```javascript
displayLarge: {
  fontFamily: 'Ubuntu, sans-serif',
  fontSize: 'clamp(36px, 4vw, 57px)',
  fontWeight: 400,
  lineHeight: '1.12',
  letterSpacing: '-0.25px'
}
```
**Uso**: Headlines principales, hero sections

#### Display Medium  
```javascript
displayMedium: {
  fontFamily: 'Ubuntu, sans-serif',
  fontSize: 'clamp(32px, 3.5vw, 45px)',
  fontWeight: 400,
  lineHeight: '1.16',
  letterSpacing: '0px'
}
```
**Uso**: Títulos de página, secciones importantes

#### Display Small
```javascript
displaySmall: {
  fontFamily: 'Ubuntu, sans-serif',
  fontSize: 'clamp(28px, 3vw, 36px)',
  fontWeight: 400,
  lineHeight: '1.22',
  letterSpacing: '0px'
}
```
**Uso**: Subtítulos principales, headers de cards

### Heading Styles (Títulos de Sección)

#### Heading Large
```javascript
headingLarge: {
  fontFamily: 'Ubuntu, sans-serif',
  fontSize: 'clamp(24px, 2.5vw, 32px)',
  fontWeight: 400,
  lineHeight: '1.25',
  letterSpacing: '0px'
}
```

#### Heading Medium
```javascript
headingMedium: {
  fontFamily: 'Ubuntu, sans-serif',
  fontSize: 'clamp(20px, 2vw, 28px)',
  fontWeight: 400,
  lineHeight: '1.29',
  letterSpacing: '0.15px'
}
```

#### Heading Small
```javascript
headingSmall: {
  fontFamily: 'Ubuntu, sans-serif',
  fontSize: 'clamp(18px, 1.8vw, 24px)',
  fontWeight: 400,
  lineHeight: '1.33',
  letterSpacing: '0.1px'
}
```

### Title Styles (Títulos de Contenido)

#### Title Large
```javascript
titleLarge: {
  fontFamily: 'Roboto, sans-serif',
  fontSize: 'clamp(18px, 1.6vw, 22px)',
  fontWeight: 400,
  lineHeight: '1.27',
  letterSpacing: '0px'
}
```

#### Title Medium
```javascript
titleMedium: {
  fontFamily: 'Roboto, sans-serif',
  fontSize: 'clamp(16px, 1.4vw, 20px)',
  fontWeight: 500,
  lineHeight: '1.5',
  letterSpacing: '0.15px'
}
```

#### Title Small
```javascript
titleSmall: {
  fontFamily: 'Roboto, sans-serif',
  fontSize: 'clamp(14px, 1.2vw, 18px)',
  fontWeight: 500,
  lineHeight: '1.43',
  letterSpacing: '0.1px'
}
```

### Body Styles (Texto de Contenido)

#### Body Large
```javascript
bodyLarge: {
  fontFamily: 'Roboto, sans-serif',
  fontSize: 'clamp(14px, 1.2vw, 18px)',
  fontWeight: 400,
  lineHeight: '1.5',
  letterSpacing: '0.5px'
}
```

#### Body Medium
```javascript
bodyMedium: {
  fontFamily: 'Roboto, sans-serif',
  fontSize: 'clamp(14px, 1vw, 16px)',
  fontWeight: 400,
  lineHeight: '1.43',
  letterSpacing: '0.25px'
}
```

#### Body Small
```javascript
bodySmall: {
  fontFamily: 'Roboto, sans-serif',
  fontSize: 'clamp(12px, 0.9vw, 14px)',
  fontWeight: 400,
  lineHeight: '1.33',
  letterSpacing: '0.4px'
}
```

### Label Styles (Etiquetas y Botones)

#### Label Large
```javascript
labelLarge: {
  fontFamily: 'Roboto, sans-serif',
  fontSize: 'clamp(13px, 1vw, 16px)',
  fontWeight: 500,
  lineHeight: '1.43',
  letterSpacing: '0.1px'
}
```

#### Label Medium
```javascript
labelMedium: {
  fontFamily: 'Roboto, sans-serif',
  fontSize: 'clamp(12px, 0.9vw, 14px)',
  fontWeight: 500,
  lineHeight: '1.33',
  letterSpacing: '0.5px'
}
```

#### Label Small
```javascript
labelSmall: {
  fontFamily: 'Roboto, sans-serif',
  fontSize: 'clamp(11px, 0.8vw, 12px)',
  fontWeight: 500,
  lineHeight: '1.45',
  letterSpacing: '0.5px'
}
```

---

## 💻 Uso

### Import Directo
```jsx
import { textStyles } from '../design-system/foundations/typography.js';

const MiComponente = () => (
  <div>
    <h1 style={textStyles.displayLarge}>
      Título Principal
    </h1>
    <p style={textStyles.bodyMedium}>
      Texto del párrafo con estilo medium.
    </p>
  </div>
);
```

### Con Semantic Colors
```jsx
import { textStyles } from '../design-system/foundations/typography.js';
import { useSemanticTokens } from '../design-system/foundations/theme-hooks.js';

const MiComponente = () => {
  const colors = useSemanticTokens();
  
  return (
    <div>
      <h1 style={{
        ...textStyles.displayLarge,
        color: colors.content.text
      }}>
        Título Principal
      </h1>
      <p style={{
        ...textStyles.bodyMedium,
        color: colors.content.textSecondary
      }}>
        Texto secundario
      </p>
    </div>
  );
};
```

### CSS Classes (Auto-generadas)
```jsx
import { injectResponsiveClasses } from '../design-system/foundations/responsive-classes.js';

// En tu App.jsx o componente principal
useEffect(() => {
  injectResponsiveClasses();
}, []);

// Usar las clases en tus componentes
<h1 className="text-display-large">Título Principal</h1>
<p className="text-body-medium">Texto del párrafo</p>
```

### Clases CSS Disponibles
```css
/* Display */
.text-display-large
.text-display-medium  
.text-display-small

/* Heading */
.text-heading-large
.text-heading-medium
.text-heading-small

/* Title */
.text-title-large
.text-title-medium
.text-title-small

/* Body */
.text-body-large
.text-body-medium
.text-body-small

/* Label */
.text-label-large
.text-label-medium
.text-label-small
```

---

## 📱 Responsive Design

### Sistema de Escalado

#### Función clamp()
Todos los tamaños tipográficos usan `clamp()` para escalado responsive:

```css
/* Estructura: clamp(mínimo, preferido, máximo) */
font-size: clamp(14px, 1vw, 16px);

/* 
- 14px: Tamaño mínimo (mobile pequeño)
- 1vw: Tamaño preferido (escala con viewport)
- 16px: Tamaño máximo (desktop)
*/
```

#### Breakpoints Implícitos
```javascript
// El sistema se adapta automáticamente:
Mobile (320px - 768px):    Usa tamaños mínimos
Tablet (768px - 1024px):   Escalado proporcional  
Desktop (1024px+):         Usa tamaños máximos
```

### Personalización Responsive

#### Override Tamaños
```jsx
const customTextStyle = {
  ...textStyles.bodyMedium,
  fontSize: 'clamp(16px, 1.2vw, 20px)' // Más grande
};

<p style={customTextStyle}>Texto personalizado</p>
```

#### Media Queries Manuales
```jsx
const responsiveText = {
  base: textStyles.bodyMedium,
  '@media (max-width: 768px)': {
    fontSize: '14px',
    lineHeight: '1.4'
  },
  '@media (min-width: 1200px)': {
    fontSize: '18px',
    lineHeight: '1.6'
  }
};
```

---

## 🎯 Guías de Uso

### Jerarquía Recomendada

#### Página Típica
```jsx
const PaginaTipica = () => (
  <div>
    {/* Hero/Header principal */}
    <h1 style={textStyles.displayLarge}>
      Título Principal de la Página
    </h1>
    
    {/* Subtítulo descriptivo */}
    <p style={textStyles.headingMedium}>
      Subtítulo o descripción breve
    </p>
    
    {/* Secciones */}
    <section>
      <h2 style={textStyles.headingLarge}>
        Título de Sección
      </h2>
      
      {/* Contenido de sección */}
      <h3 style={textStyles.titleMedium}>
        Título de Subsección
      </h3>
      
      <p style={textStyles.bodyMedium}>
        Párrafo de contenido regular con información detallada 
        sobre el tema tratado en esta sección.
      </p>
      
      <p style={textStyles.bodySmall}>
        Texto secundario, notas, disclaimers o información adicional.
      </p>
    </section>
  </div>
);
```

#### Card/Componente
```jsx
const Card = ({ title, category, description, date }) => (
  <article>
    <span style={textStyles.labelSmall}>
      {category}
    </span>
    
    <h3 style={textStyles.titleMedium}>
      {title}
    </h3>
    
    <p style={textStyles.bodyMedium}>
      {description}
    </p>
    
    <time style={textStyles.bodySmall}>
      {date}
    </time>
  </article>
);
```

### Font Loading Optimization

#### Font Display Strategy
```css
/* En tu CSS global */
@font-face {
  font-family: 'Ubuntu';
  src: url('./fonts/Ubuntu-Regular.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: swap; /* Importante para performance */
}

@font-face {
  font-family: 'Roboto';
  src: url('./fonts/Roboto-Regular.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
```

#### Fallback Fonts
```javascript
// Ya incluidos en textStyles
fontFamily: 'Ubuntu, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
fontFamily: 'Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
```

---

## 🔧 Extensión

### Agregar Nuevos Estilos

#### 1. Definir en typography.js
```javascript
// Agregar al objeto textStyles
export const textStyles = {
  // ... estilos existentes
  
  // Nuevo estilo
  captionLarge: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: 'clamp(10px, 0.8vw, 12px)',
    fontWeight: 400,
    lineHeight: '1.2',
    letterSpacing: '0.4px'
  }
};
```

#### 2. Actualizar responsive-classes.js
```javascript
// Agregar a generateTypographyClasses()
const typographyClasses = `
  /* Estilos existentes... */
  
  .text-caption-large {
    font-family: ${textStyles.captionLarge.fontFamily};
    font-size: ${textStyles.captionLarge.fontSize};
    font-weight: ${textStyles.captionLarge.fontWeight};
    line-height: ${textStyles.captionLarge.lineHeight};
    letter-spacing: ${textStyles.captionLarge.letterSpacing};
  }
`;
```

#### 3. Documentar y Usar
```jsx
// Nuevo estilo disponible
<span style={textStyles.captionLarge}>Caption text</span>
<span className="text-caption-large">Caption text</span>
```

### Crear Variantes de Peso

#### Font Weight Variations
```javascript
const weightVariants = {
  titleMediumBold: {
    ...textStyles.titleMedium,
    fontWeight: 700
  },
  bodyMediumLight: {
    ...textStyles.bodyMedium,
    fontWeight: 300
  }
};
```

### Contextos Específicos

#### Estilos para Componentes
```javascript
// En el archivo del componente
const buttonTextStyles = {
  primary: {
    ...textStyles.labelMedium,
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: '1px'
  },
  
  secondary: {
    ...textStyles.labelMedium,
    fontWeight: 400,
    textTransform: 'none'
  }
};
```

---

**Archivo**: `src/design-system/foundations/typography/README.md`  
**Mantenido por**: Equipo MEP  
**Última actualización**: Octubre 2025