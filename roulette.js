



 let color = ["rød", "grøn", "blå"];
function rouletteArray(tal, muligheder_array) {
 
  return muligheder_array[tal % muligheder_array.length]
}

console.log(rouletteArray(3, color))
