# Sistema de Plantillas MEP - Guía de Uso

## 📖 Introducción

El sistema de plantillas MEP permite crear páginas nuevas de manera rápida y consistente, reutilizando componentes y estilos ya establecidos. Todas las funcionalidades de layout, responsive design y componentes están modularizadas.

## 🏗️ Arquitectura del Sistema

### Foundations (Fundamentos)
```
src/design-system/foundations/
├── layout.js          # Sistema de layouts, grids, spacing
├── shapes.js          # Gestión de shapes decorativos
├── typography.js      # Sistema tipográfico
├── theme-hooks.js     # Hooks de tema
└── responsive-classes.js # Clases responsive
```

### Atoms (Componentes básicos)
```
src/design-system/atoms/
├── PageTemplate.jsx   # Plantilla base de página
├── sections/          # Componentes de sección
│   ├── HeroSection.jsx
│   ├── StatsSection.jsx
│   ├── ProjectsSection.jsx
│   ├── BlogSection.jsx
│   └── EmptySpace.jsx
├── Button/
├── Card/
└── Badge/
```

## 🚀 Cómo crear una nueva página

### 1. Estructura básica
```jsx
import React from 'react';
import PageTemplate from '../design-system/atoms/PageTemplate.jsx';
import { HeroSection, EmptySpace } from '../design-system/atoms/sections/index.js';
import { useSemanticTokens } from '../design-system/foundations/theme-hooks.js';

const NuevaPagina = () => {
  const semanticColors = useSemanticTokens();
  
  return (
    <PageTemplate>
      {/* Tu contenido aquí */}
    </PageTemplate>
  );
};
```

### 2. Usando secciones predefinidas

#### HeroSection
```jsx
<HeroSection
  badgeText="Novedad"
  title="Tu título<br/>aquí"
  subtitle="Descripción de tu página"
  buttonText="Acción"
  onButtonClick={() => console.log('click')}
  videoSrc="/ruta/video.mp4"
  showShape={true}
  semanticColors={semanticColors}
/>
```

#### StatsSection
```jsx
<StatsSection
  title="Estadísticas"
  stats={[
    { value: "100+", label: "Proyectos", description: "completados" },
    { value: "50+", label: "Clientes", description: "" }
  ]}
  semanticColors={semanticColors}
/>
```

#### ProjectsSection
```jsx
<ProjectsSection
  title="Nuestros proyectos"
  projects={arrayProyectos}
  selectedProject={selectedProject}
  onProjectClick={handleProjectClick}
  cardSize="xl"
  showShape={true}
  semanticColors={semanticColors}
/>
```

#### EmptySpace
```jsx
<EmptySpace size="xl" />              // Tamaños predefinidos
<EmptySpace customHeight="50px" />    // Altura personalizada
<EmptySpace customVwHeight="3vw" />   // Altura en vw para desktop
```

## 📐 Sistema de Spacing

### Tamaños disponibles
- `xs`: 8px mobile / 0.56vw desktop
- `sm`: 16px mobile / 1.11vw desktop  
- `md`: 24px mobile / 1.67vw desktop
- `lg`: 32px mobile / 2.22vw desktop
- `xl`: 48px mobile / 2.78vw desktop
- `2xl`: 64px mobile / 4vw desktop
- `3xl`: 96px mobile / 5.56vw desktop

### Uso en layout.js
```jsx
import { spacing, grids, containers } from '../design-system/foundations/layout.js';

// Acceso a valores
spacing.vw.xl        // '2.78vw'
spacing.base.lg      // '2rem'
grids.projects       // Configuración de grid para proyectos
containers.page      // Configuración de contenedor de página
```

## 🎨 Shapes Decorativos

### Configuraciones disponibles
```jsx
import { generateShapeStyles } from '../design-system/foundations/shapes.js';

// Usar en componente
const styles = generateShapeStyles('hero');    // Shape del hero
const styles = generateShapeStyles('projects'); // Shape de proyectos
const styles = generateShapeStyles('blog');     // Shape del blog
```

### Crear shape personalizado
```jsx
import { createCustomShape } from '../design-system/foundations/shapes.js';

const miShape = createCustomShape({
  image: '/ruta/imagen.png',
  desktop: {
    top: '-5vw',
    right: '-10vw',
    width: '30vw',
    height: '40vw'
  }
});
```

## 🎯 Ejemplos de Uso

### Página simple con Hero y Stats
```jsx
const PaginaSimple = () => {
  const semanticColors = useSemanticTokens();
  
  return (
    <PageTemplate>
      <HeroSection
        title="Título<br/>Principal"
        subtitle="Descripción"
        semanticColors={semanticColors}
      />
      
      <EmptySpace size="xl" />
      
      <StatsSection
        title="Nuestros números"
        stats={misEstadisticas}
        semanticColors={semanticColors}
      />
    </PageTemplate>
  );
};
```

### Página completa con todas las secciones
```jsx
const PaginaCompleta = () => {
  const semanticColors = useSemanticTokens();
  
  return (
    <PageTemplate>
      <HeroSection {...configHero} />
      <EmptySpace size="2xl" />
      <StatsSection {...configStats} />
      <EmptySpace size="2xl" />
      <ProjectsSection {...configProjects} />
      <EmptySpace size="2xl" />
      <BlogSection {...configBlog} />
    </PageTemplate>
  );
};
```

## 🔧 Personalización

### Estilos adicionales en PageTemplate
```jsx
<PageTemplate 
  className="mi-clase-personalizada"
  style={{ backgroundColor: 'custom' }}
>
  {/* contenido */}
</PageTemplate>
```

### Responsive personalizado
```jsx
import { generateResponsiveStyles } from '../design-system/foundations/layout.js';

const estilos = generateResponsiveStyles('mi-componente',
  { /* estilos mobile */ },
  { /* estilos desktop */ }
);
```

## 📱 Responsive Design

Todo el sistema es responsive automáticamente:
- **Mobile**: Estilos base en rem/px
- **Desktop**: Estilos proporcionales en vw
- **Breakpoint**: 768px (tablet)

## ✅ Ventajas del Sistema

1. **Reutilización**: Componentes modulares y configurables
2. **Consistencia**: Mismo spacing y estilos en todas las páginas
3. **Velocidad**: Crear páginas nuevas en minutos
4. **Mantenimiento**: Cambios centralizados se propagan automáticamente
5. **Responsive**: Diseño adaptativo automático
6. **Semántico**: Integración con sistema de colores semánticos

## 🎯 Casos de Uso

- ✅ Páginas institucionales
- ✅ Landing pages de productos/servicios  
- ✅ Páginas de proyectos
- ✅ Páginas sobre nosotros
- ✅ Páginas de contacto
- ✅ Portfolios y galerías