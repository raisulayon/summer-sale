let total =0;

function handleClickBtn(target){
    // console.log(target.parentNode.childNodes[3].innerText);
const selectedProducts = document.getElementById('calculation-entry');
const productName = target.parentNode.childNodes[3].innerText;
const li = document.createElement('li');
li.innerText = productName;
selectedProducts.appendChild(li);

const price = target.parentNode.childNodes[5].innerText.split(" ")[0];
total = parseInt(total) + parseInt(price);
document.getElementById('total-price').innerText=total;


}

