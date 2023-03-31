class Carro {
    constructor(marca, modelo, cor, preco){
    this.marca=marca
    this.modelo=modelo
    this.cor=cor
    this.preco=preco
     
    }
    info(){
        console.log('Marca: '+this.marca+', Modelo: '+this.modelo+', Cor: '+this.cor+', Preço: '+this.preco)
        
    }

}

var xcar = []
var car = new Carro('Fiat', 'Siena', 'Vermelho', '32.000,00')
xcar.push(car)
var car = new Carro('Renult', 'Captu', 'Azul', '69.000,00')
xcar.push(car)
var car = new Carro('Nissan', 'Altima', 'Branco', '61.000,00')
xcar.push(car)
var car = new Carro('Hyundai', 'Azera', 'Marrom', '45.000,00')
xcar.push(car)
var car = new Carro('Chevrolet', 'Agile', 'Preto', '58.000,00')
xcar.push(car)
var car = new Carro('Volkswagen', 'Apolo', 'Verde', '37.000,00')
xcar.push(car)

/*
car1.info()
car2.info()
car3.info()
car4.info()
car5.info()
car6.info()
*/
var carx = document.getElementById('carro')
for (a=0; a <= 5; a++){
 
    console.log(xcar[a])
      
    carx.innerHTML  += xcar[a].marca +' - '+ xcar[a].modelo +' - '+ xcar[a].cor +' - '+ xcar[a].preco + '<br>'
    

}
















const calcularMedia = (notas) => {

    let soma = 0;
    for (c = 0; c < notas.length; c++) {
        soma += notas[c];
    }

    media = soma / notas.length;

    return media;

}

let media; // escopo global

const aprovacao = (notas) => {

    let media = calcularMedia(notas); // escopo da função

    let condicao = media >= 8 ? "aprovado" : "reprovado";

    return 'Média: ' + media + ' - Resultado: ' + condicao;

}
