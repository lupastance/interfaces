# **1️⃣ Introducción al desarrollo de interfaces de usuario con HTML5, CSS y JavaScript**

Una interfaz gráfica de usuario (UI) es la capa de interacción entre el usuario y la aplicación. En este sentido, las UI web deben cumplir con los principios de usabilidad, accesibilidad y estética, ya que de ellas depende gran parte de la experiencia del usuario (UX). Este tema se centra en la construcción de UI utilizando tecnologías web que permiten a los usuarios interactuar de manera visual y dinámica con las aplicaciones.

### ***Conceptos básicos de una interfaz gráfica de usuario:***

- **UI (User Interface)**: Se refiere a los componentes visuales con los que interactúa un usuario en una página web o aplicación.
- **UX (User Experience)**: Se refiere a la experiencia general que tiene un usuario al interactuar con una UI, considerando factores como facilidad de uso, satisfacción y accesibilidad.
  
### ***Características de una interfaz de usuario efectiva:***

1. **Usabilidad**: La interfaz debe ser fácil de usar y aprender, minimizando la curva de aprendizaje del usuario.
2. **Accesibilidad**: La interfaz debe ser accesible para usuarios con discapacidades, respetando los estándares como WCAG (Web Content Accessibility Guidelines).
3. **Estética**: La interfaz debe ser visualmente atractiva y coherente, utilizando colores, tipografías y distribuciones que sigan patrones de diseño reconocidos.

## **1.1 HTML5 👉🏻 La estructura de las interfaces**

`HTML5` es la tecnología base utilizada para estructurar las páginas web. Define el esqueleto de la UI mediante el uso de etiquetas y atributos semánticos que facilitan la organización del contenido y su accesibilidad.

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Aplicación Web Básica</title>
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <header>
      <h1>Mi Aplicación Web</h1>
    </header>
    <main>
      <section id="formulario">
        <h2>Formulario de Contacto</h2>
        <form id="contactForm">
          <label for="name">Nombre:</label>
          <input type="text" id="name" name="name" required>
          
          <label for="email">Email:</label>
          <input type="email" id="email" name="email" required>

          <label for="message">Mensaje:</label>
          <textarea id="message" name="message" required></textarea>

          <button type="submit">Enviar</button>
        </form>
      </section>
    </main>
    <footer>
      <p>&copy; 2024 Mi Aplicación</p>
    </footer>
    <script src="app.js"></script>
  </body>
</html>
```

### ***Componentes clave de HTML5 en interfaces gráficas:***

1. **Etiquetas semánticas**:
      - `<header>`, `<footer>`, `<section>`, `<article>`: Estructuran el contenido de forma semántica, facilitando la comprensión del contenido tanto para usuarios como para motores de búsqueda.
     
      - **Inputs y controles de formularios**: Elementos como `<input>`, `<textarea>`, `<select>` son esenciales en la captura de datos del usuario.

2. **Atributos de accesibilidad**:
      - **`for` y `id`**: En etiquetas `<label>`, se usan para mejorar la accesibilidad, vinculando etiquetas con campos de formulario.
      - **Atributos obligatorios**: `required`, `placeholder`, y `aria-*` para ayudar a la accesibilidad y usabilidad.

3. **Formularios en HTML5**:
      - HTML5 permite la creación de formularios con validación básica integrada a través de atributos como `required`, `pattern`, y tipos de datos como `email`, `tel`, y `url`.
      - Ejemplo de un formulario básico:
      ```html
        <form action="/submit" method="POST">
            <label for="name">Nombre:</label>
            <input type="text" id="name" name="name" required>
            <button type="submit">Enviar</button>
        </form>
      ```

## **1.2 CSS3 👉🏻 Estilo y presentación de interfaces**

**CSS3** se utiliza para controlar la apariencia de los elementos HTML, definiendo aspectos como colores, tipografía, márgenes, alineación y comportamiento visual. CSS es fundamental para hacer las interfaces atractivas y funcionales en diferentes dispositivos.

### ***Reglas básicas de CSS***

- **Selectores**: Seleccionan los elementos que se van a estilizar (por ejemplo, `p { color: blue; }`).
- **Propiedades y valores**: Definen el estilo de los elementos (por ejemplo, `color`, `background-color`, `margin`, `padding`).
  
### ***Estilos comunes para interfaces***

```css
body {
  font-family: Arial, sans-serif;
  background-color: #f0f0f0;
  margin: 0;
  padding: 20px;
}
h1, h2 {
  color: #333;
}
form {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
input, textarea {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
}
button {
  background-color: #28a745;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
```

### ***Diseño responsivo***

- **Media Queries**: Permiten ajustar los estilos según el tamaño de la pantalla.
  ```css
  @media (max-width: 600px) {
    form {
      width: 100%;
    }
  }
  ```
  
### ***Disposición de elementos con Flexbox y Grid***

- **Flexbox**: Se usa para organizar elementos en una fila o columna flexible.
  ```css
  .container {
    display: flex;
    justify-content: space-between;
  }
  ```
- **Grid**: Se usa para crear disposiciones más complejas.
  ```css
  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  ```

## **1.3. JavaScript 👉🏻 Comportamiento y eventos en la interfaz**

![JS](assets/1-js-logo.png){align="right"}

**JavaScript** añade interactividad a las interfaces, permitiendo que los elementos respondan a acciones del usuario, como clics, envío de formularios o cambios en los campos de texto.

### ***Introducción al DOM (Document Object Model)***
- El **DOM** representa la estructura del documento HTML como un árbol de objetos manipulables por JavaScript.
- **Selección de elementos**: Se utilizan métodos como `document.getElementById()` o `document.querySelector()`.
  ```javascript
  const form = document.getElementById('contactForm');
  ```

### ***Manejo de eventos en JavaScript***
- Los eventos permiten asociar acciones a interacciones del usuario, como `click`, `input`, `submit`.
  ```javascript
  document.querySelector('button').addEventListener('click', function() {
    alert('¡Botón clicado!');
  });
  ```

### ***Validación y manipulación de formularios***
- Validar datos de formulario antes de su envío:
  ```javascript
  form.addEventListener('submit', function(event) {
    const name = document.getElementById('name').value;
    if (name === '') {
      alert('Por favor, ingrese su nombre');
      event.preventDefault();
    }
  });
  ```

## **1.4 Desarrollo de una aplicación web básica**

1. Crear un formulario de contacto que incluya los campos de nombre, correo electrónico y mensaje.
2. Validar los campos con JavaScript para asegurarse de que el usuario completa correctamente el formulario.
3. Mostrar un mensaje de éxito o error dependiendo de si la validación es correcta o no.

=== "🟢 index.html"

    ```html
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Aplicación de Contacto</title>
        <script src="script.js"></script><!-- 🟡 -->
        <link rel="stylesheet" href="styles.css"><!-- 🔵 -->


    </head>
    <body>
        <form id="contactForm">
            <label for="name">
                Nombre:
            </label>

            <input
                id="name"
                type="text"
                placeholder="Nombre"
                required
            >
            <label for="email">
                Correo electrónico:
            </label>

            <input
                id="email"
                type="email"
                placeholder="e-mail"
                required
            >

            <label for="message">
                Mensaje:
            </label>

            <textarea
                id="message"
                placeholder="Todo este espacio es para ti"
                required
            ></textarea>

            <button type="submit">
                Enviar
            </button>
        </form>
    </body>
    </html>
    ```
=== "🟡 script.js"

    ```js
        // Seleccionar el formulario
        const form = document.getElementById('contactForm');

        // Agregar un listener para el evento de envío
        form.addEventListener('submit', function(event) {
            // Prevenir el comportamiento predeterminado del formulario
            event.preventDefault();

            // Obtener los valores de los campos
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // Validar que los campos no estén vacíos
            if (name === '' || email === '' || message === '') {
            alert('Por favor, complete todos los campos');
            } else {
            alert('Formulario enviado exitosamente');
            // Aquí es donde normalmente se enviaría el formulario al servidor
            }
        });
    ```

=== "🔵 style.css"
    ``` css
        body {
            font-family: Arial, sans-serif;
            background-color: #f7f7f7;
            margin: 0;
            padding: 50px;
        }
        form {
            background-color: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
        }

        label {
            display: block;
            margin-bottom: 8px;
            font-weight: bold;
        }

        input, textarea {
            width: 100%;
            padding: 10px;
            margin-bottom: 20px;
            border: 1px solid #ccc;
            border-radius: 4px;
        }

        button {
            background-color: #28a745;
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }

            button:hover {
                background-color: #218838;
            }
    ```


### ***Descripción del código de la aplicación***

1. **HTML5**:
   - El formulario contiene tres campos: un campo de texto para el nombre (`<input type="text">`), un campo de correo electrónico (`<input type="email">`), y un área de texto para el mensaje (`<textarea>`).
   - El formulario está configurado para disparar una validación cuando se envíe.
   
2. **CSS (estilo básico):**
   - **Estilos básicos**: Se aplican estilos simples para darle un diseño limpio y profesional al formulario.
   - **Interactividad**: El botón de envío cambia de color al pasar el cursor por encima, lo que mejora la experiencia del usuario (UX).

3. **JavaScript**:
   - El código de JavaScript maneja la lógica de la validación del formulario, asegurándose de que los campos no estén vacíos antes de permitir el envío.
   - El método `addEventListener()` escucha el evento de "submit" en el formulario y previene que se envíe si la validación falla. En un contexto real, después de la validación, los datos se enviarían a un servidor o procesarían en el frontend.
  
## ***1.5 Modificación del código y manipulación del DOM***

Una parte importante del desarrollo de interfaces con **HTML5, CSS y JavaScript** es aprender cómo modificar la estructura de la página y su comportamiento dinámicamente.

- **Modificación dinámica de elementos**: Con **JavaScript**, podemos modificar los elementos HTML y sus propiedades. Esto incluye cambiar textos, estilos o agregar nuevos elementos al DOM.
  
   Ejemplo:
   ```javascript
   const header = document.querySelector('h1');
   header.textContent = 'Nuevo Título de la Aplicación';
   header.style.color = 'blue';
   ```

   En este caso, cambiamos el contenido de la etiqueta `<h1>` y le asignamos un nuevo color con JavaScript.

- **Interacción basada en eventos**: Los eventos en **JavaScript** permiten que los elementos reaccionen a las acciones del usuario. El uso de eventos como `click`, `focus`, `input`, y `submit` es esencial para crear interfaces interactivas.


### **Herramientas para manipular el DOM**

En JavaScript, al manipular el DOM (Document Object Model), es común interactuar con el contenido de los elementos HTML. Existen varias formas de hacerlo, y entre las más usadas están las propiedades `innerHTML`, `innerText`, y el método `append`. Cada una tiene características únicas y es importante entender cómo y cuándo usarlas de manera efectiva.

A continuación, exploraremos cada una de estas propiedades y métodos, explicando su uso con ejemplos claros y detallados.

### **`innerHTML`**

`innerHTML` es una propiedad que permite acceder o modificar el **contenido HTML** de un elemento. Esto incluye tanto el texto como las etiquetas HTML. Al utilizar `innerHTML`, puedes reemplazar todo el contenido interno del elemento por otro, incluyendo etiquetas HTML, lo que hace que sea una herramienta muy poderosa para insertar o cambiar estructuras HTML completas.

**Uso de `innerHTML`**

- **Lectura del contenido HTML:** Puedes acceder al contenido HTML de un elemento.
- **Escritura de contenido HTML:** Puedes reemplazar o cambiar el contenido HTML de un elemento.

**Ejemplo básico:**

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ejemplo de innerHTML</title>
</head>
<body>
  <div id="miDiv">
    <p>Este es un <strong>parrafo</strong> dentro de un div.</p>
  </div>
  
  <button onclick="cambiarContenido()">Cambiar Contenido</button>
  
  <script>
    function cambiarContenido() {
      document.getElementById('miDiv').innerHTML = '<h1>Contenido cambiado</h1><p>Este es el nuevo contenido con etiquetas HTML</p>';
    }
  </script>
</body>
</html>
```

- **Explicación**: En este ejemplo, el contenido original del `div` es un párrafo. Al hacer clic en el botón, se cambia el contenido usando `innerHTML`, lo que inserta un nuevo `h1` y un nuevo párrafo con HTML embebido.

**Consideraciones de seguridad con `innerHTML`**

Uno de los riesgos de `innerHTML` es que puede ser una fuente de vulnerabilidades de **XSS (Cross-Site Scripting)** si no se controla el contenido que se inserta. Si los datos que introduces provienen de usuarios, debes asegurarte de que estén adecuadamente filtrados o escapados.

### **`innerText`**

`innerText` es una propiedad que permite acceder o modificar el **texto visible** de un elemento, **sin incluir etiquetas HTML**. A diferencia de `innerHTML`, `innerText` se enfoca solo en el texto, ignorando cualquier estructura HTML interna que pueda tener el elemento.

**Uso de `innerText`**

- **Lectura del texto visible**: Puedes obtener el texto que es visible para el usuario (sin las etiquetas HTML).
- **Escritura de texto**: Puedes reemplazar el texto visible de un elemento. Cualquier HTML que insertes será tratado como texto plano.

**Ejemplo básico:**

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ejemplo de innerText</title>
</head>
<body>
  <div id="miTexto">
    <p>Este es un <strong>texto en negrita</strong> que contiene etiquetas HTML.</p>
  </div>

  <button onclick="cambiarTexto()">Cambiar Texto</button>

  <script>
    function cambiarTexto() {
      document.getElementById('miTexto').innerText = 'Este es un texto simple, sin HTML.';
    }
  </script>
</body>
</html>
```

- **Explicación**: El contenido original del `div` incluye un párrafo con una etiqueta `<strong>`. Sin embargo, al hacer clic en el botón, se reemplaza con texto plano que no incluye ninguna etiqueta HTML. Cualquier intento de insertar HTML será tratado como texto normal.

### **`append`**

`append` es un método que permite **agregar nodos o texto** al final del contenido de un elemento. A diferencia de `innerHTML` o `innerText`, `append` no reemplaza el contenido existente, sino que lo añade al final. Además, `append` permite insertar tanto texto como nodos DOM (elementos HTML).

**Uso de `append`**

- **Agregar nodos o texto** al final del contenido de un elemento.
- No reemplaza el contenido existente, solo añade nuevos elementos.

**Ejemplo básico:**

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ejemplo de append</title>
</head>
<body>
  <div id="contenedor">
    <p>Primer párrafo en el contenedor.</p>
  </div>

  <button onclick="agregarElemento()">Agregar Elemento</button>

  <script>
    function agregarElemento() {
      const nuevoParrafo = document.createElement('p');
      nuevoParrafo.innerText = 'Este es un nuevo párrafo añadido al final.';
      
      document.getElementById('contenedor').append(nuevoParrafo);
    }
  </script>
</body>
</html>
```

- **Explicación**: El contenido inicial del `div` es un párrafo. Al hacer clic en el botón, se crea un nuevo párrafo mediante `createElement` y luego se añade al final del contenedor usando `append`. Como resultado, se añade contenido nuevo sin borrar el existente.

**Agregar texto directamente con `append`**

También puedes añadir texto directamente sin necesidad de crear un nuevo nodo:

```javascript
document.getElementById('contenedor').append('Texto adicional');
```

Esto agregaría el texto "Texto adicional" al final del contenedor.

**Comparación entre `innerHTML`, `innerText` y `append`**

| Característica             | `innerHTML`                               | `innerText`                          | `append`                                    |
| -------------------------- | ----------------------------------------- | ------------------------------------ | ------------------------------------------- |
| **Inserta etiquetas HTML** | Sí                                        | No                                   | Sí (si se utiliza `createElement`)          |
| **Manipulación del DOM**   | Reemplaza todo el contenido del elemento  | Reemplaza solo el texto visible      | Añade nuevos nodos o texto                  |
| **Seguridad (XSS)**        | Vulnerable si se usa con datos no seguros | No permite insertar HTML, más seguro | Seguro si se usan nodos creados manualmente |
| **Aplicaciones comunes**   | Insertar HTML dinámicamente               | Reemplazar o leer texto plano        | Añadir más contenido sin borrar el actual   |


### **`appendChild`**

`appendChild` es un método en JavaScript utilizado para agregar un **nodo hijo** al final de la lista de hijos de un nodo padre. A diferencia de `append`, que puede agregar tanto nodos como texto, `appendChild` **solo** puede añadir nodos del DOM, como elementos HTML (tags), fragmentos de documentos, o incluso otros nodos de texto. Este método es muy útil cuando quieres construir o modificar dinámicamente la estructura de una página web agregando nuevos elementos.

**Sintaxis básica**

```javascript
const contenedor = document.querySelector('#mi-contenedor');
const elementoHijo = document.createElement('p');

elementoHijo.innerText = 'Este es el elemento hijo';

contenedor.appendChild(elementoHijo);
```

- **contenedor**: El nodo padre donde se va a insertar el nuevo nodo.
- **childNode**: El nodo hijo que se va a agregar al nodo padre.

El nodo hijo será agregado **al final** de los nodos hijos ya existentes dentro del nodo padre.

=== "Antes de ejecutar JavaScript"

    ```html
    <div id="mi-contenedor"></div>
    ```

=== "Después de ejecutar JavaScript"

    ```html
    <div id="mi-contenedor">
        <p>Este es el elemento hijo</p>
    </div>
    ```

**Ejemplo básico: Agregar un nuevo elemento al final**

Vamos a crear un nuevo elemento `<li>` y agregarlo a una lista `<ul>` ya existente en la página:

**HTML inicial:**

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ejemplo de appendChild</title>
</head>
<body>
  <ul id="miLista">
    <li>Elemento 1</li>
    <li>Elemento 2</li>
  </ul>

  <button onclick="agregarElemento()">Agregar Elemento</button>

  <script>
    function agregarElemento() {
      // 1. Crear un nuevo elemento li
      const nuevoElemento = document.createElement('li');
      
      // 2. Agregar texto al nuevo elemento
      nuevoElemento.innerText = 'Elemento 3';
      
      // 3. Añadir el nuevo elemento como hijo de la lista
      document.getElementById('miLista').appendChild(nuevoElemento);
    }
  </script>
</body>
</html>
```

**Explicación del código:**

1. **Crear un nuevo elemento**: Usamos `document.createElement('li')` para crear un nuevo nodo de lista `<li>`.
2. **Añadir contenido al nuevo elemento**: Utilizamos `innerText` para insertar el texto "Elemento 3" dentro del nuevo nodo `<li>`.
3. **Agregar el nuevo elemento al DOM**: El método `appendChild` agrega el nuevo elemento `<li>` al final de la lista no ordenada `<ul>`.

Cuando el usuario haga clic en el botón, se agregará el nuevo elemento al final de la lista.

**Agregar múltiples nodos**

`appendChild` solo puede agregar un nodo a la vez. Si deseas agregar varios nodos, deberás llamarlo varias veces o usar un **fragmento de documento** para mejorar la eficiencia:

**Ejemplo: Agregar varios nodos con un `DocumentFragment`**

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ejemplo de appendChild con Fragmento</title>
</head>
<body>
  <ul id="miLista">
    <li>Elemento 1</li>
    <li>Elemento 2</li>
  </ul>

  <button onclick="agregarVariosElementos()">Agregar Varios Elementos</button>

  <script>
    function agregarVariosElementos() {
      // Crear un fragmento de documento para contener los nuevos elementos
      const fragmento = document.createDocumentFragment();
      
      // Crear 3 nuevos elementos li
      for (let i = 3; i <= 5; i++) {
        const nuevoElemento = document.createElement('li');
        nuevoElemento.innerText = 'Elemento ' + i;
        fragmento.appendChild(nuevoElemento);
      }
      
      // Añadir el fragmento al DOM
      document.getElementById('miLista').appendChild(fragmento);
    }
  </script>
</body>
</html>
```

**Explicación:**

1. Se crea un **fragmento de documento** (`DocumentFragment`), que es un contenedor temporal en memoria.
2. Se añaden varios elementos `<li>` al fragmento.
3. Finalmente, se inserta el fragmento completo en el DOM con un solo `appendChild`. Esto es más eficiente que llamar `appendChild` varias veces porque las modificaciones del DOM se hacen una sola vez.

---

**Mover un nodo con `appendChild`**

Una característica interesante de `appendChild` es que **si el nodo ya existe en el DOM**, no lo duplicará, sino que lo **moverá** a la nueva posición.

**Ejemplo: Mover un nodo existente**

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ejemplo de mover un nodo con appendChild</title>
</head>
<body>
  <div id="contenedor1">
    <p id="miParrafo">Este párrafo será movido.</p>
  </div>
  <div id="contenedor2">
    <!-- Contenedor vacío -->
  </div>

  <button onclick="moverParrafo()">Mover Párrafo</button>

  <script>
    function moverParrafo() {
      const parrafo = document.getElementById('miParrafo');
      const nuevoContenedor = document.getElementById('contenedor2');
      nuevoContenedor.appendChild(parrafo); // Moverá el párrafo al nuevo contenedor
    }
  </script>
</body>
</html>
```

**Explicación:**

Cuando el botón es presionado, el párrafo `#miParrafo` se quita del `#contenedor1` y movido al `#contenedor2` usando `appendChild`. No se duplica, simplemente se cambia de lugar.

**Diferencias entre `append` y `appendChild`**

- **Compatibilidad de tipos**: `append` permite insertar tanto nodos como cadenas de texto directamente, mientras que `appendChild` solo permite nodos.
  
  Ejemplo de `append` (inserta nodos y texto):

  ```javascript
  parentNode.append('Texto', document.createElement('div'));
  ```

- **Retorno**: `appendChild` retorna el nodo insertado, mientras que `append` no retorna nada (`undefined`).

- **Compatibilidad de navegadores**: `append` es más moderno, mientras que `appendChild` está disponible en navegadores más antiguos.


## **1.6 Manipulando el CSS**

En JavaScript, la manipulación de clases de elementos HTML es una parte esencial del desarrollo web, ya que te permite cambiar la apariencia y el comportamiento de los elementos dinámicamente. Para facilitar esta tarea, se pueden usar los métodos **`addClass`**, **`removeClass`**, **`toggleClass`** y **`style`**

### **`addClass`**
El método `addClass` se utiliza para **agregar una clase** a un elemento, añadiendo una nueva clase al atributo `class` sin eliminar las clases ya existentes.

**Método equivalente en JavaScript nativo:**
```javascript
element.classList.add('className');
```

**Ejemplo de uso:**
Imagina que tienes un botón y deseas cambiar su estilo al hacer clic, agregando la clase `active` que le aplica un nuevo estilo.

=== "🟢 HTML"
    ```html
        <button id="miBoton">Haz clic en mí</button>
    ```

=== "🟡 JavaScript"

    ```javascript
        document.getElementById('miBoton').addEventListener('click', function() {
            this.classList.add('active');
        });
    ```

=== "🔵 CSS"

    ```css
        .active {
            background-color: green;
            color: white;
        }
    ```


Cuando el botón es clicado, se le añadirá la clase `active`, cambiando el color de fondo y el color del texto.

### **`removeClass`**
El método `removeClass` se usa para **eliminar una clase** de un elemento. Si el elemento no tiene la clase especificada, no ocurre nada.

**Método equivalente en JavaScript nativo:**
```javascript
element.classList.remove('className');
```

**Ejemplo de uso:**
Supongamos que, tras hacer clic en un botón, queremos eliminar la clase `active` de ese elemento.

```javascript
document.getElementById('miBoton').addEventListener('click', function() {
  this.classList.remove('active');
});
```

### **`toggleClass`**

El método `toggleClass` permite **alternar** una clase en un elemento. Si el elemento ya tiene la clase, la elimina; si no la tiene, la agrega. Este método es muy útil cuando quieres cambiar el estado de un elemento al hacer clic, como en el caso de botones que activan o desactivan un estado.

**Método equivalente en JavaScript nativo:**
```javascript
    element.classList.toggle('className');
```

**Ejemplo de uso:**
Vamos a crear un botón que pueda activar y desactivar la clase `active` cada vez que se hace clic sobre él.

```javascript
document.getElementById('miBoton').addEventListener('click', function() {
  this.classList.toggle('active');
});
```

Al hacer clic en el botón:
- Si la clase `active` está presente, será eliminada.
- Si la clase `active` no está presente, será añadida.

Esto se puede usar para efectos como mostrar y ocultar un menú, cambiar el estado de un botón, entre otros.

**Ejemplo completo: `addClass`, `removeClass` y `toggleClass`**

=== "🟢 HTML"
    ```html
        <button id="addClassBtn">Agregar Clase</button>
        <button id="removeClassBtn">Remover Clase</button>
        <button id="toggleClassBtn">Alternar Clase</button>

        <div id="miElemento">Elemento de prueba</div>
    ```

=== "🟡 JavaScript"
    ```javascript
        // Referencia al elemento
        const miElemento = document.getElementById('miElemento');

        // Agregar la clase "active"
        document.getElementById('addClassBtn').addEventListener('click', function() {
            miElemento.classList.add('active');
        });

        // Eliminar la clase "active"
        document.getElementById('removeClassBtn').addEventListener('click', function() {
            miElemento.classList.remove('active');
        });

        // Alternar la clase "active"
        document.getElementById('toggleClassBtn').addEventListener('click', function() {
            miElemento.classList.toggle('active');
        });
    ```

=== "🔵 CSS"
    ```css
        .active {
            background-color: lightblue;
            padding: 10px;
            border: 2px solid blue;
        }
    ```


**Explicación:**
- El botón "Agregar Clase" agrega la clase `active` al elemento.
- El botón "Remover Clase" elimina la clase `active` si está presente.
- El botón "Alternar Clase" agrega o elimina la clase dependiendo de si ya está aplicada.


### **`style`**

El uso de la propiedad **`style`** en JavaScript permite modificar directamente los estilos CSS de un elemento HTML desde el código. La propiedad `style` proporciona acceso a los atributos de estilo "en línea" (inline styles), lo que significa que modifica el atributo `style` del elemento en el DOM, aplicando estilos de manera directa y dinámica.

**Modificar Estilos con la Propiedad `style`**
La propiedad `style` es un objeto que contiene todas las propiedades CSS disponibles para un elemento. Las propiedades CSS que normalmente tienen guiones (como `background-color`) se transforman en **camelCase** (por ejemplo, `backgroundColor`) para ser utilizadas en JavaScript.

**Sintaxis básica:**

```javascript
    element.style.property = "value";
```

Por ejemplo, si quieres cambiar el color de fondo de un elemento:

```javascript
    document.getElementById("miElemento").style.backgroundColor = "yellow";
```

**Ejemplo básico:**
```html
    <div id="miDiv" style="width: 100px; height: 100px; background-color: lightblue;">Div de prueba</div>
    <button id="boton">Cambiar color</button>

    <script>
    document.getElementById('boton').addEventListener('click', function() {
        document.getElementById('miDiv').style.backgroundColor = 'red';
    });
    </script>
```

En este caso, al hacer clic en el botón, el fondo del `div` cambiará de azul claro a rojo.

**Propiedades CSS en JavaScript**

A diferencia de CSS, donde se utilizan guiones para separar palabras, en JavaScript las propiedades CSS siguen una convención de camelCase. Aquí tienes algunos ejemplos de cómo se traducen las propiedades CSS a JavaScript:

| **Propiedad CSS**  | **Propiedad en JavaScript** |
| ------------------ | --------------------------- |
| `background-color` | `backgroundColor`           |
| `font-size`        | `fontSize`                  |
| `margin-top`       | `marginTop`                 |
| `border-radius`    | `borderRadius`              |
| `text-align`       | `textAlign`                 |

**Acceder a múltiples estilos**
Puedes modificar varias propiedades de estilo usando el objeto `style`. Simplemente accedes a cada propiedad y le asignas un valor.

**Ejemplo de múltiples cambios de estilo:**

```javascript
    const miElemento = document.getElementById('miDiv');
    miElemento.style.width = '200px';
    miElemento.style.height = '200px';
    miElemento.style.border = '2px solid black';
    miElemento.style.backgroundColor = 'lightgreen';
```

**Resetear estilos**
Cuando modificas los estilos de un elemento utilizando `style`, solo cambias los estilos en línea (inline). Los estilos definidos en hojas de estilo externas o internas no se tocan, lo cual es útil. Si deseas **eliminar** un estilo que fue añadido mediante JavaScript, puedes asignarle una cadena vacía (`""`):

 **Ejemplo:**
```javascript
    miElemento.style.backgroundColor = "";  // Elimina el estilo de fondo en línea
```


**Alternativas al uso directo de `style`**

Aunque la propiedad `style` es útil, **modificar estilos en línea** puede ser problemático en aplicaciones grandes, ya que dificulta la separación entre la estructura del contenido (HTML) y la presentación (CSS). Como alternativa, generalmente es más recomendable cambiar clases de CSS, y dejar que las hojas de estilo se encarguen de los detalles del diseño.

Por ejemplo, en lugar de modificar directamente un estilo en línea:

```javascript
    miElemento.style.backgroundColor = "yellow";
```

Es preferible cambiar la clase:

```javascript
    miElemento.classList.add("nuevoEstilo");
```

Con un CSS como este:

```css
.nuevoEstilo {
  background-color: yellow;
}
```

Esto hace que el código sea más mantenible y fácil de gestionar, especialmente en proyectos más grandes.

**Ejemplo completo: Cambiar estilos con `style` y `classList`**

=== "🟢 HTML"
    ```html
    <div id="miDiv" style="width: 150px; height: 150px; background-color: lightgray;">Cuadro</div>
    <button id="styleBtn">Cambiar Estilo (style)</button>
    <button id="classBtn">Cambiar Estilo (class)</button>

    <style>
    .nuevoEstilo {
        background-color: blue;
        border-radius: 10px;
        color: white;
    }
    </style>

    <script>
    // Cambiar estilos en línea con 'style'
    document.getElementById('styleBtn').addEventListener('click', function() {
        const div = document.getElementById('miDiv');
        div.style.backgroundColor = 'green';
        div.style.width = '300px';
        div.style.height = '300px';
        div.style.color = 'white';
    });

    // Cambiar estilos con 'classList'
    document.getElementById('classBtn').addEventListener('click', function() {
        document.getElementById('miDiv').classList.toggle('nuevoEstilo');
    });
    </script>
    ```

**Explicación:**

1. El botón "Cambiar Estilo (style)" modifica directamente los estilos en línea (ancho, alto, color de fondo y color de texto) del `div` al hacer clic.
2. El botón "Cambiar Estilo (class)" alterna la clase `nuevoEstilo`, que aplica un nuevo estilo CSS predefinido (fondo azul, bordes redondeados y texto blanco).

### **Conclusión**
La propiedad `style` es una forma rápida y directa de modificar los estilos de los elementos HTML desde JavaScript, aunque para mantener una buena separación entre contenido y presentación, es más recomendable manipular clases con `classList`. El uso de `style` es muy útil para cambios de estilo dinámicos y específicos, mientras que `classList` es más flexible y escalable en proyectos más grandes.

!!!warning "Cuidado con esto"
    Que no se te olvide el orden de preferencia de los estilos CSS 👉🏻 las clases `.mi-clase` tienen menos peso que los identificadores `#mi-identificador` que a su vez, tienen menos relevancia que los estilos definidos en línea `style=""` y en primer lugar, está el `!important`.