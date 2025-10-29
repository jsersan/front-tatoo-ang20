🛍️ TatooDenda - E-commerce Angular
Una aplicación de comercio electrónico moderna y completa desarrollada con Angular 19, especializada en la venta de productos de piercing y dilatación.
Mostrar imagen
Mostrar imagen
Mostrar imagen
Mostrar imagen
📋 Tabla de Contenidos

Características
Tecnologías
Requisitos Previos
Instalación
Configuración
Uso
Estructura del Proyecto
Funcionalidades Principales
API Backend
Despliegue
Contribuir
Licencia
Contacto

✨ Características
🎨 Interfaz de Usuario

Diseño Responsivo: Optimizado para móviles, tablets y escritorio
Tema Moderno: Paleta de colores corporativa con tonos grises (#52667a)
Animaciones Suaves: Transiciones y efectos visuales elegantes
Banner Rotativo: Carrusel automático de imágenes promocionales

🛒 Gestión de Productos

Catálogo Dinámico: Visualización de productos por categorías
Búsqueda Avanzada: Sistema de búsqueda en tiempo real
Vista de Producto: Modal emergente con detalles completos
Gestión de Colores: Soporte para múltiples variantes de color por producto
Filtrado por Categorías: Navegación jerárquica (Dilataciones, Piercings, etc.)

🛍️ Carrito de Compras

Carrito Persistente: Almacenamiento en localStorage
Gestión Completa: Añadir, modificar cantidades y eliminar productos
Cálculo Automático: Subtotales y total actualizado en tiempo real
Vista Modal: Carrito lateral deslizante

👤 Gestión de Usuarios

Autenticación JWT: Login y registro seguros
Perfiles Personalizados: Gestión de datos personales y dirección de envío
Historial de Pedidos: Visualización de compras anteriores
Descarga de Albaranes: Generación de PDF con detalles del pedido

💳 Proceso de Compra

Checkout Simplificado: Flujo de compra en 3 pasos
Autocompletado: Datos precargados desde el perfil del usuario
Validación de Formularios: Validaciones en tiempo real
Confirmación de Pedido: Modal de confirmación con resumen

🔐 Seguridad

Guards de Autenticación: Protección de rutas privadas
Interceptores HTTP: Manejo automático de tokens JWT
Validación de Contraseñas: Modal de confirmación para cambios críticos

📱 Características Adicionales

Modo Offline: Funcionamiento parcial sin conexión
Optimización de Imágenes: Carga eficiente con fallbacks
SEO Friendly: Meta tags y estructura optimizada
Accesibilidad: Cumplimiento de estándares WCAG

🛠️ Tecnologías
Frontend

Angular 19: Framework principal
TypeScript 5.0: Lenguaje de programación
RxJS: Programación reactiva
Bootstrap 5: Framework CSS base
SCSS: Preprocesador CSS
SweetAlert2: Alertas y modales elegantes
jsPDF: Generación de PDFs del lado del cliente

Backend (Requisitos)

Node.js: Entorno de ejecución
Express: Framework de servidor
MySQL: Base de datos
JWT: Autenticación basada en tokens

Herramientas de Desarrollo

Angular CLI: Herramienta de línea de comandos
ESLint: Linter de código
Prettier: Formateador de código

📦 Requisitos Previos
Antes de comenzar, asegúrate de tener instalado:

Node.js (v20 o superior)
npm (v10 o superior)
Angular CLI (v19 o superior)
Git

bash# Verificar versiones instaladas
node --version
npm --version
ng version
🚀 Instalación
1. Clonar el Repositorio
bashgit clone https://github.com/tu-usuario/tatoodenda-frontend.git
cd tatoodenda-frontend
2. Instalar Dependencias
bashnpm install
3. Configurar Variables de Entorno
Crea un archivo src/environments/environment.ts:
typescriptexport const environment = {
  production: false,
  apiUrl: 'http://localhost:3000/api'
};
Para producción, edita src/environments/environment.prod.ts:
typescriptexport const environment = {
  production: true,
  apiUrl: 'https://tu-api.com/api'
};
4. Iniciar el Servidor de Desarrollo
bashng serve
```

Navega a `http://localhost:4200/`. La aplicación se recargará automáticamente al hacer cambios.

## ⚙️ Configuración

### Estructura de Configuración
```
src/
├── environments/
│   ├── environment.ts          # Desarrollo
│   └── environment.prod.ts     # Producción
└── app/
    ├── guards/                 # Guards de autenticación
    ├── interceptors/           # Interceptores HTTP
    └── services/               # Servicios principales
Configurar API Backend
Asegúrate de que tu backend esté ejecutándose en el puerto especificado en environment.ts:
typescriptapiUrl: 'http://localhost:3000/api'
Configurar Rutas Protegidas
Las rutas protegidas usan AuthGuard:
typescript{
  path: 'checkout',
  component: CheckoutComponent,
  canActivate: [AuthGuard]
}
💻 Uso
Comandos Principales
bash# Desarrollo
ng serve                    # Iniciar servidor de desarrollo
ng serve --open            # Abrir automáticamente en el navegador

# Producción
ng build                   # Build para producción
ng build --configuration production  # Build optimizado

# Testing
ng test                    # Ejecutar tests unitarios
ng e2e                     # Ejecutar tests end-to-end

# Linting
ng lint                    # Analizar código

# Generación de Componentes
ng generate component nombre-componente
ng generate service nombre-servicio
ng generate guard nombre-guard
```

### Flujo de Usuario Típico

1. **Navegación**: El usuario explora productos por categorías o búsqueda
2. **Visualización**: Hace clic en un producto para ver detalles en modal
3. **Selección**: Elige color y cantidad, añade al carrito
4. **Carrito**: Revisa productos, modifica cantidades
5. **Checkout**: Inicia sesión (si no está autenticado)
6. **Pago**: Completa el formulario de checkout
7. **Confirmación**: Recibe confirmación del pedido
8. **Historial**: Puede descargar albarán en PDF

## 📁 Estructura del Proyecto
```
src/app/
├── components/
│   ├── admin/                  # Panel de administración
│   │   ├── category-manager/   # Gestión de categorías
│   │   └── product-manager/    # Gestión de productos
│   ├── cart/                   # Carrito de compras
│   ├── checkout/               # Proceso de pago
│   ├── home/                   # Página principal
│   ├── product/                # Componentes de productos
│   │   ├── product-detail/     # Detalle de producto
│   │   ├── product-list/       # Lista de productos
│   │   ├── product-popup/      # Modal de producto
│   │   └── search-results/     # Resultados de búsqueda
│   ├── shared/                 # Componentes compartidos
│   │   ├── header/             # Encabezado
│   │   ├── navbar/             # Barra de navegación
│   │   └── footer/             # Pie de página
│   ├── user/                   # Componentes de usuario
│   │   └── profile/            # Perfil de usuario
│   ├── login-popup/            # Modal de login
│   ├── registro-popup/         # Modal de registro
│   ├── historial-pedidos/      # Historial de compras
│   └── password-confirm-modal/ # Confirmación de contraseña
├── guards/
│   ├── auth.guard.ts           # Protección de rutas
│   └── admin.guard.ts          # Protección rutas admin
├── interceptors/
│   ├── auth.interceptor.ts     # Inyección de JWT
│   └── error.interceptor.ts    # Manejo de errores HTTP
├── models/
│   ├── product.ts              # Modelo de producto
│   ├── category.ts             # Modelo de categoría
│   ├── user.ts                 # Modelo de usuario
│   └── order.ts                # Modelo de pedido
├── services/
│   ├── auth.service.ts         # Autenticación
│   ├── product.service.ts      # Gestión de productos
│   ├── category.service.ts     # Gestión de categorías
│   ├── cart.service.ts         # Gestión del carrito
│   ├── order.service.ts        # Gestión de pedidos
│   ├── pdf.service.ts          # Generación de PDFs
│   └── login-popup.service.ts  # Control de modales
├── helpers/
│   └── product-image-helper.ts # Helper para imágenes
└── pipes/
    └── image-url.pipe.ts       # Pipe para URLs de imágenes
🎯 Funcionalidades Principales
Sistema de Autenticación
typescript// Login
this.authService.login(username, password).subscribe({
  next: (user) => {
    // Usuario autenticado
    // Token guardado en localStorage
    this.router.navigate(['/']);
  },
  error: (error) => {
    // Manejar error
  }
});
Gestión del Carrito
typescript// Añadir al carrito
this.cartService.addToCart(product, quantity, color);

// Actualizar cantidad
this.cartService.updateItemQuantity(itemId, color, newQuantity);

// Eliminar del carrito
this.cartService.removeItem(itemId, color);

// Obtener total
const total = this.cartService.getCartTotal();
Creación de Pedidos
typescriptconst order: Order = {
  usuario_id: currentUser.id,
  fecha: new Date().toISOString(),
  total: this.total,
  lineas: this.orderLines,
  estado: 'pendiente'
};

this.orderService.createOrder(order).subscribe({
  next: (response) => {
    // Pedido creado exitosamente
    this.cartService.clearCart();
  }
});
Generación de PDFs
typescriptthis.pdfService.generarAlbaran(pedido, lineas, usuario)
  .then((pdfBlob) => {
    // Descargar PDF automáticamente
    const url = window.URL.createObjectURL(pdfBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Albaran_${pedido.id}.pdf`;
    link.click();
  });
```

## 🔌 API Backend

### Endpoints Principales

#### Autenticación
```
POST   /api/users/login          # Iniciar sesión
POST   /api/users/register       # Registrar usuario
PUT    /api/users/:id            # Actualizar usuario
```

#### Productos
```
GET    /api/productos            # Listar todos los productos
GET    /api/productos/:id        # Obtener producto específico
GET    /api/productos/categoria/:id  # Productos por categoría
GET    /api/productos/search?q=term  # Buscar productos
POST   /api/productos            # Crear producto (admin)
PUT    /api/productos/:id        # Actualizar producto (admin)
DELETE /api/productos/:id        # Eliminar producto (admin)
```

#### Categorías
```
GET    /api/categorias           # Listar categorías
GET    /api/categorias/:id       # Obtener categoría
POST   /api/categorias           # Crear categoría (admin)
PUT    /api/categorias/:id       # Actualizar categoría (admin)
DELETE /api/categorias/:id       # Eliminar categoría (admin)
```

#### Pedidos
```
GET    /api/pedidos/user/:userId # Pedidos del usuario
GET    /api/pedidos/:id          # Obtener pedido específico
GET    /api/pedidos/:id/lineas   # Líneas del pedido
POST   /api/pedidos              # Crear pedido
Formato de Respuestas
Éxito (200 OK)
json{
  "data": { /* datos */ },
  "message": "Operación exitosa"
}
Error (400/401/404/500)
json{
  "error": "Mensaje de error",
  "message": "Descripción detallada"
}
🌐 Despliegue
Build para Producción
bash# Build optimizado
ng build --configuration production

# El resultado estará en dist/
Desplegar en Servidor Web
bash# Copiar contenido de dist/ a tu servidor
scp -r dist/* usuario@servidor:/ruta/web/
Desplegar en Netlify

Conecta tu repositorio de GitHub
Configura el comando de build: ng build --configuration production
Configura el directorio de publicación: dist/tatoodenda-frontend
Añade variables de entorno si es necesario

Desplegar en Vercel
bash# Instalar Vercel CLI
npm i -g vercel

# Desplegar
vercel --prod
Variables de Entorno en Producción
Asegúrate de configurar:

API_URL: URL de tu backend
Cualquier otra variable específica de tu entorno

🤝 Contribuir
¡Las contribuciones son bienvenidas! Por favor:

Fork el proyecto
Crea una rama para tu feature (git checkout -b feature/AmazingFeature)
Commit tus cambios (git commit -m 'Add some AmazingFeature')
Push a la rama (git push origin feature/AmazingFeature)
Abre un Pull Request

Guía de Estilo

Usa TypeScript con tipos estrictos
Sigue las convenciones de Angular
Comenta código complejo
Escribe tests para nuevas funcionalidades
Mantén componentes pequeños y reutilizables

📄 Licencia
Este proyecto está bajo la Licencia MIT - ver el archivo LICENSE para más detalles.
👨‍💻 Autor
Txema Serrano Sánchez

GitHub: @jsersan
Email: tu-email@ejemplo.com

🙏 Agradecimientos

Angular Team por el excelente framework
Comunidad de desarrolladores
Bootstrap por los componentes UI
SweetAlert2 por las alertas elegantes


⭐️ Si este proyecto te ha sido útil, ¡considera darle una estrella!
© 2025 TatooDenda - E-commerce con Angular
