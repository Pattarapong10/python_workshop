//EXpression Function คือ การเขียนฟังก์ชันในรูปแบบของนิพจน์
//มักจะเป็นการเขียนฟังก์ชัน ที่กำหนดค่าให้กับตัวแปร
const a = function wow(){
    console.log('Wow .....')
}

//Anonymous Function
const b = function () {
    console.log('Wow .....')
}


//Arrow Function***
const c = () => {
    console.log('Wow .....')
}

const d = 20
console.log( d )

a()
b()
c()

const x = d
console.log(x)
const y = a
y()