let height = 170;
let weight = 80;

let bMIResult = weight / (height/100 * height/100);
console.log(bMIResult)

if(bMIResult <=18.5){
    console.log("undervægtig")
}


if(bMIResult >18.5 && bMIResult < 24.9){
    console.log("normalvægtig")
}

if(bMIResult >25 && bMIResult < 29.9){
    console.log("overvægtig")
}

if(bMIResult >30 && bMIResult < 39.9){
    console.log("fedme")
}

if(bMIResult > 40){
    console.log("svær fedme")
}