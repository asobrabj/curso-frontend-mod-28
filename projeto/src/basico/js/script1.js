function calcularMedia(notas) {

    let soma = 0;
    for (c = 0; c < notas.length; c++) {
        soma += notas[c];
    }

    media = soma / notas.length;

    return media;

}

let media; // escopo global

function aprovacao(notas) {

    let media = calcularMedia(notas); // escopo da função

    let condicao = media >= 8 ? "aprovado" : "reprovado";

    return 'Média: ' + media + ' - Resultado: ' + condicao;

}


// Função Recursivas

function contagemRegressiva(numero) {

    console.log(numero);

    let proximoNumero = numero - 1;

    if (proximoNumero > 0)
        contagemRegressiva(proximoNumero);

}

//contagemRegressiva(50);

/* 
 * Formulário envio de dados para cálculo da média 
 */
const formulario1 = document.getElementById('formulario-01');

if (formulario1)
    formulario1.addEventListener('submit', function(evento)  {

        evento.preventDefault();
        evento.stopPropagation();

        if (this.getAttribute('class').match(/erro/)) {
            return false;
        }

        let dados = new FormData(this);

        let notas = [];

        for (let key of dados.keys()) {

            let numero = dados.get(key).match(/\d*/) ? Number(dados.get(key)) : 0; // é um número

            if (!isNaN(numero)) {
                notas.push(numero);
            }

        }

        console.log(notas);

        texto = aprovacao(notas)

        document.getElementById('resultado').innerHTML = texto;

    });


function validaCampo(elemento) {

    elemento.addEventListener('focusout', function(event)  {

        event.preventDefault();

        if (this.value == "") {
            document.querySelector('.mensagem').innerHTML = "verifique o preenchimento dos campos em vermelho";
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
            return false;
        } else {
            document.querySelector('.mensagem').innerHTML = "";
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
        }

    });

}

/* valida campo CEP 8 digitos */
function validaCep(elemento) {

    elemento.addEventListener('focusout', function (event) {

        event.preventDefault();

       let cepValido = this.value.match(/\d{5}-[\d]{3}/g); // ? this.value.replace(/-/, "") : this.value;

        let tamanho = this.value.length;
        console.log('Tamanho: ' + tamanho);
        console.log('CEP:' + this.value.match(cepValido) + '<br>');

        if (cepValido != "" && tamanho == 9 && this.value.match(cepValido)) {   
            document.querySelector('.mensagem').innerHTML = "";
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
        } else {
            document.querySelector('.mensagem').innerHTML = "verifique o preenchimento dos campos em destaque (CEP)";
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
            return false;
        }

    });

}

/* valida nome obrigatório minimo de 6 caracteres*/
function validaNome(elemento) {

    elemento.addEventListener('focusout', function (event) {

        event.preventDefault();

        const nomeValido = /^[A-Z]{5}/i;
        let tamanho = this.value.length;

        console.log(this.value.match(nomeValido) + '<br>');

        if (this.value.match(nomeValido) && tamanho > 5) {

            console.log('Tamanho ' + tamanho);

            document.querySelector('.mensagem').innerHTML = "";

            //document.getElementById("nome").value = "Hello World!";
            
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
        } else {
            document.querySelector('.mensagem').innerHTML = "verifique o preenchimento dos campos em destaque (nome)";
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
            return false;
        }

    });

}

function validaEmail(elemento) {

    elemento.addEventListener('focusout', function (event) {

        event.preventDefault();

        const emailValido = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?/i;
        if (this.value.match(emailValido)) {
            document.querySelector('.mensagem').innerHTML = "";
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
        } else {
            document.querySelector('.mensagem').innerHTML = "verifique o preenchimento dos campos em destaque (e-mail)";
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
            return false;
        }

    });

}

function validaUf(elemento) {

    elemento.addEventListener('focusout', function (event) {

        event.preventDefault();

        var ufValido = /^[A-Za-z]{2}/;
        let tamanho = this.value.length;

        console.log(this.value.match(ufValido) + '<br>');

        if (this.value.match(ufValido) && tamanho == 2) {

            console.log('Tamanho ' + tamanho);
            console.log('UF: ' + this.value.toUpperCase());

            /* ajusta a UF para letra maiuscula */
            document.getElementById("UF").value = this.value.toUpperCase();

            document.querySelector('.mensagem').innerHTML = "";
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
            
        } else {
            document.querySelector('.mensagem').innerHTML = "verifique o preenchimento dos campos em destaque";
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
            return false;
        }

    });

}


/* validando campos pecorrendo os inputs */
let camposObrigatorios = document.querySelectorAll('input.obrigatorio');
let camposCep = document.querySelectorAll('input.cep');
let camposNome = document.querySelectorAll('input.nome');
let camposEmail = document.querySelectorAll('input.email');
let camposUf = document.querySelectorAll('input.uf');

for (let emFoco of camposObrigatorios) {
    validaCampo(emFoco);
}

for (let emFoco of camposCep) {
    validaCep(emFoco);
}

for (let emFoco of camposNome) {
    validaNome(emFoco);
}

for (let emFoco of camposEmail) {
    validaEmail(emFoco);
}

for (let emFoco of camposUf) {
    validaUf(emFoco);
}

