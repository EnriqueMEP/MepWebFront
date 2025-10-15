# 📝 Guía del Sistema Tipográfico MEP

## 🎯 Resumen Rápido

**¿Quieres cambiar el tamaño de texto en toda la web?** Ve directamente a la sección [Cambios Globales Rápidos](#-cambios-globales-rápidos).

## 🏗️ Arquitectura del Sistema

### 📁 Archivos Principales

```
src/design-system/foundations/
├── typography.js           # ⚠️  Sistema legacy (solo showcase)
├── responsive-classes.js   # ✅  Sistema ACTIVO (producción)
└── responsive-utils.js     # 🔧  Breakpoints y utilidades
```

## ⚡ Cambios Globales Rápidos

### 🎨 Para cambiar tamaños de texto en TODA la web:

**Archivo:** `src/design-system/foundations/responsive-classes.js`

```javascript
// TÍTULOS PRINCIPALES (Hero sections, displays)
.text-display-large {
  font-size: 1.75rem;        // 📱 MÓVIL: Cambiar aquí
}

@media (min-width: 768px) {
  .text-display-large {
    font-size: 1.8vw;         // 💻 DESKTOP: Cambiar aquí
  }
}

// DESCRIPCIONES Y SUBTÍTULOS  
.text-title-large {
  font-size: 0.9rem;         // 📱 MÓVIL: Cambiar aquí
}

@media (min-width: 768px) {
  .text-title-large {
    font-size: 0.9vw;         // 💻 DESKTOP: Cambiar aquí
  }
}
```

### 📐 Valores Recomendados

| Elemento | Móvil (rem) | Desktop (vw) | Uso |
|----------|-------------|--------------|-----|
| **Títulos Hero** | `1.5rem` - `2rem` | `1.5vw` - `2.2vw` | Avanzamos comprometidos |
| **Descripciones** | `0.8rem` - `1.1rem` | `0.8vw` - `1.2vw` | Nuestra compañía... |
| **Headings** | `1.2rem` - `1.8rem` | `1.4vw` - `2vw` | Títulos de sección |

## 🔍 Sistema Detallado

### ✅ Sistema ACTIVO: `responsive-classes.js`

**¿Qué hace?**
- Define TODAS las clases CSS que se usan en producción
- Se inyecta automáticamente con `injectResponsiveClasses()`
- Controla el comportamiento responsive y zoom

**Clases principales:**

```javascript
// DISPLAY (Títulos grandes)
.text-display-large    // Hero titles
.text-display-medium   // Subtítulos importantes  
.text-display-small    // Títulos de sección

// TITLES (Descripciones)
.text-title-large      // Descripciones principales
.text-title-medium     // Contenido secundario
.text-title-small      // Textos pequeños

// HEADINGS (Encabezados)
.text-heading-large    // H1, H2
.text-heading-medium   // H3, H4
.text-heading-small    // H5, H6
```

### ⚠️ Sistema LEGACY: `typography.js`

**¿Qué hace?**
- Define tokens tipográficos originales de Figma
- Solo se usa en `foundations-showcase.jsx` 
- NO afecta la producción (pero mantener sincronizado)

**Para mantener consistencia:**
```javascript
// En fontSizes > display
large: '28px',    // Mantener igual que responsive-classes móvil
```

## 🎯 Componentes que Usan el Sistema

### 🏠 HeroSection
```jsx
<div className="text-display-large">     {/* Título */}
<div className="text-title-large">       {/* Descripción */}
```

### 🧭 Header
```jsx
<span className="text-label-medium">     {/* Navegación */}
```

### 🃏 Cards
```jsx
<div className="text-heading-medium">    {/* Título de card */}
<div className="text-body-medium">       {/* Descripción de card */}
```

## 🔧 Cómo Hacer Cambios

### 1️⃣ Cambio Global (Recomendado)

**Para cambiar TODOS los títulos hero en la web:**

```javascript
// responsive-classes.js
.text-display-large {
  font-size: 1.5rem;  // Nuevo tamaño móvil
}

@media (min-width: 768px) {
  .text-display-large {
    font-size: 1.6vw;  // Nuevo tamaño desktop
  }
}
```

### 2️⃣ Cambio Específico (No recomendado)

**Para cambiar solo un componente:**

```jsx
// En el componente específico
<div 
  className="text-display-large" 
  style={{ fontSize: '1.2rem' }}  // Solo este elemento
>
```

### 3️⃣ Nuevo Tamaño (Para casos especiales)

**Si necesitas un tamaño completamente nuevo:**

```javascript
// Agregar en responsive-classes.js
.text-display-extra-small {
  font-size: 1rem;
}

@media (min-width: 768px) {
  .text-display-extra-small {
    font-size: 1.2vw;
  }
}
```

## 📱 Comportamiento Responsive

### 🎛️ Sistema VW (Zoom Consistente)

- **Móvil (< 768px):** Usa `rem` (tamaño fijo, no escala con zoom)
- **Desktop (≥ 768px):** Usa `vw` (escala proporcionalmente con zoom)

### 🔍 Zoom Behavior

```
❌ Antes: Elementos se movían a diferentes velocidades
✅ Ahora: Todo escala proporcionalmente junto
```

## 🚀 Flujo de Inyección

### Componentes que DEBEN usar `injectResponsiveClasses()`:

```jsx
import { injectResponsiveClasses } from '../../foundations/responsive-classes.js';

const MiComponente = () => {
  // ✅ OBLIGATORIO para que funcionen las clases
  React.useEffect(() => {
    injectResponsiveClasses();
  }, []);

  return <div className="text-display-large">Texto</div>;
};
```

### ✅ Ya implementado en:
- `Header.jsx`
- `HeroSection.jsx` 
- `PageTemplate.jsx`

## 🐛 Troubleshooting

### Problema: "El texto no cambia de tamaño"

**Soluciones en orden:**

1. **Verificar inyección:** ¿El componente tiene `injectResponsiveClasses()`?
2. **Verificar clase:** ¿Usa la clase CSS correcta? (`text-display-large`)
3. **Verificar override:** ¿Hay estilos inline que sobrescriben?
4. **Limpiar caché:** Reiniciar servidor de desarrollo

### Problema: "El zoom no funciona bien"

**Causa común:** Mezclar `rem` y `vw` en el mismo breakpoint

**Solución:** Usar solo `rem` en móvil, solo `vw` en desktop

## 📊 Tabla de Referencia Rápida

| Quiero cambiar... | Archivo | Línea aprox. | Variable |
|-------------------|---------|--------------|----------|
| **Títulos Hero** | `responsive-classes.js` | ~19 | `.text-display-large` |
| **Descripciones Hero** | `responsive-classes.js` | ~77 | `.text-title-large` |
| **Títulos Cards** | `responsive-classes.js` | ~91 | `.text-heading-large` |
| **Navegación Header** | `responsive-classes.js` | ~175 | `.text-label-medium` |
| **Botones** | `responsive-classes.js` | ~800+ | `.btn-size-*` |

## 🎨 Ejemplos Visuales

### Antes vs Después

```
🔴 ANTES (Problema):
- Móvil: 57px (demasiado grande)
- Desktop: 3.96vw (inconsistente con zoom)

🟢 AHORA (Solucionado):  
- Móvil: 1.75rem (28px, apropiado)
- Desktop: 1.8vw (escala con zoom)
```

---

## 📞 Contacto Rápido

**¿Dudas sobre cambios tipográficos?** 
- Revisa este documento primero
- Haz cambios en `responsive-classes.js` 
- Reinicia el servidor si no ves cambios

**Última actualización:** Octubre 2025