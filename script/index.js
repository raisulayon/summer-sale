function getElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementValueString = element.innerText;
    const elementValue = parseFloat(elementValueString);
    return elementValue;
}   

document.getElementById('product1').addEventListener('click', function(){
    const price = getElementValueById('prod1');
})
document.getElementById('product2').addEventListener('click', function(){
    const price = getElementValueById('prod2');
})
document.getElementById('product3').addEventListener('click', function(){
    const price = getElementValueById('prod3');
})
document.getElementById('product4').addEventListener('click', function(){
    const price = getElementValueById('prod4');
})
document.getElementById('product5').addEventListener('click', function(){
    const price = getElementValueById('prod5');
})
document.getElementById('product6').addEventListener('click', function(){
    const price = getElementValueById('prod6');
})
document.getElementById('product7').addEventListener('click', function(){
    const price = getElementValueById('prod7');
})
document.getElementById('product8').addEventListener('click', function(){
    const price = getElementValueById('prod8');
})
document.getElementById('product9').addEventListener('click', function(){
    const price = getElementValueById('prod9');
})

function  addToCalculationEntry(elementType, price){
    const calculationEntry = document.getElementById('calculation-entry');
    const p = document.createElement('p');
    const count = calculationEntry.childElementCount;
    p.innerHTML =  `${count +1}. ${product} ${price} `
    calculationEntry.appendChild(p);
}


