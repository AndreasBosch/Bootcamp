# Funktioner

Funktioner er kodestumper hvor du kan gemme en masse linjer kode som du senere hen kan referrere til og genbruge ved at angive funktionens navn.

en funktion kan f.eks se sådan her ud.

```javascript
function LogMe(x){
    console.log(x)
}
LogMe(2200);

``` 
her laver vi en funktion ved navnet LogMe, den skal udføre funktionen console.log på det argument vi sender med når vi kalder koden. Vi kalder funktionen i bunden med at skrive navnet på funktionenen hvor vi sender argumentet 2200 med, som "overtager" x's plads i funktionen. Derfor vil alle steder hvor x står blive erstattet med 2200, som medfører at vi logger tallet 2200.

## Returværdier
Returværdier er det vi får sent tilbage når funktionen er fuldført, det kan være at vi vil have en besked der siger at det du har skrevet ind i din form er forkert, og ellers udføre en kodestump som f.eks returnerer det du har skrevet ind * 2.

```javascript
function test(x, y){
    if (isNaN(x) || isNaN(y)){
       return("not a number")
    }else{
    return(x * y);
}
}
console.log(arguments("dada", 2));
```
i eksemplet over spørger vi om de to argumenter vi har sendt med er tal, hvis de IKKE er tal, skal funktionen returnere en string der siger not a number. Hvis det viser sig at begge argumenter er tal så skal den returnerer summen af de to argumenter ganget med hinanden. Da vi har sendt en tekststring med som første argument får vi returneret "not a number" hvis vi nu havde sendt tallet 5 med istedet ville vi få returneret 10.
