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
  // $(".containernd").css("justify-self", "right");
  document.getElementById("containerst").style.animationName = "first";
  document.getElementById("containernd").style.animationName = "second";
  // cubest.style.animationName ="cubest"
  cubend.style.animationName ="cubend"

  setTimeout(()=>{
    document.getElementById("containerst").style.transform = "scale(1)";
    document.getElementById("containernd").style.transform = "scale(1)";
  },100);

  setTimeout( ()=>{
    document.getElementById("containerrd").style.animationName = "third";
    document.getElementById("containerth").style.animationName = "fourth";
    cuberd.style.animationName ="cuberd"
    cubeth.style.animationName ="cubeth"
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


circle.addEventListener("dblclick", ()=>{
  if (bgColour<1){
    document.getElementById("circle2").style.visibility="visible";
    document.getElementById("circle2").style.animationName = "extendBg";
    circle.style.animationName="circle2Anim";
    bgColour = 1;
  }
  else{
    document.getElementById("circle2").style.animationDirection = "reverse";
    document.getElementById("circle2").style.animationName = "extendBg";
    setTimeout(()=>{
      document.getElementById("circle2").style.transform="scale(0)"
    }, 3700);


    bgColour =0;
  }
});

// cubest.addEventListener("mouseout", ()=>{
//   cubest.style.animationPlayState = "running";
// });
