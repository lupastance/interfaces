# 4️⃣ VueJS

![](assets/vuejs.png){align="right"}

**¿Qué es Vue.js?**

Vue.js es un **framework progresivo** para construir interfaces de usuario y aplicaciones web interactivas. Es especialmente popular por su **facilidad de integración** y su enfoque en ser **reactivo** y **componentizado**. Esto significa que puedes agregar Vue a una página web existente sin complicaciones o construir aplicaciones completas usando su poderoso sistema de componentes.

---

🧺 **Características clave de Vue.js:**

1. **Enlace de datos bidireccional (Two-way data binding)**:
   - Vue permite que los datos en tu modelo se sincronicen automáticamente con la vista (lo que ves en la interfaz de usuario) y viceversa. Esto se logra a través de directivas como `v-model`.
   
2. **Componentes**:
   - Vue está basado en un sistema de componentes. Un componente es una pieza reutilizable de la interfaz de usuario que tiene su propia lógica y estilo.
   - Los componentes permiten dividir la UI en partes pequeñas y fáciles de manejar, lo que mejora la mantenibilidad y la escalabilidad.

3. **Directivas**:
   - Las **directivas** son instrucciones especiales en el HTML que agregan comportamiento a los elementos del DOM. Por ejemplo, `v-if` para condiciones, `v-for` para bucles, o `v-bind` para vincular atributos.

4. **Reactividad**:
   - Vue.js observa las propiedades de los datos y actualiza la interfaz de usuario automáticamente cuando los datos cambian. No necesitas manipular manualmente el DOM cuando los datos cambian.

5. **Enrutamiento y manejo de estados**:
   - Vue también ofrece herramientas como **Vue Router** para manejar rutas y navegación, y **Vuex** para manejar el estado global de la aplicación en aplicaciones más complejas.

## 🥅 Estructura básica

Todo archivo de VueJS tiene como extensión `.vue` y su código básico está dividio en 3 bloques principales:

🟡 `script` · En este bloque ubicaremos toda la lógica, hecha con JavaScript, que usaremos en el componente.

🟢 `template` · Este bloque se encarga de formar la estructura HTML de nuestro componente.

🔵 `style` · En este último bloque escribiremos el código CSS de nuestro componente

=== "🔰App.vue"
```vue
<script>
  export default {
    data() {
        return {
          message: "¡Hola desde Vue.js!"
        };
    }
  };
</script>

<template>
  <div>
    <h1>{{ message }}</h1>
  </div>
</template>

<style scoped>
    h1 {
    color: blue;
    }
</style>
```

## 🔢 Variables

En Vue.js, las **variables** son utilizadas para almacenar datos que luego puedes mostrar en la interfaz de usuario. Estas variables se definen dentro de la opción `data` de un componente. Vue hace que estas variables sean **reactivas**, lo que significa que cuando cambian, la vista (lo que el usuario ve en el navegador) se actualiza automáticamente.

### 1. **Definiendo Variables**

Las variables en Vue se definen dentro de la función `data`, que devuelve un objeto con todas las propiedades (o variables) que quieres usar en tu componente. 

```javascript
<template>
  <div>
    <h1>{{ message }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "¡Hola Mundo!"  // Definimos una variable llamada 'message'
    };
  }
}
</script>
```

!!!warning "Explicación del código"
    - **`message`** es una variable definida dentro de `data`.
    - Esta variable contiene el valor `"¡Hola Mundo!"`.
    - En el bloque `<template>`, usamos la sintaxis `{{ message }}` para mostrar el valor de la variable en la interfaz.

### 2. **Usando las Variables en la Plantilla**

Una vez que defines una variable en `data`, puedes usarla dentro de la plantilla HTML del componente para mostrarla en la página. Vue automáticamente actualiza la vista si el valor de la variable cambia.

```javascript
<template>
  <div>
    <p>{{ message }}</p>  <!-- Mostramos el valor de 'message' en el HTML -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "¡Bienvenidos a Vue.js!"  // Definimos la variable 'message'
    };
  }
}
</script>
```

!!!tip "Explicación del código"
    - Usamos `{{ message }}` dentro de la etiqueta `<p>`. Esto hará que el valor de `message` se muestre en la página.
    - Si el valor de `message` cambia, Vue se encarga de actualizar automáticamente la interfaz sin que tengas que hacer nada más.

### 3. **Variables con Diferentes Tipos de Datos**

Las variables en Vue pueden ser de diferentes tipos de datos, como **cadenas de texto (strings)**, **números**, **booleanos (true/false)**, **listas (arrays)** y **objetos**.

```javascript
<template>
  <div>
    <p>{{ message }}</p>
    <p>{{ count }}</p>
    <p>{{ isActive }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "¡Hola desde Vue!",  // Variable de tipo string
      count: 5,                    // Variable de tipo número
      isActive: true               // Variable de tipo booleano
    };
  }
}
</script>
```
!!!error "Explicación del código"
    - `message` es una cadena de texto.
    - `count` es un número.
    - `isActive` es un valor booleano (`true` o `false`).

🔥🔥 Puedes mostrar cualquiera de estas variables en el HTML de la misma manera usando `{{ variable }}`.

## 🌀 Directivas

En Vue.js, las **directivas** son atributos especiales que se agregan a los elementos HTML para manipular el DOM (Document Object Model) de manera reactiva. Estas directivas son precedidas por el prefijo `v-`, lo que las distingue de los atributos normales.

A continuación, se mencionan algunas de las directivas más comunes en Vue.js:

!!! tip "v-bind"
    **`v-bind`** se utiliza para enlazar un atributo o una propiedad de un componente con una variable o expresión en el componente. Esto permite modificar dinámicamente los atributos HTML de un elemento.

```vue
<img v-bind:src="imageSource" />
```

!!! note "v-model"
    **`v-model`** se usa para crear un enlace bidireccional entre un campo de entrada y una variable. Esto es útil para formularios y otros elementos interactivos.

```vue
<input v-model="message" />
```

!!! warning "v-for"
    **`v-for`** se utiliza para renderizar una lista de elementos basados en una colección, como un array u objeto. Es muy útil para crear elementos dinámicos.

```vue
<ul>
    <li v-for="item in items" :key="item.id">{{ item.name }}</li>
</ul>
```

!!! info "v-if"
    **`v-if`** renderiza condicionalmente un bloque de código solo si la expresión es verdadera. Es útil para mostrar u ocultar elementos basados en ciertas condiciones.

```vue
<p v-if="isVisible">Este mensaje se muestra si esVisible es verdadero</p>
```

!!! error "v-else"
    **`v-else`** se usa junto con `v-if` para renderizar un bloque cuando la expresión de `v-if` es falsa. Es útil para crear bloques alternativos.

```vue
<p v-if="isVisible">Este mensaje es visible</p>
<p v-else>Este mensaje aparece cuando isVisible es falso</p>
```

!!! tip "v-show"
    **`v-show`** es similar a `v-if`, pero en lugar de agregar o eliminar el elemento del DOM, solo cambia su visibilidad (usando `display: none`).

```vue
<p v-show="isVisible">Este mensaje se muestra si isVisible es verdadero</p>
```

!!! warning "v-on"
    **`v-on`** se utiliza para escuchar eventos DOM y ejecutar métodos cuando esos eventos son disparados. Permite manejar interacciones del usuario.

```vue
<button v-on:click="submitForm">Enviar</button>
```

!!! info "v-slot"
    **`v-slot`** permite pasar contenido a los componentes hijo a través de slots. Facilita la creación de componentes reutilizables con contenido dinámico.

```vue
<my-component v-slot:header>
    <h1>Contenido de encabezado</h1>
</my-component>
```

!!! tip "v-cloak"
    **`v-cloak`** es utilizado para ocultar un elemento y su contenido hasta que Vue haya terminado de compilar el componente. Es útil para evitar ver el contenido sin procesar durante la carga.

```vue
<div v-cloak>
    <p>{{ message }}</p>
</div>
```

!!! warning "v-pre"
    **`v-pre`** evita que Vue compile el contenido de un elemento y sus descendientes. Esto es útil cuando sabes que no necesitas que Vue procese un bloque específico de contenido.

```vue
<div v-pre>
    {{ rawContent }}
</div>
```

!!! info "v-text"
    **`v-text`** se utiliza para actualizar el contenido de texto de un elemento, reemplazando cualquier texto dentro de él. Es útil para manipular solo el texto.

```vue
<p v-text="message"></p>
```

!!! error "v-html"
    **`v-html`** permite inyectar contenido HTML en el DOM. Esto puede ser útil, pero ten cuidado con el contenido no confiable para evitar vulnerabilidades de seguridad (como XSS).
    
```vue
<div v-html="rawHtml"></div>
```

Estas directivas permiten interactuar con el DOM y manejar datos de manera eficiente en las aplicaciones Vue.js, proporcionando funcionalidades clave como enlace de datos, control de flujo y manejo de eventos.

---

### ⚙ v-bind

La directiva `v-bind` se utiliza en Vue.js para **enlazar dinámicamente atributos** o propiedades de un elemento HTML a una **expresión de Vue** (generalmente una variable o propiedad del componente). De esta manera, puedes modificar el valor de un atributo de forma reactiva, lo que significa que si la variable asociada cambia, el atributo en el DOM también se actualizará automáticamente.

=== "Sintaxis básica"
    ```vue
    <v-bind:atributo="expresión">
    ```

!!! tip "Donde..."
    - **`atributo`** es el nombre del atributo HTML al que quieres enlazar un valor.
    - **`expresión`** es la variable o expresión de Vue que contiene el valor que se asignará al atributo.

💢 Ejemplo de uso

Imagina que tienes una propiedad `imageSource` en tu componente Vue y deseas que el atributo `src` de una etiqueta `<img>` se actualice automáticamente cuando el valor de `imageSource` cambie.

=== "Usando v-bind"
```vue
<template>
  <div>
    <!-- v-bind enlaza el atributo src con la propiedad imageSource -->
    <img v-bind:src="imageSource" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      imageSource: 'https://example.com/imagen.jpg'
    };
  }
};
</script>
```

!!! warning "En este ejemplo... 👆"
    - **`v-bind:src="imageSource"`** enlaza el atributo `src` de la etiqueta `<img>` con la propiedad `imageSource` de Vue. 
    - Si en algún momento `imageSource` cambia (por ejemplo, si se actualiza mediante una función o evento), el valor de `src` en el DOM también cambiará automáticamente.

♒ Uso de `v-bind` con múltiples atributos

Puedes usar `v-bind` para enlazar múltiples atributos a la vez, usando un objeto de JavaScript. Esto es útil cuando deseas enlazar varios atributos de un elemento dinámicamente.

=== "Multiples atributos"
```vue
<template>
  <div>
    <!-- Usando un objeto para enlazar varios atributos -->
    <button v-bind="buttonAttributes">Haz clic aquí</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      buttonAttributes: {
        type: 'button',
        class: 'btn btn-primary',
        disabled: false
      }
    };
  }
};
</script>
```

!!! note "En este caso"
    `v-bind="buttonAttributes"` pasa todos los atributos definidos en el objeto `buttonAttributes` al botón, de manera que el botón tendrá el `type`, `class` y `disabled` que están definidos en el objeto.

### ⚙ v-model

La directiva `v-model` en Vue.js se utiliza para **crear un enlace bidireccional** entre una **entrada de datos** (como un campo de texto, casillas de verificación, selectores, etc.) y una **propiedad** en el modelo de Vue. Esto significa que cualquier cambio en la entrada de datos actualiza automáticamente el modelo de Vue, y cualquier cambio en el modelo de Vue actualiza automáticamente la entrada de datos.

🔄 ¿Qué es el enlace bidireccional?

Un **enlace bidireccional** significa que el valor de la propiedad de Vue y el valor del campo de entrada están sincronizados en todo momento. Si el valor de la propiedad cambia, el campo de entrada se actualiza, y si el valor del campo de entrada cambia (por ejemplo, el usuario escribe algo), la propiedad de Vue también se actualiza.

=== "Sintaxis básica"
```vue
<input v-model="variable">
```

!!!note "Donde"
    **`variable`** es la propiedad o variable de Vue que está vinculada al campo de entrada.

💢 Ejemplo de uso

Imagina que quieres crear un campo de texto en el que el usuario pueda escribir algo, y que al mismo tiempo, el valor escrito se refleje automáticamente en la propiedad `message` de Vue.

```vue
<template>
  <div>
    <!-- El valor del input está vinculado a la propiedad message -->
    <input v-model="message" placeholder="Escribe algo...">
    <p>El mensaje es: {{ message }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: ''
    };
  }
};
</script>
```

!!!tip "En este ejemplo"
    - **`v-model="message"`** vincula el valor del campo de texto con la propiedad `message` en el modelo de Vue.
    - Si el usuario escribe algo en el campo de texto, el valor de `message` se actualiza en tiempo real, y viceversa: si cambias la propiedad `message` desde el código, el campo de texto también se actualizará automáticamente.

👨‍👩‍👧‍👦 `v-model` en diferentes tipos de elementos

Aunque en el ejemplo anterior hemos visto el uso de `v-model` en un campo de texto, también se puede usar con otros tipos de elementos HTML interactivos, como:

1. **Casillas de verificación (`checkbox`)**
   
   Para un checkbox, `v-model` se enlaza con un valor booleano (verdadero o falso).

   ```vue
   <template>
     <div>
       <input type="checkbox" v-model="isChecked">
       <p>¿Está marcado? {{ isChecked ? 'Sí' : 'No' }}</p>
     </div>
   </template>

   <script>
   export default {
     data() {
       return {
         isChecked: false
       };
     }
   };
   </script>
   ```

2. **Botones de opción (`radio`)**

   Para un grupo de botones de opción, `v-model` se enlaza con una variable cuyo valor corresponde al valor del botón seleccionado.

   ```vue
   <template>
     <div>
       <input type="radio" id="option1" value="Opción 1" v-model="selectedOption">
       <label for="option1">Opción 1</label>

       <input type="radio" id="option2" value="Opción 2" v-model="selectedOption">
       <label for="option2">Opción 2</label>

       <p>Opción seleccionada: {{ selectedOption }}</p>
     </div>
   </template>

   <script>
   export default {
     data() {
       return {
         selectedOption: 'Opción 1'
       };
     }
   };
   </script>
   ```

3. **Elementos `select` (listas desplegables)**

   Para un `select`, `v-model` se puede usar para obtener el valor de la opción seleccionada.

   ```vue
   <template>
     <div>
       <select v-model="selectedValue">
         <option disabled value="">Seleccione una opción</option>
         <option value="1">Opción 1</option>
         <option value="2">Opción 2</option>
         <option value="3">Opción 3</option>
       </select>
       <p>Opción seleccionada: {{ selectedValue }}</p>
     </div>
   </template>

   <script>
   export default {
     data() {
       return {
         selectedValue: ''
       };
     }
   };
   </script>
   ```

💦 Modificadores de `v-model`

`v-model` puede utilizar ciertos modificadores para ajustar su comportamiento. Los más comunes son:

1️⃣ **`.lazy`**: Solo actualiza la propiedad cuando el campo de texto pierde el foco (en lugar de actualizarla en cada pulsación de tecla).

   ```vue
   <input v-model.lazy="message">
   ```

2️⃣ **`.number`**: Convierte el valor de entrada en un número cuando se asigna a la propiedad.

   ```vue
   <input v-model.number="age" type="number">
   ```

3️⃣ **`.trim`**: Elimina los espacios en blanco al principio y al final del valor.

   ```vue
   <input v-model.trim="message">
   ```

!!!error "Resumen"
    - **`v-model`** crea un enlace bidireccional entre un campo de entrada y una propiedad en el modelo de Vue.
    - Puedes usarlo con elementos como `<input>`, `<checkbox>`, `<select>`, y otros campos interactivos.
    - Al cambiar el valor en el campo de entrada, la propiedad vinculada se actualiza automáticamente y viceversa.
    - Existen modificadores como `.lazy`, `.number`, y `.trim` para ajustar el comportamiento de `v-model`.

    Es una de las directivas más utilizadas para formularios y entradas de usuario, ya que facilita la reactividad y la sincronización automática de los datos en la interfaz.

### ⚙ v-if ··· v-else

Las directivas `v-if` y `v-else` en Vue.js se utilizan para **renderizar condicionalmente** un bloque de código HTML en función del valor de una expresión booleana. Son muy útiles cuando quieres mostrar u ocultar partes de tu interfaz de usuario en función de ciertas condiciones.

💫 Sintaxis básica

```vue
<div v-if="condición">Contenido visible si la condición es verdadera</div>
<div v-else>Contenido visible si la condición es falsa</div>
```

!!!warning "Donde...""
    - **`condición`** es una expresión que evalúa a `true` o `false`.
    - Si la condición es `true`, el bloque asociado a `v-if` se renderiza. Si es `false`, el bloque asociado a `v-else` se renderiza.

💢 Ejemplo de uso

Imagina que quieres mostrar un mensaje que cambie dependiendo de si el usuario ha iniciado sesión o no. Usarías `v-if` y `v-else` para manejar estas condiciones.

```vue
<template>
  <div>
    <p v-if="isLoggedIn">¡Bienvenido de nuevo!</p>
    <p v-else>Por favor, inicia sesión.</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoggedIn: false // Cambia a true para probar
    };
  }
};
</script>
```

!!!tip "En este ejemplo"
    - Si **`isLoggedIn`** es `true`, se mostrará el mensaje "¡Bienvenido de nuevo!".
    - Si **`isLoggedIn`** es `false`, se mostrará el mensaje "Por favor, inicia sesión".

🤨 ¿Cómo funcionan `v-if` y `v-else`?

- **`v-if`**: Renderiza el bloque solo si la expresión evaluada es `true`.
- **`v-else`**: Renderiza el bloque solo si la expresión de `v-if` es `false`. Es importante que el bloque de `v-else` siempre esté justo después de un bloque `v-if` o `v-else-if`.

Puedes combinar `v-if`, `v-else-if`, y `v-else` para manejar múltiples condiciones de forma más estructurada.

```vue
<template>
  <div>
    <p v-if="status === 'loading'">Cargando...</p>
    <p v-else-if="status === 'error'">Hubo un error</p>
    <p v-else>Contenido cargado correctamente</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      status: 'loading' // Cambia el valor para probar
    };
  }
};
</script>
```

!!!note "En este caso"
    - Si **`status`** es `'loading'`, se muestra "Cargando...".
    - Si **`status`** es `'error'`, se muestra "Hubo un error".
    - Si **`status`** tiene cualquier otro valor, se muestra "Contenido cargado correctamente".

👀 Consideraciones de rendimiento

- **`v-if`**: Es más costoso en términos de rendimiento si la condición cambia frecuentemente, ya que implica montar y desmontar el DOM cada vez que la condición cambia.
- **`v-show`**: Si solo necesitas ocultar y mostrar un elemento sin eliminarlo del DOM, puedes usar `v-show`, que solo cambia la propiedad `display` en CSS en lugar de montar/desmontar el elemento, siendo más eficiente en esos casos.