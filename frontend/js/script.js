// aqui estou pegando os elementos e atribuinndo eles a uma variavel
//quando faço isso estou pegando todo aquele elemento, suas classes seu id sua tag tudo 

const form = document.querySelector('.form')
const userName = document.querySelector('#userName')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const passwordConfirm = document.querySelector('#passwordConfirm')

// esse é o evento que vai acontecer quando apertar o botao
// pegas o elemento form que seria todo o meu formulario os inputs e o botao
// dai o addEventListener() vai ficar esperando um evento entao eu declaro para ele qual o tipo de evento ele deve escutar e oq ele deve fazer apos escutar ele.


form.addEventListener('submit', (e) => {
    e.preventDefault() // seerve para nao deixar a pasta recaregar e apagar os dados.
    CheckInputs();
})

function CheckInputs() {      // function para validar os inputs

    // aqui vamos pegar os valores dos inputs atraves do metodo .value e atribuir eles a uma nova variavel
    const userNameValue = userName.value
    const emailValue = email.value
    const passwordValue = password.value
    const confirmValue = passwordConfirm.value
    let valida = 0

    if(userNameValue === ""){  // verificar se ele é vazio
        setError(userName, "O nome de usuario é obrigatorio")
    }else {
        setSuccess(userName)
        valida = valida + 1
    }

    if(emailValue === ""){ 
        setError(email, "O email é obrigatorio")
    }else if(!validarEmail(emailValue)){ // se o email for invalido ele cai aqui
        setError(email, "Insira um email valido")
    }else {
        setSuccess(email)
        valida = valida + 1
    }

    if(passwordValue === ""){
        setError(password, "A senha é obrigatoria")
    }else if(!validarSenha(passwordValue)){
        setError(password, "A senha deve ter caracteres especiais, letra maiuscula numero e no minimo 8 digitos ")
    }else {
        setSuccess(password)
        valida = valida + 1
    }

    if(confirmValue === ""){
        setError(passwordConfirm, "A senha é obrigatoria")
    }else if(confirmValue != passwordValue){
        setError(passwordConfirm, " As senhas não são iguais ")
    }else {
        setSuccess(passwordConfirm)
        valida = valida + 1
    }
    
// aqui vamos validar os acertos se ele passou nos testes ele sera direciona para outra pagina
    if(valida == 4){
        // location serve para manda o usuario para o lugar q a gente quer o href é a url
       location.href = 'login.html'
    }
        
    
}



// nessa function vamos receber dois parametros o input para saber de quem é o erro e a mensagem para printar
function setError(input, message){  
    // queremos atribuir a class erro para a div do input entao usamos o metodo .parentElement para buscar o pai daquele elemento q no caso é a div
    const formControl = input.parentElement;

    // vamos pegar o small que esta dentro do formcontrol para adicionar a msg
    const small = formControl.querySelector('small')

    // adicionar a msg de erro
    small.innerText = message;

    // adicionar a class error na div
    formControl.className = "form-control error"

}

function setSuccess(input, message){
     // queremos atribuir a class erro para a div do input entao usamos o metodo .parentElement para buscar o pai daquele elemento q no caso é a div
     const formControl = input.parentElement;

     // adicionar a class success na div
     formControl.className = "form-control success"
}

// essa function vai validar o email
function validarEmail(email) {
    const regex = /^\S+@\S+\.\S+$/;
    return regex.test(email); // .test é um metodo q vai comparar o elemento q eu coloquei nele com o q ele foi atribuido e se tiver essas coisa la ele retorna true.
}

// essa function vai validar a senha se ela tem menos de 8 numeros, se tem caracter especial, se tem letra maiuscula.
function validarSenha(senha) {
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=!?])(?=.{8,})/;
    return regex.test(senha);
  }

// function  checkEmail (email) {
//     const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//     return  regex.teste(email);
// }

