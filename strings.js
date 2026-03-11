const sentence = "  javascript — это просто!  "
const res = sentence.slice(0,3).toUpperCase() + sentence.slice(3)
const [name, gruppa, srball ]   = ["Иванов Иван", "ИСР-21", 4.75]
const chislo = "2025-03-15"
const [pervor, vtoroe, tretie] = [15, 3, 2025]
console.log(res.trim())
console.log(`"Студент ${name}, группа ${gruppa}, средний балл: ${srball}"`)
console.log(chislo.split("-"))