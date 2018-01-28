function thirdPromise(someBoolValue) {
    return new Promise((resolve, reject) => {
        // Timeout gør det asynkront igen...
       setTimeout(() => {
          if (someBoolValue) {
             resolve('Denne besked kommer fra "resolve"');
          } else {
             reject(new Error('Det var ikke en succes, dette kommer fra "reject"'));
          }
       }, 2000);
    })
 }
 
 thirdPromise(true)
 // Sucess er vores resolve, altså console.logger den indholdet af resolve.
    .then(success => {
       console.log(success);
       //throw new Error('lad os sige noget gik galt!');
       return 'Information sendes videre';
    }).then(nextSuccess => {
        // da vi har ændret på dataen fra vores resolve til at returne en anden string får vi console.logget "Information sendes videre"
       console.log(nextSuccess);
    }).catch((error) => {
        // hvis vores thirdPromise ender i reject, laver den en ny error med en string, som hernede bliver console.logget. men kun HVIS den ikke er true.
       console.log(error);
    })
 console.log("yoyo der")