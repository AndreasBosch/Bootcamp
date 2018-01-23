let startNumber = 1; 
let nextNumber = 2;
console.log(startNumber)

while(nextNumber <= 1600 & startNumber <= 1600){
 console.log(startNumber)
 console.log(nextNumber)
 startNumber += nextNumber;
 nextNumber += startNumber;
 
}

