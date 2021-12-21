# PokeFullStack
React Poke App with backend 

Routing:

/. La página principal, donde veamos el listado de pokemons.
/new La página de creación de nuevo pokemon con un formulario para ingresar sus datos.
/pokemon/:id La página de visualización de un perfil de pokemon (información extendida). Necesitarás el componente Details.
/search Página de búsqueda de un pokemon en la PokeApp. (Ya la tenemos hecha de ejercicios anteriores).

Comunicación:
El estado con el listado de Pokemon debe vivir en App y pasarse a cada sección que lo necesite consumiendolo a través de Context

El componente ListaPokemon, recibirá de Context la lista de Pokemons y mapeará dicha lista cargando los componentes Card correspondientes y pasándole a través de props la información de cada registro.

Los nombres mostrados por los componentes Card de cada Pokemon serán Links clickables que llevarán a la ruta /pokemon/:id, que mostrará la vista detallada de ese Pokemon. En dicho Link se pasará en la query String los datos del Pokemon para poder ser leídos en la pantalla de vista detalle(puedes usar un hook para ello si quieres).

Ejemplo ruta:

/pokemon/22?name=bulbasur&image=url_imagen&typeOne=plant
HINT: query-parameters
EXTRA
Como los pokemon no pueden tener el mismo tipo repetido DOS veces, en la función de submit validaremos que no se han repetido y mostraremos un mensaje de error al usuario en caso de que sea necesario.
