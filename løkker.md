# Løkker

## while
en "while" løkke kører en kode igennem ligeså længe at dens "condition" er opfyldt, altså 
  
```javascript
i = 1
while(i < 10){
console.log('yoyo');
i++
}
```
dette vil køre igennem indtil variablen i er nået op til 10.

## do-while
en "do-while" løkke er en løkke som kører ligeså længe at dens condition er opfyldt helt ligesom en "while" løkke, udover at en "do-while" altid vil blive eksekveret mindst én gang.

## for
en "for" løkke, er en løkke som kører ligeså længe at dens condition er opfyldt. det smarte med en forloop er at den sammensætter "check" og "tilføjelsen" af ekstra tal, så istedet for at skrive i++ i selve den kode der bliver udført kan det skrives i løkken selv.

## forEach
forEach er en indbygget "funktion" som tager fat i hvert eneste element i det array du tildeler det, du kan derefter tilføje en anonym funktion som bliver kørt på alle de "items" der er i dit array f.eks..

```javascript
let navne = ["Joe", "Mike", "Mary", "Roosevelt"];
navne.forEach(function(navn, index){
console.log(navn + index)
})

"navn" vil returnere hver "værdi" af de items der er i dit array, imens "index" vil returnere hver "indexering(plads)" af de items i dit array
Altså vil vi få en liste hvor der står;
Joe 0
Mike 1
Mary 2
Roosevelt 3
```
