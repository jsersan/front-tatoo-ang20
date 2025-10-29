# 🎨 TatooDenda - E-commerce Platform

<div align="center">

![TatooDenda Logo](https://img.shields.io/badge/TatooDenda-E--commerce-52667a?style=for-the-badge&logo=angular&logoColor=white)

**Una plataforma de comercio electrónico moderna especializada en productos de piercing y dilatación**

[![Angular](https://img.shields.io/badge/Angular-19-DD0031?style=flat-square&logo=angular)](https://angular.io/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-20+-339933?style=flat-square&logo=node.js)](https://nodejs.org/)
[![License](https://img.shields.io/badge/License-MIT-yellow?style=flat-square)](LICENSE)

[Demo en Vivo](#) • [Documentación](#) • [Reportar Bug](https://github.com/jsersan/tatoodenda/issues) • [Solicitar Feature](https://github.com/jsersan/tatoodenda/issues)

</div>

---

## 📑 Contenidos

<details>
<summary>Click para expandir</summary>

- [🌟 Características Destacadas](#-características-destacadas)
- [🎯 ¿Por qué TatooDenda?](#-por-qué-tatoodenda)
- [🚀 Inicio Rápido](#-inicio-rápido)
- [💻 Stack Tecnológico](#-stack-tecnológico)
- [📸 Screenshots](#-screenshots)
- [🏗️ Arquitectura](#️-arquitectura)
- [🔧 Configuración Avanzada](#-configuración-avanzada)
- [📦 Scripts Disponibles](#-scripts-disponibles)
- [🌐 API Reference](#-api-reference)
- [🚢 Despliegue](#-despliegue)
- [🤝 Contribuir](#-contribuir)
- [📄 Licencia](#-licencia)
- [👨‍💻 Autor](#-autor)

</details>

---

## 🌟 Características Destacadas

<table>
<tr>
<td width="50%">

### 🎨 **Interfaz Moderna**
- ✨ Diseño responsive y elegante
- 🎭 Animaciones fluidas
- 🌓 Tema corporativo profesional
- 📱 Mobile-first approach

</td>
<td width="50%">

### 🛒 **Gestión Inteligente**
- 🔍 Búsqueda en tiempo real
- 🎯 Filtrado por categorías
- 🎨 Múltiples variantes de color
- 💾 Carrito persistente

</td>
</tr>
<tr>
<td width="50%">

### 🔐 **Seguridad Robusta**
- 🔑 Autenticación JWT
- 🛡️ Guards de protección
- 🔒 Validación de contraseñas
- 🚦 Interceptores HTTP

</td>
<td width="50%">

### 📊 **Gestión Completa**
- 👤 Perfiles personalizados
- 📜 Historial de pedidos
- 📄 Generación de PDFs
- ✅ Proceso de checkout simplificado

</td>
</tr>
</table>

---

## 🎯 ¿Por qué TatooDenda?
```typescript
const features = {
  design: '🎨 Interfaz intuitiva y atractiva',
  performance: '⚡ Optimizado para velocidad',
  security: '🔐 Implementación segura con JWT',
  scalability: '📈 Arquitectura escalable',
  responsive: '📱 100% Mobile-friendly',
  modern: '🚀 Tecnologías de última generación'
};
```

> **TatooDenda** combina lo mejor del desarrollo frontend moderno con una experiencia de usuario excepcional, creando una plataforma de e-commerce completa y profesional.

---

## 🚀 Inicio Rápido

### Prerrequisitos
```bash
# Verificar versiones instaladas
node -v   # ≥ 20.0.0
npm -v    # ≥ 10.0.0
ng version # ≥ 19.0.0
```

### Instalación en 3 Pasos
```bash
# 1️⃣ Clonar el repositorio
git clone https://github.com/jsersan/tatoodenda-frontend.git
cd tatoodenda-frontend

# 2️⃣ Instalar dependencias
npm install

# 3️⃣ Iniciar servidor de desarrollo
ng serve --open
```

<div align="center">

**¡Listo!** 🎉 Tu aplicación estará corriendo en `http://localhost:4200`

</div>

---

## 💻 Stack Tecnológico

<div align="center">

### Frontend Core

![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![RxJS](https://img.shields.io/badge/RxJS-B7178C?style=for-the-badge&logo=reactivex&logoColor=white)

### Estilos & UI

![SCSS](https://img.shields.io/badge/SCSS-CC6699?style=for-the-badge&logo=sass&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)

### Herramientas

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)

</div>

### Dependencias Principales

| Librería | Versión | Propósito |
|----------|---------|-----------|
| `@angular/core` | ^19.0.0 | Framework principal |
| `@angular/router` | ^19.0.0 | Sistema de rutas |
| `rxjs` | ^7.8.0 | Programación reactiva |
| `bootstrap` | ^5.3.0 | Framework CSS |
| `sweetalert2` | ^11.0.0 | Alertas elegantes |
| `jspdf` | ^2.5.0 | Generación de PDFs |

---

## 📸 Screenshots

<div align="center">

### 🏠 Página Principal
![Home Page](https://via.placeholder.com/800x400/52667a/ffffff?text=Home+Page)

### 🛒 Carrito de Compras
![Shopping Cart](https://via.placeholder.com/800x400/3d4d5c/ffffff?text=Shopping+Cart)

### 📱 Vista Móvil
![Mobile View](https://via.placeholder.com/400x600/c2cdd6/ffffff?text=Mobile+Responsive)

</div>

---

## 🏗️ Arquitectura
```
📦 TatooDenda Frontend
│
├── 🎨 Components Layer
│   ├── Shared (Header, Navbar, Footer)
│   ├── Feature (Products, Cart, Checkout)
│   └── Admin (Product/Category Management)
│
├── 🔧 Services Layer
│   ├── Authentication
│   ├── Data Management
│   └── Business Logic
│
├── 🛡️ Security Layer
│   ├── Guards
│   └── Interceptors
│
└── 📊 Data Layer
    ├── Models
    └── Helpers
```

### Estructura de Carpetas

<details>
<summary>Click para ver estructura completa</summary>
```
src/app/
├── 📁 components/
│   ├── 🏪 admin/
│   │   ├── category-manager/
│   │   └── product-manager/
│   ├── 🛒 cart/
│   ├── 💳 checkout/
│   ├── 🏠 home/
│   ├── 📦 product/
│   │   ├── product-detail/
│   │   ├── product-list/
│   │   ├── product-popup/
│   │   └── search-results/
│   ├── 🔄 shared/
│   │   ├── header/
│   │   ├── navbar/
│   │   └── footer/
│   └── 👤 user/
│       └── profile/
├── 🛡️ guards/
│   ├── auth.guard.ts
│   └── admin.guard.ts
├── 🔌 interceptors/
│   ├── auth.interceptor.ts
│   └── error.interceptor.ts
├── 📋 models/
│   ├── product.ts
│   ├── category.ts
│   ├── user.ts
│   └── order.ts
├── ⚙️ services/
│   ├── auth.service.ts
│   ├── product.service.ts
│   ├── cart.service.ts
│   └── order.service.ts
└── 🛠️ helpers/
    └── product-image-helper.ts
```

</details>

---

## 🔧 Configuración Avanzada

### Variables de Entorno

Crea `src/environments/environment.ts`:
```typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000/api',
  
  // Configuraciones opcionales
  features: {
    enableAnalytics: false,
    enableDebugMode: true,
    enableServiceWorker: false
  },
  
  // Timeouts y límites
  api: {
    timeout: 30000,
    retries: 3
  }
};
```

### Personalización de Tema

Edita `src/styles.scss`:
```scss
// Variables principales
$primary: #52667a;        // Color principal
$primary-dark: #3d4d5c;   // Oscuro
$primary-light: #c2cdd6;  // Claro

// Personaliza según necesites
$success: #28a745;
$warning: #ffc107;
$danger: #dc3545;
```

---

## 📦 Scripts Disponibles
```bash
# 🚀 Desarrollo
npm start                 # Inicia servidor de desarrollo
npm run start:open        # Inicia y abre navegador automáticamente

# 🏗️ Construcción
npm run build             # Build de producción
npm run build:dev         # Build de desarrollo
npm run build:stats       # Build con análisis de bundle

# 🧪 Testing
npm test                  # Tests unitarios
npm run test:coverage     # Tests con cobertura
npm run e2e               # Tests end-to-end

# 🔍 Análisis
npm run lint              # Analizar código
npm run lint:fix          # Corregir problemas automáticamente

# 🧹 Limpieza
npm run clean             # Limpiar node_modules y dist
```

---

## 🌐 API Reference

### Endpoints Principales

#### 🔐 Autenticación
```http
POST /api/users/login
Content-Type: application/json

{
  "username": "string",
  "password": "string"
}
```

<details>
<summary>Ver más endpoints</summary>

#### 📦 Productos
```http
# Listar productos
GET /api/productos

# Obtener producto específico
GET /api/productos/:id

# Buscar productos
GET /api/productos/search?q=termino

# Productos por categoría
GET /api/productos/categoria/:id
```

#### 📂 Categorías
```http
# Listar categorías
GET /api/categorias

# Obtener categoría
GET /api/categorias/:id
```

#### 🛍️ Pedidos
```http
# Crear pedido
POST /api/pedidos
Authorization: Bearer {token}

{
  "iduser": number,
  "total": number,
  "lineas": [...]
}

# Obtener pedidos del usuario
GET /api/pedidos/user/:userId
Authorization: Bearer {token}
```

</details>

### Ejemplo de Uso
```typescript
// Ejemplo de llamada a la API
this.productService.getProducts().subscribe({
  next: (products) => {
    console.log('Productos cargados:', products);
  },
  error: (error) => {
    console.error('Error:', error);
  }
});
```

---

## 🚢 Despliegue

### 📦 Build de Producción
```bash
# Generar build optimizado
ng build --configuration production

# Los archivos se generarán en dist/
```

### ☁️ Deploy en Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start)
```bash
# Configuración en netlify.toml
[build]
  command = "ng build --configuration production"
  publish = "dist/tatoodenda-frontend"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### ▲ Deploy en Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)
```bash
# Instalar Vercel CLI
npm i -g vercel

# Desplegar
vercel --prod
```

### 🐳 Docker
```dockerfile
# Dockerfile
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist/tatoodenda-frontend /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```
```bash
# Construir y ejecutar
docker build -t tatoodenda-frontend .
docker run -p 8080:80 tatoodenda-frontend
```

---

## 🤝 Contribuir

<div align="center">

**¡Nos encantaría contar con tu ayuda!** 💪

</div>

### Proceso de Contribución

1. 🍴 **Fork** el proyecto
2. 🌿 **Crea** tu rama de feature
```bash
   git checkout -b feature/AmazingFeature
```
3. 💾 **Commit** tus cambios
```bash
   git commit -m '✨ Add: Amazing Feature'
```
4. 📤 **Push** a la rama
```bash
   git push origin feature/AmazingFeature
```
5. 🎯 **Abre** un Pull Request

### Guía de Estilo

- ✅ Usa **TypeScript** con tipos estrictos
- 📝 Sigue las **convenciones de Angular**
- 💬 Comenta código complejo
- 🧪 Escribe tests para nuevas funcionalidades
- 🎨 Mantén componentes pequeños y reutilizables

### Commit Messages

Usamos [Conventional Commits](https://www.conventionalcommits.org/):
```
✨ feat: Nueva funcionalidad
🐛 fix: Corrección de bug
📚 docs: Actualización de documentación
💄 style: Cambios de formato
♻️ refactor: Refactorización de código
⚡ perf: Mejora de rendimiento
✅ test: Añadir tests
🔧 chore: Tareas de mantenimiento
```

---

## 📄 Licencia

<div align="center">

Este proyecto está bajo la **Licencia MIT**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

</div>

---

## 👨‍💻 Autor

<div align="center">

### **Txema Serrano Sánchez**

[![GitHub](https://img.shields.io/badge/GitHub-jsersan-181717?style=for-the-badge&logo=github)](https://github.com/jsersan)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0077B5?style=for-the-badge&logo=linkedin)](https://linkedin.com/in/tu-perfil)
[![Email](https://img.shields.io/badge/Email-Contact-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:tu-email@ejemplo.com)

</div>

---

## 🙏 Agradecimientos

<div align="center">

Agradecimiento especial a:

- 🅰️ **Angular Team** - Por el increíble framework
- 🎨 **Bootstrap Team** - Por los componentes UI
- 💖 **Open Source Community** - Por las increíbles herramientas
- ☕ **Café** - Por hacer posible todo esto

</div>

---

<div align="center">

### ⭐ Si te ha gustado este proyecto, ¡dale una estrella!

**Hecho con ❤️ y ☕ por [Txema Serrano](https://github.com/jsersan)**

---

**© 2025 TatooDenda** • [Website](#) • [Documentation](#) • [Support](#)

</div>
