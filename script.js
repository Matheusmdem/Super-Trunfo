var carta1 = {
    nome: "Bulbasauro",
    imagem: "https://assets.b9.com.br/wp-content/uploads/2014/08/bulbasaur.png",
    atributos: {
        ataque: 7,
        defesa: 8,
        magia: 6,
    }
}
var carta2 = {
    nome: "Darth Vader",
    imagem: "https://disneyplusbrasil.com.br/wp-content/uploads/2021/06/Darth-Vader-serie-Disney-Plus-1024x576.jpg",
    atributos: {
        ataque: 7,
        defesa: 8,
        magia: 6,
    }
}
var carta3 = {
    nome: "Shiryu de dragão",
    imagem: "https://i.pinimg.com/originals/93/52/73/935273e1e16f07911849c145812e3ce4.jpg",
    atributos: {
        ataque: 5,
        defesa: 9,
        magia: 10,
    }
}

var cartas = [carta1, carta2, carta3];
var cartaMaquina;
var cartaJogador;

function sortearCarta() {
    cartaMaquina = ""
    cartaJogador = ""
    var numeroCartaMaquina = parseInt(Math.random() * 3);
    cartaMaquina = cartas[numeroCartaMaquina];

    var numeroCartaJogador = parseInt(Math.random() * 3);
    while (numeroCartaJogador == numeroCartaMaquina) {
        numeroCartaJogador = parseInt(Math.random() * 3);
    }
    cartaJogador = cartas[numeroCartaJogador];

    document.getElementById("btnSortear").disabled = true;
    document.getElementById("btnJogar").disabled = false;

    var divCartaMaquina = document.getElementById("carta-maquina");
    divCartaMaquina.innerHTML = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">'
    divCartaMaquina.style.backgroundImage = `url()`

    exibirCartaJogador()
}

function obtemAtributoSelecionado() {
    var radioAtributos = document.getElementsByName("atributo");
    for (var i = 0; i < radioAtributos.length; i++) {
        if (radioAtributos[i].checked == true) {
            return radioAtributos[i].value
        }
    }
}

function jogar() {
    var atributoSelecionado = obtemAtributoSelecionado()
    var elementoResultado = document.getElementById("resultado")
    var valorCartaJogador = cartaJogador.atributos[atributoSelecionado]
    var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado]

    if (atributoSelecionado == undefined) {
        alert('Selecione um atributo')

    } else {

        if (valorCartaJogador > valorCartaMaquina) {
            elementoResultado.innerHTML = "<p class='resultado-final'>Venceu</p>"
        } else if (valorCartaJogador < valorCartaMaquina) {
            elementoResultado.innerHTML = "<p class='resultado-final'>Perdeu</p>"
        } else {
            elementoResultado.innerHTML = "<p class='resultado-final'>Empatou</p>"
        }
        document.getElementById("btnJogar").disabled = true;
        document.getElementById("btnSortear").disabled = false;
        exibirCartaMaquina()
    }

}

function exibirCartaJogador() {
    var divCartaJogador = document.getElementById("carta-jogador");
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`

    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;
    var tagHTML = "<div id='opcoes' class='carta-status'>";

    var opcoesTexto = "";

    for (var atributo in cartaJogador.atributos) {
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + ": " + cartaJogador.atributos[atributo] + "</input><br>";
    }

    divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>"
}

function exibirCartaMaquina() {
    var divCartaMaquina = document.getElementById("carta-maquina");
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`

    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;
    var tagHTML = "<div id='opcoes' class='carta-status'>";

    var opcoesTexto = "";

    for (var atributo in cartaMaquina.atributos) {
        opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + ": " + cartaMaquina.atributos[atributo] + "</p>";
    }

    divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>"
}