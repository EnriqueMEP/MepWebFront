# Estructura de URLs para MEP Engineering (mepengineering.es)

## URLs Principales del Sitio

### 1. Página Principal
- **URL**: `https://mepengineering.es/`
- **Componente**: `Home.jsx`
- **Descripción**: Página de inicio con hero, estadísticas, proyectos destacados

### 2. Servicios
- **URL**: `https://mepengineering.es/servicios`
- **Componente**: `Servicios.jsx`
- **Descripción**: Servicios de ingeniería ofrecidos por MEP
- **Subsecciones posibles**:
  - `/servicios/estructural` - Ingeniería estructural
  - `/servicios/mecanica` - Ingeniería mecánica
  - `/servicios/electrica` - Ingeniería eléctrica

### 3. Proyectos
- **URL**: `https://mepengineering.es/proyectos`
- **Componente**: `Proyectos.jsx`
- **Descripción**: Portfolio de proyectos realizados
- **Subsecciones posibles**:
  - `/proyectos/categoria/[categoria]` - Filtros por categoría
  - `/proyectos/[id]` - Proyecto individual

### 4. Sobre Nosotros
- **URL**: `https://mepengineering.es/nosotros`
- **Componente**: `Nosotros.jsx`
- **Descripción**: Historia, equipo, valores de la empresa

### 5. Contacto
- **URL**: `https://mepengineering.es/contacto`
- **Componente**: `Contacto.jsx`
- **Descripción**: Formulario de contacto, ubicación, información de contacto

### 6. Blog/Noticias (Opcional)
- **URL**: `https://mepengineering.es/blog`
- **Componente**: `Blog.jsx`
- **Descripción**: Artículos técnicos, noticias de la empresa

## Configuración de React Router

```jsx
// App.jsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/servicios" element={<Servicios />} />
  <Route path="/proyectos" element={<Proyectos />} />
  <Route path="/nosotros" element={<Nosotros />} />
  <Route path="/contacto" element={<Contacto />} />
  <Route path="/blog" element={<Blog />} />
  <Route path="*" element={<NotFound />} />
</Routes>
```

## SEO y Meta Tags por Página

### Home
- **Title**: "MEP Engineering - Ingeniería Estructural, Mecánica y Eléctrica"
- **Description**: "Soluciones integrales de ingeniería en España. Proyectos estructurales, mecánicos y eléctricos con más de 15 años de experiencia."

### Servicios
- **Title**: "Servicios de Ingeniería - MEP Engineering"
- **Description**: "Servicios especializados en ingeniería estructural, mecánica y eléctrica. Diseño, cálculo y supervisión de proyectos."

### Proyectos
- **Title**: "Portfolio de Proyectos - MEP Engineering"
- **Description**: "Conoce nuestros proyectos de ingeniería realizados. Estructuras, instalaciones y soluciones técnicas innovadoras."

### Nosotros
- **Title**: "Sobre Nosotros - MEP Engineering"
- **Description**: "Equipo de ingenieros especializados con más de 15 años de experiencia en el sector de la ingeniería en España."

### Contacto
- **Title**: "Contacto - MEP Engineering"
- **Description**: "Contacta con nuestro equipo de ingenieros. Oficina en [ubicación], teléfono, email y formulario de contacto."

## Navegación Principal

```jsx
const menuItems = [
  { name: 'Inicio', path: '/', exact: true },
  { name: 'Servicios', path: '/servicios' },
  { name: 'Proyectos', path: '/proyectos' },
  { name: 'Nosotros', path: '/nosotros' },
  { name: 'Contacto', path: '/contacto' }
];
```

## Configuración para Vercel

### vercel.json
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

## Configuración de Dominio

1. **Configurar DNS**: Apuntar `mepengineering.es` a los servidores de Vercel
2. **Configurar dominio en Vercel**: Agregar el dominio personalizado en el proyecto
3. **SSL**: Vercel proporciona certificados SSL automáticamente
4. **Redirects**: Configurar www.mepengineering.es → mepengineering.es

## Estructura de Archivos de Páginas

```
src/pages/
├── Home.jsx           # / (ya existe)
├── Servicios.jsx      # /servicios
├── Proyectos.jsx      # /proyectos
├── Nosotros.jsx       # /nosotros
├── Contacto.jsx       # /contacto
├── Blog.jsx           # /blog (opcional)
└── NotFound.jsx       # 404 page
```

## Migración desde el Home Actual

Cada nueva página seguirá este patrón:

```jsx
import PageTemplate from '../design-system/atoms/PageTemplate';
import HeroSection from '../design-system/atoms/sections/HeroSection';
// Otras secciones necesarias...

const NuevaPagina = () => {
  return (
    <PageTemplate
      title="Título - MEP Engineering"
      description="Meta description específica"
      currentPage="nueva-pagina"
    >
      <HeroSection 
        title="Título Principal"
        subtitle="Subtítulo"
        // Props específicos...
      />
      {/* Otras secciones según contenido... */}
    </PageTemplate>
  );
};

export default NuevaPagina;
```