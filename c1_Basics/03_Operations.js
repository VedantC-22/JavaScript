let num = 4
let negValue = -num
console.log(negValue)

console.log(2**3) // 2^3 = 8

console.log('"2" + 2 = ',"2" + 2)
console.log('2 + "2" = ',2 + "2")
console.log('"2" + 2 + 1 = ',"2" + 2 + 1)
console.log('2 + 2 + "2" = ',2 + 2 + "2") // 2 + 2 + "2"  --(left to right)--> (2 + 2) => 4 + "2" => 42
console.log("2+true = ",2+true)

//Comparision
console.log('"2" > 1 =>', "2" > 1)
console.log('"02" > 1 =>', "02" > 1)
console.log('null > 0 =>', null > 0)
console.log('null == 0 =>', null == 0)
console.log('null >= 0 =>', null >= 0)

// === vs == 
console.log("2" == 2) //checks only values
console.log("2" === 2) //datatype is also checked here