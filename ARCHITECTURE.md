# Arquitectura del Proyecto - Nueva Acrópolis Perú

## 📁 Estructura de Carpetas

```
├── public/                     # Archivos estáticos públicos
│   ├── gallery/               # Imágenes de galería
│   └── *.png, *.ico           # PWA icons, favicon, og-image
│
├── src/
│   ├── assets/                # Imágenes y recursos importados como módulos ES6
│   │   ├── gallery/          # Fotos de voluntariado por categoría
│   │   ├── gallery-db/       # Fotos para CMS de voluntariado
│   │   └── *.jpg, *.png      # Banners, retratos, logos
│   │
│   ├── components/            # Componentes React reutilizables
│   │   ├── filosofia/        # Componentes específicos de Filosofía
│   │   ├── sedes/            # Componentes del directorio de sedes
│   │   ├── ui/               # Componentes UI base (shadcn/ui)
│   │   ├── who-we-are/       # Componentes de Quiénes Somos
│   │   └── *.tsx             # Componentes generales
│   │
│   ├── contexts/              # Contextos React (AuthContext)
│   ├── data/                  # Datos estáticos extraídos
│   ├── hooks/                 # Custom hooks
│   ├── integrations/          # Integraciones externas (Supabase)
│   ├── lib/                   # Utilidades (cn, utils)
│   ├── pages/                 # Páginas/rutas de la aplicación
│   │
│   ├── App.tsx               # Componente raíz con rutas
│   ├── index.css             # Sistema de diseño (tokens CSS)
│   ├── main.tsx              # Entry point
│   └── App.css               # Estilos globales
│
├── supabase/
│   ├── functions/            # Edge Functions
│   │   └── send-inscription-email/
│   ├── migrations/           # Migraciones de base de datos
│   └── config.toml           # Configuración Supabase
│
└── Archivos de configuración
    ├── vite.config.ts        # Configuración Vite + PWA
    ├── tailwind.config.ts    # Configuración Tailwind
    └── index.html            # HTML base con meta tags SEO
```

## 🏗️ Arquitectura de Componentes

### Páginas (`/src/pages/`)

| Página | Descripción | Componentes principales |
|--------|-------------|------------------------|
| `Index.tsx` | Landing page | Hero, ThreePillars, CourseSection |
| `QuienesSomos.tsx` | Identidad institucional | WhoWeAre (componente contenedor) |
| `Filosofia.tsx` | Curso y filosofía | PageHeroBanner, CourseModulesSection, TestimonialsSection |
| `Cultura.tsx` | Actividades culturales | PageHeroBanner, CultureActivities |
| `Voluntariado.tsx` | Programas de voluntariado | PageHeroBanner, VoluntariadoGallery |
| `Sedes.tsx` | Directorio de sedes | SedesDirectory |
| `Inscripcion.tsx` | Formulario de inscripción | ContactForm, AnimatedMapBackground |
| `Gracias.tsx` | Confirmación post-registro | Confetti animation |
| `Auth.tsx` | Login administrativo | Formulario de autenticación |
| `SedesAdmin.tsx` | CMS de sedes | ProtectedAdminRoute, SedesAdminPanel |
| `UsersAdmin.tsx` | Gestión de usuarios | ProtectedAdminRoute, UsersAdminPanel |
| `DesignSystem.tsx` | Documentación de diseño | Muestra de componentes y tokens |
| `Instalar.tsx` | Guía PWA | Instrucciones de instalación |

### Componentes por Dominio

#### Componentes de Layout
- `Navigation.tsx` - Header con navegación responsive
- `Footer.tsx` - Pie de página con enlaces y contacto
- `PageHeroBanner.tsx` - Banner hero reutilizable con parallax

#### Componentes de Contenido
- `Hero.tsx` - Hero section del landing
- `ThreePillars.tsx` - Sección "Áreas de Acción"
- `CourseSection.tsx` - Sección del curso "Conócete a Ti Mismo"
- `CultureActivities.tsx` - Grid de actividades culturales

#### Componentes de Quiénes Somos (`/who-we-are/`)
- `WhoWeAreHero.tsx` - Banner con SparklesText
- `WhoWeAreVideo.tsx` - Video embebido de YouTube
- `WhoWeAreSymbolism.tsx` - Simbolismo del nombre
- `WhoWeArePrinciples.tsx` - Principios institucionales
- `LeadershipTabs.tsx` - Tabs de liderazgo
- `LeaderProfile.tsx` - Perfil de líder individual
- `PhilosophyAsLife.tsx` - Sección filosofía como vida
- `FoundationInfo.tsx` - Información de fundación

#### Componentes de Filosofía (`/filosofia/`)
- `CourseModulesSection.tsx` - Módulos del curso
- `TestimonialsSection.tsx` - Testimonios con marquee

#### Componentes de Sedes (`/sedes/`)
- `SedeCard.tsx` - Tarjeta individual de sede
- `SedesHeroBanner.tsx` - Banner parallax del directorio

#### Componentes de Utilidad
- `OptimizedImage.tsx` - Imágenes con lazy loading y skeleton
- `ParallaxImage.tsx` - Imágenes con efecto parallax
- `SEO.tsx` - Meta tags dinámicos (react-helmet-async)
- `MapDialog.tsx` - Modal con mapa de Google Maps

#### Componentes de Administración
- `ProtectedRoute.tsx` - HOC para rutas autenticadas
- `ProtectedAdminRoute.tsx` - HOC para rutas admin con roles
- `SedesAdminPanel.tsx` - CRUD de sedes
- `UsersAdminPanel.tsx` - Gestión de usuarios y roles
- `VoluntariadoFotosAdmin.tsx` - CMS de fotos de voluntariado

### Componentes UI (`/ui/`)

Biblioteca basada en **shadcn/ui** con personalizaciones:

- Formularios: `button`, `input`, `textarea`, `select`, `form`, `label`, `checkbox`
- Feedback: `toast`, `sonner`, `alert`, `skeleton`
- Navegación: `navigation-menu`, `tabs`, `accordion`, `breadcrumb`
- Overlay: `dialog`, `drawer`, `popover`, `tooltip`, `dropdown-menu`
- Layout: `card`, `separator`, `aspect-ratio`, `scroll-area`
- Efectos especiales: `sparkles-text`, `border-beam`, `confetti`, `marquee`, `pointer`

## 📊 Datos Estáticos (`/src/data/`)

| Archivo | Contenido |
|---------|-----------|
| `filosofia-data.ts` | Módulos del curso, testimonios |
| `cultura-data.ts` | Actividades culturales, valores |
| `voluntariado-data.ts` | Programas, principios, áreas |

## 🔐 Base de Datos (Supabase)

### Tablas

| Tabla | Propósito |
|-------|-----------|
| `sedes` | Directorio de sedes con ubicación y contacto |
| `inscripciones` | Formularios de inscripción enviados |
| `profiles` | Perfiles de usuarios administrativos |
| `user_roles` | Roles de acceso (admin, editor) |
| `voluntariado_fotos` | Galería de fotos de voluntariado |

### Edge Functions

- `send-inscription-email` - Envía emails de inscripción via Resend

### Políticas RLS

- Sedes: Lectura pública, escritura solo admin/editor
- Inscripciones: Inserción pública, lectura restringida
- Fotos voluntariado: Lectura pública, gestión admin/editor

## 🎨 Sistema de Diseño

### Tokens CSS (`index.css`)

```css
/* Colores principales */
--primary: Verde Heket (institucional)
--secondary: Naranja Amón
--accent: Turquesa Kefer

/* Efectos */
--shadow-elegant: Sombra con color primario
--gradient-primary: Gradiente institucional
```

### Tipografía

- **Display**: Playfair Display (títulos)
- **Body**: Lato (contenido)

### Patrones de Diseño

1. **Parallax banners** en todas las páginas
2. **Lazy loading** con skeletons
3. **SparklesText** en títulos de banner
4. **BorderBeam** en formularios
5. **Pointer heart** en elementos interactivos
6. **Confetti** en página de agradecimiento

## 🔄 Flujos de Datos

### Inscripción
```
Usuario → ContactForm → Supabase (inscripciones)
                      → Edge Function → Resend
                                      → Email a sede
                                      → Email a informes@
                                      → Email a usuario
                      → Redirect → /gracias
```

### Autenticación Admin
```
Login → Supabase Auth → Check user_roles
                      → ProtectedAdminRoute
                      → Admin Panel
```

## 📱 PWA

Configurado con `vite-plugin-pwa`:
- Manifest con iconos
- Service Worker con Workbox
- Runtime caching para imágenes
- Página `/instalar` con guía

## 🚀 Optimizaciones

1. **Imágenes**: vite-imagetools, lazy loading, WebP
2. **Código**: Tree shaking, code splitting por rutas
3. **SEO**: Meta tags dinámicos, sitemap.xml, robots.txt
4. **Performance**: Skeleton loaders, optimistic UI
