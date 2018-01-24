function vinkel360(input) {
    if (input > 0) {
        input %= 360
        console.log(input);
    }else{
    while (input < 0) {
        input += 360;
        console.log(input)
        
    }}
}


vinkel360(-22);


