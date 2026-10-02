console.log('Hola Mundo 😊');

function byId(elemento){
    return document.getElementById(elemento);
}

const formulario = byId('formulario');
const reset = byId('reset');
const datos = byId('datos');

formulario.addEventListener('submit', function(event){
    event.preventDefault();
    
    const nombre = byId('nombre').value;
    const apellidos = byId('apellidos').value;
    const sexo = document.querySelector('input[name="sexo"]:checked').value;
    const miHtml = byId('mi-html');

    console.log(nombre);
    console.log(apellidos);
    console.log(sexo);

    datos.innerHTML = `
        <p>Nombre: ${nombre}</p>
        <p>Apellidos: ${apellidos}</p>
        <p>Sexo: ${sexo}</p>
    `;
    
    miHtml.classList.add('fondo-rojo');
});

reset.addEventListener('click', function(){
    datos.innerHTML = '';
})