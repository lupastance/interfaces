# 2️⃣ Creación de Interfaces con SVG

<center style="width: 470px; float: right">
    ![SVG](assets/2-svg-bird.svg)
</center>

SVG (Scalable Vector Graphics) es un formato basado en XML utilizado para describir gráficos vectoriales bidimensionales. A diferencia de las imágenes en mapas de bits (como JPEG o PNG), que están compuestas por píxeles, los gráficos vectoriales de SVG se basan en formas geométricas como líneas, curvas, rectángulos y círculos, lo que les permite escalarse sin perder calidad.

El estándar SVG es ampliamente utilizado en el desarrollo web y es compatible con todos los navegadores modernos. Gracias a su naturaleza basada en XML, los gráficos SVG pueden ser manipulados fácilmente con JavaScript y CSS, lo que los convierte en una herramienta poderosa para crear interfaces interactivas y visualmente atractivas.

SVG es especialmente útil cuando se requiere generar gráficos dinámicos o escalables en aplicaciones web, ya que permite crear gráficos que se ven bien en cualquier resolución o tamaño de pantalla, lo que lo hace ideal para diseños responsivos.

## **2.1 Conceptos Básicos de SVG**

SVG se basa en la utilización de etiquetas XML para definir las formas que componen el gráfico. Al ser un formato basado en XML, es posible integrar SVG directamente en el código HTML de una página web, lo que permite manipular y personalizar gráficos de manera dinámica mediante CSS y JavaScript.

A continuación, se describen algunas de las características más importantes de SVG:

1. **Escalabilidad**: Al ser vectorial, un gráfico SVG puede escalarse a cualquier tamaño sin perder calidad.
2. **Manipulabilidad**: Al ser XML, se puede manipular con tecnologías web como CSS y JavaScript.
3. **Compatibilidad**: Es compatible con todos los navegadores modernos.
4. **Interactividad**: Los elementos SVG pueden tener eventos de ratón o teclado, como `onclick` o `onmouseover`.

### ***Sintaxis Básica de SVG***

El código SVG se compone de etiquetas que definen las formas gráficas, como rectángulos, círculos, líneas y polígonos. A continuación, se presenta la estructura básica de un archivo SVG:

```html
<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
  <!-- Aquí irán las formas y elementos gráficos -->
</svg>
```

El atributo `width` define el ancho del área de dibujo, y el atributo `height` define su altura. El atributo `xmlns` es el espacio de nombres de XML que siempre debe ser `http://www.w3.org/2000/svg` para los archivos SVG.

---

## **2.2 Creación de Formas Básicas en SVG**

SVG ofrece una variedad de formas geométricas básicas que se pueden utilizar para crear gráficos vectoriales. A continuación, se describen algunas de las formas más comunes y su uso con ejemplos.

### ***Rectángulos (`<rect>`)***

El rectángulo es una de las formas más simples en SVG. Se define con la etiqueta `<rect>`, y se puede especificar su posición, tamaño y esquinas redondeadas, entre otras propiedades.

**Ejemplo de un rectángulo simple:**

```html
<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="10" width="100" height="50" fill="blue" />
</svg>
```

- `x` e `y`: Establecen la posición de la esquina superior izquierda del rectángulo.
- `width` y `height`: Definen el ancho y alto del rectángulo.
- `fill`: Define el color de relleno del rectángulo.

**Rectángulo con esquinas redondeadas:**

```html
<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="10" width="100" height="50" rx="10" ry="10" fill="green" />
</svg>
```

- `rx` y `ry`: Definen el radio de las esquinas redondeadas del rectángulo.

### ***Círculos (`<circle>`)***

Para dibujar círculos en SVG, se utiliza la etiqueta `<circle>`, donde se especifica la posición del centro y el radio del círculo.

**Ejemplo de un círculo simple:**

```html
<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
  <circle cx="100" cy="100" r="50" fill="red" />
</svg>
```

- `cx` y `cy`: Definen las coordenadas del centro del círculo.
- `r`: Define el radio del círculo.
- `fill`: Especifica el color de relleno.

### ***Elipses (`<ellipse>`)***

Una elipse es similar a un círculo, pero con radios diferentes en los ejes horizontal y vertical.

**Ejemplo de una elipse:**

```html
<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
  <ellipse cx="100" cy="100" rx="50" ry="30" fill="purple" />
</svg>
```

- `rx` y `ry`: Definen los radios de la elipse en los ejes X y Y respectivamente.

### ***Líneas (`<line>`)***

Las líneas se dibujan especificando las coordenadas de los puntos de inicio y final.

**Ejemplo de una línea:**

```html
<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
  <line x1="10" y1="10" x2="190" y2="190" stroke="black" stroke-width="2" />
</svg>
```

- `x1` y `y1`: Coordenadas del punto de inicio de la línea.
- `x2` y `y2`: Coordenadas del punto final de la línea.
- `stroke`: Color del trazo.
- `stroke-width`: Ancho del trazo.

### ***Polígonos (`<polygon>`)***

Los polígonos son formas que constan de múltiples puntos conectados por líneas. Se definen con la etiqueta `<polygon>` y una lista de coordenadas para cada vértice.

**Ejemplo de un triángulo (polígono de 3 lados):**

```html
<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
  <polygon points="100,10 40,180 160,180" fill="orange" />
</svg>
```

- `points`: Una lista de coordenadas (x, y) separadas por espacios o comas que definen los vértices del polígono.

## **2.3 Manipulación de SVG con CSS**

SVG no solo permite definir gráficos mediante etiquetas XML, sino que también es posible aplicar estilos a estos gráficos utilizando **CSS**. Esto hace que SVG sea altamente personalizable y adaptable.

Es posible aplicar estilos directamente dentro de las etiquetas SVG o usando hojas de estilo externas.

**Ejemplo de aplicar CSS inline:**

```html
<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="10" width="180" height="100" style="fill: yellow; stroke: black; stroke-width: 5;" />
</svg>
```

En este ejemplo, el rectángulo tiene un color de relleno amarillo (`fill`), un borde negro (`stroke`) y un ancho de borde de 5 píxeles (`stroke-width`).

### ***Aplicar clases CSS a elementos SVG***

También es posible aplicar clases CSS a elementos SVG para mantener el código más organizado.

**Ejemplo con clases CSS:**

=== "🔵 style.css"
    ```css
    .mi-rectangulo {
        fill: lightblue;
        stroke: navy;
        stroke-width: 4px;
    }
    ```

=== "🔴 dibujo.svg"
    ```html
        <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
            <rect x="10" y="10" width="180" height="100" class="mi-rectangulo" />
        </svg>
    ```

Este enfoque permite aplicar los mismos estilos a múltiples elementos SVG sin tener que repetir código.

## **2.4. Interactividad con SVG usando JavaScript**

Una de las características más poderosas de SVG es que puede ser manipulado mediante **JavaScript**, lo que permite agregar interactividad a los gráficos.

### ***Eventos en SVG***

Los elementos SVG pueden tener eventos creando así, gráficos interactivos, como 👇🏻

    `onclick` 👉🏻 Al hacer click sobre el elemento
    `onmouseover` 👉🏻 Al pasar el ratón encima del elemento
    `onmouseout` 👉🏻 Al salir el ratón del área del elemento

**Ejemplo de interactividad**

=== "🔴 mi-circulo.svg"
    ```html
        <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
            <circle id="miCirculo" cx="100" cy="100" r="50" fill="blue" />
        </svg>
    ```

=== "🟡 circulo.js"
    ```js
        document.getElementById('miCirculo').addEventListener('click', function() {
            this.setAttribute('fill', 'green');
        });
    ```

En este ejemplo, cuando el usuario hace clic en el círculo, su color cambia de 🩵 azul a 💚 verde.

---

!!!note "Los SVG..."
    Son una herramienta poderosa y flexible para crear gráficos escalables y dinámicos en aplicaciones web. Su compatibilidad con XML, CSS y JavaScript lo hace ideal para proyectos en los que se necesita interactividad y gráficos de alta calidad. Desde la creación de formas básicas hasta la manipulación y personalización avanzada, SVG proporciona todo lo necesario para diseñar interfaces gráficas que se vean bien en cualquier pantalla.