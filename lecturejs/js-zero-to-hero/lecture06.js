// Control flow/statement (Selection) พิสูจน์ตรวจสอบก่อนที่จะทำงานใด

// if
// if-else
// if-else-if
// switch-case

//Control flow/statement (Loop) พิสูจน์ตรวจสอบก่อนที่จะทำงานใด
// whle
// dp-while
//for

let data1 = [10, 20, 30, 10, 50]

//forEach ใช้กับ Array
data1.forEach((item)=>{
    console.log(item * 100)
})

console.log('----------------------')

//For-of ใช้กับ Array
for(item of data1){
    console.log(item * 100)
}

console.log('----------------------')

let data2 = {
    a: 10,
    b: 20,
    c: 30
}

//for-in ใช้กับ Object
for(item in data2){
    console.log(item, data2[item] * 100)
}