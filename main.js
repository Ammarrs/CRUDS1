let title = document.getElementById('title');
let price = document.getElementById('price');
let tax = document.getElementById('taxes');
let ads = document.getElementById('ads');
let discount = document.getElementById('discount');
let total = document.getElementById('total');
let count = document.getElementById('count');
let category = document.getElementById('category');
let submit = document.getElementById('submit');

let mood = 'create';
let temp;

// console.log(title, price, tax, ads, discount, count, category, submit);

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
let dataPro;
if (localStorage.product != null) {
  dataPro = JSON.parse(localStorage.product);
} else {
  dataPro = []; 
}


 function sub() {
  let newPro = {
    title: title.value,
    price: price.value,
    tax: tax.value,
    ads: ads.value,
    discount: discount.value,
    total: total.innerHTML,
    count: count.value,
    category: category.value,
  }
  
  if (mood === "create") {
    if (newPro.count > 1) {
      for (let i = 0; i < newPro.count; i++) {
        dataPro.push(newPro);
      } 
    } else {
      dataPro.push(newPro);
    }
  } else {
    dataPro[temp] = newPro;
    mood = "create";
    submit.innerHTML = "Create";
    count.style.display = "block";
  }

  localStorage.setItem('product', JSON.stringify(dataPro));
  // console.log(dataPro);

  showData();
  clearData();
}



// save data on local storage

// here if i want to saving data object by object
// for(let obj of dataPro) {
//   localStorage.setItem(obj);
// }


// clear data after create

function clearData() {
  title.value = '';
  price.value = '';
  tax.value = '';
  ads.value = '';
  discount.value = '';
  count.value = '';
  category.value = '';
  total.innerHTML = '';
  calcTotal();
}


// read

function showData() {
  let table = '';
  for (let i = 0; i < dataPro.length; i++) {
    table += `
      <tr>
        <td>${i+1}</td>
        <td>${dataPro[i].title}</td>
        <td>${dataPro[i].price}</td>
        <td>${dataPro[i].tax}</td>
        <td>${dataPro[i].ads}</td>
        <td>${dataPro[i].discount}</td>
        <td>${dataPro[i].category}</td>
        <td><button onclick="updateData(${i})" id="update">update</button></td>
        <td><button onclick="deleteData(${i})" id="delete">delete</button>
        </td>
      </tr>
    `;
  }
  document.getElementById('tbody').innerHTML = table;

  let deleteAllBtn = document.getElementById('deleteAll');
  if(dataPro.length > 0) {
    deleteAllBtn.innerHTML = `<button onclick="deleteAll()">Delete All (${dataPro.length})</button>`;
  }else {
    deleteAllBtn.innerHTML = ``;
  }
}

showData();


// delete

function deleteData(i) {
  dataPro.splice(i,1);
  localStorage.product = JSON.stringify(dataPro);
  showData();
  // console.log(dataPro);
}


// delete all

function deleteAll() {
  localStorage.clear();
  dataPro.splice(0);
  showData();
}


// update

function updateData(i) {
  fillData(i);
  count.style.display = "none";
  submit.innerHTML = "Update";
  mood = "update";
  temp = i;
  scroll({
    top: 0,
    behavior:"smooth"
  })
}

function fillData(i) {
  title.value = dataPro[i].title;
  price.value = dataPro[i].price;
  tax.value = dataPro[i].tax;
  ads.value = dataPro[i].ads;
  discount.value = dataPro[i].discount;
  category.value = dataPro[i].category;
}













// search
// clean data


