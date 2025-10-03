# Sistema de Diseño MEP - Documentación

## 📋 Índice
- [Introducción](#introducción)
- [Arquitectura](#arquitectura)
- [Foundations](#foundations)
- [Componentes (Atoms)](#componentes-atoms)
- [Sistema de Plantillas](#sistema-de-plantillas)
- [Mejores Prácticas](#mejores-prácticas)

## 🎨 Introducción

El Sistema de Diseño MEP es una implementación completa de design system que proporciona:

- **Consistencia visual** across toda la aplicación
- **Reutilización de componentes** para desarrollo eficiente
- **Escalabilidad** para futuras features y páginas
- **Mantenimiento centralizado** de estilos y comportamientos

## 🏗️ Arquitectura

```
design-system/
├── foundations/              # Fundamentos del sistema
│   ├── colors.js            # Sistema de colores
│   ├── typography.js        # Sistema tipográfico
│   ├── layout.js            # Layouts y spacing
│   ├── shapes.js            # Shapes decorativos
│   ├── theme-hooks.js       # Hooks de tema
│   ├── responsive-classes.js # Sistema responsive
│   ├── icons/               # Sistema de iconos
│   ├── img/                 # Imágenes del sistema
│   └── video/               # Videos del sistema
├── atoms/                   # Componentes básicos
│   ├── Button/              # Sistema de botones
│   ├── Badge/               # Sistema de badges
│   ├── Card/                # Sistema de tarjetas
│   ├── Header/              # Componentes de header
│   ├── Footer/              # Componentes de footer
│   ├── sections/            # Secciones reutilizables
│   └── PageTemplate.jsx     # Plantilla base
└── TEMPLATE_SYSTEM_GUIDE.md # Guía completa del sistema
```

## 🏛️ Foundations

### Colors & Themes
- **Paleta base**: Colores primarios y secundarios
- **Colores semánticos**: Sistema adaptativo para diferentes contextos
- **Theme hooks**: `useSemanticTokens()`, `useComponentColors()`

### Typography
- **Escalas**: Display, Heading, Title, Label, Button, Body
- **Responsive**: Escalado automático con clamp()
- **Familias**: Ubuntu (estructura) y Roboto (contenido)

### Layout
- **Spacing**: Sistema escalable mobile/desktop
- **Grids**: Configuraciones para projects, stats, blog
- **Containers**: Page, content, section containers
- **Breakpoints**: Mobile, tablet, desktop consistentes

### Responsive Classes
- **Auto-injection**: Clases responsive automáticas
- **Typography**: getTypographyClass() para scaling
- **Utilities**: injectResponsiveClasses()

## ⚛️ Componentes (Atoms)

### Buttons
```jsx
import { ButtonPrimary, ButtonSecondary, ButtonOutline, ButtonGhost } from './Button';

<ButtonPrimary size="md" selected={false}>
  Primary Action
</ButtonPrimary>
```

### Badges
```jsx
import BadgeText from './Badge/BadgeText';

<BadgeText variant="primary" size="md">
  Badge Text
</BadgeText>
```

### Cards
```jsx
import { CardVertical, CardHorizontal } from './Card';

<CardVertical 
  size="xl"
  image="/path/image.jpg"
  title="Card Title"
  description="Card description"
  badgeText="Category"
/>
```

### Sections (Template System)
```jsx
import { HeroSection, StatsSection, ProjectsSection } from './sections';

<HeroSection
  title="Hero Title"
  subtitle="Hero subtitle"
  buttonText="Action"
  onButtonClick={handler}
/>
```

## 🏗️ Sistema de Plantillas

### PageTemplate
Plantilla base que proporciona:
- Estructura de contenedor responsive
- Wrapper de contenido con max-width
- Sistema de clases base
- Inyección automática de estilos

```jsx
import PageTemplate from './PageTemplate.jsx';

const MiPagina = () => (
  <PageTemplate>
    {/* Contenido de la página */}
  </PageTemplate>
);
```

### Secciones Predefinidas
- **HeroSection**: Hero con video, texto y CTA
- **StatsSection**: Grid de estadísticas
- **ProjectsSection**: Grid de proyectos con cards
- **BlogSection**: Lista de artículos de blog
- **EmptySpace**: Espaciado configurable

## 📐 Mejores Prácticas

### 1. Uso de Semantic Tokens
```jsx
// ✅ Correcto - Usar tokens semánticos
const semanticColors = useSemanticTokens();
style={{ color: semanticColors.content.text }}

// ❌ Incorrecto - Colores hardcodeados
style={{ color: '#333333' }}
```

### 2. Spacing Consistente
```jsx
// ✅ Correcto - Usar sistema de spacing
import { spacing } from '../foundations/layout.js';
gap: spacing.vw.lg

// ❌ Incorrecto - Valores hardcodeados
gap: '24px'
```

### 3. Responsive Design
```jsx
// ✅ Correcto - Usar clamp() para fluidez
fontSize: 'clamp(16px, 2vw, 24px)'

// ❌ Incorrecto - Valores fijos
fontSize: '20px'
```

### 4. Componentes Modulares
```jsx
// ✅ Correcto - Componentes configurables
<HeroSection 
  title="Mi Título"
  showShape={false}
  semanticColors={colors}
/>

// ❌ Incorrecto - Componentes hardcodeados
<div className="hero-fixed">...</div>
```

### 5. Estructura de Archivos
```
// ✅ Correcto - Organización clara
ComponentName/
├── ComponentName.jsx
├── ComponentVariant.jsx
└── index.js

// ❌ Incorrecto - Archivos sueltos
component1.jsx
component2.jsx
```

## 🔧 Extensión del Sistema

### Agregar Nuevo Componente
1. Crear carpeta en `atoms/[ComponentName]/`
2. Implementar componente con JSDoc
3. Seguir convenciones de naming
4. Incluir variantes y tamaños
5. Exportar en `index.js`
6. Documentar en README específico

### Agregar Nueva Foundation
1. Crear archivo en `foundations/`
2. Exportar utilidades y tokens
3. Documentar parámetros y uso
4. Integrar con sistema existente
5. Actualizar imports necesarios

### Agregar Nueva Sección
1. Crear en `atoms/sections/`
2. Usar foundations existentes
3. Hacer configurable con props
4. Incluir estilos responsive
5. Exportar en `sections/index.js`

## 📚 Recursos

- [Guía del Sistema de Plantillas](TEMPLATE_SYSTEM_GUIDE.md)
- [Documentación de Colores](foundations/COLORS_README.md)
- [Documentación de Tipografía](foundations/TYPOGRAPHY_README.md)
- [Documentación de Iconos](foundations/icons/README.md)

---

**Mantenido por**: Equipo MEP  
**Actualizado**: Octubre 2025