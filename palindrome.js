function palindrome(str) {
   let remove = /[\W_]/g;

   let lowerStr = str.toLowerCase().replace(remove, '');

   let reverseStr = lowerStr.split('').reverse().join('');
   
   
    return reverseStr === lowerStr;
   
    
    
  }
  console.log(palindrome("A man, a plan, a canal. Panama"));


  