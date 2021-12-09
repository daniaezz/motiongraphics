//rat behaviour
//neeeed to clean up this code :(
//this is a calll for help
//these comments are my diary and here to keep me sane

//credit to this one obscure youtube video that helped me make the cubes, their brain is big
// said video --> https://www.youtube.com/watch?v=TMK8rwFk9Ss&t=63s&ab_channel=QuickCodingTuts

let circle = document.getElementById("circle");
let cubest = document.getElementById("cubest");
let cubend = document.getElementById("cubend");
let cuberd = document.getElementById("cuberd");
let cubeth = document.getElementById("cubeth");
let body = document.querySelector("body");
var bgColour = 0;
var aniColour = 0; //i dont remember what aniColour stood for but i assume animation colour?? that kinda doesnt make sense tho
let spinny = document.getElementById("spinny3d")
let containerst = document.getElementById("containerst")
let containernd = document.getElementById("containernd")
let containerrd = document.getElementById("containerrd")
let containerth = document.getElementById("containerth")

//stop it, get some help

circle.addEventListener("mouseover", ()=>{
  if (aniColour==0){
  setTimeout( ()=>{
    aniColour = 1;
    circle.style.cursor="pointer";
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
//the size of my brain, how did i think of this

window.addEventListener("scroll", ()=>{
  console.log("in scroll event");
  if (aniColour==1){
      console.log("trigger scroll animation");

      document.getElementById("circle3").style.display = "none";
      document.getElementById("projects").style.display = "none";
      spinny.style.visibility="visible";
      document.getElementById('skrol').style.display = "none";
      document.getElementById("skrolText").style.display = "none";
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

      setTimeout(()=>{
        cubest.style.visibility = "hidden";
        cubend.style.visibility = "hidden";
        cuberd.style.visibility = "hidden";
        cubeth.style.visibility = "hidden";
        body.style.backgroundColor = "#ACACDE";
        circle.style.visibility = "hidden";
        body.style.overflow = "visible";
        aniColour = 2;
        console.log(aniColour +"this is the value for anicolour after scrolling once")
        spinny.style.transform = "translateX(-18em) translateY(0em) rotateZ(360deg) rotate3d(0,0.1,1, 90deg)";
      }, 800)

      circle.style.animationDuration = "0.7s";
      document.getElementById("circle2").style.animationDuration = "0.7s";
      // circle.style.animationDelay = "0.s"
      document.getElementById("circle2").style.animationName ="about2";
      circle.style.animationName = "about";

      spinny.style.animationName="spinny";
      // document.getElementById("bouncy").style.animationName="bouncy";
      document.getElementById("aboutText").style.animationName="text";
      setTimeout(()=>{
        document.getElementById("aboutText").style.visibility="visible";
      },500);
      // document.getElementById("aboutText").style.visibility="visible";
    }
    else if (aniColour==2){
      // spinny.style.zIndex = "20";
      body.style.overflow = "hidden";
      console.log("animation active or is supposed to be active")
      circle.style.visibility = "visible";
      circle.style.animationName="aboutRev";
      setTimeout(()=>{
        body.style.backgroundColor = "#27476E";
      }, 100);
      document.getElementById("aboutText").style.animationDuration = "1.8s";
      document.getElementById("aboutText").style.animationDirection = "reverse";
      document.getElementById("aboutText").style.animationName="text";
      spinny.style.animationName="spinnyRev";
      







    }

    else {
      {
        console.log(" scroll animation not ready");
      }
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


document.getElementById("spinTheSpin").addEventListener("mousedown", function (e){
  const x = e.clientX;
  const y = e.clientY;

  window.addEventListener("mousemove", moveRotate);

  function moveRotate(e){
      document.getElementById("spinTheSpin").style.transform = `
      rotateX(${(y-e.clientY)/2}deg)
      rotateY(${(e.clientX-x)/2}deg)`;
      body.style.cursor = "grabbing";
  }

  window.addEventListener("mouseup", function(){
    window.removeEventListener("mousemove", moveRotate);
    body.style.cursor = "context-menu";
  });
});


// document.querySelectorAll("*").forEach(element => {
//   element.addEventListener("scroll", ({target}) => console.log("scrolling: ", target, target.id, target.parent, target.parent.id))
// });
//

//make everything disapperar and set the background colour to the same one as circle3 then enable the scroll function to reverse the animation
