const hover = document.querySelector('.overlay')
const penguinDetect = document.querySelector('.container1')
const minaTransition = document.querySelector('.minaTrans')
let destination = document.getElementById("typedtext")
hover.addEventListener("mouseover",  typewriter)
penguinDetect.addEventListener("mouseover",  () =>{
  minaTransition.style.visibility = 'hidden'
});
 outMouse = () =>{
  minaTransition.style.visibility = 'visible'
};

// const quote = ["Keep working hard, do the best that you can, and everything will fall into place. <h4>-Mina</h4>"]
// let count = 0;
// let index = 0;
// let currentText = "";
// let letter = "";

// (function type(){
//   if(count === quote.length){
//     count = 0;
//   }
//   currentText = quote[count];
//   letter = currentText.splice(0 , ++index);
//   destination.textContent = letter;
//   if(letter === currentText.length){
//     count++;
//     index = 0 ;
//   }
//   setTimeout(type, 400);
// }());


// our element




var aText = new Array(
    "“Keep working hard, do the best that you can, and everything will fall into place." , 
   "<h4>-Mina</h4>"
    );
    var iSpeed = 100; // time delay of print out
    var iIndex = 0; // start printing array at this posision
    var iArrLength = aText[0].length; // the length of the text array
    var iScrollAt = 20; // start scrolling up at this many lines
     
    var iTextPos = 0; // initialise text position
    var sContents = ''; // initialise contents variable
    var iRow; // initialise current row
  
    function typewriter()
    {
     sContents =  ' ';
     iRow = Math.max(0, iIndex-iScrollAt);
  
     
     while ( iRow < iIndex ) {
      sContents += aText[iRow++] + '<br />';
     }
     destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "|";
     if ( iTextPos++ == iArrLength ) {
      iTextPos = 0;
      iIndex++;
      if ( iIndex != aText.length ) {
       iArrLength = aText[iIndex].length;
       setTimeout("typewriter()", 500);
      }
      if ( iIndex === aText.length ) {
        
       }
     } else {
      setTimeout("typewriter()", iSpeed);
     }

    }
  
    
  
    
    // if(User.value.length === 0 || 
    //     Psw.value.length ===0){
    //         msg.innerHTML = errorText;
    //      console.log("ERror")   
    // }else{
    //     if(User.value == "Minacute123" && Psw.value == "sharon123"){
    //         window.alert("Success Penguin");
    //     }
    // }


