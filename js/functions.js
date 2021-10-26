const hover = document.querySelector('.overlay')
const penguinDetect = document.querySelector('.container1')
const minaTransition = document.querySelector('.minaTrans')
let destination = document.getElementById("typedtext")
penguinDetect.addEventListener("mouseover",  () =>{
  minaTransition.style.visibility = 'hidden'
});

outMouse = () =>{
  minaTransition.style.visibility = 'visible'
};

//ANIMATION OF TEXT
const quote = ["Keep working hard, do the best that you can, and everything will fall into place. -Mina"]
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type(){
  if(count === quote.length){
    count = 0;
  }
  currentText = quote[count];
  letter = currentText.slice(0 , ++index);
  destination.textContent = letter;
  if(letter === currentText.length){
    count++;
    index = 0 ;
  }
  setTimeout(type, 50);
}());


// DATABASE PART IN THE NEXT VERSION




// let aText = [
//     "“Keep working hard, do the best that you can, and everything will fall into place." , 
//    "<h4>-Mina</h4>"]
 
    
  
    
    // if(User.value.length === 0 || 
    //     Psw.value.length ===0){
    //         msg.innerHTML = errorText;
    //      console.log("ERror")   
    // }else{
    //     if(User.value == "Minacute123" && Psw.value == "sharon123"){
    //         window.alert("Success Penguin");
    //     }
    // }


