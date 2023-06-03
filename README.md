# Challenge React - Documentación

¡Bienvenido/a a mi challenge React!

## Instrucciones

Para ejecutar el proyecto, sigue estos pasos:

1. Clona el repositorio en tu máquina local utilizando el siguiente comando:

```bash
git clone https://github.com/fabiCoseglia/pokeDexReact.git
```

2. Navega hasta el directorio del proyecto:

```bash
cd pokeDexReact
```

3. Instala las dependencias del proyecto con el siguiente comando:

```bash
npm install
```

4. Inicia el servidor de desarrollo ejecutando el siguiente comando:

```bash
npm run dev
```

El servidor se levantará en el puerto 3000. Puedes acceder a la aplicación en tu navegador web utilizando la siguiente URL: [http://localhost:3000](http://localhost:3000)

## Mi experiencia:

Al momento de inicializar el Proyecto me encontré en un escenario muy desconocido, hacía mucho no trabajaba React con API, UseContext y provider.
A raiz de eso decidí investigar, estudiar y aplicar lo aprendido al mismo momento que asimilaba el contenido.


## Descripción del proyecto

El proyecto PokeDex es una aplicación web basada en React que te permite explorar información sobre los diferentes Pokémon disponibles. A continuación, te brindaré una descripción general de los archivos y el código que se encuentran en el repositorio.

- **src/components/CardPokemon.jsx**: Este archivo contiene el componente principal de la aplicación, CardPokemon. Es responsable de mostrar las tarjetas de los Pokémon, filtrarlos por nombre y ordenarlos alfabéticamente. Utiliza componentes de React Bootstrap y react-router-dom para la interfaz de usuario.

- **src/components/Paginator.jsx**: Este archivo contiene el componente Paginator, que se encarga de mostrar la paginación para navegar entre las diferentes páginas de Pokémon.

- **src/contexts/PokemonContext.jsx**: Aquí se encuentra el contexto PokemonContext, que proporciona los datos de los Pokémon a los componentes hijos. Utiliza el hook useContext de React para compartir y acceder a los datos en toda la aplicación.

- **src/App.jsx**: El componente App es el punto de entrada principal de la aplicación. Importa el componente CardPokemon y envuelve toda la aplicación con el PokemonContext.Provider para proporcionar los datos del contexto a los componentes hijos.