function sum (numbers) {
    "use strict"
  
  if (numbers ==  false){
    return 0
  }
   else {
     
     let newNumbers= numbers.reduce((accumulator,currentValue) => accumulator + currentValue);
    return newNumbers
     
   }
  

};

console.log(sum([1,2,3]))