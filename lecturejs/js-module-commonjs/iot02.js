//การสร้าง module แบบ commonJS
let dataA = 555

const dataB = "Sombat"

function showWow(){
    console.log('Wow....')
}

function sumNumber(n1, n2){
    return n1 + n2
}

const dataC = () => {
    console.log('Hello...')
}

module.exports.dataA1 = dataA1
module.exports.dataB1 = dataB1
module.exports.showWow1 = showWow1
module.exports.sumNumber1 = sumNumber1
module.exports.dataC1 =  dataC1