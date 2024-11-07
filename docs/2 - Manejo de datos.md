# 2️⃣ Manejo de datos

![intro](assets/2-intro.png){align="right"}

En el desarrollo de interfaces web, el acceso a datos desde el lado del cliente con JavaScript permite que las aplicaciones web puedan interactuar con datos de forma dinámica, sin recargar la página. Con JavaScript y tecnologías de acceso a datos en el navegador, como la API Fetch y almacenamiento en el navegador, los desarrolladores pueden crear aplicaciones más responsivas que recuperan y manipulan información desde APIs o almacenamiento local.

En este tema, aprenderemos a conectar aplicaciones web con fuentes de datos externas, como APIs REST, que proveen información en tiempo real. También veremos cómo gestionar datos dentro del navegador, utilizando opciones como el almacenamiento local y de sesión, para recordar información entre interacciones del usuario.

Explorar estas técnicas nos permite desarrollar interfaces interactivas, donde el usuario puede visualizar, modificar y almacenar datos de forma instantánea, asegurando una experiencia más fluida y personalizable sin necesidad de una infraestructura de backend directa en esta asignatura.

## Arrays

Los arrays en JavaScript son una estructura fundamental para almacenar múltiples valores dentro de una sola variable. Los arrays permiten organizar datos en listas y manipularlos de forma eficiente, usando métodos específicos que facilitan agregar, eliminar, buscar y transformar elementos.

Un array se puede crear fácilmente utilizando corchetes []:

```js
let frutas = ["manzana", "banana", "naranja"];
```
Aquí, el array frutas contiene tres elementos, que se pueden acceder usando un índice (la posición dentro del array), como frutas[0] para "manzana".

!!!note "¿Puedo meter más de un tipo de dato en un mismo array?"

Sí, en JavaScript es posible crear arrays con datos de diferentes tipos. Un solo array puede contener strings, números, booleanos, objetos, incluso otros arrays (arrays anidados). Esto se debe a que JavaScript es un lenguaje con tipado dinámico, lo que permite esta flexibilidad.

Aquí tienes un ejemplo de un array con datos mixtos:

```javascript
let datosMixtos = ["texto", 42, true, { nombre: "Carlos" }, [1, 2, 3]];
```

En este caso:

- `"texto"` es un string
- `42` es un número
- `true` es un booleano
- `{ nombre: "Carlos" }` es un objeto
- `[1, 2, 3]` es un array anidado

Puedes acceder y manipular estos elementos igual que en un array con un solo tipo de datos, pero es importante recordar que esta mezcla puede hacer el código más difícil de leer o mantener si no se usa con cuidado.

### Creación de Arrays
Un array se puede crear fácilmente utilizando corchetes `[]`:

```javascript
let frutas = ["manzana", "banana", "naranja"];
```

Aquí, el array `frutas` contiene tres elementos, que se pueden acceder usando un índice (la posición dentro del array), como `frutas[0]` para "manzana".

### Métodos de Arrays Más Utilizados

Para trabajar con datos almacenados en arrays, JavaScript nos proporciona una serie de métodos específicos que facilitan operaciones como agregar, eliminar, buscar o modificar elementos. Estos métodos permiten manipular los datos dentro del array sin tener que implementar procesos complejos, simplificando tareas comunes y optimizando el código.

En esta sección, exploraremos algunos de los métodos más utilizados en arrays, como .push(), .pop(), .includes(), y otros, que son fundamentales para realizar operaciones esenciales en aplicaciones web. Estos métodos no solo ayudan a mejorar la legibilidad y eficiencia del código, sino que también permiten manejar los datos de manera flexible, adaptándose a diversas situaciones en el desarrollo de interfaces web interactivas.

**`.push()`** – Agrega un elemento al final del array.
   
   Este método modifica el array original añadiendo un nuevo elemento al final.

   ```javascript
   let frutas = ["manzana", "banana"];
   frutas.push("naranja"); // ["manzana", "banana", "naranja"]
   ```

**`.pop()`** – Elimina el último elemento del array y lo devuelve.
   
   Si necesitamos eliminar el último elemento, `.pop()` es el método adecuado.

   ```javascript
   let frutas = ["manzana", "banana", "naranja"];
   let ultimaFruta = frutas.pop(); // "naranja"
   console.log(frutas); // ["manzana", "banana"]
   ```

**`.includes()`** – Verifica si un elemento existe dentro del array.
   
   Este método devuelve `true` si el elemento está en el array, y `false` en caso contrario. Muy útil para realizar búsquedas rápidas.

   ```javascript
   let frutas = ["manzana", "banana", "naranja"];
   let tieneBanana = frutas.includes("banana"); // true
   let tieneUva = frutas.includes("uva"); // false
   ```

**`.shift()`** – Elimina el primer elemento del array y lo devuelve.
   
   Similar a `.pop()`, pero elimina el primer elemento en lugar del último.

   ```javascript
   let frutas = ["manzana", "banana", "naranja"];
   let primeraFruta = frutas.shift(); // "manzana"
   console.log(frutas); // ["banana", "naranja"]
   ```

**`.unshift()`** – Agrega un elemento al inicio del array.
   
   Al contrario de `.push()`, este método añade el nuevo elemento al principio del array.

   ```javascript
   let frutas = ["banana", "naranja"];
   frutas.unshift("manzana"); // ["manzana", "banana", "naranja"]
   ```

**`.indexOf()`** – Encuentra el índice de un elemento en el array.
   
   Devuelve el índice de la primera aparición del elemento especificado, o `-1` si no lo encuentra.

   ```javascript
   let frutas = ["manzana", "banana", "naranja"];
   let indiceBanana = frutas.indexOf("banana"); // 1
   let indiceUva = frutas.indexOf("uva"); // -1
   ```

Estos métodos básicos son sumamente útiles para manipular datos en arrays y constituyen una base sólida para trabajar con estructuras más complejas en JavaScript. Para más métodos sobre arrays puedes [visitar la web de MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

### JSON (JavaScript Object Notation)

JSON, o *JavaScript Object Notation*, es un formato de texto ligero y estructurado utilizado para almacenar y transportar datos. Aunque tiene sus raíces en JavaScript, JSON es ampliamente compatible con muchos lenguajes de programación, lo que lo convierte en una opción estándar para el intercambio de datos entre sistemas, especialmente en aplicaciones web y APIs.

### Características Principales de JSON

- **Simplicidad y legibilidad**: JSON es fácil de leer y escribir, lo que facilita el trabajo tanto para desarrolladores como para sistemas que lo procesan.
- **Formato estructurado**: Los datos en JSON se organizan de manera clara usando pares clave-valor para representar objetos, y listas de valores para representar arrays.
- **Basado en texto**: Como se trata de un formato de texto plano, los datos JSON pueden transportarse a través de redes y ser fácilmente interpretados por distintos lenguajes y plataformas.

### Estructura de JSON

La estructura de JSON es muy similar a la de los objetos en JavaScript, con llaves `{}` para representar objetos y corchetes `[]` para arrays. Aquí tienes un ejemplo básico de JSON:

```json
{
  "nombre": "Carlos",
  "edad": 30,
  "esEstudiante": false,
  "habilidades": ["HTML", "CSS", "JavaScript"],
  "direccion": {
    "calle": "123 Calle Principal",
    "ciudad": "Madrid"
  }
}
```

En este ejemplo:

- `"nombre"`, `"edad"`, `"esEstudiante"`, `"habilidades"`, y `"direccion"` son claves.
- Cada clave está asociada con un valor, que puede ser un string, número, booleano, array, u otro objeto.

### Usando JSON en JavaScript

En JavaScript, los datos JSON se pueden manipular fácilmente usando los métodos `JSON.stringify()` y `JSON.parse()`:

- `JSON.stringify(objeto)`: Convierte un objeto de JavaScript en una cadena JSON.
- `JSON.parse(cadenaJSON)`: Convierte una cadena JSON en un objeto de JavaScript.

JSON es una herramienta esencial para trabajar con datos estructurados en el desarrollo de interfaces web, ya que permite una comunicación clara y eficiente entre el frontend y el backend de una aplicación.