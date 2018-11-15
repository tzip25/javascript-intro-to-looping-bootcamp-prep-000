
function forLoop(i) {
   for (let i = 0; i < 25; i++) {
      if(i === 1) { 
  return `I am ${i} strange loop.`;
      } else {
        return `I am ${i} strange loops.`;
  }  
  }
return i;
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
