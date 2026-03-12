const nums = [4, 5, 3, 5, 2, 4, 5, 3]
const stroka = ["банан", "яблоко", "вишня", "абрикос", "груша"]
const sum = nums.reduce((acc,n )=>acc + n, 0)
const octnka = (nums.filter(n => n > 3).map(n => "Оценка:" + n))
const df =stroka.sort()
console.log((sum / nums.length).toFixed(2));
console.log(octnka)
console.log(df)
