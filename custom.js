function jogar(){
    var botoesOpcoes = document.getElementsByName("botao")
    var opcaoRobo = Math.floor(Math.random() * 3)
    var opcaoUsuario = null
    var descricaoRobo = ''
    var descricaoUser = ''
    var img = document.getElementById("hero")
    var resultado = document.getElementById("res")
    var mensagemFinal = document.createElement('h2')
    mensagemFinal.setAttribute('id', 'mensagemFinal')

    if(botoesOpcoes[0].checked){
        opcaoUsuario = 0
    }else if(botoesOpcoes[1].checked){
        opcaoUsuario = 1
    }else if(botoesOpcoes[2].checked){
        opcaoUsuario = 2
    }else{
        window.alert("Escolha uma das opções antes de jogar")
    }

    if(opcaoUsuario != null){
        // console.log(opcaoRobo, opcaoUsuario)

        if(opcaoRobo == opcaoUsuario){
            img.setAttribute('src', './img/03.png')
            window.alert("empate")

        }else if(opcaoRobo == 0 && opcaoUsuario == 1){
            img.setAttribute('src', './img/01.png')
            window.alert("Jogador Venceu")

        }else if(opcaoRobo == 0 && opcaoUsuario == 2){
            img.setAttribute('src', './img/02.png')
            window.alert("Robô venceu")

        }else if(opcaoRobo == 1 && opcaoUsuario == 0){
            img.setAttribute('src', './img/02.png')
            window.alert("Robô venceu")

        }else if(opcaoRobo == 1 && opcaoUsuario == 2){
            img.setAttribute('src', './img/01.png')
            window.alert("Jogador Venceu")

        }else if(opcaoRobo == 2 && opcaoUsuario == 0){
            img.setAttribute('src', './img/01.png')
            window.alert("Jogador Venceu")

        }else if(opcaoRobo == 2 && opcaoUsuario == 1){
            img.setAttribute('src', './img/02.png')
            window.alert("Robô venceu")
        }
    }

    switch(opcaoRobo){
        case 0:
            descricaoRobo = "Pedra"
            break
        case 1:
            descricaoRobo = "Papel"
            break
        case 2:
            descricaoRobo = "Tesoura"
            break
    }

    switch(opcaoUsuario){
        case 0:
            descricaoUser = "Pedra"
            break
        case 1:
            descricaoUser = "Papel"
            break
        case 2:
            descricaoUser = "Tesoura"
            break
    }

    resultado.innerHTML = `Robô jogou ${descricaoRobo} e o jogador ${descricaoUser}`
    resultado.appendChild(mensagemFinal)
    resultado.appendChild(img)
}