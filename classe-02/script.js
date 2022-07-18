const senha = document.querySelector("#password")
const rSenha = document.querySelector("#r-password")
const btnSubmit = document.querySelector("button")
const msgErro = document.querySelector("#warn")

console.log(senha)
console.log(rSenha)

btnSubmit.addEventListener("click", (event) => {
    if(senha.value !== rSenha.value && rSenha.value !== "") {
        msgErro.textContent = "As senhas não coincidem, tente novamente"
        event.preventDefault()
    }

})
