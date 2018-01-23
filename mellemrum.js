let str ="    Heyo    "

function fjernMellemrumFoerOgEfter(){
    str = str.replace(/\s/g, '');
}

fjernMellemrumFoerOgEfter();
console.log(str)