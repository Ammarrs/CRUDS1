let title = document.getElementById('title');
let price = document.getElementById('price');
let tax = document.getElementById('taxes');
let ads = document.getElementById('ads');
let discount = document.getElementById('discount');
let total = document.getElementById('total');
let count = document.getElementById('count');
let category = document.getElementById('category');
let submit = document.getElementById('submit');

console.log(title, price, tax, ads, discount, count, category, submit);

// calc total

function calcTotal() {
  if(price.value != '') {
    let result = (+price.value + +tax.value + +ads.value) - +discount.value;
    total.innerHTML = result;
    if(result != 0) total.style.background = 'green';
  } else {
    total.innerHTML = '';
    total.style.background = '#a00d02';
  }
}



// cereate product
// save data on local storage
// clear data after create
// read
// count
// delete
// update
// search
// clean data


