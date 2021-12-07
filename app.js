let circle = document.getElementById("circle");
let cubest = document.getElementById("cubest");
let cubend = document.getElementById("cubend");
let cuberd = document.getElementById("cuberd");
let cubeth = document.getElementById("cubeth");
let body = document.querySelector("body");
var bgColour = 0;
var aniColour = 0;

circle.addEventListener("mouseover", ()=>{
  setTimeout( ()=>{
    aniColour = 1;
  },2500);

  circle.style.transform = "scale(1.5)"
  body.style.overflow="visible";

  cubest.style.visibility = "visible";
  cubend.style.visibility = "visible";
  cuberd.style.visibility = "visible";
  cubeth.style.visibility = "visible";

  document.getElementById("containerst").style.animationName = "first";
  document.getElementById("containernd").style.animationName = "second";
  // cubest.style.animationName = "cubest";
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
  console.log(aniColour)
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

circle.addEventListener("click", ()=>{
  if (bgColour<1 && aniColour>0){
    document.getElementById("circle2").style.visibility="visible";
    document.getElementById("circle2").style.animationName = "extendBg";
    circle.style.animationName="circle2Anim";
    // body.style.overflow ="hidden";
    bgColour = 1;
  }
  else if (bgColour>0){
    document.getElementById("circle2").style.animationName = "bgBack";
    // document.getElementById("circle2").style.animationDuration = "0.8s";
    setTimeout(()=>{
      circle.style.animationName = "circleBack";
    },200);

    setTimeout(()=>{
      document.getElementById("circle2").style.visibility="hidden";
    }, 201);
    bgColour =0;
}
});

// cubest.addEventListener("mouseout", ()=>{
//   cubest.style.animationPlayState = "running";
// });



// add a var that changes when the animation that plays at the begining ends and make a condition so that the scroll animation only works when the first animation ended.

window.addEventListener("scroll", ()=>{
  if (aniColour>0){
      document.getElementById("spinny3d").style.visibility="visible";
      document.getElementById("bouncy").style.visibility = "visible";

      body.style.overflow="hidden";
      document.getElementById("containerst").style.animationName = "downst";
      document.getElementById("containerst").style.animationDuration = "0.8s";
      document.getElementById("containerst").style.animationFillMode = "forwards";
      document.getElementById("containerst").style.animationTimingFunction = "ease-in";

      document.getElementById("containerth").style.animationName = "downth";
      document.getElementById("containerth").style.animationDuration = "0.8s";
      document.getElementById("containerth").style.animationFillMode = "forwards";
      document.getElementById("containerth").style.animationTimingFunction = "ease-in";

      document.getElementById("containerrd").style.animationName = "downrd";
      document.getElementById("containerrd").style.animationDuration = "1s";
      document.getElementById("containerrd").style.animationFillMode = "forwards";
      document.getElementById("containerrd").style.animationTimingFunction = "ease-in";

      document.getElementById("containernd").style.animationName = "downnd";
      document.getElementById("containernd").style.animationDuration = "1s";
      document.getElementById("containernd").style.animationFillMode = "forwards";
      document.getElementById("containernd").style.animationTimingFunction = "ease-in";

      circle.style.animationDuration = "0.7s";
      document.getElementById("circle2").style.animationDuration = "0.7s";
      // circle.style.animationDelay = "0.s"
      document.getElementById("circle2").style.animationName ="about2";
      circle.style.animationName = "about";

      document.getElementById("spinny3d").style.animationName="spinny";
      document.getElementById("bouncy").style.animationName="bouncy";
      document.getElementById("aboutText").style.animationName="text";
      setTimeout(()=>{
        document.getElementById("aboutText").style.visibility="visible";
      },500);
      // document.getElementById("aboutText").style.visibility="visible";
    }
});
