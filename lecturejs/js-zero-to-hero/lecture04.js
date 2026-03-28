//  ตัวแปป เป็นชื่อที่ตั้งเอง มีหน้าที่เก็บค่าข้อมูล
//  การใช้งานตัวแปร คือ เอาข้อมูลไปเก็บในตัวแปร หรือ เอาข้อมูลที่เก็บในตัวแปรออกมาใช้

let var1 = 'Hello'
let var2 = "Hey"
let var3 = 1000
let var4 = 4568.6546
let var5 = true
let var6 = false

console.log(var1, var2, var3)
console.log('${var4} ${var5} ${var6}') //*** แนะนำ

let var7 = [10, 20, 30, 10, 10, 1000]
console.log(var7[1], var7[5])
console.log('${var7[0]} ${var7[2]}')  //*** แนะนำ

let var8 = {
    aa: 10,
    bb: 'Wow',
    cc: ['Hello', "Hi", "hey"],
    dd: {
        university:"SAU",
        faculty:["ArtsSci", "Engineer", "Business"]
    }
}

console.log(var8.bb, var8.cc[2])
console.log(var8.dd.faculty[1])
console.log(var8.dd.faculty[2])
var8.dd.faculty[2] = "Law"
console.log(var8.dd.faculty[2])