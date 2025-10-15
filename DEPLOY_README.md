# Configuración de Dominio y Despliegue

## 🌐 Configuración para mepengineering.es

Este proyecto está configurado para desplegarse en Vercel con el dominio personalizado `mepengineering.es`.

### Estructura de URLs

El sitio web tendrá la siguiente estructura de rutas:

```
https://mepengineering.es/
├── /                    # Home (página principal)
├── /servicios          # Servicios de ingeniería
├── /proyectos          # Portfolio de proyectos
├── /nosotros           # Sobre la empresa
└── /contacto           # Formulario de contacto
```

### Configuración de Vercel

#### 1. Archivo `vercel.json`
El proyecto incluye configuración optimizada para Vercel:
- Build estático con Vite
- Enrutamiento SPA (todas las rutas van a index.html)
- Región Europa (Frankfurt) para mejor rendimiento
- URLs limpias sin trailing slashes

#### 2. Scripts de Build
- `npm run build`: Build local para desarrollo
- `npm run vercel-build`: Build específico para Vercel
- `npm run preview`: Preview local del build

### Pasos para Despliegue

#### 1. Preparación del Repositorio
```bash
# Hacer commit de todos los cambios
git add .
git commit -m "feat: configuración completa del sitio web MEP Engineering"
git push origin main
```

#### 2. Configuración en Vercel
1. **Conectar repositorio**:
   - Ir a [vercel.com](https://vercel.com)
   - Importar proyecto desde GitHub: `EnriqueMEP/MepWebFront`
   - Framework preset: Vite
   - Build command: `npm run vercel-build`
   - Output directory: `dist`

2. **Variables de entorno** (si es necesario):
   ```
   NODE_ENV=production
   ```

#### 3. Configuración del Dominio Personalizado

1. **En Vercel Dashboard**:
   - Ir a proyecto → Settings → Domains
   - Agregar dominio: `mepengineering.es`
   - Agregar alias: `www.mepengineering.es`

2. **Configuración DNS** (en el proveedor del dominio):
   ```
   Tipo: A
   Nombre: @
   Valor: 76.76.19.61

   Tipo: CNAME
   Nombre: www
   Valor: cname.vercel-dns.com
   ```

   O usar nameservers de Vercel:
   ```
   ns1.vercel-dns.com
   ns2.vercel-dns.com
   ```

#### 4. Verificación SSL
Vercel automáticamente configurará certificados SSL Let's Encrypt para el dominio.

### SEO y Meta Tags

Cada página incluye configuración SEO optimizada:

```jsx
<PageTemplate
  title="Título específico - MEP Engineering"
  description="Descripción única para cada página"
  currentPage="nombre-pagina"
>
```

#### Meta Tags por Página:
- **Home**: "MEP Engineering - Ingeniería especializada en proyectos técnicos"
- **Servicios**: "Servicios de Ingeniería - MEP Engineering"
- **Proyectos**: "Portfolio de Proyectos - MEP Engineering"
- **Nosotros**: "Sobre Nosotros - MEP Engineering"
- **Contacto**: "Contacto - MEP Engineering"

### Performance y Optimización

#### 1. Optimizaciones Implementadas:
- **Vite build** optimizado para producción
- **Code splitting** automático por rutas
- **CSS minificado** y tree-shaking
- **Imágenes optimizadas** (WebP cuando sea posible)
- **Lazy loading** para componentes pesados

#### 2. Métricas objetivo:
- **Lighthouse Performance**: >90
- **First Contentful Paint**: <1.5s
- **Largest Contentful Paint**: <2.5s
- **Cumulative Layout Shift**: <0.1

### Monitoreo y Analytics

#### 1. Vercel Analytics
Configurar Vercel Analytics para monitoreo básico:
```bash
npm install @vercel/analytics
```

#### 2. Google Analytics (opcional)
Agregar Google Analytics 4 cuando esté listo.

### Comandos Útiles

```bash
# Desarrollo local
npm run dev

# Build y preview local
npm run build
npm run preview

# Lint y verificación
npm run lint

# Deploy manual (si es necesario)
vercel --prod
```

### Troubleshooting

#### Problemas Comunes:

1. **404 en rutas**:
   - Verificar que `vercel.json` está configurado correctamente
   - Todas las rutas SPA deben redirigir a `/index.html`

2. **Build falla**:
   - Verificar dependencias en `package.json`
   - Revisar imports relativos vs absolutos

3. **Dominio no resuelve**:
   - Verificar configuración DNS
   - Esperar propagación (hasta 48h)

### Contacto Técnico

Para soporte técnico con el despliegue:
- **Repositorio**: [GitHub - EnriqueMEP/MepWebFront](https://github.com/EnriqueMEP/MepWebFront)
- **Vercel Dashboard**: [vercel.com/dashboard](https://vercel.com/dashboard)
- **Documentación**: Ver `TEMPLATE_SYSTEM_README.md`

---

✅ **Sitio listo para producción en mepengineering.es**