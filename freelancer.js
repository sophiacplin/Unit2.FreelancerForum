const freelancers = [
  { name: "Dr. Slice", price: 25, occupation: "gardener" },
  { name: "Dr. Pressure", price: 51, occupation: "programmer" },
  { name: "Prof. Possibility", price: 43, occupation: "teacher" },
  { name: "Prof. Prism", price: 81, occupation: "teacher" },
  { name: "Dr. Impulse", price: 43, occupation: "teacher" },
  { name: "Prof. Spark", price: 76, occupation: "programmer" },
  { name: "Dr. Wire", price: 47, occupation: "teacher" },
  { name: "Prof. Goose", price: 72, occupation: "driver" },
];


function createTableRow(freelancers){
const row = document.createElement('tr')

const name = document.createElement('td')
name.textContent = freelancers.name

const occupation = document.createElement('td')
occupation.textContent = freelancers.occupation

const price = document.createElement('td')
price.textContent = freelancers.price

row.append(name)
row.append(occupation)
row.append(price)

return row
}

function setAveragePrice(index) {
  let sum = 0
  for(let i = 0; i< index; i++){
    sum += freelancers[i].price
  }

  let answer = Math.round((sum/index) * 100)/ 100
  console.log('Average: ', sum/index)
  return answer
}


let index = 0;

let interval = setInterval(() => {
  // if(index === freelancers.length - 1){
  //   clearInterval(interval)
  // }
let nextRow = createTableRow(freelancers[index])
index += 1;

const table = document.querySelector('table')
table.append(nextRow)

let avgPrice = setAveragePrice(index);
const priceSpan = document.querySelector('#price');
priceSpan.textContent = avgPrice;

generateNewFreeLancer()
}, 1500)

function generateNewFreeLancer() {
  let nums = [];
  for (let i = 0; i < 8; i++){
  nums.push((Math.random() * 26) + 97)
  }
  let name = String.fromCharCode(... nums)

  nums = [];
  for (let i = 0; i < 8; i++){
  nums.push((Math.random() * 26) + 97)
  }
  let occupation = String.fromCharCode(... nums)

  let price = Math.round(Math.random() * 100)

  freelancers.push({name: name, price: price, occupation: occupation})
}

