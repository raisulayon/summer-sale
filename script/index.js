
let totalPrice =0;

function handleClickBtn(target){
const selectedProducts = document.getElementById('calculation-entry');
// getting the item name
const productName = target.childNodes[5].childNodes[1].innerText;
const li = document.createElement('li');
li.innerText = productName;
selectedProducts.appendChild(li);

// getting the item price
const newPrice = target.childNodes[5].childNodes[3].innerText.split(' ')[0];
totalPrice = parseInt(totalPrice) + parseInt(newPrice);
document.getElementById('total-price').innerText=totalPrice;

// setting the price
const element = document.getElementById('total');
const total = totalPrice;
element.innerText = total;
}

document.getElementById('coupon-input').addEventListener('keyup', function(event){
    const text = event.target.value;
    const couponButton = document.getElementById('coupon-btn');
    if(text==='SELL200' && totalPrice >=200){
        couponButton.removeAttribute('disabled');
    }
    else{
        couponButton.setAttribute('disabled');
        }
})

document.getElementById('coupon-btn').addEventListener('click', function(){
    const discount = document.getElementById('discount-price');
    if(totalPrice > 200){
        const discountPrice = (totalPrice * 0.20).toFixed(2);
        discount.innerText = discountPrice;
        total = totalPrice-discountPrice;
        document.getElementById('total').innerText = total;
    }

})