// let data = [1, 2, 3, 4, 5, 6];

// function logIt(data){
//     console.log(data)
//     }

// data.forEach(function (data) {
//    logIt(data)
// });


//     function nyHTML(text){

        
//         console.log('<p>' + text + '</p>');
//     }

//     function mainFunc(text){
//         nyHTML(text);
// }
// nyHTML("PayTagz");

function getData(dataURI, outputData) {
    // Burde og er den første string der dukker op
    console.log('Den første string der burde dukke op');
    let timer = setTimeout(function () {
        //Disse linjer kode bliver sat på "pause" da der er sat en timeout på 2 sekunder.
       console.log('Her der der gået 2 sekunder.');
       let dataArray = [12, 34, 56, 78, 90, 123, 456, 789];
       outputData(dataArray);
    }, 2000);
 }
 
 function outputData(dataArray) {
     // Dette kode dukker først op efter den asynkrone function er gennemført da den ikke kører videre i samme funktion
    // før det overstående er gennemført. 
    console.log('Dette er funktionen der udskriver det hentede data: ' + dataArray);
 }
 
 getData('http://www.domain.com/something', outputData);
 // Denne linje kode er den anden og ikke sidste da der er 2 console.log's der ikke kan blive gennemført før 2 sekunder,
 // Javascript kører videre istedet for at vente de 2 sekunder på at dataen er loadet.
 console.log("Denne kode linje burde være den sidste.");