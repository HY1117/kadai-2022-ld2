const firstname = "Shinji"
const familyname = "Kido"

const fullname = firstname + familyname
console.log(fullname)

const num = 1+2+3+4+5+6+7+8+9+10
console.log(num)

const dog = true
const cat = false

console.log("犬または猫を飼っている", dog || cat)
console.log("犬と猫の両方を飼っている", dog && cat)
console.log("犬も猫も飼っていない", !dog && !cat)
console.log("犬も猫も飼っていない２", !(dog || cat))