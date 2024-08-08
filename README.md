# Descripción

Este repositorio contiene el código fuente de mi portafolio personal. Puedes clonar este repositorio y personalizarlo para crear tu propio portafolio.

## Clonar el repositorio

Para clonar este repositorio, sigue los siguientes pasos:

1. Abre tu terminal y navega hasta la ubicación donde deseas clonar el repositorio.
2. Ejecuta el siguiente comando:

    ```
    git clone https://github.com/code3743/code3743.github.io.git
    ```

3. Una vez que se complete la clonación, tendrás una copia local del repositorio en tu máquina.

## Instalar dependencias

Para instalar las dependencias del proyecto, ejecuta el siguiente comando en tu terminal:

```bash
npm install
```


## Utilizar el repositorio

Para utilizar este repositorio y editar tu propio portafolio, sigue estos pasos:

Entra en modo de desarrollo ejecutando el siguiente comando en tu terminal:

```bash
npm run dev
```

1. Abre el archivo `./src/data/curriculum.ts` en tu editor de código favorito.
2. Actualiza la información de tu currículum con tus propios datos.
3. Guarda los cambios.
4. Abre el archivo `./src/index.astro` y actualiza los metadatos del sitio web (title, description, author, keyworks) con tu propia información.
5. Guarda los cambios.

Una vez que hayas actualizado tu información, puedes construir el sitio web ejecutando el siguiente comando en tu terminal:

```bash
npm run build
```

Este comando generará una versión optimizada del sitio web en el directorio `./dist`. Puedes subir este directorio a tu servidor web para publicar tu portafolio en línea.

## Incluir assets
para incluir iconos de redes sociales y portadas de los proyetos, debes ubicar los archivos en la carpeta `public` y referenciarlos en el archivo `./src/data/curriculum.ts` en la sección de `social` y `projects` respectivamente.

## Antes de subir a producción
Antes de subir tu portafolio a producción, asegúrate de cambiar el valor de `site` en el archivo `./astro.config.mjs` con la URL de tu sitio web.

```javascript

    export default defineConfig({
        site: 'https://code3743.github.io', // Cambia esta URL con la URL de tu sitio web
        integrations: [tailwind()]
    });
```

## Inspiración

Este proyecto ha sido inspirado por el trabajo de **midudev**. Puedes encontrar más información sobre su trabajo en [github.com/midudev](https://github.com/midudev/porfolio.dev).

Espero que esta guía te ayude a clonar y utilizar este repositorio para editar tu propio portafolio. ¡Diviértete personalizándolo!

