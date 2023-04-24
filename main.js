let valores =[];

function addNumber(){
    const txtNumber = document.getElementById("number");
    
    const number = Number(txtNumber.value);
    
    const numList = document.createElement('option');

    const list = document.getElementById('conjuntoDeNumeros');

    const resultado = document.getElementById('result');

    
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

    resultado.innerHTML ='';
}

function check(){
    const resultado = document.getElementById('result');

    const res1 = document.createElement('p');
    const res2 = document.createElement('p');
    const res3 = document.createElement('p');
    const res4 = document.createElement('p');
    const res5 = document.createElement('p');

    const max = Math.max(...valores);
    const min = Math.min(...valores);
    let soma = 0;

    resultado.innerHTML ='';

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
