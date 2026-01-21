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

### Spread Operator

el **spread operator** (`...`) en JavaScript es una característica poderosa que te permite expandir (o "desplegar") elementos de un array, objeto u otra estructura iterable en lugares donde se esperan elementos individuales. Con arrays, el spread operator se usa mucho para copiar, combinar, y manipular de forma fácil los contenidos de arrays.

!!!note "1. Crear una Copia de un Array"

El spread operator es útil para crear copias de arrays sin modificar el array original. En lugar de hacer una copia directa (que solo copiaría la referencia y podría causar problemas si cambias algo), el spread operator hace una copia completa de los elementos.

```javascript
const originalArray = [1, 2, 3];
const copiedArray = [...originalArray];

console.log(copiedArray); // [1, 2, 3]
```

Aquí, `copiedArray` es una copia nueva e independiente de `originalArray`.

!!!example "2. Combinar Arrays"

También puedes usar el spread operator para combinar arrays. Es como concatenar arrays, pero mucho más sencillo y directo.

```javascript
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinedArray = [...array1, ...array2];

console.log(combinedArray); // [1, 2, 3, 4, 5, 6]
```

Aquí, los elementos de `array1` y `array2` se combinan en un solo array llamado `combinedArray`.

!!!tip "3. Añadir o Insertar Elementos en un Array"

Puedes insertar elementos adicionales al inicio, en el medio o al final del array usando el spread operator. Es muy útil cuando quieres agregar elementos a un array sin modificar el original.

```javascript
const originalArray = [2, 3, 4];
const newArray = [1, ...originalArray, 5];

console.log(newArray); // [1, 2, 3, 4, 5]
```

En este caso, `newArray` tiene el elemento `1` al principio y `5` al final, envolviendo los elementos del array original.

!!!danger "4. Pasar Arrays como Argumentos en Funciones"

El spread operator es muy útil cuando necesitas pasar elementos de un array como argumentos individuales en una función.

```javascript
const numbers = [10, 20, 30];
const maxNumber = Math.max(...numbers);

console.log(maxNumber); // 30
```

Aquí, `Math.max(...numbers)` expande los elementos de `numbers` para que `Math.max` los reciba como si hubiéramos escrito `Math.max(10, 20, 30)`.

!!!abstract "5. Eliminar o Ignorar Elementos Específicos al Crear un Nuevo Array"
Puedes usar el spread operator junto con `filter` o combinando arrays para crear una copia que omita ciertos elementos.

```javascript
const originalArray = [1, 2, 3, 4, 5];
const arrayWithoutTwo = originalArray.filter(num => num !== 2);

console.log(arrayWithoutTwo); // [1, 3, 4, 5]
```

!!!success "Ejemplo Completo"

Supongamos que tienes un array de estudiantes y quieres crear un nuevo array donde agregas un estudiante adicional al principio y otro al final:

```javascript
const estudiantes = ["Carlos", "Ana", "Luis"];
const nuevosEstudiantes = ["Maria", ...estudiantes, "José"];

console.log(nuevosEstudiantes); // ["Maria", "Carlos", "Ana", "Luis", "José"]
```

---


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

### Ventajas de JSON

1. **Formato Universal**: JSON es ampliamente aceptado y es compatible con casi todos los lenguajes de programación, lo que lo convierte en el estándar de facto para intercambiar datos entre servicios y aplicaciones.
2. **Ligero y Eficiente**: Al ser un formato basado en texto, JSON tiene una carga de datos relativamente baja y es fácil de comprimir y descomprimir, optimizando la transferencia de datos en la web.
3. **Legible por Humanos y Máquinas**: Su estructura es simple y se asemeja a la sintaxis de los objetos JavaScript, lo que facilita tanto su escritura como su interpretación y depuración.

### Tipos de Datos en JSON

Los tipos de datos en JSON son limitados pero efectivos, lo que asegura la interoperabilidad entre diferentes sistemas. Los tipos permitidos incluyen:

- **String**: Textos entre comillas dobles. Ejemplo: `"nombre": "Carlos"`
- **Number**: Números, ya sean enteros o decimales. Ejemplo: `"edad": 30`
- **Boolean**: Valores de verdad `true` o `false`. Ejemplo: `"esEstudiante": false`
- **Array**: Listas ordenadas entre corchetes. Ejemplo: `"habilidades": ["HTML", "CSS", "JavaScript"]`
- **Object**: Objetos definidos por pares clave-valor. Ejemplo: `"direccion": { "calle": "123 Calle Principal", "ciudad": "Madrid" }`
- **null**: Un valor nulo. Ejemplo: `"apellido": null`

### Métodos de Conversión de JSON en JavaScript

JavaScript ofrece métodos integrados para trabajar con JSON y facilitar su manipulación y conversión:

- **JSON.stringify()**: Convierte un objeto JavaScript en una cadena JSON. Es útil para preparar datos para enviarlos a un servidor o almacenarlos en un sistema de almacenamiento de texto (como `localStorage`).
  
  ```javascript
  const usuario = {
    nombre: "Carlos",
    edad: 30,
    esEstudiante: false
  };
  
  const usuarioJSON = JSON.stringify(usuario);
  console.log(usuarioJSON); // {"nombre":"Carlos","edad":30,"esEstudiante":false}
  ```

- **JSON.parse()**: Convierte una cadena JSON en un objeto JavaScript, permitiendo acceder y manipular los datos como en cualquier otro objeto. Este método es común para procesar respuestas de APIs o datos obtenidos de sistemas de almacenamiento.

  ```javascript
  const usuarioJSON = '{"nombre":"Carlos","edad":30,"esEstudiante":false}';
  
  const usuario = JSON.parse(usuarioJSON);
  console.log(usuario.nombre); // Carlos
  ```

### Buenas Prácticas al Trabajar con JSON

1. **Validez de JSON**: JSON es estricto en su formato. Por ejemplo, las claves deben estar entre comillas dobles (`"nombre"`) y no se permiten comas adicionales al final de listas o objetos.
   
2. **Serialización**: A veces, cuando conviertes un objeto a JSON, puedes querer omitir ciertos datos o formatearlo. `JSON.stringify()` acepta un segundo parámetro para un “replacer”, que puede ser un array de claves que quieres incluir o una función que personaliza la salida.

   ```javascript
   const usuario = { nombre: "Carlos", edad: 30, esEstudiante: false };
   const usuarioFiltrado = JSON.stringify(usuario, ["nombre", "edad"]);
   console.log(usuarioFiltrado); // {"nombre":"Carlos","edad":30}
   ```

3. **Espaciado y Formato Legible**: Para facilitar la legibilidad, `JSON.stringify()` permite un tercer parámetro que indica el nivel de indentación:

   ```javascript
   const usuario = { nombre: "Carlos", edad: 30, esEstudiante: false };
   const usuarioJSON = JSON.stringify(usuario, null, 2);
   console.log(usuarioJSON);
   /* 
   {
     "nombre": "Carlos",
     "edad": 30,
     "esEstudiante": false
   }
   */
   ```

4. **Seguridad**: Al recibir JSON de fuentes externas, especialmente desde APIs, es importante validar los datos antes de usarlos en la aplicación para evitar inyecciones o errores no deseados. JSON.parse() solo acepta JSON bien formado, pero no garantiza que los datos sean seguros o válidos según la lógica de tu aplicación.

### JSON y APIs

En aplicaciones web, JSON es la principal forma de comunicarse con APIs RESTful. Las solicitudes a APIs a menudo devuelven JSON como respuesta, y los datos se envían en este mismo formato. Así, en JavaScript, puedes usar `fetch()` para realizar una solicitud, procesar la respuesta como JSON y luego manipular los datos.

```javascript
fetch("https://api.example.com/usuarios/1")
  .then(response => response.json()) // Convertir a JSON
  .then(data => {
    console.log(data.nombre); // Usar los datos recibidos
  })
  .catch(error => console.error("Error:", error));
```

### JSON en Almacenamiento Local

En el frontend, el almacenamiento de datos en JSON también es común con `localStorage` o `sessionStorage`, ya que estos sistemas solo admiten valores de texto. Usar `JSON.stringify()` y `JSON.parse()` permite guardar y recuperar datos complejos.

```javascript
const usuario = { nombre: "Carlos", edad: 30 };
localStorage.setItem("usuario", JSON.stringify(usuario));

const usuarioGuardado = JSON.parse(localStorage.getItem("usuario"));
console.log(usuarioGuardado.nombre); // Carlos
```

JSON es, en esencia, un pilar en la comunicación de datos en aplicaciones modernas, y su versatilidad lo hace indispensable en el desarrollo de interfaces web y sistemas de intercambio de información.

### Ejemplo de filtrado de datos en JSON

Para hacer el filtrado de un objeto JSON que esté almacenado en una constante, vamos a suponer que tenemos un JSON con una estructura como la siguiente y que se almacena en una constante llamada `misDatos`.

Supongamos que tenemos la siguiente estructura de datos con notación JSON:

```javascript
// JSON almacenado en la constante
const misDatos = [
  { nombre: "Carlos", apellido: "Hernández", edad: 30 },
  { nombre: "Ana", apellido: "Pérez", edad: 25 },
  { nombre: "Luis", apellido: "Hernández", edad: 28 },
  { nombre: "María", apellido: "García", edad: 35 }
];

// Filtrar los datos para obtener aquellos donde apellido sea "Hernández"
const resultado = misDatos.filter(persona => persona.apellido === "Hernández");

console.log(resultado);
```

### Explicación del Código

1. **Estructura de `misDatos`**: En este caso, `misDatos` es un array de objetos JSON, donde cada objeto representa información sobre una persona, incluyendo `nombre`, `apellido` y `edad`.

2. **Uso de `filter()`**: Usamos el método `.filter()` para recorrer el array `misDatos` y buscar objetos que cumplan la condición `persona.apellido === "Hernández"`. El método `.filter()` devuelve un nuevo array que incluye todos los objetos que cumplen con la condición.

3. **Salida**: Al final, `resultado` contendrá todos los objetos de `misDatos` donde el `apellido` sea igual a `"Hernández"`. En este caso, el `console.log(resultado);` mostraría:

```javascript
[
  { nombre: "Carlos", apellido: "Hernández", edad: 30 },
  { nombre: "Luis", apellido: "Hernández", edad: 28 }
]
```

### Explicación del Resultado

Este filtrado devuelve un array con dos objetos, ya que en `misDatos` hay dos personas con el `apellido` `"Hernández"`. Cada objeto incluye la información completa de esas personas, tal como la edad y el nombre.

## API ➡️ Acceso a datos remotos

El método `fetch()` en JavaScript es una herramienta poderosa para hacer solicitudes HTTP y obtener datos de un servidor de manera asíncrona. Se utiliza ampliamente para conectarse con APIs y obtener o enviar datos sin necesidad de recargar la página. `fetch()` devuelve una **Promesa**, lo que significa que podemos trabajar con el resultado de la solicitud de manera asíncrona utilizando `.then()` o `async/await`.

### Sintaxis básica de `fetch()`

```javascript
fetch(url, options)
  .then(response => {
    // Manipular la respuesta aquí
  })
  .catch(error => {
    // Manejar errores aquí
  });
```

- `url`: La dirección del recurso o API que queremos solicitar.
- `options` (opcional): Un objeto de configuración para especificar detalles adicionales de la solicitud, como el método (`GET`, `POST`, etc.), encabezados, cuerpo de la solicitud, etc.

### Ejemplos de Uso de `fetch()`

#### 1. **Hacer una Solicitud GET Básica**

Vamos a realizar una solicitud `GET` para obtener datos de una API pública, por ejemplo, una API de usuarios ficticios.

```javascript
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => {
    if (!response.ok) {
      throw new Error('Error en la solicitud');
    }
    return response.json(); // Convertir la respuesta a JSON
  })
  .then(data => {
    console.log(data); // Aquí podríamos procesar los datos
  })
  .catch(error => {
    console.error('Hubo un problema con la solicitud:', error);
  });
```

En este ejemplo:

- `fetch()` realiza una solicitud `GET` a la URL proporcionada.
- `response.json()` convierte la respuesta a un objeto JSON que podemos usar en el código.
- Si ocurre un error en la solicitud (por ejemplo, una URL incorrecta), el bloque `catch` manejará el error.

#### 2. **Uso de `fetch()` con Async/Await**

Podemos usar `async/await` para hacer el código más limpio y legible:

```javascript
async function obtenerUsuarios() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) {
      throw new Error('Error en la solicitud');
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Hubo un problema con la solicitud:', error);
  }
}

obtenerUsuarios();
```

En este caso, `async/await` nos permite escribir código de manera más secuencial. La función `obtenerUsuarios` espera el resultado de `fetch()` y convierte la respuesta a JSON antes de continuar. Esto hace que el código sea más fácil de leer.

#### 3. **Hacer una Solicitud POST con `fetch()`**

Para enviar datos a una API, podemos usar el método `POST`. A continuación, se muestra cómo hacerlo configurando el `body` y los `headers` de la solicitud:

```javascript
async function agregarUsuario(nuevoUsuario) {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(nuevoUsuario), // Convertir el objeto a JSON
    });
    if (!response.ok) {
      throw new Error('Error en la solicitud');
    }
    const data = await response.json();
    console.log('Usuario agregado:', data);
  } catch (error) {
    console.error('Hubo un problema con la solicitud:', error);
  }
}

const usuario = { name: 'Juan', email: 'juan@example.com' };
agregarUsuario(usuario);
```

En este ejemplo:

- `method: 'POST'` especifica que estamos enviando datos.
- `headers` define el tipo de contenido que estamos enviando, en este caso, `application/json`.
- `body` envía los datos JSON convertidos a un string con `JSON.stringify()`.

!!!danger "Consideraciones Importantes"
     - **Verificación de Errores**: Siempre es útil verificar si `response.ok` es `true` para asegurar que la solicitud fue exitosa.
     - **Promesas y Async/Await**: Ambos enfoques son válidos para manejar `fetch()`. `async/await` tiende a ser más legible en operaciones complejas.
     - **CORS**: Al hacer solicitudes a otros dominios, se pueden enfrentar problemas de CORS (Cross-Origin Resource Sharing) que bloquean el acceso a ciertas APIs debido a restricciones de seguridad.


#### Pero... ¿Qué es una Promesa?

Imagina que quieres pedir una pizza a domicilio. Llamas a la pizzería, haces el pedido y te dicen: "Tu pizza estará lista en 30 minutos." Este es un ejemplo de una **promesa**.

La promesa es que recibirás la pizza (tu resultado final), pero no ocurre de inmediato. Durante esos 30 minutos, no tienes que quedarte esperando sin hacer nada; puedes ver una película o hacer otra cosa. Una vez que la pizza llega, puedes disfrutarla o, si hay un problema (la pizza no llega o llega equivocada), tendrás que manejar esa situación.

**Así es una promesa en programación:** es algo que pide el programa y que se cumplirá en el futuro (cuando se resuelve la promesa) o que puede fallar (cuando la promesa se rechaza). Mientras tanto, el programa puede seguir haciendo otras cosas.

#### Vale si, entonces ¿Qué es "Asíncrono"?

"Asíncrono" significa que las cosas no suceden todas al mismo tiempo o en un orden estricto; pueden pasar en momentos diferentes. Esto es diferente a las tareas "síncronas", donde cada cosa debe esperar que la anterior termine antes de empezar.

Imagina que tienes que lavar ropa, hacer la cena y regar las plantas. Si lo haces de manera "síncrona", significaría que:

1. Lavas toda la ropa.
2. Luego, haces la cena.
3. Por último, riegas las plantas.

Pero, si lo haces **de manera asíncrona**, puedes poner la lavadora (que tardará un rato en lavar) y, mientras tanto, ir haciendo la cena o regando las plantas. De esta forma, no pierdes tiempo y puedes hacer varias cosas a la vez sin necesidad de esperar.

**En programación**, cuando trabajamos de manera asíncrona, el programa puede pedir datos, esperar una respuesta, y al mismo tiempo continuar con otras tareas. Así, el usuario no tiene que esperar sin hacer nada hasta que se complete cada tarea.

#### ¿Cómo funcionan Promesas y Asincronía Juntos?

Imagina que el programa hace un "pedido" a un servidor, como si llamara a la pizzería. Este pedido se envía de manera asíncrona, lo que significa que el programa no se queda esperando hasta que llegue la respuesta, sino que puede seguir haciendo otras cosas. Cuando llega la respuesta, el programa puede actuar sobre ella (como recibir la pizza y comerla), o manejar cualquier error que haya ocurrido.

Estas técnicas ayudan a que las aplicaciones web funcionen de manera fluida, sin hacer que el usuario espere innecesariamente.

!!!note "En resumen"
      Asíncrono es un estilo de trabajo, una manera de gestionar tareas. Significa que el programa puede ejecutar otras cosas sin tener que esperar a que una tarea particular termine. Es un enfoque que permite que las cosas pasen "en paralelo" o de manera independiente, sin una espera obligatoria.

      Promesa es un tipo de herramienta en JavaScript diseñada para manejar operaciones asíncronas. Una promesa representa el compromiso de que se recibirá un resultado en el futuro, permitiendo al programa reaccionar cuando este resultado esté disponible.

      💡 Las promesas son, de hecho, una forma de manejar la asincronía en JavaScript de manera organizada.

#### Ejemplo rápido 👉🏻 `async` en JavaScript 👈🏻

En JavaScript, la palabra clave `async` marca una función como **asíncrona**. Esto significa que esa función puede incluir operaciones que no necesitan completarse inmediatamente para que el resto del código siga funcionando. 

Cuando declaras una función con `async`, estás diciéndole a JavaScript que esta función puede tener tareas que "se retrasen" y que, por lo tanto, debería trabajar de manera no bloqueante. La función `async` regresa una **promesa** automáticamente. De esta manera, puedes esperar el resultado de esa función usando `await`.

### Ejemplo rápido

```javascript
async function obtenerDatos() {
  let respuesta = await fetch('https://api.example.com/datos');
  let datos = await respuesta.json();
  return datos;
}
```

Aquí:
- La función `obtenerDatos()` es asíncrona.
- Con `await`, pausamos la ejecución hasta que `fetch` termine (sin bloquear el resto del programa).
- La función devuelve una promesa que se resuelve cuando los datos están listos.

### Ejemplo `PHP` y acceso a API con `JS`

Para crear una API muy sencilla en PHP que responda con el mensaje "Hola mundo", puedes usar este código en un archivo llamado `miapi.php`. Este archivo servirá como el punto final de la API, y cada vez que lo consultes con `fetch` desde JavaScript (o cualquier otra herramienta que haga peticiones HTTP), te devolverá un texto plano con "Hola mundo".

```php
<?php
// Establecemos la cabecera para indicar que la respuesta es de tipo JSON
header('Content-Type: application/json');

// Creamos un array con el mensaje que queremos devolver
$response = [
    "mensaje" => "Hola mundo"
];

// Convertimos el array a formato JSON y lo devolvemos
echo json_encode($response);
?>
```

### Explicación del Código

1. **Cabecera JSON**: `header('Content-Type: application/json');` indica al cliente (quien haga la petición) que la respuesta es de tipo JSON.
   
2. **Respuesta**: Definimos un array con el mensaje `"Hola mundo"` para tener una estructura más clara y organizada.

3. **Conversión a JSON**: `json_encode($response);` convierte el array PHP en una cadena JSON antes de enviarla.

### Ejemplo de uso con `fetch`

```javascript
fetch('miapi.php')
  .then(response => response.json())
  .then(data => {
    console.log(data.mensaje); // Debería imprimir "Hola mundo" en la consola
  })
  .catch(error => console.error('Error:', error));
```

### Resultado

Al hacer la petición `fetch` a `miapi.php`, obtendrás el mensaje en formato JSON:

```json
{
  "mensaje": "Hola mundo"
}
```

### Ejemplo de un formulario con PHP

=== "🟢 index.html"

    ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="style.css">
        <title>Formulario con PHP 🚀</title>
    </head>
    <body>
        <form
            action="datos.php"
            method="post"
        >
            <input
                type="text"
                id="nombre"
                name="nombre"
                placeholder="Introduce tu nombre"
            >
            <input
                type="email"
                id="email"
                name="email"
                placeholder="Introduce tu correo"
            >
            <input
                type="password"
                id="password"
                name="password"
            >

            <select name="aeropuertos" id="">
                <option value="">-- Selecciona una opción</option>
                <option value="ALC">Alicante</option>
                <option value="BCN">Barcelona</option>
                <option value="MAD">Madrid</option>
            </select>

            <input type="submit" value="Enviar">

        </form>
    </body>
    </html>
    ```
=== "🔵 datos.php"

    ```php
        <?php
          $nombre = $_POST["nombre"];
          $email = $_POST["email"];
          $password = $_POST["password"];
          $aeropuertos = $_POST["aeropuertos"];

          htmlElement('p', 'Nombre: ', $nombre);
          htmlElement('p', 'E-mail: ', $email);
          htmlElement('p', 'Password: ', $password);
          htmlElement('p', 'Aeropuerto: ', $aeropuertos);

          function htmlElement($tag, $label, $cadena){
              echo '<' . $tag . '>';
              echo $label . $cadena;
              echo '</' . $tag . '>';
          }
      ?>
    ```
