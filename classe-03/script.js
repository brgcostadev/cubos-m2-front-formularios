const botaoEnviar = document.querySelector("button")
const nomeMusica = document.querySelector(".musica")
const comboBox = document.querySelector("#select")
const revelarBoxMusica = document.querySelector(".escondido")


botaoEnviar.addEventListener('click', (event) => {
    const stop = event
    if(nomeMusica.value === "" || comboBox.value === "") {
        stop.preventDefault()
    }
    
})

comboBox.addEventListener("change", () => {
    if(comboBox.value !== "") {
        revelarBoxMusica.classList.remove("escondido")
    } else {
        revelarBoxMusica.classList.add("escondido")
    }

    if(comboBox.value === "bossa-nova") {
        nomeMusica.value = "Ivone - Noite Sem Luar (Coisa Mais Linda)"
    }

    if(comboBox.value === "forro") {
        nomeMusica.value = "Falamansa - Xote da Alegria"
    }

    if(comboBox.value === "funk") {
        nomeMusica.value = "Mr. Catra - Adulterio"
    }

    if(comboBox.value === "new-age") {
        nomeMusica.value = "ERA - Divano (Official Music Video)"
    }

    if(comboBox.value === "rock") {
        nomeMusica.value = "Oasis - Wonderwall"
    }

    if(comboBox.value === "sertanejo") {
        nomeMusica.value = "Marília Mendonça - Infiel"
    }
    
})