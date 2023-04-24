let valores =[];

function addNumber(){
    let txtNumber = document.getElementById("number");
    
    let number = Number(txtNumber.value);
    
    let numList = document.createElement('option');

    let list = document.getElementById('conjuntoDeNumeros');

       
    
    if(txtNumber.value.length == 0 ||number <= 0 || number > 100 ){
        alert('Valor inválido ou já existente na lista.');
        

    }else if(valores.indexOf(number) == -1){
        valores.push(number);
        list.appendChild(numList);
        numList.textContent = `valor ${number} adicionado`;
        txtNumber.value = '';
    }else{
        alert('Valor já se encontra na lista favor digite outro valor');
        txtNumber.value = '';
    }
    let resultado = document.getElementById('result');
    resultado.innerHTML ='';
}

function check(){
    let resultado = document.getElementById('result');
    resultado.innerHTML ='';

    let res1 = document.createElement('p');
    let res2 = document.createElement('p');
    let res3 = document.createElement('p');
    let res4 = document.createElement('p');
    let res5 = document.createElement('p');

    let max = Math.max(...valores);
    let min = Math.min(...valores);
    let soma = 0;
    for(let i = 0; i < valores.length; i++){
        soma += valores[i];
    }
     let media = soma / valores.length;
    

    res1.innerHTML = `Ao todo temos <strong>${valores.length}</strong> números cadastrados.`

    res2.innerHTML = `O maior valor informado foi <strong>${max}</strong>`;

    res3.innerHTML = `O menor valor informado foi <strong>${min}</strong>`;

    res4.innerHTML = `Somando todos os valores, temos <strong>${soma}</strong>`;

    res5.innerHTML = `A média dos valores digitados é <strong>${media}</strong>`;

    resultado.appendChild(res1);
    resultado.appendChild(res2);
    resultado.appendChild(res3);
    resultado.appendChild(res4);
    resultado.appendChild(res5);
     






}
