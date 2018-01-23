let number =22222


console.log(new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(number));