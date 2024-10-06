# **1️⃣ Introducción al desarrollo de interfaces de usuario con HTML5, CSS y JavaScript**

<!-- #### **Duración:** 2 semanas (11 - 24 de septiembre)

#### **Objetivos:**
- Entender los conceptos básicos del desarrollo de interfaces gráficas de usuario (UI) utilizando tecnologías web: **HTML5, CSS y JavaScript**.
- Comprender cómo estructurar una página web utilizando **HTML5** y cómo darle estilo con **CSS**.
- Aprender a asociar eventos a los elementos de la interfaz mediante **JavaScript** y desarrollar una aplicación básica que integre interacción en tiempo real.
  
### **Contenidos del Tema 1:** -->

## **1.1 Introducción al desarrollo de interfaces de usuario**

Una interfaz gráfica de usuario (UI) es la capa de interacción entre el usuario y la aplicación. En este sentido, las UI web deben cumplir con los principios de usabilidad, accesibilidad y estética, ya que de ellas depende gran parte de la experiencia del usuario (UX). Este tema se centra en la construcción de UI utilizando tecnologías web que permiten a los usuarios interactuar de manera visual y dinámica con las aplicaciones.

### **Conceptos básicos de una interfaz gráfica de usuario:**

- **UI (User Interface)**: Se refiere a los componentes visuales con los que interactúa un usuario en una página web o aplicación.
- **UX (User Experience)**: Se refiere a la experiencia general que tiene un usuario al interactuar con una UI, considerando factores como facilidad de uso, satisfacción y accesibilidad.
  
### **Características de una interfaz de usuario efectiva:**

1. **Usabilidad**: La interfaz debe ser fácil de usar y aprender, minimizando la curva de aprendizaje del usuario.
2. **Accesibilidad**: La interfaz debe ser accesible para usuarios con discapacidades, respetando los estándares como WCAG (Web Content Accessibility Guidelines).
3. **Estética**: La interfaz debe ser visualmente atractiva y coherente, utilizando colores, tipografías y distribuciones que sigan patrones de diseño reconocidos.

## **1.2 HTML5 👉🏻 La estructura de las interfaces**

`HTML5` es la tecnología base utilizada para estructurar las páginas web. Define el esqueleto de la UI mediante el uso de etiquetas y atributos semánticos que facilitan la organización del contenido y su accesibilidad.

### **Estructura básica de una página HTML:**

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

### **Componentes clave de HTML5 en interfaces gráficas:**

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

## **1.3 CSS3 👉🏻 Estilo y presentación de interfaces**

**CSS3** se utiliza para controlar la apariencia de los elementos HTML, definiendo aspectos como colores, tipografía, márgenes, alineación y comportamiento visual. CSS es fundamental para hacer las interfaces atractivas y funcionales en diferentes dispositivos.

### **Reglas básicas de CSS:**

- **Selectores**: Seleccionan los elementos que se van a estilizar (por ejemplo, `p { color: blue; }`).
- **Propiedades y valores**: Definen el estilo de los elementos (por ejemplo, `color`, `background-color`, `margin`, `padding`).
  
### **Estilos comunes para interfaces:**

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

### **Diseño responsivo:**

- **Media Queries**: Permiten ajustar los estilos según el tamaño de la pantalla.
  ```css
  @media (max-width: 600px) {
    form {
      width: 100%;
    }
  }
  ```
  
### **Disposición de elementos con Flexbox y Grid**:

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

## **1.4. JavaScript 👉🏻 Comportamiento y eventos en la interfaz**

![JS](assets/1-js-logo.png){align="right"}

**JavaScript** añade interactividad a las interfaces, permitiendo que los elementos respondan a acciones del usuario, como clics, envío de formularios o cambios en los campos de texto.

### **Introducción al DOM (Document Object Model):**
- El **DOM** representa la estructura del documento HTML como un árbol de objetos manipulables por JavaScript.
- **Selección de elementos**: Se utilizan métodos como `document.getElementById()` o `document.querySelector()`.
  ```javascript
  const form = document.getElementById('contactForm');
  ```

### **Manejo de eventos en JavaScript**:
- Los eventos permiten asociar acciones a interacciones del usuario, como `click`, `input`, `submit`.
  ```javascript
  document.querySelector('button').addEventListener('click', function() {
    alert('¡Botón clicado!');
  });
  ```

### **Validación y manipulación de formularios:**
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

## **5. Desarrollo de una aplicación web básica**

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


### **Descripción del código de la aplicación:**

1. **HTML5**:
   - El formulario contiene tres campos: un campo de texto para el nombre (`<input type="text">`), un campo de correo electrónico (`<input type="email">`), y un área de texto para el mensaje (`<textarea>`).
   - El formulario está configurado para disparar una validación cuando se envíe.
   
2. **CSS (estilo básico):**
   - **Estilos básicos**: Se aplican estilos simples para darle un diseño limpio y profesional al formulario.
   - **Interactividad**: El botón de envío cambia de color al pasar el cursor por encima, lo que mejora la experiencia del usuario (UX).

3. **JavaScript**:
   - El código de JavaScript maneja la lógica de la validación del formulario, asegurándose de que los campos no estén vacíos antes de permitir el envío.
   - El método `addEventListener()` escucha el evento de "submit" en el formulario y previene que se envíe si la validación falla. En un contexto real, después de la validación, los datos se enviarían a un servidor o procesarían en el frontend.
  
### **6. Modificación del código y manipulación del DOM**

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

!!!tip "Conclusiones del Tema 1"

    En este primer tema, se ha introducido el desarrollo de interfaces de usuario utilizando tecnologías web. Los estudiantes han aprendido cómo estructurar páginas web con **HTML5**, cómo aplicar estilos y diseño utilizando **CSS**, y cómo añadir interactividad y manejo de eventos con **JavaScript**. Además, hemos trabajado con la creación de un formulario básico y la validación de datos.

    Este conocimiento básico servirá de base para los siguientes temas, donde se trabajará con herramientas más avanzadas y se construirán interfaces de usuario más complejas.