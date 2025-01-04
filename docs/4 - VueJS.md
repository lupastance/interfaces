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
```html
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
!!!danger "Explicación del código"
    - `message` es una cadena de texto.
    - `count` es un número.
    - `isActive` es un valor booleano (`true` o `false`).

🔥🔥 Puedes mostrar cualquiera de estas variables en el HTML de la misma manera usando `{{ variable }}`.


## 💭 Métodos o funciones

En Vue.js, las funciones o métodos son una parte esencial del componente para manejar la lógica. Puedes definirlas dentro de la opción `methods` del componente. Estas funciones pueden realizar tareas como procesar eventos, manipular datos, o interactuar con la interfaz del usuario.

---

### **Definir y Usar Métodos**

1. **Definición**  
Los métodos se declaran dentro de la propiedad `methods` de un componente Vue.

2. **Uso en la plantilla (template)**  
Puedes llamarlos en la plantilla a través de directivas como `v-on`, o utilizarlos dentro de otras expresiones en el template.

!!!note "**Ejemplo Básico**""

```html
<template>
  <div>
    <h1>Hola, {{ nombre }}</h1>
    <button @click="saludar">Saludar</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nombre: "Mundo",
    };
  },
  methods: {
    saludar() {
      alert(`¡Hola, ${this.nombre}!`);
    },
  },
};
</script>
```

👉🏻 **Explicación del código:**

- La función `saludar` se define en `methods`.
- Al hacer clic en el botón, se ejecuta gracias a la directiva `v-on:click` (abreviada como `@click`).

### **Métodos con Argumentos**
Los métodos pueden aceptar argumentos si los pasas desde la plantilla.

```html
<template>
  <div>
    <button @click="mostrarMensaje('¡Hola!')">Mostrar Mensaje</button>
  </div>
</template>

<script>
export default {
  methods: {
    mostrarMensaje(mensaje) {
      alert(mensaje);
    },
  },
};
</script>
```

👉🏻 **Explicación:**  

- El método `mostrarMensaje` toma un argumento `mensaje` y lo muestra en una alerta.

### **Acceso a Datos y Otras Propiedades**
Los métodos pueden acceder a las propiedades definidas en `data`, `computed`, o incluso invocar otros métodos, utilizando `this`.

```html
<template>
  <div>
    <p>Contador: {{ contador }}</p>
    <button @click="incrementar">Incrementar</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contador: 0,
    };
  },
  methods: {
    incrementar() {
      this.contador++;
    },
  },
};
</script>
```

👉🏻 **Explicación:**  

- `this.contador` accede a la propiedad `contador` definida en `data` y la incrementa.

### **Métodos en Expresiones del Template**

Los métodos también se pueden usar directamente dentro de las expresiones en el template, pero esto no es una práctica recomendada porque puede afectar al rendimiento.

```html
<template>
  <div>
    <p>{{ obtenerMensaje() }}</p>
  </div>
</template>

<script>
export default {
  methods: {
    obtenerMensaje() {
      return "Hola desde un método";
    },
  },
};
</script>
```

### **Usar Métodos en Eventos de Formularios**

Los métodos son útiles para manejar eventos como `submit` en formularios.

```html
<template>
  <form @submit.prevent="procesarFormulario">
    <input v-model="nombre" placeholder="Escribe tu nombre" />
    <button type="submit">Enviar</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      nombre: "",
    };
  },
  methods: {
    procesarFormulario() {
      alert(`Formulario enviado por: ${this.nombre}`);
    },
  },
};
</script>
```

👉🏻 **Explicación:**  

- `@submit.prevent` evita que el formulario recargue la página.
- El método `procesarFormulario` muestra un mensaje con el valor de `nombre`.


### **Llamar Métodos Desde Otros Métodos**
Puedes llamar un método dentro de otro método, ideal para evitar repetir código.

```html
<template>
  <div>
    <button @click="manejarEvento">Haz clic</button>
  </div>
</template>

<script>
export default {
  methods: {
    manejarEvento() {
      this.saludar();
    },
    saludar() {
      alert("Hola desde otro método");
    },
  },
};
</script>
```

👉🏻 **Explicación:**  
- `manejarEvento` llama al método `saludar` usando `this`.


!!!warning "**Cuando Usar Métodos**"
    1. **Para manejar eventos**: Responder a clics, entradas de texto, envíos de formularios, etc.
    2. **Para procesar datos**: Realizar cálculos o manipulaciones antes de mostrarlos en la interfaz.
    3. **Para organizar lógica**: Separar tareas en funciones más pequeñas para mayor claridad.

!!!tip "**Buenas Prácticas**"
    1. **Evita lógica compleja en el template:** Usa métodos para encapsular la lógica.
    2. **Nombres descriptivos:** Dale nombres que expliquen lo que hacen, como `calcularTotal` o `validarFormulario`.
    3. **Reutilización:** Divide las funciones en métodos reutilizables siempre que sea posible.




























































## 🌀 Directivas

En Vue.js, las **directivas** son atributos especiales que se agregan a los elementos HTML para manipular el DOM (Document Object Model) de manera reactiva. Estas directivas son precedidas por el prefijo `v-`, lo que las distingue de los atributos normales.

A continuación, se mencionan algunas de las directivas más comunes en Vue.js:

!!! tip "v-bind"
    **`v-bind`** se utiliza para enlazar un atributo o una propiedad de un componente con una variable o expresión en el componente. Esto permite modificar dinámicamente los atributos HTML de un elemento.

```html
<img v-bind:src="imageSource" />
```

!!! note "v-model"
    **`v-model`** se usa para crear un enlace bidireccional entre un campo de entrada y una variable. Esto es útil para formularios y otros elementos interactivos.

```html
<input v-model="message" />
```

!!! warning "v-for"
    **`v-for`** se utiliza para renderizar una lista de elementos basados en una colección, como un array u objeto. Es muy útil para crear elementos dinámicos.

```html
<ul>
    <li v-for="item in items" :key="item.id">{{ item.name }}</li>
</ul>
```

!!! info "v-if"
    **`v-if`** renderiza condicionalmente un bloque de código solo si la expresión es verdadera. Es útil para mostrar u ocultar elementos basados en ciertas condiciones.

```html
<p v-if="isVisible">Este mensaje se muestra si esVisible es verdadero</p>
```

!!! error "v-else"
    **`v-else`** se usa junto con `v-if` para renderizar un bloque cuando la expresión de `v-if` es falsa. Es útil para crear bloques alternativos.

```html
<p v-if="isVisible">Este mensaje es visible</p>
<p v-else>Este mensaje aparece cuando isVisible es falso</p>
```

!!! tip "v-show"
    **`v-show`** es similar a `v-if`, pero en lugar de agregar o eliminar el elemento del DOM, solo cambia su visibilidad (usando `display: none`).

```html
<p v-show="isVisible">Este mensaje se muestra si isVisible es verdadero</p>
```

!!! warning "v-on"
    **`v-on`** se utiliza para escuchar eventos DOM y ejecutar métodos cuando esos eventos son disparados. Permite manejar interacciones del usuario.

```html
<button v-on:click="submitForm">Enviar</button>
```

!!! info "v-slot"
    **`v-slot`** permite pasar contenido a los componentes hijo a través de slots. Facilita la creación de componentes reutilizables con contenido dinámico.

```html
<my-component v-slot:header>
    <h1>Contenido de encabezado</h1>
</my-component>
```

!!! tip "v-cloak"
    **`v-cloak`** es utilizado para ocultar un elemento y su contenido hasta que Vue haya terminado de compilar el componente. Es útil para evitar ver el contenido sin procesar durante la carga.

```html
<div v-cloak>
    <p>{{ message }}</p>
</div>
```

!!! warning "v-pre"
    **`v-pre`** evita que Vue compile el contenido de un elemento y sus descendientes. Esto es útil cuando sabes que no necesitas que Vue procese un bloque específico de contenido.

```html
<div v-pre>
    {{ rawContent }}
</div>
```

!!! info "v-text"
    **`v-text`** se utiliza para actualizar el contenido de texto de un elemento, reemplazando cualquier texto dentro de él. Es útil para manipular solo el texto.

```html
<p v-text="message"></p>
```

!!! error "v-html"
    **`v-html`** permite inyectar contenido HTML en el DOM. Esto puede ser útil, pero ten cuidado con el contenido no confiable para evitar vulnerabilidades de seguridad (como XSS).
    
```html
<div v-html="rawHtml"></div>
```

Estas directivas permiten interactuar con el DOM y manejar datos de manera eficiente en las aplicaciones Vue.js, proporcionando funcionalidades clave como enlace de datos, control de flujo y manejo de eventos.

---

### ⚙ v-bind

La directiva `v-bind` se utiliza en Vue.js para **enlazar dinámicamente atributos** o propiedades de un elemento HTML a una **expresión de Vue** (generalmente una variable o propiedad del componente). De esta manera, puedes modificar el valor de un atributo de forma reactiva, lo que significa que si la variable asociada cambia, el atributo en el DOM también se actualizará automáticamente.

=== "Sintaxis básica"
    ```html
    <v-bind:atributo="expresión">
    ```

!!! tip "Donde..."
    - **`atributo`** es el nombre del atributo HTML al que quieres enlazar un valor.
    - **`expresión`** es la variable o expresión de Vue que contiene el valor que se asignará al atributo.

💢 Ejemplo de uso

Imagina que tienes una propiedad `imageSource` en tu componente Vue y deseas que el atributo `src` de una etiqueta `<img>` se actualice automáticamente cuando el valor de `imageSource` cambie.

=== "Usando v-bind"
```html
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
```html
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
```html
<input v-model="variable">
```

!!!note "Donde"
    **`variable`** es la propiedad o variable de Vue que está vinculada al campo de entrada.

💢 Ejemplo de uso

Imagina que quieres crear un campo de texto en el que el usuario pueda escribir algo, y que al mismo tiempo, el valor escrito se refleje automáticamente en la propiedad `message` de Vue.

```html
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

   ```html
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

   ```html
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

   ```html
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

   ```html
   <input v-model.lazy="message">
   ```

2️⃣ **`.number`**: Convierte el valor de entrada en un número cuando se asigna a la propiedad.

   ```html
   <input v-model.number="age" type="number">
   ```

3️⃣ **`.trim`**: Elimina los espacios en blanco al principio y al final del valor.

   ```html
   <input v-model.trim="message">
   ```

!!!danger "Resumen"
    - **`v-model`** crea un enlace bidireccional entre un campo de entrada y una propiedad en el modelo de Vue.
    - Puedes usarlo con elementos como `<input>`, `<checkbox>`, `<select>`, y otros campos interactivos.
    - Al cambiar el valor en el campo de entrada, la propiedad vinculada se actualiza automáticamente y viceversa.
    - Existen modificadores como `.lazy`, `.number`, y `.trim` para ajustar el comportamiento de `v-model`.

    Es una de las directivas más utilizadas para formularios y entradas de usuario, ya que facilita la reactividad y la sincronización automática de los datos en la interfaz.

### ⚙ v-if ··· v-else

Las directivas `v-if` y `v-else` en Vue.js se utilizan para **renderizar condicionalmente** un bloque de código HTML en función del valor de una expresión booleana. Son muy útiles cuando quieres mostrar u ocultar partes de tu interfaz de usuario en función de ciertas condiciones.

💫 Sintaxis básica

```html
<div v-if="condición">Contenido visible si la condición es verdadera</div>
<div v-else>Contenido visible si la condición es falsa</div>
```

!!!warning "Donde...""
    - **`condición`** es una expresión que evalúa a `true` o `false`.
    - Si la condición es `true`, el bloque asociado a `v-if` se renderiza. Si es `false`, el bloque asociado a `v-else` se renderiza.

💢 Ejemplo de uso

Imagina que quieres mostrar un mensaje que cambie dependiendo de si el usuario ha iniciado sesión o no. Usarías `v-if` y `v-else` para manejar estas condiciones.

```html
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

```html
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



### ⚙ v-for

La directiva `v-for` en Vue.js se utiliza para renderizar listas o elementos repetitivos basados en una colección de datos. Es una herramienta muy poderosa que permite iterar sobre arrays, objetos o rangos y renderizar dinámicamente elementos en la interfaz.

```html
<elemento v-for="(elemento, índice) in colección" :key="valorÚnico">
  <!-- contenido -->
</elemento>
```

1. **`elemento`**: Representa el valor actual de la iteración (el elemento del array, valor de la propiedad, etc.).
2. **`índice`** (opcional): Representa la posición actual dentro de la colección.
3. **`colección`**: Puede ser un array, un objeto o un rango de números.
4. **`:key`**: Es un atributo especial para mejorar el rendimiento, ya que ayuda a Vue a rastrear los elementos únicos en la lista.

---

📚 **Ejemplo 1: Iterar sobre un Array**

```html
<ul>
  <li v-for="(nombre, index) in nombres" :key="index">
    {{ index + 1 }}. {{ nombre }}
  </li>
</ul>

<script>
export default {
  data() {
    return {
      nombres: ["Juan", "María", "Carlos", "Ana"]
    };
  }
};
</script>
```
**Resultado Renderizado:**
```
1. Juan
2. María
3. Carlos
4. Ana
```

---

🗼 **Ejemplo 2: Iterar sobre un Objeto**

Cuando iteras sobre un objeto, puedes acceder tanto a las claves como a los valores.

```html
<ul>
  <li v-for="(valor, clave) in usuario" :key="clave">
    {{ clave }}: {{ valor }}
  </li>
</ul>

<script>
export default {
  data() {
    return {
      usuario: {
        nombre: "Juan",
        edad: 30,
        ciudad: "Madrid"
      }
    };
  }
};
</script>
```

**Resultado Renderizado:**
```
nombre: Juan  
edad: 30  
ciudad: Madrid
```

---

🔢 **Ejemplo 3: Iterar sobre un Rango de Números**

Puedes generar un rango de números directamente con la directiva `v-for`.

```html
<ul>
  <li v-for="numero in 5" :key="numero">
    Número {{ numero }}
  </li>
</ul>
```

**Resultado Renderizado:**
```
Número 1  
Número 2  
Número 3  
Número 4  
Número 5
```

---

⛓️ **Ejemplo 4: Renderizado Anidado**

La directiva `v-for` también se puede anidar para iterar sobre listas dentro de listas.

```html
<div v-for="(categoria, index) in categorias" :key="index">
  <h3>{{ categoria.nombre }}</h3>
  <ul>
    <li v-for="(producto, i) in categoria.productos" :key="i">
      {{ producto }}
    </li>
  </ul>
</div>

<script>
export default {
  data() {
    return {
      categorias: [
        {
          nombre: "Frutas",
          productos: ["Manzana", "Pera", "Plátano"]
        },
        {
          nombre: "Verduras",
          productos: ["Lechuga", "Zanahoria", "Espinaca"]
        }
      ]
    };
  }
};
</script>
```

**Resultado Renderizado:**
```
Frutas
- Manzana
- Pera
- Plátano

Verduras
- Lechuga
- Zanahoria
- Espinaca
```


!!!warning "Consejos Importantes"
    1. **`key` es esencial para el rendimiento:**
       Vue utiliza `:key` para identificar de manera única cada elemento en la lista. Si no se usa, puede haber problemas de rendimiento o errores al actualizar listas dinámicamente.

    2. **Evitar iterar sin límite:**
       Si tienes listas muy largas o iteraciones anidadas, puede afectar el rendimiento. Intenta usar paginación u otras técnicas para manejar grandes conjuntos de datos.

    3. **Usar `v-for` con `v-if`:**
       Si necesitas condicionar el renderizado dentro de un `v-for`, evita combinarlos en el mismo elemento. En lugar de eso, anida el `v-if` dentro del hijo:

       ```html
       <ul>
         <li v-for="tarea in tareas" :key="tarea.id">
           <p v-if="tarea.completada">{{ tarea.nombre }}</p>
         </li>
       </ul>
       ```

---

### ⚙ v-show

La directiva `v-show` se utiliza para mostrar u ocultar elementos HTML basándose en una condición booleana. A diferencia de `v-if`, `v-show` no elimina el elemento del DOM cuando la condición no se cumple; simplemente controla la propiedad CSS `display`.

!!!danger "Cómo funciona `v-show`"

- Si la condición es `true`, el elemento será visible.
- Si la condición es `false`, el elemento estará oculto (`display: none`).


🔡 **Sintaxis**
```html
<elemento v-show="condición">
  <!-- Contenido -->
</elemento>
```

🔍 **Ejemplo 1: Mostrar/Ocultar un Mensaje**
```html
<template>
  <div>
    <button @click="mostrar = !mostrar">
      {{ mostrar ? "Ocultar Mensaje" : "Mostrar Mensaje" }}
    </button>
    <p v-show="mostrar">¡Hola! Este es un mensaje visible.</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mostrar: true,
    };
  },
};
</script>
```

👉🏻 **Explicación:**

- Al hacer clic en el botón, la variable `mostrar` cambia entre `true` y `false`.
- Si `mostrar` es `true`, el párrafo será visible; si es `false`, estará oculto.

❌ **Diferencia entre `v-show` y `v-if`**

| **Característica**      | **v-show**                                          | **v-if**                                            |
| ----------------------- | --------------------------------------------------- | --------------------------------------------------- |
| **Renderizado inicial** | Siempre renderiza el elemento (aunque esté oculto). | Renderiza solo si la condición es `true`.           |
| **Rendimiento**         | Mejor para cambios frecuentes, ya que usa CSS.      | Mejor si el elemento se muestra/oculta pocas veces. |
| **Efecto en el DOM**    | Aplica `display: none`.                             | Añade o elimina el elemento del DOM.                |

🥷🏻 **Ejemplo 2: Ocultar un Elemento con `v-show`**

```html
<template>
  <div>
    <h1 v-show="mostrarTitulo">Este título se puede ocultar.</h1>
    <button @click="mostrarTitulo = !mostrarTitulo">
      {{ mostrarTitulo ? "Ocultar" : "Mostrar" }} Título
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mostrarTitulo: true,
    };
  },
};
</script>
```

👉🏻 **Explicación:**

- El título `<h1>` será visible solo cuando `mostrarTitulo` sea `true`. Cambiar esta variable con el botón actualiza el CSS del título (`display: none`).


### ⚙ v-on

La directiva `v-on` se utiliza para escuchar eventos del DOM y ejecutar métodos o expresiones cuando ocurren. Es una herramienta esencial en Vue.js para manejar interactividad, como responder a clics de botones, movimientos del mouse, teclas del teclado, entre otros eventos.


🔡 **Sintaxis Básica**

```html
<elemento v-on:evento="manejador"></elemento>
```

- **`evento`**: El evento DOM que deseas escuchar, como `click`, `input`, `submit`, etc.
- **`manejador`**: El método o expresión que se ejecutará cuando ocurra el evento.

👋🏻 **Shorthand**

Vue.js ofrece una versión abreviada de `v-on`:
```html
<elemento @evento="manejador"></elemento>
```

🖱️ **Ejemplo 1: Responder a un click**

```html
<template>
  <div>
    <button v-on:click="saludar">Haz clic aquí</button>
  </div>
</template>

<script>
export default {
  methods: {
    saludar() {
      alert("¡Hola! Has hecho clic en el botón.");
    },
  },
};
</script>
```

👉🏻 **Explicación:**  

- El botón escucha el evento `click`.
- Cuando se hace clic, se llama al método `saludar`, que muestra una alerta.

🗃️ **Paso de Argumentos**

Puedes pasar argumentos a los métodos utilizando paréntesis:

```html
<template>
  <div>
    <button @click="mostrarMensaje('Hola Mundo')">Mostrar Mensaje</button>
  </div>
</template>

<script>
export default {
  methods: {
    mostrarMensaje(mensaje) {
      alert(mensaje);
    },
  },
};
</script>
```

👉🏻 **Explicación:**

- Al hacer clic, el botón pasa la cadena `"Hola Mundo"` como argumento al método `mostrarMensaje`.

🫧 **Eventos con Modificadores**

Los modificadores son sufijos de la directiva que alteran su comportamiento.

1. **`stop`**: Detiene la propagación del evento.
   ```html
   <button @click.stop="detenerPropagacion">Haz clic</button>
   ```

2. **`prevent`**: Previene el comportamiento predeterminado del evento.
   ```html
   <form @submit.prevent="enviarFormulario">...</form>
   ```

3. **`once`**: Escucha el evento una sola vez.
   ```html
   <button @click.once="saludarUnaVez">Haz clic</button>
   ```

4. **`capture`**: Usa el modo de captura de eventos.
   ```html
   <div @click.capture="manejarClick">...</div>
   ```

---

🍥 **Ejemplo 2: Uso de Modificadores**

```html
<template>
  <div>
    <form @submit.prevent="procesarFormulario">
      <input type="text" v-model="nombre" placeholder="Escribe tu nombre" />
      <button type="submit">Enviar</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nombre: "",
    };
  },
  methods: {
    procesarFormulario() {
      alert(`Formulario enviado por: ${this.nombre}`);
    },
  },
};
</script>
```

**Explicación:**  
- `@submit.prevent` evita que la página se recargue al enviar el formulario.

---

🍄 **Uso de Eventos Nativos y Personalizados**

!!!note "**Eventos Nativos**"

Puedes escuchar cualquier evento nativo del DOM, como `mouseenter`, `blur`, etc.
```html
<div @mouseenter="mostrarTooltip">Pasa el mouse aquí</div>
```

!!!tip "**Eventos Personalizados**"

En componentes personalizados, puedes emitir eventos con `$emit` y escucharlos con `v-on`.

Componente hijo:
```javascript
this.$emit('mi-evento', datos);
```

Componente padre:
```html
<hijo @mi-evento="manejarEvento"></hijo>
```

---

🚩 **Ejemplo 3: Toggle de Estado**

```html
<template>
  <div>
    <p>Estado: {{ activo ? "Activo" : "Inactivo" }}</p>
    <button @click="activo = !activo">Cambiar Estado</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activo: false,
    };
  },
};
</script>
```

👉🏻 **Explicación:**

- El botón usa un evento `click` para alternar el valor booleano de `activo`.
- Esto cambia dinámicamente el texto mostrado.

---

## 📦 **Componentes**

En Vue.js, un **componente** es una unidad reutilizable e independiente de interfaz de usuario que encapsula su estructura (HTML), estilo (CSS) y comportamiento (JavaScript). Los componentes permiten dividir la interfaz de usuario en pequeñas piezas manejables y modulares, lo que facilita el desarrollo, la reutilización y el mantenimiento del código.

💢 **Por qué usar Componentes**

1. **Reutilización:** Puedes usar un mismo componente en diferentes partes de tu aplicación, reduciendo la duplicación de código.
2. **Modularidad:** Ayudan a organizar el código dividiéndolo en piezas más pequeñas y manejables.
3. **Mantenibilidad:** Los cambios en un componente afectan solo a ese componente y no al resto de la aplicación.
4. **Escalabilidad:** Facilitan el desarrollo de aplicaciones más grandes y complejas.

---

💡 **Estructura de un Componente en Vue.js**

Un componente consta de:

1. **Template:** Define el HTML del componente.
2. **Script:** Contiene la lógica del componente (datos, métodos, etc.).
3. **Style:** Define el CSS específico del componente.

```html
<template>
  <div>
    <h1>{{ titulo }}</h1>
    <p>{{ descripcion }}</p>
    <button @click="saludar">Haz clic aquí</button>
  </div>
</template>

<script>
export default {
  name: "MiComponente",
  data() {
    return {
      titulo: "Hola, soy un componente",
      descripcion: "Este es un ejemplo básico de un componente en Vue.",
    };
  },
  methods: {
    saludar() {
      alert("¡Hola desde el componente!");
    },
  },
};
</script>

<style scoped>
h1 {
  color: blue;
}
p {
  font-size: 18px;
}
</style>
```

---

🪁 **Cómo Registrar y Usar un Componente**

Un componente se registra localmente cuando se usa solo dentro de un componente específico.

```html
<template>
  <div>
    <MiComponente />
  </div>
</template>

<script>
import MiComponente from "./MiComponente.vue"; // Importamos el componente

export default {
  components: {
    MiComponente, // que no se os olvide definir el componente en vuestro script
  },
};
</script>
```

🎈 **2. Registro Global**

Un componente se registra globalmente cuando quieres que esté disponible en toda la aplicación. Esto se hace en el archivo principal (`main.js`).

```javascript
import Vue from "vue";
import MiComponente from "./components/MiComponente.vue";

Vue.component("MiComponente", MiComponente);
```

Ahora puedes usar `<MiComponente />` en cualquier lugar de tu aplicación sin necesidad de importarlo en cada componente.

---

### **Propiedades (`props`)**

Los componentes permiten **pasar datos desde el componente padre al hijo** utilizando propiedades (`props`).

=== "🔰Componente Padre"
    ```html
    <template>
      <div>
        <HijoComponente nombre="Juan" />
      </div>
    </template>

    <script>
    import HijoComponente from "./HijoComponente.vue";

    export default {
      components: {
        HijoComponente,
      },
    };
    </script>
    ```
=== "✨Componente Hijo ~ `HijoComponente.vue`"
    ```html
    <template>
      <div>
        <h2>Hola, {{ nombre }}</h2>
      </div>
    </template>

    <script>
    export default {
      props: ["nombre"], // Definimos la prop
    };
    </script>
    ```

!!!info "El hijo recibe el dato `nombre` desde el padre y lo utiliza dentro de su plantilla."

### **Eventos Personalizados**

Los componentes hijos pueden **enviar eventos al componente padre** para notificar cambios o acciones utilizando `$emit`.

=== "🔰 Componente Padre"
    ```html
    <template>
      <div>
        <Boton @eventoClic="manejarEvento" />
      </div>
    </template>

    <script>
    import Boton from "./Boton.vue";

    export default {
      components: {
        Boton,
      },
      methods: {
        manejarEvento(mensaje) {
          alert(mensaje); // Muestra "¡Botón pulsado!"
        },
      },
    };
    </script>
    ```

=== "✨ Componente Hijo (`Boton.vue`)"
    ```html
    <template>
      <button @click="enviarEvento">Haz clic</button>
    </template>

    <script>
    export default {
      methods: {
        enviarEvento() {
          this.$emit("eventoClic", "¡Botón pulsado!");
        },
      },
    };
    </script>
    ```

---

🎛 **Comunicación entre Componentes**

1. **De Padre a Hijo:** Se realiza con `props`.
2. **De Hijo a Padre:** Se realiza con eventos personalizados y `$emit`.
3. **Entre Componentes Hermanos:** Usando un patrón como un **bus de eventos** o un estado compartido.

💯 **Ejemplo Completo**

- **Componente Padre:** Gestiona un contador.
- **Componente Hijo:** Botones para incrementar o decrementar el contador.

=== "🔰Componente Padre (`App.vue`)"
    ```html
    <template>
      <div>
        <h1>Contador: {{ contador }}</h1>
        <Boton texto="Incrementar" :accion="incrementar" />
        <Boton texto="Decrementar" :accion="decrementar" />
      </div>
    </template>

    <script>
    import Boton from "./Boton.vue";

    export default {
      components: {
        Boton,
      },
      data() {
        return {
          contador: 0,
        };
      },
      methods: {
        incrementar() {
          this.contador++;
        },
        decrementar() {
          this.contador--;
        },
      },
    };
    </script>
    ```

=== "✨ Componente Hijo ~ `Boton.vue`"
    ```html
    <template>
      <button @click="accion">{{ texto }}</button>
    </template>

    <script>
    export default {
      props: ["texto", "accion"],
    };
    </script>
    ```

!!!danger "**Beneficios Clave de los Componentes**"
    1. **Reutilización:** Usas un componente en múltiples lugares con diferente configuración.
    2. **Separación de Preocupaciones:** La lógica, la estructura y el estilo están contenidos en un único archivo.
    3. **Escalabilidad:** Facilitan la construcción de aplicaciones complejas y mantenibles.

---

### **Componentes Dinámicos**

Los **componentes dinámicos** permiten renderizar diferentes componentes en una misma ubicación de forma dinámica, según ciertas condiciones. Esto es útil cuando necesitas alternar entre varios componentes en una misma área sin replicar lógica o estructura.

!!!danger "**La Directiva `is`**"

En Vue.js, se usa el atributo especial `is` en una etiqueta `<component>` para renderizar un componente dinámico.

```html
<template>
  <div>
    <h1>Componente Dinámico</h1>
    <button @click="componenteActual = 'ComponenteA'">Mostrar A</button>
    <button @click="componenteActual = 'ComponenteB'">Mostrar B</button>
    
    <component :is="componenteActual"></component>
  </div>
</template>

<script>
import ComponenteA from './ComponenteA.vue';
import ComponenteB from './ComponenteB.vue';

export default {
  components: {
    ComponenteA,
    ComponenteB,
  },
  data() {
    return {
      componenteActual: 'ComponenteA', // Componente inicial
    };
  },
};
</script>
```

💫 **Explicación**

- La etiqueta `<component>` renderiza un componente según el valor de `componenteActual`.
- Los botones permiten cambiar el valor de `componenteActual` y, por tanto, el componente que se muestra.

---

### **Componentes Anidados**

Los **componentes anidados** son aquellos que están contenidos dentro de otros componentes. Esto permite crear estructuras jerárquicas en las interfaces de usuario.

💢 **Ejemplo Básico de Componentes Anidados**

Supongamos que estamos construyendo un sistema de comentarios. Un **componente padre** mostrará una lista de comentarios, y cada **componente hijo** representará un comentario individual.

=== "✨ **Componente Hijo: `Comentario.vue`**"
    ```html
    <template>
      <div class="comentario">
        <h3>{{ autor }}</h3>
        <p>{{ mensaje }}</p>
      </div>
    </template>

    <script>
    export default {
      props: {
        autor: String,
        mensaje: String,
      },
    };
    </script>

    <style scoped>
    .comentario {
      margin-bottom: 20px;
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 5px;
    }
    </style>
    ```

=== "🔰**Componente Padre: `ListaComentarios.vue`**"
    ```html
    <template>
      <div>
        <h1>Lista de Comentarios</h1>
        <Comentario
          v-for="(comentario, index) in comentarios"
          :key="index"
          :autor="comentario.autor"
          :mensaje="comentario.mensaje"
        />
      </div>
    </template>

    <script>
    import Comentario from './Comentario.vue';

    export default {
      components: {
        Comentario,
      },
      data() {
        return {
          comentarios: [
            { autor: 'Ana', mensaje: '¡Me encanta este artículo!' },
            { autor: 'Carlos', mensaje: '¡Muy interesante!' },
            { autor: 'Luisa', mensaje: 'Gracias por compartir esta información.' },
          ],
        };
      },
    };
    </script>
    ```

🧙‍♂️ **Ejemplo Avanzado: Comunicación en Componentes Anidados**

- Un componente padre que contiene una lista de tareas.
- Cada tarea es representada por un componente hijo.
- El hijo puede emitir un evento al padre, por ejemplo, para eliminar la tarea.

=== "✨**Componente Hijo: `Tarea.vue`**"
      ```html
      <template>
        <div class="tarea">
          <p>{{ titulo }}</p>
          <button @click="$emit('eliminar')">Eliminar</button>
        </div>
      </template>

      <script>
      export default {
        props: {
          titulo: String,
        },
      };
      </script>

      <style scoped>
      .tarea {
        display: flex;
        justify-content: space-between;
        padding: 10px;
        margin-bottom: 10px;
        border: 1px solid #ddd;
        border-radius: 5px;
      }
      </style>
      ```

=== "🔰**Componente Padre: `ListaTareas.vue`**"
    ```html
    <template>
      <div>
        <h1>Mis Tareas</h1>
        <Tarea
          v-for="(tarea, index) in tareas"
          :key="index"
          :titulo="tarea"
          @eliminar="eliminarTarea(index)"
        />
      </div>
    </template>

    <script>
    import Tarea from './Tarea.vue';

    export default {
      components: {
        Tarea,
      },
      data() {
        return {
          tareas: ['Comprar pan', 'Hacer ejercicio', 'Estudiar Vue.js'],
        };
      },
      methods: {
        eliminarTarea(index) {
          this.tareas.splice(index, 1);
        },
      },
    };
    </script>
    ```

### **Componentes Anidados Dinámicos**

Se pueden combinar **componentes dinámicos** y **componentes anidados** para crear aplicaciones más complejas. Por ejemplo, un componente padre puede decidir qué tipo de componente hijo mostrar basado en los datos.

💥 **Ejemplo**, un sistema de notificaciones con diferentes tipos de notificaciones:

- **Éxito**
- **Error**
- **Advertencia**

=== "**Componente Hijo: `Notificacion.vue`**"
    ```html
    <template>
      <div :class="['notificacion', tipo]">
        <slot></slot>
      </div>
    </template>

    <script>
    export default {
      props: {
        tipo: {
          type: String,
          default: 'info',
        },
      },
    };
    </script>

    <style scoped>
    .notificacion {
      padding: 10px;
      border-radius: 5px;
      margin-bottom: 10px;
    }
    .notificacion.exito {
      background-color: #d4edda;
      color: #155724;
    }
    .notificacion.error {
      background-color: #f8d7da;
      color: #721c24;
    }
    .notificacion.advertencia {
      background-color: #fff3cd;
      color: #856404;
    }
    </style>
    ```

=== "**Componente Padre**"
    ```html
    <template>
      <div>
        <h1>Sistema de Notificaciones</h1>
        <component :is="componenteActual">
          <Notificacion tipo="exito">¡Operación exitosa!</Notificacion>
          <Notificacion tipo="error">Algo salió mal.</Notificacion>
          <Notificacion tipo="advertencia">Cuidado con este cambio.</Notificacion>
        </component>
      </div>
    </template>

    <script>
    import Notificacion from './Notificacion.vue';

    export default {
      components: {
        Notificacion,
      },
      data() {
        return {
          componenteActual: 'Notificacion',
        };
      },
    };
    </script>
    ```

---

## 🛣️ Router
![](assets/vue-router.png){align="right"}

Vue Router es una solución de enrutamiento que permite a los desarrolladores definir y gestionar las rutas (URLs) de su aplicación. Proporciona una forma declarativa de conectar rutas específicas con componentes de Vue, permitiendo que los usuarios naveguen entre diferentes vistas sin recargar la página completa.

En una SPA (Simple Page Application), todo el contenido de la aplicación se carga inicialmente, y el router se encarga de actualizar dinámicamente la vista según la URL actual, proporcionando una experiencia fluida y rápida similar a la de una aplicación nativa.

### Instalación de Vue Router

Lo primero que tenemos que hacer es *instalar el Router en nuestro proyecto* de la siguiente manera:

```bash
  npm install vue-router
```

!!!warning "Ten en cuenta que..."
    ... puedes instalar el router de manera GLOBAL para usarlo en todos los proyectos de vue que tengas en tu ordenador, para ello puedes lanza el siguiente comando:
    
    👉🏻 **npm install -g vue-router** 👈🏻
    
    y así no tendrás que instalar el router cada vez que crees un proyecto nuevo.

### Añadir el Router a un proyecto ⭕ ya existente ⭕

Cuando creamos los primeros proyectos en VueJS, elegimos ciertos paquetes de base que se iban a instalar en nuestro sistema.

A la hora de hacer **npm create vue@latest** la consola nos hacía una serie de preguntas relacionadas con las dependencias de nuestro proyecto de Vue, pero si os acrodáis, le dijimos a todo que no... en esa lista estaba incluído el Router ded Vue.

Pero no pasa nada, podemos instalar cualquier paquete después de haber creado el proyeto de Vue.

💡 Lo único que hay que tener en cuenta es, añadir ese paquete (en este caso el Router de Vue) a nuestro proyecto ya existente.

!!!warning "1. Modificamos el archivo main.js para que importe el paquete"

Debemos decirle a nuestro archivo maestro **main.js** que cargue el nuevo paquete que hemos instalado, en este caso, el Router.

```js
// Añadimos esta línea por el principio de nuestro archivo
import { createRouter, createWebHistory } from 'vue-router';
```

!!!tip "2. Importando los componentes que van a hacer de vistas en nuestro proyecto, es decir, las secciones"

```js
// Vamos a crear 3 secciones diferentes en este ejemplo

/* La sección 🏠 Home:
   que será nuestra vista principal, como si de index.html se tratase */
import Home from './components/Home.vue';

/* La sección ℹ️ About
   que nos renderizará la típica sección con información del sitio */
import About from './components/About.vue';

/* La sección 📚 Contact
   que puede mostrar un formulario de contacto */
import Contact from './components/Contact.vue';
```

!!! tip "3. Definiendo las rutas de nuestro sitio y creando el historial"

En este paso debemos decirle a nuestra aplicación dónde se encuentrar las rutas que hemos establecido más arriba y qué componente de vue está asignado a cada una de ellas.

```js
const router = createRouter ({
    // Aquí instanciamos a 🧭 createWebHistory para crear el historial navegable a través del navegador
    history: createWebHistory(),

    // Aquí definimos las rutas, con un array de objetos.
    routes: [
        // El 🛣️ path hace referencia a la url que debemos escribir en el navegador
        // El 📦 component... bueno, no creo que necesite presentación, lo hemos declarado antes 👆🏻
        { path: '/', component: Home },
        { path: '/about', component: About },
        { path: '/contact', component: Contact }
    ]
})
```

!!! tip "4. Instanciando todo"

Ahora solo queda modificar la instancia de createApp que teníamos y lo sustituimos por estas líneas:

```js
// 1. Crea la instancia de la aplicación a partir del componente raíz (App).
// 2. Registra el plugin Vue Router para gestionar las rutas de la aplicación.
// 3. Monta la aplicación en el elemento del DOM con el id "app".

createApp(App)
    .use(router)
    .mount('#app');
```

🧰 *main.js* >> Ejemplo completo

```js
import './assets/main.css'
import { createRouter, createWebHistory } from 'vue-router'
import { createApp } from 'vue'
import App from './App.vue'

import Home from './components/Home.vue';
import About from './components/About.vue';
import Contact from './components/Contact.vue';

const router = createRouter ({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Home },
        { path: '/about', component: About },
        { path: '/contact', component: Contact }
    ]
})

createApp(App)
    .use(router)
    .mount('#app');

// Otra forma de instanciarlo todo 👇🏻
    // const app = createApp(App);
    // app.use(router);
    // app.mount('#app');
```

### Utilizando el Router

Ahora que ya hemos preparado las dependencias y acuatlizado nuestro archivo 🟡 main.js 🟡 ya estamos listo para utilizarlo en nuestros archivos **.vue**

!!!note "Recomendación sobre App.vue"
    Hemos hecho uso de nuestro App.vue como archivo index.html, es decir, hemos creado la vista principal dentro de App.vue pero es recomendable crear un archivo .vue a parte donde carguemos la página principal, como por ejemplo en 🔰Home.vue🔰 o cualquier otro nombre que haga referencia a la sección principal de nuestra web

A continuación, haremos uso del componente 🟪router-view🟪 (también conocido como `<RouterView>`) que viene por defecto con el router para poder decirle a nuestro sistema que debe cargar las rutas que hemos añadido en nuestro archivo **main.js**. 

Cambiaremos las líneas de nuestro archivo `App.vue` para que quede lo más limpio posible.

```html
<!-- No necesitamos nada más -->
<template>
    <RouterView />
    <!-- <router-view></router-view> -->
    <!-- <router-view /> -->
</template>
<!-- ⛔ FIN del archivo -->
```

Ya tenemos listo nuestro enrutamiento, ahora solo falta crear los enlaces en nuestra app. Podemos hacer uso de los enlaces en cualquier componente.

Vamos a crear un archivo de vue llamado `Header.vue` donde pongamos una navegación por todos los enlaces del router que hemos creado y los distintos componentes que carguen el contenido correspondiente.

=== "🏘️ Home.vue"
    ```html
    <script>
        import Header from './Header.vue';

        export default {
            components: {
                Header
            }
        }
    </script>

    <template>
        <div>
            <Header />
            <h1>
                🏘️ Estás en Home
            </h1>
        </div>
    </template>

    <style></style>
    ```

=== "🔰 Header.vue"
    ```html
    <template>
        <nav>
            <router-link to="/">Home</router-link>
            <router-link to="/about">About</router-link>
            <router-link to="/contact">Contact</router-link>
        </nav>
    </template>
    ```
=== "ℹ️ About.vue"
    ```html
    <template>
        <h1>
            ℹ️ Estás en About
        </h1>
    </template>

    <script></script>

    <style></style>
    ```
=== "📚 Contact.vue"
    ```html
    <template>
        <h1>
            📚 Estás en Contacto
        </h1>
    </template>

    <script></script>

    <style></style>
    ```