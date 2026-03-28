// Global ใช้ที่ไหนก็ได้
//Local ใช้ได้เฉพาะที่ใน Block Code { ..... } นั้นๆ เท่านั้น

// ตัวแปร Variable
var data1 = 10     //เปลี่ยนค่าได้  เป็นแบบ Global
let data2 = 20     //เปลี่ยนค่าได้  เป็นแบบ Local 
const data = 30    //เปลี่ยนค่าไม่ได้  เป็นแบบ Local

data1 = 11
data2 = 22
// data3 = 33 ERRoR
{
    var info1 = 'aa'
    let info2 = 'bb'
    const info3 = 'cc'
    console.log(data1)
    console.log(data2)
    console.log(data3)
    console.log(info1)
    console.log(info2)
    console.log(info3)
}

console.log(data1)
console.log(data2)
console.log(data3)
console.log(info1)
// console.log(info2) ERROR
// console.log(info3) ERROR
