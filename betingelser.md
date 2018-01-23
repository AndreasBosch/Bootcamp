# Betingelser

## if-else
```javascript
let random = Math.floor(Math.random() * 11);  

if(random > 5){
    console.log("større end 5")
}else{
    console.log("mindre end 5")
}
console.log(random)

dette vil starte med at give os et tilfældigt tal imellem 1-10, nå nummeret er fundet vil den kigge igennem if else conditionen og se hvilken den matcher, (vi starter med at sende vores let random som argument ind i vores if else). Hvis tallet (if) altså er større end 5 vil den console.log("større end 5"), og hvis tallet ender med at være mindre end 5, vil den console.log("mindre end 5"), du kan altså ikke opnå begge disse, det er enten/eller (if/else).

else if tager udgangspunkt i om den første condition ikke er opfyldt (if), og istedet for at sige ALT andet end en fuldent if condition skal give dette svar, så kan man give et mere specifikt svar. Måske ville man ikke i praksis skrive specifikke sætninger som toggler conditions, men man kunne f.eks sige at hvis det indtastede number er imellem 100 - 200 så skal den returnere noget innerHTML der skriver "Your number was between 100 and 200", istedet for måske at sige "Your number was above 100" som standard svar til alt.
```