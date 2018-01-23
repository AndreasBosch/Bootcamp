// let betingelse = false;

// if(betingelse == true){
//     console.log("Hej verden")
// }


let random = Math.floor(Math.random() * 11);  

if(random > 5){
    console.log("større end 5")
}else{
    console.log("mindre end 5")
}
console.log(random)


// let betingelse = false;
// let result = betingelse ? "hej verden" : "farvel verden :((";
// console.log(result)

let faxeKondi = "gud";

// if(faxeKondi == "gud"){
//     console.log("Det har du nemmerlig ret i fister")

// }else if(faxeKondi == "ad"){
//    console.log("Hvad satan bilder du dig ind!")

// }else if(faxeKondi == "okay"){
//     console.log("Det er acceptabelt men forkert")
// }else{
//    console.log("så sig dog noget")
// }

switch(faxeKondi){
    case "gud":
    console.log(faxeKondi, "Det har du nemmerlig ret i fister");
    break;

    case "ad":
    console.log(faxeKondi, "Hvad satan bilder du dig ind!")
    break;

    case "okay":
    console.log(faxeKondi, "Det er acceptabelt men forkert")
    break;

    default:
    console.log(faxeKondi, "så sig dog noget!")
}
