const form = document.querySelector('form')
const user = document.querySelector('#usuario')
const password = document.querySelector('#password')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    CheckInput();
})

function CheckInput(){
    const userValue = user.value
    const passwordValue = password.value

    if(userValue === ""){
        setError(user, "O nome do usuário ")
    }else {
        setSuccess(user)
    }

    if(passwordValue === ""){
        setError(password, "Senha incorreta")
    }else {
        setSuccess(password)
    }
}



function setError(input,message){
    // pega o elemento pai
    const elementoPai = input.parentElement
    const small = elementoPai.querySelector('small')
    small.innerText = message
    elementoPai.className = 'form-control error'    

}

function setSuccess(input){
    const elementoPai = input.parentElement
    elementoPai.className = 'form-control success'
}