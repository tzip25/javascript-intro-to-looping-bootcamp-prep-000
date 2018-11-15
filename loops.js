var arr = `I am ${i} strange loops.`;

function forLoop(arr) {
   for (let i = 0; i < 25; i++) {
      if(i === 1) { 
  console.log(arr.slice(0,19) + arr.slice(20));
      } else {
        console.log(arr);
  }  
  }
return arr;
}


function whileLoop(a) {
 while (a > 0) {
  console.log(--a);
  }  
  return `done`;
}


 function incrementVariable(b) {
       b.splice(-1);
}

function doWhileLoop(b) {
do {
  incrementVariable(b);
} while (b.length > 0 );
return b;
}
