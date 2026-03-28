//Function คือ การทำงานหนึ่งๆ จะไม่ทำงานหากไม่เรียกใช้ (call function) มีอยู่ 4 ปนะเภท
//1. no parameter, no return
function funcA( ){
    console.log('Hello....')
    console.log('Hi...')
}

//.2 have parameter, no return
function funcB(xx, yy, zz){
    console.log(xx + yy)
    console.log(zz)
}


//3. no parameter, has return
function funcC( ){
    console.log('Wow....')
    return 555
}




//4. have parameter, has return
function funcD(aa, bb){
    console.log(aa*bb)
    let iot = [10, 20, 30]
    return iot
}
//-------------------------------------------------
funcA()
funcA()
funcB(10, 20, 30) //argument คือ ค่าที่ส่งให้พารามิเตอร์
//-----------------------------------------------
console.log(funcC() )
let sau = funcD(10, 20)
console.log(sau)

//------------------------------------
//Function ที่มี  return แต่ไม่มีค่าต่อหลัง return
function funcE(){
    console.log('SAU...')
    console.log('IoT...')
    return
    console.log('Thailand')
    return
    console.log(555)
}

funcE()
funcE()