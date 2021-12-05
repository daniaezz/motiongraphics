let circle = document.getElementById("circle");
let cubest = document.getElementById("cubest");
let cubend = document.getElementById("cubend");
let cuberd = document.getElementById("cuberd");
let cubeth = document.getElementById("cubeth");
let body = document.querySelector("body");
var bgColour = 0;

circle.addEventListener("mouseover", ()=>{
  circle.style.transform = "scale(1.5)"

  cubest.style.visibility = "visible";
  cubend.style.visibility = "visible";
  cuberd.style.visibility = "visible";
  cubeth.style.visibility = "visible";

  document.getElementById("containerst").style.animationName = "first";
  document.getElementById("containernd").style.animationName = "second";

  setTimeout(()=>{
    document.getElementById("containerst").style.transform = "scale(1)";
    document.getElementById("containernd").style.transform = "scale(1)";
  },100);

  setTimeout( ()=>{
    document.getElementById("containerrd").style.animationName = "third";
    document.getElementById("containerth").style.animationName = "fourth";
    document.getElementById("containerrd").style.transform = "scale(1)";
    document.getElementById("containerth").style.transform = "scale(1)";
  },1250);

  });

circle.addEventListener("mouseout", ()=>{
  circle.style.transform = "none";
});

// cubest.addEventListener("mouseover",()=>{
//   cubest.style.animationPlayState = "paused";
//
//   cubest.addEventListener("mousedown", (e)=>{
//     cubest.style.animationDuration = "0s";
//     const x = e.clientX;
//     const y = e.clientY;
//     window.addEventListener("mousemove", rotateCube);
//     function rotateCube(e){
//       cubest.style.transform = `
//       rotateX(${(y-e.clientY)/4}deg)
//       rotateY(${(e.clientX-x)/4}deg)`;
//       body.style.cursor = "grabbing";
//     }
//
//     window.addEventListener("mouseup", ()=>{
//       window.removeEventListener("mousemove", rotateCube);
//       body.style.cursor = "context-menu";
//     });
//   });
// });


//this is not useless do not change this !!!!!!

circle.addEventListener("dblclick", ()=>{
  if (bgColour<1){
    document.getElementById("circle2").style.visibility="visible";
    document.getElementById("circle2").style.animationName = "extendBg";
    circle.style.animationName="circle2Anim";
    body.style.overflow ="hidden";
    bgColour = 1;
  }
  else{
    document.getElementById("circle2").style.animationName = "bgBack";
    // document.getElementById("circle2").style.animationDuration = "0.8s";
    setTimeout(()=>{
      circle.style.animationName = "circleBack";
    },200);
    bgColour =0;
  }
});

// cubest.addEventListener("mouseout", ()=>{
//   cubest.style.animationPlayState = "running";
// });
