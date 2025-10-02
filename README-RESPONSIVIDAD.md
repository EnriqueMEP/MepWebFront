# Guía de Implementación de Responsividad MEP Web Front

## 📋 Tabla de Contenidos

1. [Introducción](#introducción)
2. [Principios Fundamentales](#principios-fundamentales)
3. [Sistema de Clases CSS](#sistema-de-clases-css)
4. [Patrones de Implementación](#patrones-de-implementación)
5. [Ejemplos Prácticos](#ejemplos-prácticos)
6. [API de Funciones Utilitarias](#api-de-funciones-utilitarias)
7. [Mejores Prácticas](#mejores-prácticas)
8. [Troubleshooting](#troubleshooting)

---

## 🎯 Introducción

Este documento describe el sistema de responsividad unificado utilizado en MEP Web Front, basado en escalado proporcional con `clamp()` y viewport width (vw). El sistema garantiza un comportamiento consistente en todos los dispositivos y componentes.

### ¿Por qué este sistema?

- **Escalado proporcional**: Los elementos mantienen sus proporciones en cualquier tamaño de pantalla
- **Consistencia visual**: Todos los componentes siguen las mismas reglas de escalado
- **Performance**: Una sola inyección de CSS para toda la aplicación
- **Mantenibilidad**: Cambios centralizados en `responsive-classes.js`

---

## 🏗️ Principios Fundamentales

### 1. Escalado con `clamp()`
```css
font-size: clamp(mínimo, preferido_vw, máximo);
```

### 2. Viewport Width (vw)
- Usa porcentajes del ancho de viewport para escalado proporcional
- Garantiza que los elementos crezcan/decrezcan proporcionalmente

### 3. Clases CSS Escalables
- Separación entre **estructura** (CSS escalable) y **presentación** (colores, estados)
- Las dimensiones se manejan vía clases CSS, no estilos inline

### 4. Inyección Única
- `injectResponsiveClasses()` se ejecuta una vez por componente
- El CSS se inyecta globalmente para toda la aplicación

---

## 🎨 Sistema de Clases CSS

### Tipografía
```css
.text-display-large    /* clamp(2rem, 3.96vw, 3.96vw) */
.text-display-medium   /* clamp(1.75rem, 3.13vw, 3.13vw) */
.text-display-small    /* clamp(1.5rem, 2.5vw, 2.5vw) */
.text-title-large      /* clamp(1rem, 1.53vw, 1.53vw) */
.text-heading-large    /* clamp(1.5rem, 2.22vw, 2.22vw) */
.text-heading-medium   /* clamp(1.25rem, 1.94vw, 1.94vw) */
.text-heading-small    /* clamp(1rem, 1.67vw, 1.67vw) */
.text-body-large       /* clamp(0.875rem, 1.11vw, 1.11vw) */
.text-body-medium      /* clamp(0.8125rem, 1.04vw, 1.04vw) */
.text-label-large      /* clamp(0.75rem, 0.97vw, 0.97vw) */
.text-label-medium     /* clamp(0.688rem, 0.83vw, 0.83vw) */
.text-label-small      /* clamp(0.625rem, 0.69vw, 0.69vw) */
```

### Botones
```css
.btn-size-sm   /* height: 2rem, padding: 0.5rem 0.75rem */
.btn-size-md   /* height: 2.5rem, padding: 0.5rem 1rem */
.btn-size-lg   /* height: 3rem, padding: 0.5rem 1.25rem */
.btn-size-xl   /* height: 3.5rem, padding: 0.5rem 1.5rem */
```

### Badges
```css
.badge-size-sm   /* height: 1rem, padding: 0.125rem 0.375rem */
.badge-size-md   /* height: 1.25rem, padding: 0.25rem 0.75rem */
.badge-size-lg   /* height: 1.5rem, padding: 0.25rem 1rem */
.badge-size-xl   /* height: 2rem, padding: 0.25rem 1.25rem */
```

### Iconos
```css
.icon-size-sm   /* 1rem x 1rem */
.icon-size-md   /* 1.25rem x 1.25rem */
.icon-size-lg   /* 1.5rem x 1.5rem */
.icon-size-xl   /* 1.75rem x 1.75rem */
```

### Cards
```css
.card-size-sm   /* width: 10rem, padding: 0.75rem */
.card-size-md   /* width: 12.5rem, padding: 1rem */
.card-size-lg   /* width: 14rem, padding: 1.25rem */
.card-size-xl   /* width: 16.67rem, padding: 1.5rem */
```

### Clases Base
```css
.component-base         /* box-sizing: border-box, transition: all 0.2s ease */
.component-interactive  /* cursor: pointer, user-select: none */
.component-disabled     /* cursor: not-allowed, opacity: 0.6, pointer-events: none */
.component-flex-center  /* display: inline-flex, align-items: center, justify-content: center */
.component-flex-start   /* display: inline-flex, align-items: center, justify-content: flex-start */
.component-flex-end     /* display: inline-flex, align-items: center, justify-content: flex-end */
.component-flex-between /* display: inline-flex, align-items: center, justify-content: space-between */
.component-flex-column  /* display: flex, flex-direction: column */
.component-no-wrap      /* white-space: nowrap */
.component-full-width   /* width: 100% */
```

---

## 🔧 Patrones de Implementación

### 1. Patrón Básico de Componente

```jsx
import React from 'react';
import { injectResponsiveClasses, getTypographyClass } from '../../foundations/responsive-classes.js';

const MiComponente = ({ 
  size = 'md',
  className = '',
  style = {},
  ...props 
}) => {
  // 1. Inyectar clases responsivas al montar
  React.useEffect(() => {
    injectResponsiveClasses();
  }, []);

  // 2. Obtener clases escalables
  const typographyClass = getTypographyClass('button', size); // o 'badge', 'card'
  const sizeClass = `component-size-${size}`;

  // 3. Estilos inline solo para colores y propiedades no escalables
  const componentStyles = {
    backgroundColor: 'var(--color-primary)',
    color: 'var(--color-text)',
    // NO incluir fontSize, padding, height, etc.
    ...style
  };

  // 4. Combinar clases CSS escalables
  const combinedClassName = [
    'component-base',
    'component-flex-center',
    typographyClass,
    sizeClass,
    className
  ].filter(Boolean).join(' ');

  return (
    <div
      className={combinedClassName}
      style={componentStyles}
      {...props}
    >
      {/* contenido */}
    </div>
  );
};
```

### 2. Patrón con Estados (Hover, Disabled, etc.)

```jsx
const ComponenteConEstados = ({ 
  disabled = false,
  selected = false,
  size = 'md',
  ...props 
}) => {
  const [isHovering, setIsHovering] = useState(false);

  React.useEffect(() => {
    injectResponsiveClasses();
  }, []);

  // Obtener colores según estado
  const getStateColors = () => {
    if (disabled) return colors.disabled;
    if (selected) return colors.selected;
    if (isHovering) return colors.hover;
    return colors.default;
  };

  const stateColors = getStateColors();
  const typographyClass = getTypographyClass('button', size);
  const sizeClass = `btn-size-${size}`;

  const componentStyles = {
    backgroundColor: stateColors.background,
    color: stateColors.text,
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.6 : 1,
    transition: 'all 0.2s ease-in-out',
  };

  const combinedClassName = [
    'component-base',
    'component-interactive',
    typographyClass,
    sizeClass,
    disabled && 'component-disabled',
    className
  ].filter(Boolean).join(' ');

  return (
    <button
      className={combinedClassName}
      style={componentStyles}
      onMouseEnter={() => !disabled && setIsHovering(true)}
      onMouseLeave={() => !disabled && setIsHovering(false)}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};
```

### 3. Patrón para Iconos

```jsx
const IconComponente = ({ 
  size = 24,
  type = 'line',
  className = '',
  ...props 
}) => {
  React.useEffect(() => {
    injectResponsiveClasses();
  }, []);

  // Mapear tamaño numérico a clase CSS
  const getIconSizeClass = (size) => {
    if (size <= 16) return 'icon-size-sm';
    if (size <= 20) return 'icon-size-md';
    if (size <= 24) return 'icon-size-lg';
    return 'icon-size-xl';
  };

  const sizeClass = getIconSizeClass(size);

  const combinedClassName = [
    `icon-${type}`,
    'component-base',
    sizeClass,
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={combinedClassName}>
      {/* contenido del icono */}
    </div>
  );
};
```

---

## 📝 Ejemplos Prácticos

### ButtonPrimary
```jsx
// ✅ CORRECTO - Siguiendo el patrón
const ButtonPrimary = ({ size = 'md', children, leftIcon, rightIcon, ...props }) => {
  React.useEffect(() => {
    injectResponsiveClasses();
  }, []);

  const typographyClass = getTypographyClass('button', size);
  const sizeClass = `btn-size-${size}`;
  
  const combinedClassName = [
    `btn-primary-${size}`,
    'component-base',
    'component-flex-center',
    'component-interactive',
    typographyClass,
    sizeClass,
    className
  ].filter(Boolean).join(' ');

  return (
    <button className={combinedClassName} style={buttonStyles} {...props}>
      {leftIcon && <Icon name={leftIcon} size={sizeConfig.iconSize} />}
      <span>{children}</span>
      {rightIcon && <Icon name={rightIcon} size={sizeConfig.iconSize} />}
    </button>
  );
};
```

### BadgeText
```jsx
// ✅ CORRECTO - Siguiendo el patrón
const BadgeText = ({ size = 'md', variant = 'primary', children, ...props }) => {
  React.useEffect(() => {
    injectResponsiveClasses();
  }, []);

  const typographyClass = getTypographyClass('badge', size);
  const sizeClass = `badge-size-${size}`;

  const combinedClassName = [
    'component-base',
    'component-flex-center',
    'component-no-wrap',
    typographyClass,
    sizeClass,
    className
  ].filter(Boolean).join(' ');

  return (
    <span className={combinedClassName} style={badgeStyles} {...props}>
      {children}
    </span>
  );
};
```

### Home Page Pattern
```jsx
// ✅ CORRECTO - Escalado proporcional directo
const Home = () => {
  const responsiveStyle = `
    .home-title {
      font-size: clamp(2rem, 3.96vw, 3.96vw);
      line-height: 1.12;
    }
    .home-subtitle {
      font-size: clamp(1rem, 1.53vw, 1.53vw);
      line-height: 1.5;
    }
    .home-section-padding {
      padding: clamp(2rem, 5.56vw, 5.56vw) clamp(1rem, 2.78vw, 2.78vw);
    }
  `;

  return (
    <>
      <style>{responsiveStyle}</style>
      <div className="home-section-padding">
        <h1 className="home-title">Título Principal</h1>
        <p className="home-subtitle">Subtítulo</p>
      </div>
    </>
  );
};
```

---

## 🛠️ API de Funciones Utilitarias

### `injectResponsiveClasses()`
```jsx
React.useEffect(() => {
  injectResponsiveClasses();
}, []);
```
- **Propósito**: Inyecta todas las clases CSS responsivas en el `<head>`
- **Cuándo usar**: En el useEffect de cada componente que use clases responsivas
- **Nota**: Se ejecuta solo una vez globalmente, múltiples llamadas no duplican el CSS

### `getTypographyClass(componentType, size)`
```jsx
const typographyClass = getTypographyClass('button', 'lg');
// Retorna: 'text-heading-small'
```

**Parámetros:**
- `componentType`: `'button'` | `'badge'` | `'card'` | `'header'` | `'footer'`
- `size`: `'sm'` | `'md'` | `'lg'` | `'xl'`

**Mapeo de tipografía:**
```javascript
button: {
  sm: 'text-label-medium',
  md: 'text-body-large', 
  lg: 'text-heading-small',
  xl: 'text-heading-medium'
},
badge: {
  sm: 'text-label-small',
  md: 'text-label-small',
  lg: 'text-label-medium',
  xl: 'text-body-large'
},
card: {
  sm: 'text-body-medium',
  md: 'text-body-large',
  lg: 'text-heading-small',
  xl: 'text-heading-medium'
},
header: {
  sm: 'text-body-large',
  md: 'text-heading-small',
  lg: 'text-heading-medium',
  xl: 'text-heading-large'
},
footer: {
  sm: 'text-label-large',
  md: 'text-body-large',
  lg: 'text-heading-small',
  xl: 'text-heading-medium'
}
```

### `getSizeValue(componentType, size, property)`
```jsx
const iconSize = getSizeValue('button', 'lg', 'iconSize');
// Retorna: 24
```

**Parámetros:**
- `componentType`: `'button'` | `'badge'` | `'icon'`
- `size`: `'sm'` | `'md'` | `'lg'` | `'xl'`
- `property`: `'height'` | `'iconSize'` | `'fontSize'` | `'padding'` | `'size'`

**Casos de uso:**
- Compatibilidad con componentes legacy que necesitan valores numéricos
- Cálculos dinámicos basados en tamaños de componentes
- Integración con librerías que requieren valores en píxeles

---

## ✅ Mejores Prácticas

### ✅ Hacer

1. **Usar clases CSS para dimensiones**
   ```jsx
   // ✅ CORRECTO
   const className = `btn-size-${size} text-body-large`;
   ```

2. **Inyectar clases responsivas al montar**
   ```jsx
   // ✅ CORRECTO
   React.useEffect(() => {
     injectResponsiveClasses();
   }, []);
   ```

3. **Combinar clases en arrays filtrados**
   ```jsx
   // ✅ CORRECTO
   const combinedClassName = [
     'component-base',
     sizeClass,
     disabled && 'component-disabled',
     className
   ].filter(Boolean).join(' ');
   ```

4. **Usar estilos inline solo para colores y estados**
   ```jsx
   // ✅ CORRECTO
   const styles = {
     backgroundColor: colors.primary,
     color: colors.text,
     opacity: disabled ? 0.6 : 1
   };
   ```

### ❌ Evitar

1. **NO usar dimensiones fijas en estilos inline**
   ```jsx
   // ❌ INCORRECTO
   const styles = {
     fontSize: '16px',
     padding: '8px 16px',
     height: '40px'
   };
   ```

2. **NO duplicar inyección de clases**
   ```jsx
   // ❌ INCORRECTO - Sin useEffect
   const MiComponente = () => {
     injectResponsiveClasses(); // Se ejecuta en cada render
   };
   ```

3. **NO mezclar escalado manual con clases responsivas**
   ```jsx
   // ❌ INCORRECTO
   const styles = {
     fontSize: `clamp(1rem, 2vw, 2rem)`, // Ya está en las clases CSS
   };
   ```

4. **NO usar breakpoints manuales**
   ```jsx
   // ❌ INCORRECTO
   const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
   ```

---

## 🐛 Troubleshooting

### Problema: Los estilos no se aplican
**Síntomas**: El componente no muestra el escalado responsivo

**Soluciones:**
1. Verificar que `injectResponsiveClasses()` se llame en useEffect
2. Comprobar que las clases CSS estén en el className, no en style
3. Usar las herramientas de desarrollo para verificar que las clases se inyectaron

```jsx
// ✅ Verificar en DevTools
console.log(document.querySelector('style[data-responsive-classes]'));
```

### Problema: El escalado no es consistente
**Síntomas**: Algunos elementos escalan diferente que otros

**Soluciones:**
1. Usar las clases predefinidas en lugar de valores custom
2. Verificar que todos los componentes usen el mismo patrón
3. No mezclar unidades fijas (px) con escalables (vw, clamp)

### Problema: Performance lenta
**Síntomas**: La aplicación se siente lenta al cargar

**Soluciones:**
1. `injectResponsiveClasses()` debe estar en useEffect, no en el render
2. No inyectar clases múltiples veces por componente
3. Usar `useMemo` para className si es muy complejo

```jsx
// ✅ CORRECTO - Optimizado
const combinedClassName = useMemo(() => [
  'component-base',
  typographyClass,
  sizeClass,
  className
].filter(Boolean).join(' '), [typographyClass, sizeClass, className]);
```

### Problema: Clases no definidas
**Síntomas**: `getTypographyClass` retorna undefined

**Soluciones:**
1. Verificar que el `componentType` sea válido: `'button'`, `'badge'`, `'card'`, `'header'`
2. Verificar que `size` sea válido: `'sm'`, `'md'`, `'lg'`, `'xl'`
3. Actualizar `responsive-classes.js` si necesitas nuevos mappings

---

## 📚 Referencias

- **Archivo principal**: `src/design-system/foundations/responsive-classes.js`
- **Ejemplos de referencia**: 
  - `src/design-system/atoms/Button/ButtonPrimary.jsx`
  - `src/design-system/atoms/Badge/BadgeText.jsx`
  - `src/pages/Home.jsx`
- **Documentación CSS clamp()**: [MDN - clamp()](https://developer.mozilla.org/es/docs/Web/CSS/clamp)
- **Documentación Viewport units**: [MDN - Viewport units](https://developer.mozilla.org/es/docs/Web/CSS/length#viewport-percentage_lengths)

---

## 🔄 Versionado

- **v1.0**: Sistema básico con clamp() y vw
- **v1.1**: Agregadas clases de iconos y cards
- **v1.2**: Funciones utilitarias `getTypographyClass()`
- **v1.3**: Clases base para estados y interacciones

---

**¿Preguntas?** Consulta los ejemplos en los componentes existentes o revisa `responsive-classes.js` para ver todas las clases disponibles.