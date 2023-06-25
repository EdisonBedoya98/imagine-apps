# 🚀 ImagineApps

### 🔥 Stack usado

- [ReactJS](https://react.dev/) - Librería desarrollo web
- [Vite](https://vitejs.dev/) - Herramientas para el frontend
- [Tailwind](https://tailwindcss.com/) - Estilos
- [AntDesign](https://ant.design/) - Componentes estilados
- [Redux](https://redux-toolkit.js.org/) - Manejo del estado global
- [Jest](https://jestjs.io/) - Libreria para realizar test
- [ReactTestingLibrary](https://testing-library.com/docs/react-testing-library/intro/) - Libreria para facilitar realizar los test
- [Firebase](https://firebase.google.com/?hl=es) - Plataforma de servicios

Se hace uso de **ReactJs + Vite** debido a la flexibilidad que ofrece, comparados con frameworks como **NextJs** o **Gatsby** los cuales tienden ser más rígidos, ya que tienen arquitecturas ya definidas, además se hace uso de **Redux** para el manejo de estado global porque es una librería que permite escalar fácilmente y al tener la propiedad de que no muta el estado hace que sea mucho más fácil seguir la trazabilidad del estado, para los estilos se hace uso de Tailwind que nos ayuda de gran manera a manejar un estándar a nivel de estilo y nos evita uno de los mayores retos cuando se trabaja con **css** y es escribir nombres de clases, debido a que la labor de escribir buenos nombres es bastante compleja. Ademas con fines de acelerar el proceso de desarrollo teniendo en cuenta el tiempo fijado se hace uso de Ant Design el cual nos provee de componentes de UI que podemos reutilizar de manera sencilla y Firebase el cual nos ayuda con la parte de almacenar los datos en FireStore que una base de datos RealTime.

### 🔧 Instalación

Para realizar la instacion del proyecto se deben tener instalados [Git](https://git-scm.com/downloads) y [node](https://nodejs.org/es/download) recomiendo la versión LTS.
Con esto listo se procede a realizar los siguientes pasos

_Se clona el repositorio_

```
git clone https://github.com/EdisonBedoya98/imagine-apps.git
```

_Se ingresa a la carpeta del proyecto_

```
cd imagine-apps
```

_Se instalan las dependencias_

```
npm i
```
_Se debe crear un archivo con las credenciales del Firebase en el .env.local_

```
VITE_APIKEY=***
VITE_AUTHDOMAIN=***
VITE_PROJECTID=***
VITE_STORAGEBUCKET=***
VITE_MESSAGINGSENDERID=***
VITE_APPID=***
VITE_MEASUREMENTID=***
VITE_ADMINUID=***
```

_Y listo, se inicia el proyecto_

```
npm run dev
```

### 🎨 Estilos


Debido a que se hace uso de Ant Design se debe evitar que se inyecten los estilos por defecto que trae el Tailwind, por esa razón se ingresa la siguiente configuración dentro de tailwind.config.js
```
module.exports = {
  ...config,
  corePlugins: {
    preflight: false,
  }
}
```



### 💾 Aplicativo
Las siguientes son las credenciales tanto para el Admin que tiene permisos de lectura y escritura y para el usuario externo que tiene permisos solo de lectura

_Admin_
```
user: admin@imagineapps.com
password: admin123
```
_Usuario externo_
```
user: external@imagineapps.com
password: external123
```

Para poder acceder a la versión desplegada realiza clic [acá](https://flourishing-druid-f19ce6.netlify.app)

### 🕡 Features faltantes

Por cuestiones de tiempo estas son las features que faltan por implementar

- Generación de PDF y envio mediante correo electronico que se pueda hacer uso de Firebase para esto ya que ofrece un servicio para hacerlo
- Asociar inventario a la empresa correspondiente


## Autor ✒️

- **Edison Bedoya García** - [edison](https://github.com/EdisonBedoya98)

El valor de una idea radica en su uso - _Thomas Edison_
