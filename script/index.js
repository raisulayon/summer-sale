function getElementPriceById(element){
    const elment = document.getElementById(element);
    element.inner
}   

function  addToCalculationEntry(product, price){
    const calculationEntry = document.getElementById('calculation-entry');
    const p = document.createElement('p');
    const count = calculationEntry.childElementCount;
    p.innerHTML =  `${count +1}. ${product} ${price} `
    calculationEntry.appendChild(p);
}