# Nueva Acrópolis Perú - Escuela de Filosofía

![Nueva Acrópolis](https://img.shields.io/badge/Nueva%20Acrópolis-Perú-1D6F42)
![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-06B6D4?logo=tailwindcss)
![Supabase](https://img.shields.io/badge/Supabase-Cloud-3FCF8E?logo=supabase)

Sitio web oficial de **Nueva Acrópolis Perú**, una organización internacional de carácter filosófico, humanista y voluntario. Este proyecto representa una renovación completa de la identidad digital institucional alineada con el Manual de Marca OINA 2025.

---

## 🏛️ Sobre el Proyecto

Nueva Acrópolis es una escuela de filosofía práctica presente en más de 50 países. Este sitio web sirve como portal principal para la sede peruana, ofreciendo información sobre:

- **Filosofía**: Curso "Conócete a Ti Mismo" y programas avanzados
- **Cultura**: Actividades culturales, conferencias, música y artes
- **Voluntariado**: Programas de acción social y servicio comunitario
- **Sedes**: Directorio de más de 65 ubicaciones a nivel nacional

---

## 👨‍💻 Desarrollado por

<div align="center">

### **Humantech AI Agency**

*Building the future with artificial intelligence*

Este proyecto fue diseñado y desarrollado con dedicación por **Humantech AI Agency**, aplicando las mejores prácticas de desarrollo web moderno, diseño centrado en el usuario y arquitectura escalable.

</div>

---

## 🚀 Tecnologías

### Frontend
| Tecnología | Versión | Propósito |
|------------|---------|-----------|
| React | 18.3 | Framework UI |
| TypeScript | 5.0 | Tipado estático |
| Vite | 5.4 | Build tool y dev server |
| Tailwind CSS | 3.4 | Estilos utilitarios |
| Framer Motion | 12.x | Animaciones |
| React Router | 6.x | Enrutamiento SPA |
| TanStack Query | 5.x | Estado del servidor |
| Shadcn/ui | - | Componentes UI |

### Backend (Cloud / Supabase)
| Servicio | Propósito |
|----------|-----------|
| PostgreSQL | Base de datos relacional |
| Edge Functions | Lógica serverless (Deno) |
| Row Level Security | Seguridad a nivel de fila |
| Authentication | Sistema de autenticación |
| Storage | Almacenamiento de archivos |

### Servicios Externos
| Servicio | Propósito |
|----------|-----------|
| Resend | Envío de emails transaccionales |
| Google Maps | Mapas de ubicaciones |
| Google Analytics 4 | Analítica y seguimiento de eventos |

---

## 📁 Estructura del Proyecto

```
├── public/                     # Archivos estáticos públicos
│   ├── gallery/               # Galería de imágenes
│   └── *.png                  # Iconos PWA y favicons
│
├── src/
│   ├── assets/                # Imágenes y recursos importables
│   │   └── gallery/          # Galerías por categoría
│   │
│   ├── components/            # Componentes React
│   │   ├── ui/               # Componentes base (shadcn)
│   │   ├── who-we-are/       # Sección Quiénes Somos
│   │   ├── filosofia/        # Sección Filosofía
│   │   ├── sedes/            # Sección Sedes
│   │   └── admin/            # Paneles administrativos
│   │
│   ├── contexts/              # Contextos React (Auth)
│   ├── data/                  # Datos estáticos
│   ├── hooks/                 # Custom hooks
│   ├── integrations/          # Integraciones (Supabase)
│   ├── lib/                   # Utilidades
│   └── pages/                 # Páginas/Rutas
│
├── supabase/
│   ├── config.toml           # Configuración Supabase
│   ├── functions/            # Edge Functions
│   │   ├── send-inscription-email/
│   │   └── send-invitation-email/
│   └── migrations/           # Migraciones SQL
│
└── [config files]            # Configuraciones del proyecto
```

---

## 🗄️ Esquema de Base de Datos

### Tablas Principales

| Tabla | Descripción |
|-------|-------------|
| `sedes` | Directorio de sedes/ubicaciones |
| `inscripciones` | Formularios de inscripción |
| `profiles` | Perfiles de usuarios admin (nombre, email, sede_id, status) |
| `user_roles` | Roles de usuarios (admin/editor) |
| `invitations` | Invitaciones pendientes con tokens |
| `cultura_actividades` | Actividades culturales con imágenes |
| `voluntariado_programas` | Programas de voluntariado con imágenes |
| `voluntariado_fotos` | Galería de fotos por categoría |

### Roles de Usuario

| Rol | Permisos |
|-----|----------|
| `admin` | Acceso completo: sedes, cultura, voluntariado, inscripciones, gestión de usuarios |
| `editor` | Acceso limitado: sedes, cultura, voluntariado, inscripciones (sin gestión de usuarios) |

---

## 🔐 Seguridad

### Características Implementadas

- ✅ **Row Level Security (RLS)** en todas las tablas
- ✅ **Autenticación por invitación** (registro libre deshabilitado)
- ✅ **Validación de dominio** (@acropolisperu.org)
- ✅ **CORS restringido** en Edge Functions
- ✅ **Sanitización de inputs** contra XSS
- ✅ **Tokens seguros** para invitaciones
- ✅ **Secrets encriptados** para API keys
- ✅ **Cumplimiento Ley 29733** (Protección de Datos Personales)
- ✅ **Checkbox de consentimiento** en formularios

### Políticas RLS

```sql
-- Ejemplo: Solo usuarios autenticados con rol admin pueden insertar
CREATE POLICY "Admin users can insert"
ON public.tabla
FOR INSERT
WITH CHECK (
  EXISTS (
    SELECT 1 FROM public.user_roles
    WHERE user_id = auth.uid() AND role = 'admin'
  )
);
```

---

## 🌐 Páginas y Rutas

| Ruta | Página | Descripción |
|------|--------|-------------|
| `/` | Index | Landing page principal |
| `/quienes-somos` | QuienesSomos | Historia y principios |
| `/filosofia` | Filosofia | Cursos y programas |
| `/cultura` | Cultura | Actividades culturales |
| `/voluntariado` | Voluntariado | Programas de voluntariado |
| `/sedes` | Sedes | Directorio de ubicaciones |
| `/inscripcion` | Inscripcion | Formulario de contacto |
| `/gracias` | Gracias | Confirmación post-registro |
| `/aviso-legal` | AvisoLegal | Términos de uso y condiciones |
| `/privacidad` | Privacidad | Política de privacidad (Ley 29733) |
| `/instalar` | Instalar | Guía PWA |
| `/auth` | Auth | Login administrativo |
| `/admin` | Admin | Panel de administración |
| `/design-system` | DesignSystem | Documentación de diseño |

---

## 🎨 Sistema de Diseño

### Paleta de Colores (Manual OINA 2025)

| Color | Variable | HSL | Uso |
|-------|----------|-----|-----|
| Verde Heket | `--primary` | `142 52% 28%` | Color institucional principal |
| Turquesa Kefer | `--secondary` | `173 58% 39%` | Acentos secundarios |
| Naranja Amón | `--accent` | `24 95% 53%` | CTAs y destacados |
| Amarillo Helios | `--highlight` | `45 93% 58%` | Resaltados |

### Tipografía

- **Display**: Playfair Display (títulos)
- **Body**: Source Sans Pro (texto)

### Principios de Diseño

1. **Cálido**: Humano, cercano, accesible
2. **Claro**: Simple, directo, sin ambigüedades
3. **Vertical**: Inspirador, elevador, filosófico

---

### Línea Visual 2026 (landing actual)
- **Títulos editoriales:** kicker en mayúsculas + título grande con palabra clave en degradado dorado (`SparkleWord`).
- **Héroes fotográficos:** imagen a sangre con degradados oscuros, texto alineado a la izquierda, badge translúcido; versión móvil adaptada.
- **Iconos:** dentro de círculos dorados suaves (`bg-amber-500/10`, borde sutil).
- **Tarjetas e imágenes:** `rounded-2xl` en todo el sitio, elevación suave al hover, sin bordes animados.
- **Paneles destacados:** fondo dorado claro, nunca bloques oscuros.
- **Botones:** planos (sin animación de borde), CTA principal "Inscríbete" con brillo suave.
- **Menú:** glassmorphism, transparente sobre el héroe y esmerilado al hacer scroll; enlace activo con subrayado dorado.
- **Diálogo Filosófico:** recomendador con IA en la portada (función `recomendar-curso`).
- Referencia viva: `/design-system`.

## ⚙️ Configuración Local

### Prerrequisitos

- Node.js 18+ o Bun


### Instalación

```bash
# Clonar repositorio
git clone https://github.com/[tu-usuario]/nueva-acropolis-peru.git

# Instalar dependencias
npm install
# o
bun install

# Iniciar servidor de desarrollo
npm run dev
# o
bun dev
```

### Variables de Entorno

El proyecto utiliza Lov Cloud, las variables se configuran automáticamente:

```env
VITE_SUPABASE_URL=https://[project-id].supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=[anon-key]
VITE_SUPABASE_PROJECT_ID=[project-id]
```

### Secrets (Edge Functions)

Configurar en Lovable Cloud:

- `RESEND_API_KEY`: API key de Resend para emails

---

## 📧 Sistema de Emails

### Flujos de Email

1. **Inscripción**: Usuario → Sede seleccionada + informes@acropolisperu.org
2. **Invitación**: Admin → Usuario invitado (con token de registro)
3. **Confirmación**: Sistema → Usuario registrado

### Configuración de Resend

Los emails se envían usando el subdominio verificado `send.acropolisperu.org`:

- **Inscripciones**: `inscripciones@send.acropolisperu.org`
- **Invitaciones**: `invitaciones@send.acropolisperu.org`

### Zona Horaria

Los emails de inscripción muestran la fecha y hora de registro en **zona horaria de Perú** (`America/Lima`, UTC-5). Esto se implementa usando `Intl.DateTimeFormat` con la opción `timeZone: "America/Lima"` en las Edge Functions para evitar discrepancias de hora con respecto a UTC.

---

## 📱 PWA (Progressive Web App)

El sitio es instalable como aplicación:

- ✅ Manifest configurado
- ✅ Service Worker con Workbox
- ✅ Iconos para todas las plataformas
- ✅ Splash screens
- ✅ Modo offline básico

---

## 🚀 Despliegue

### Auto-hospedaje

El código es estándar y puede desplegarse en:

- Vercel
- Netlify
- Cloudflare Pages
- Cualquier hosting estático

**Nota**: El backend (Supabase) permanece en Lova Cloud.

---

## 📊 SEO, Analytics y Rendimiento

### Optimizaciones Implementadas

- ✅ Meta tags dinámicos con react-helmet-async
- ✅ Open Graph y Twitter Cards
- ✅ Sitemap.xml y robots.txt
- ✅ Lazy loading de imágenes
- ✅ Compresión de imágenes (vite-imagetools)
- ✅ Code splitting automático
- ✅ Skeleton loaders
- ✅ llms.txt para integración con modelos de lenguaje

### Google Analytics 4

- **ID**: G-CCNZET35XK
- **Eventos trackeados**: clicks en botones, vistas de sección, interacciones de formulario, links externos
- **Conversiones**: inscripciones con parámetros de sede e interés

### Lighthouse Score Objetivo

- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100

---

## 🔄 Mantenimiento

### Panel de Administración

Acceso: `/admin` (requiere invitación)

| Sección | Funcionalidad |
|---------|---------------|
| Sedes | CRUD de ubicaciones |
| Cultura | Gestión de actividades |
| Voluntariado | Programas y fotos |
| Inscripciones | Ver registros |
| Usuarios | Invitar y gestionar (solo admin) |

### Actualizaciones de Contenido

- **Sedes**: Panel admin
- **Actividades culturales**: Panel admin
- **Programas voluntariado**: Panel admin
- **Contenido estático**: Archivos en `src/data/`

---

## 🌍 Internacionalización

El proyecto está preparado para ser adaptado por otras sedes nacionales:

### Elementos a Personalizar

1. **Configuración de sitio**: URLs, emails, redes sociales
2. **Contenido**: Textos, imágenes, testimonios
3. **Sedes**: Base de datos local
4. **Edge Functions**: CORS y dominios permitidos
5. **SEO**: Meta tags y keywords

---

## 📄 Licencia

Este proyecto es propiedad de **Nueva Acrópolis Perú**. Todos los derechos reservados.

El código puede ser compartido con otras sedes de Nueva Acrópolis Internacional bajo autorización.

---

## 🤝 Créditos

### Desarrollo

<div align="center">

**Humantech AI Agency**

*Transformando ideas en experiencias digitales*

---

Desarrollado con ❤️ para Nueva Acrópolis Perú

</div>

### Contenido y Dirección

- **Nueva Acrópolis Perú** - Contenido institucional
- **OINA** - Manual de Marca 2025

### Tecnologías Open Source

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Shadcn/ui](https://ui.shadcn.com/)
- [Supabase](https://supabase.com/)
- [Framer Motion](https://www.framer.com/motion/)

---

<div align="center">

**Nueva Acrópolis Perú** | Escuela de Filosofía

[Website](https://acropolisperu.org) · [Facebook](https://facebook.com/acropolisperu) · [Instagram](https://instagram.com/nuevacropolis) · [YouTube](https://youtube.com/@perunuevacropolis)

</div>
