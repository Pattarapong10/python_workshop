//ใช้งาน module แบบ commonJS
const XX = require('./iot01.js')
const { showWow1 } = require('/iot02.js')

XX.datA = 666
console.log(XX.dataA)
XX.showWow()
XX.dataC()

showWow1()
console.log(dataA)