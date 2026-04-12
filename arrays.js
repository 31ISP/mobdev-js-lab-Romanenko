const nums = [4, 5, 3, 5, 2, 4, 5, 3]
const lim = 15000
const stroka = ["банан", "яблоко", "вишня", "абрикос", "груша"]
const products = [
  { name: "Ноутбук", price: 75000 },
  { name: "Мышь", price: 1500 },
  { name: "Монитор", price: 32000 },
  { name: "Клавиатура", price: 3500 },
  { name: "Наушники", price: 8000 }
]
const number = [12, 45, 7, 33, 18]
const raschet = (products.filter(sd => sd.price < lim))
const sortmap = products.map(sd => sd.name) 
const stoinost = products.reduce((sum,sd) => sum + sd.price , 0)
const sum = nums.reduce((acc,n )=>acc + n, 0)
const octnka = (nums.filter(n => n > 3).map(n => "Оценка:" + n))
const df =stroka.sort()
console.log((sum / nums.length).toFixed(2));
console.log(octnka)
console.log(df)
console.log(raschet)
console.log(sortmap)
console.log(stoinost)
console.log(number.some(n =>  n>40))
console.log(number.every(n => n >5))