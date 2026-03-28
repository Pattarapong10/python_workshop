// Call back Function

function funcA(x, y, z){
    console.log(x + y)
    console.log(x * 10)
    console.log(y *10)
    z()
    console.log(x * y)
}

function showWow(){
    console.log('Wow')
}

funcA(5, 15, showWow)
console.log('---------------------')
func(10, 20, function(){
    console.log('Woo')
} )
console.log('----------------------')
funcA(1, 9, () => {
    console.log('Hello')
} )