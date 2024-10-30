---

## Bienvenidos al Repositorio

### Distri-Rivera

---

### 1. Título del Proyecto
**Distri-Rivera: Sistema de Inventario para Tiendas**

### 2. Descripción
**Distri-Rivera** es un sistema de gestión de inventario diseñado específicamente para tiendas minoristas. Este software permite a los usuarios llevar un control eficiente de sus productos, gestionar entradas y salidas de stock, y generar reportes de ventas.

### 3. Instalación

#### Requisitos Previos
Antes de comenzar, asegúrate de tener instalados los siguientes componentes:
- **Node.js** (versión 14 o superior)
- **Editor de código**: Visual Studio Code

#### Pasos de Instalación
Sigue estos pasos para instalar y configurar Distri-Rivera:

1. **Clona el repositorio**:
   Abre la terminal en la carpeta donde deseas clonar el repositorio y ejecuta:
   ```bash
   git init
   git clone https://github.com/dev-Alejo24/proyect_impleSoftware.git
   ```

2. **Navega al directorio del proyecto**:
   Desde la carpeta donde clonaste el repositorio, abre Visual Studio Code con:
   ```bash
   code .
   ```

3. **Instala las dependencias**:
   Dirígete al archivo `package.json`, abre la terminal y ejecuta:
   ```
   npm install
   ```

4. **Configura la ejecución del proyecto**:
   Agrega `"start": "vite"` en la sección de scripts del archivo `package.json`.

5. **Inicia el servidor**:
   Ejecuta el siguiente comando en la terminal para iniciar el servidor:
   ```bash
   npm start
   ```
   Ahora tu sistema de inventario debería estar funcionando en [http://localhost:5173/](http://localhost:5173/).

### 4. Pruebas

#### Librerías
Desde la terminal en la ruta del proyecto, implementa los siguientes comandos para usar las librerías:

1. La librería principal es [Vitest](https://vitest.dev/):
   ```
   npm install -D vitest
   ```

2. Usamos [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/):
   ```
   npm install --save-dev @testing-library/react @testing-library/dom
   ```

Después de instalar las librerías, agrega la siguiente línea en la sección de scripts del archivo `package.json`:
```json
"test": "vitest"
```
Para correr las pruebas, utiliza el siguiente comando en la terminal:
```
npm test
```

### 5. Contribución
Si deseas contribuir a Distri-Rivera, aquí tienes algunas pautas:

1. **Forkea el repositorio** y crea tu rama de características:
   ```bash
   git checkout -b feature/nuevaCaracteristica
   ```
   
2. **Realiza tus cambios** y asegúrate de que todo funciona correctamente.

3. **Haz un commit de tus cambios**:
   ```bash
   git commit -m 'Añadir nueva característica'
   ```

4. **Sube tus cambios** a tu repositorio:
   ```bash
   git push origin feature/nuevaCaracteristica
   ```
5. **Integrantes** del proyecto:
   1. *Michael Papamija*
   2. *Dario Ruiz*
   3. *Isabel Ceron*
   4. *Jenser Ordoñez*