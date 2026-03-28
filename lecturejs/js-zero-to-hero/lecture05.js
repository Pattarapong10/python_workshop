//Operator เครื่องหมายต่างๆ
// + - * / % **
// > < >=  <=   == != === !==  Comparison
console.log(10 == '10')
console.log(10 === '10')

// ! (not)  && (and)  || (or)

// ++ --  Increment Decrement
//  =  +=  -= *= /=  %=

//Ternary Operator *****
//______? _______ : _______
// พิสูจน์หน้าเครื่่องหมายคำถาม จริง ได้หลังคำถาม เท็จ ได้หลังโคลอน
console.log(20 > 100 ? 'Wow..' : 'Woo...')

// Nullish Coalescion Operator
// &&
// หน้าเครื่่อง && เป็น null หรือไม่
//ถ้าไม่ใช่ null ก็จะได้ค่าหลังเครื่่องหมาย
//แต่ถ่าเป็น null ก็จะได้ค่า null
let data1 = 20
let data2 = null
console.log(data1 && 'Hi...')
console.log(data2 && 'Hey...')
// หน้าเครื่่อง && เป็น 0 หรือไม่
//ถ้าไม่ใช่ 0 ก็จะได้ค่าหลังเครื่่องหมาย
//แต่ถ่าเป็น 0 ก็จะได้ค่า 0
let data3 = 0
let data4 = 50
console.log(data3 && 'SAU...')
console.log(data4 && 'UAS...')
// หน้าเครื่่อง && เป็น ค่าว่าง ""/'' หรือไม่
//ถ้าไม่ใช่ ค่าว่าง ""/'' ก็จะได้ค่าหลังเครื่่องหมาย
//แต่ถ่าเป็น ค่าว่าง ""/'' ก็จะได้ค่า ค่าว่าง ""/''
let data5 = ''
let data6 = 'IoT'
console.log(data5 && 'THAILAND')
console.log(data6 && 'USA')