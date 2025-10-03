# Atoms - Componentes Básicos del Sistema de Diseño

## 📋 Índice
- [Introducción](#introducción)
- [Badge](#badge)
- [Button](#button)
- [Card](#card)
- [Footer](#footer)
- [Header](#header)
- [Sections](#sections)
- [Guías de Desarrollo](#guías-de-desarrollo)

## ⚛️ Introducción

Los **Atoms** son los componentes más básicos del sistema de diseño MEP. Cada atom representa un elemento UI fundamental y reutilizable que mantiene consistencia visual y funcional en toda la aplicación.

### Principios de Atoms
- **Reutilización**: Componentes que se usan múltiples veces
- **Composición**: Pueden combinarse para crear componentes más complejos
- **Consistencia**: Misma apariencia y comportamiento siempre
- **Flexibilidad**: Props configurables para diferentes contextos

---

## 🏷️ Badge

### Archivos
- `BadgeText.jsx` - Badge con texto
- `BadgeNumber.jsx` - Badge numérico
- `BadgeDemoWithAllTypes.jsx` - Demo completo
- `BadgeDo.jsx` - Ejemplos de buenas prácticas

### Características
- Variantes: Primary, Secondary, Success, Warning, Error
- Estados: Normal, Hover, Active
- Tamaños: SM, MD, LG
- Integración completa con tokens semánticos

### Ejemplo de Uso
```jsx
import { BadgeText, BadgeNumber } from '../atoms/Badge';

// Badge de texto
<BadgeText variant="primary" size="md">
  Nuevo
</BadgeText>

// Badge numérico
<BadgeNumber variant="error" size="sm" count={5} />
```

### Props Disponibles
```javascript
// BadgeText
{
  variant: 'primary' | 'secondary' | 'success' | 'warning' | 'error',
  size: 'sm' | 'md' | 'lg',
  children: string
}

// BadgeNumber  
{
  variant: 'primary' | 'secondary' | 'success' | 'warning' | 'error',
  size: 'sm' | 'md' | 'lg',
  count: number,
  maxCount?: number
}
```

---

## 🔘 Button

### Archivos
- `ButtonPrimary.jsx` - Botón principal
- `ButtonSecondary.jsx` - Botón secundario
- `ButtonOutline.jsx` - Botón con borde
- `ButtonGhost.jsx` - Botón transparente (con glassmorphism)
- `ButtonDemoUnified.jsx` - Demo de todos los tipos
- `index.js` - Exportaciones centralizadas

### Características
- Estados: Normal, Hover, Active, Disabled, Loading
- Tamaños: SM, MD, LG, XL
- Soporte para iconos (antes/después del texto)
- Glassmorphism en ButtonGhost
- Integración con semantic tokens

### Ejemplo de Uso
```jsx
import { ButtonPrimary, ButtonGhost } from '../atoms/Button';

// Botón primary básico
<ButtonPrimary size="md" onClick={handleClick}>
  Click me
</ButtonPrimary>

// Botón ghost con glassmorphism
<ButtonGhost size="lg" disabled>
  Disabled
</ButtonGhost>

// Botón con icono
<ButtonPrimary 
  size="md" 
  iconBefore="search"
  onClick={handleSearch}
>
  Buscar
</ButtonPrimary>
```

### Props Comunes
```javascript
{
  size: 'sm' | 'md' | 'lg' | 'xl',
  disabled?: boolean,
  loading?: boolean,
  iconBefore?: string,
  iconAfter?: string,
  onClick?: () => void,
  children: React.ReactNode
}
```

---

## 🃏 Card

### Archivos
- `CardVertical.jsx` - Tarjeta vertical principal
- `CardHorizontal.jsx` - Tarjeta horizontal
- `CardDemoUnified.jsx` - Demo completo
- `index.js` - Exportaciones

### Características CardVertical
- Design exacto de Figma replicado
- Responsive (mobile/desktop)
- Proporción de imagen 16:9 fija
- Integración con semantic colors
- Hover states suaves
- Support para diferentes contenidos

### Estructura CardVertical
```jsx
// Estructura base
<article className="card-vertical">
  <div className="card-image">
    <img src="..." alt="..." />
  </div>
  <div className="card-content">
    <div className="card-category">Categoría</div>
    <h3 className="card-title">Título</h3>
    <p className="card-description">Descripción</p>
    <div className="card-footer">
      <span className="card-date">Fecha</span>
    </div>
  </div>
</article>
```

### Ejemplo de Uso
```jsx
import { CardVertical } from '../atoms/Card';

<CardVertical
  imageSrc="/path/to/image.jpg"
  imageAlt="Descripción imagen"
  category="Tecnología"
  title="Título del artículo"
  description="Descripción del contenido..."
  date="10 Oct 2024"
  href="/articulo/slug"
/>
```

### Props CardVertical
```javascript
{
  imageSrc: string,
  imageAlt: string,
  category: string,
  title: string,
  description: string,
  date: string,
  href?: string,
  onClick?: () => void
}
```

---

## 🦶 Footer

### Archivos
- `Footer.jsx` - Footer principal
- `index.js` - Exportación

### Características
- Layout responsive
- Links organizados por secciones
- Información de copyright
- Integración con tokens semánticos

### Estructura
```jsx
<footer className="footer">
  <div className="footer-content">
    <div className="footer-sections">
      {/* Secciones de links */}
    </div>
    <div className="footer-bottom">
      {/* Copyright */}
    </div>
  </div>
</footer>
```

---

## 📑 Header

### Archivos
- `Header.jsx` - Header principal con dropdown
- `index.js` - Exportación

### Características
- Navegación responsive
- Dropdown con glassmorphism
- Estados hover/active
- Mobile menu hamburger
- Logo integrado

### Estructura
```jsx
<header className="header">
  <div className="header-container">
    <div className="header-logo">
      {/* Logo */}
    </div>
    <nav className="header-nav">
      {/* Navegación */}
    </nav>
    <div className="header-dropdown">
      {/* Dropdown con glassmorphism */}
    </div>
  </div>
</header>
```

---

## 📄 Sections

### Directorio: `atoms/sections/`

Los **sections** son atoms especializados que representan secciones completas de página, diseñados para el sistema de templates.

### Archivos
- `HeroSection.jsx` - Sección hero configurable
- `StatsSection.jsx` - Sección de estadísticas
- `ProjectsSection.jsx` - Sección de proyectos
- `BlogSection.jsx` - Sección de blog/artículos
- `EmptySpace.jsx` - Espaciado configurable

### HeroSection
```jsx
import { HeroSection } from '../atoms/sections/HeroSection.jsx';

<HeroSection
  title="Título Principal"
  subtitle="Subtítulo descriptivo"
  description="Descripción más detallada del contenido..."
  backgroundVideo="/path/to/video.mp4"
  showShapes={true}
/>
```

### StatsSection
```jsx
import { StatsSection } from '../atoms/sections/StatsSection.jsx';

<StatsSection
  title="Nuestros Números"
  stats={[
    { number: '100+', label: 'Proyectos' },
    { number: '50+', label: 'Clientes' },
    { number: '5+', label: 'Años' }
  ]}
/>
```

### ProjectsSection
```jsx
import { ProjectsSection } from '../atoms/sections/ProjectsSection.jsx';

<ProjectsSection
  title="Nuestros Proyectos"
  description="Conoce algunos de nuestros trabajos..."
  cards={projectsData}
  buttonText="Ver todos los proyectos"
  onButtonClick={() => navigate('/proyectos')}
/>
```

### BlogSection
```jsx
import { BlogSection } from '../atoms/sections/BlogSection.jsx';

<BlogSection
  title="Últimas Noticias"
  description="Mantente al día con nuestras actualizaciones"
  articles={blogData}
  buttonText="Ver más artículos"
  onButtonClick={() => navigate('/blog')}
/>
```

### EmptySpace
```jsx
import { EmptySpace } from '../atoms/sections/EmptySpace.jsx';

<EmptySpace
  mobile="2rem"
  desktop="4rem"
  backgroundColor="transparent"
/>
```

---

## 🛠️ Guías de Desarrollo

### 1. Crear un Nuevo Atom

#### Estructura Base
```jsx
import React from 'react';
import { useSemanticTokens } from '../../foundations/theme-hooks.js';

const MiNuevoAtom = ({ 
  variant = 'primary',
  size = 'md',
  children,
  ...props 
}) => {
  const colors = useSemanticTokens();
  
  const styles = {
    // Estilos base
    base: {
      // estilos comunes
    },
    // Variantes
    variants: {
      primary: { /* estilos primary */ },
      secondary: { /* estilos secondary */ }
    },
    // Tamaños
    sizes: {
      sm: { /* estilos small */ },
      md: { /* estilos medium */ },
      lg: { /* estilos large */ }
    }
  };

  return (
    <div
      style={{
        ...styles.base,
        ...styles.variants[variant],
        ...styles.sizes[size]
      }}
      {...props}
    >
      {children}
    </div>
  );
};

export default MiNuevoAtom;
```

#### index.js Export
```javascript
export { default as MiNuevoAtom } from './MiNuevoAtom.jsx';
```

### 2. Integración con Semantic Tokens

```jsx
// Usar tokens semánticos siempre
const colors = useSemanticTokens();

const styles = {
  color: colors.content.text,
  backgroundColor: colors.surface.background,
  border: `1px solid ${colors.border.primary}`
};
```

### 3. Responsive Design

```jsx
import { generateResponsiveStyles } from '../../foundations/layout.js';

// Generar estilos responsive
const responsiveStyles = generateResponsiveStyles('mi-atom',
  {
    // Mobile
    padding: '1rem',
    fontSize: '14px'
  },
  {
    // Desktop  
    padding: '1.5rem',
    fontSize: '16px'
  }
);
```

### 4. Props TypeScript (Recomendado)

```typescript
interface MiNuevoAtomProps {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  children: React.ReactNode;
}

const MiNuevoAtom: React.FC<MiNuevoAtomProps> = ({
  variant = 'primary',
  size = 'md',
  disabled = false,
  children
}) => {
  // Implementación
};
```

### 5. Testing de Atoms

```jsx
// MiNuevoAtom.test.jsx
import { render, screen } from '@testing-library/react';
import MiNuevoAtom from './MiNuevoAtom.jsx';

test('renders with correct variant', () => {
  render(
    <MiNuevoAtom variant="primary">
      Test content
    </MiNuevoAtom>
  );
  
  expect(screen.getByText('Test content')).toBeInTheDocument();
});
```

---

## 📚 Mejores Prácticas

### 1. Naming Conventions
- Componentes: PascalCase (`ButtonPrimary`)
- Props: camelCase (`isDisabled`, `onClick`)
- CSS Classes: kebab-case (`button-primary`)

### 2. Props Design
```jsx
// ✅ Correcto - Props claros y específicos
<Button variant="primary" size="lg" disabled />

// ❌ Incorrecto - Props ambiguos
<Button type="big" state="off" />
```

### 3. Composition over Configuration
```jsx
// ✅ Correcto - Composición
<Card>
  <CardImage src="..." />
  <CardContent>
    <CardTitle>Título</CardTitle>
    <CardText>Contenido</CardText>
  </CardContent>
</Card>

// ❌ Incorrecto - Demasiadas props
<Card 
  imageSrc="..." 
  title="..." 
  content="..." 
  showBorder={true}
  showShadow={false}
/>
```

### 4. Performance
```jsx
// ✅ Usar React.memo para atoms puros
export default React.memo(MiNuevoAtom);

// ✅ Separar lógica de estilos
const useButtonStyles = (variant, size) => {
  return useMemo(() => ({
    // cálculo de estilos
  }), [variant, size]);
};
```

---

**Archivo**: `src/design-system/atoms/README.md`  
**Mantenido por**: Equipo MEP  
**Actualizado**: Octubre 2025