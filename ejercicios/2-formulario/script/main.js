console.log('Cargando el formulario 2');

const userId = "hola@gmail.com";
const userPassword = "123456";

const form1 = document.querySelector('#form-1');
const text1 = document.querySelector('#text-1');
const form2 = document.querySelector('#form-2');
const password2 = document.querySelector('#password-2');
const result = document.querySelector('#result');
const button = document.querySelector('#button');

let step = 1;

text1.focus();

button.addEventListener('click', function(){
    if(step < 3){
        step++;
    }

    switch (step) {
        case 2:
            form1.classList.add('hide');
            form2.classList.remove('hide');
            password2.focus();
            break;

        case 3:
            form2.classList.add('hide');
            result.classList.remove('hide');
            checkUser(text1.value, password2.value);
            button.innerText = 'Volver a empezar';

            button.addEventListener('click', function(){
                window.location.reload();                
            })
            
            break;
    
        default:
            break;
    }
})

function checkUser(formUser, formPassword){
    const resultText = document.querySelector('#result-text');

    if(
        formUser === userId &&
        formPassword === userPassword
    ){
        resultText.innerText = '🟢 Estás dentro!';
    } else {
        resultText.innerText = '🔴 Ojo! los datos son incorrectos';
    }
}