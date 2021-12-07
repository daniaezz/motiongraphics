let circle = document.getElementById("circle");
let cubest = document.getElementById("cubest");
let cubend = document.getElementById("cubend");
let cuberd = document.getElementById("cuberd");
let cubeth = document.getElementById("cubeth");
let body = document.querySelector("body");
var bgColour = 0;
var aniColour = 0;

let containerst = document.getElementById("containerst")
let containernd = document.getElementById("containernd")
let containerrd = document.getElementById("containerrd")
let containerth = document.getElementById("containerth")


circle.addEventListener("mouseover", ()=>{
  if (aniColour<1){
  setTimeout( ()=>{
    aniColour = 1;
    document.getElementById("circle3").style.animationName = "shadow";
    document.getElementById("projects").style.visibility = "visible";
    document.getElementById("skrol").style.visibility = "visible";
    document.getElementById("skrolText").style.visibility = "visible";
    document.getElementById("projects").style.animationName = "projects";
    document.getElementById("skrol").style.animationName = "projects";
    document.getElementById("skrolText").style.animationName = "projects";
  },2500);

  circle.style.transform = "scale(1.5)"
  body.style.overflow="visible";

  cubest.style.visibility = "visible";
  cubend.style.visibility = "visible";
  cuberd.style.visibility = "visible";
  cubeth.style.visibility = "visible";

  containerst.style.animationName = "first";
  containernd.style.animationName = "second";
  // cubest.style.animationName = "cubest";
  setTimeout(()=>{
    containerst.style.transform = "scale(1)";
    containernd.style.transform = "scale(1)";
  },100);

  setTimeout( ()=>{
    containerrd.style.animationName = "third";
    containerth.style.animationName = "fourth";
    containerrd.style.transform = "scale(1)";
    containerth.style.transform = "scale(1)";
  },1250);
  }
  });

circle.addEventListener("mouseout", ()=>{
  circle.style.transform = "none";
  console.log(aniColour)
});

//this is not useless do not change this !!!!!!

circle.addEventListener("click", ()=>{
  if (bgColour<1 && aniColour>0){
    document.getElementById("circle2").style.visibility="visible";
    document.getElementById("circle2").style.animationName = "extendBg";
    circle.style.animationName="circle2Anim";
    document.getElementById("circle3").style.backgroundColor = "#27476E";
    document.getElementById("projects").innerHTML = "D o c u m e n t a t i o n";
    document.getElementById("amff").href = "https://github.com/daniaezz/Assignment1";
    document.getElementById("acomix").href = "https://github.com/daniaezz/COMIX-STRIP";
    document.getElementById("asound").href = "https://github.com/daniaezz/unusual";
    document.getElementById("avideoh").href = "https://github.com/dweggyness/CommLab-Assignment4";
    bgColour = 1;
  }
  else if (bgColour>0){
    document.getElementById("projects").innerHTML = "P r o j e c t s";
    document.getElementById("circle2").style.animationName = "bgBack";
    document.getElementById("circle3").style.backgroundColor = "white";
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
      document.getElementById("circle3").style.display = "none";
      document.getElementById("projects").style.visibility = "hidden";
      document.getElementById("spinny3d").style.visibility="visible";
      // document.getElementById("bouncy").style.visibility = "visible";

      body.style.overflow="hidden";
      containerst.style.animationName = "downst";
      containerst.style.animationDuration = "0.8s";
      containerst.style.animationFillMode = "forwards";
      containerst.style.animationTimingFunction = "ease-in";

      containerth.style.animationName = "downth";
      containerth.style.animationDuration = "0.8s";
      containerth.style.animationFillMode = "forwards";
      containerth.style.animationTimingFunction = "ease-in";

      containerrd.style.animationName = "downrd";
      containerrd.style.animationDuration = "1s";
      containerrd.style.animationFillMode = "forwards";
      containerrd.style.animationTimingFunction = "ease-in";

      containernd.style.animationName = "downnd";
      containernd.style.animationDuration = "1s";
      containernd.style.animationFillMode = "forwards";
      containernd.style.animationTimingFunction = "ease-in";

      circle.style.animationDuration = "0.7s";
      document.getElementById("circle2").style.animationDuration = "0.7s";
      // circle.style.animationDelay = "0.s"
      document.getElementById("circle2").style.animationName ="about2";
      circle.style.animationName = "about";

      document.getElementById("spinny3d").style.animationName="spinny";
      // document.getElementById("bouncy").style.animationName="bouncy";
      document.getElementById("aboutText").style.animationName="text";
      setTimeout(()=>{
        document.getElementById("aboutText").style.visibility="visible";
      },500);
      // document.getElementById("aboutText").style.visibility="visible";
    }
});


containerst.addEventListener("mouseover", ()=>{
  if (aniColour>0){
    document.getElementById("mff").style.visibility="visible";
  }
});

containerst.addEventListener("mouseout", ()=>{
  document.getElementById("mff").style.visibility="hidden";
});

containernd.addEventListener("mouseover", ()=>{
  if (aniColour>0){
    document.getElementById("videoh").style.visibility="visible";
  }
});

containernd.addEventListener("mouseout", ()=>{
  document.getElementById("videoh").style.visibility="hidden";
});

containerrd.addEventListener("mouseover", ()=>{
  if (aniColour>0){
    document.getElementById("sound").style.visibility="visible";
  }
});

containerrd.addEventListener("mouseout", ()=>{
  document.getElementById("sound").style.visibility="hidden";
});

containerth.addEventListener("mouseover", ()=>{
  if (aniColour>0){
    document.getElementById("comix").style.visibility="visible";
  }
});

containerth.addEventListener("mouseout", ()=>{
  document.getElementById("comix").style.visibility="hidden";
});


//hehe omg its micheal jackson



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
