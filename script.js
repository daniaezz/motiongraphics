var circle = document.getElementById("circle");
var cubest = document.getElementById("cubest");
var cubend = document.getElementById("cubend");
var cuberd = document.getElementById("cuberd");
var cubeth = document.getElementById("cubeth");
var body = document.querySelector("body");
var bgColour = 0;
var aniCon = 0; //stands for animation condition
var spinny = document.getElementById("spinny3d");
var containerst = document.getElementById("containerst");
var containernd = document.getElementById("containernd");
var containerrd = document.getElementById("containerrd");
var containerth = document.getElementById("containerth");
var documentation = false;
// var animationStart = false;

//NOTE TO SELF: TO FIX THE PROJECT AND SHADOW APPEARING, MAKE THE BG A CIRCLE THAT TAKES OVER AND MAKE THEIR Z-INDEXES LOWER


window.addEventListener("load", ()=>{
  setTimeout( ()=>{ //timeout used so that the following only happens after inital animation is done
    circle.style.cursor="pointer";
    document.getElementById("circle3").style.animationName = "shadow"; //makes the shadow for the circle start animating
    document.getElementById("projects").style.visibility = "visible"; //heading appears
    document.getElementById("projects").style.animationName = "projects";
    console.log("projects is visible ansn animation is set");
    document.getElementById("skrolText").style.visibility = "visible";
    document.getElementById("skrol").style.visibility = "visible";
    document.getElementById("skrol").style.animation= "skrolImg 0.4s linear .1s infinite alternate";
    // document.getElementById("skrol").style.animationName = "projects";
    document.getElementById("skrolText").style.animationName = "projects";
    body.style.overflow="visible";
    setTimeout(()=>{ //enables scrolling after all animations are done
      document.getElementById("projects").style.animationName = ""; //removes the animation name so it can be replayed later
      console.log("project animation is removed");
    },1000)
  },2500);

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

    setTimeout(()=>{
      aniCon = 1;
    },2500);

});

circle.addEventListener("mouseover", ()=>{
  circle.style.transform = "scale(1.5)"
  if (aniCon>0){
    document.getElementById("docHint").style.visibility = "visible";
  }
});

circle.addEventListener("mouseout", ()=>{
  circle.style.transform = "none";
  document.getElementById("docHint").style.visibility = "hidden";
});



circle.addEventListener("click", ()=>{
  if (bgColour<1 && aniCon>0){
    documentation = true;
    document.getElementById("circle2").style.visibility="visible";

    setTimeout(()=>{
      document.getElementById("projects").innerHTML = "D o c u m e n t a t i o n";
      document.getElementById("docHint").innerHTML = "P r o j e c t s";
      document.getElementById("amff").href = "https://github.com/daniaezz/Assignment1";
      document.getElementById("acomix").href = "https://github.com/daniaezz/COMIX-STRIP";
      document.getElementById("asound").href = "https://github.com/daniaezz/unusual";
      document.getElementById("avideoh").href = "https://github.com/dweggyness/CommLab-Assignment4";
    },100);
    document.getElementById("circle2").style.animationName = "extendBg";
    circle.style.animationName="circle2Anim";
    document.getElementById("circle3").style.backgroundColor = "#27476E";
    bgColour = 1;
    setTimeout(()=>{
      body.style.backgroundColor = "#EF7A85"; //changes bg colour to pink
      // document.getElementById("circle2").style.visibility="hidden";
    },500);
  }
  else if (bgColour>0){
    document.getElementById("circle2").style.visibility="visible";

    setTimeout(()=>{
      document.getElementById("projects").innerHTML = "P r o j e c t s";
      document.getElementById("docHint").innerHTML = "D o c u m e n t a t i o n";
      document.getElementById("amff").href = "https://daniaezz.github.io/Assignment1/";
      document.getElementById("acomix").href = "https://daniaezz.github.io/COMIX-STRIP/";
      document.getElementById("asound").href = "https://daniaezz.github.io/unusual/";
      document.getElementById("avideoh").href = "https://dweggyness.github.io/CommLab-Assignment4/";

    },100);
    documentation = false;
    document.getElementById("circle2").style.animationName = "bgBack";
    document.getElementById("circle3").style.backgroundColor = "white";

    setTimeout(()=>{
      body.style.backgroundColor = "#27476E"; //changes bg colour back to blue
    },100)

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
  if (aniCon==1){
      console.log("trigger scroll animation");

      document.getElementById("circle3").style.display = "none";
      document.getElementById("circle3").style.animationName = ""; //removes animation name so it can be replayed later
      // console.log("animation for the circle is set to null");
      document.getElementById("projects").style.display = "none";
      console.log("display of projects is set to none, circle3 is none and animation is null");
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
        aniCon = 2;
        document.getElementById("cubes").style.visibility = "hidden";
        console.log(aniCon +"this is the value for aniCon after scrolling once");
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
      document.getElementById("aboutText").style.animationDirection = "normal";
      document.getElementById("circle2").style.visibility = "hidden";

      setTimeout(()=>{
        document.getElementById("aboutText").style.visibility="visible";

        // window.scrollTo(0,0);

      },500);
      // document.getElementById("aboutText").style.visibility="visible";
    }
    else if (aniCon==2){
      // spinny.style.zIndex = "20";
      document.getElementById("circle2").style.visibility = "hidden";

      document.getElementById("cubes").style.visibility = "visible";
      // document.getElementById("circle2").style.animationName = "about2";
      body.style.overflow = "hidden";
      console.log("animation active or is supposed to be active");
      circle.style.visibility = "visible";

      setTimeout(()=>{
        if (!documentation){
          body.style.backgroundColor = "#27476E";
        }
        else{
          body.style.backgroundColor = "#EF7A85";
        }
      },200);

      if (!documentation){
        circle.style.animationName="aboutRev";
      }
      else{
        circle.style.animationName="about2rev";
      }

      // else{
      //   // document.getElementById("circle3").style.backgroundColor ="#27476E";
      //   // circle.style.backgroundColor = "#27476E";
      // }

      setTimeout(()=>{
        spinny.style.visibility = "hidden";
        spinny.style.transform = "translateX(-18em) translateY(-30em)  rotateZ(130deg) rotate3d(0,0.1,1, 90deg)";
        document.getElementById('skrol').style.display = "block";
        document.getElementById("skrolText").style.display = "block";
      },500);
      document.getElementById("aboutText").style.animationDuration = "1.8s";
      document.getElementById("aboutText").style.animationDirection = "reverse";
      document.getElementById("aboutText").style.animationName="text";
      spinny.style.animationName="spinnyRev";

      cubest.style.visibility = "visible";
      cubend.style.visibility = "visible";
      cuberd.style.visibility = "visible";
      cubeth.style.visibility = "visible";
      // circle.style.visibility = "visible";

      body.style.overflow = "visible";


      containerst.style.animationName = "downstRev";
      containerth.style.animationName = "downthRev";
      containerrd.style.animationName = "downrdRev";
      containernd.style.animationName = "downndRev";

      containerst.style.animationDuration = "1s";
      containerth.style.animationDuration = "1s";
      containerrd.style.animationDuration = "0.8s";
      containernd.style.animationDuration = "0.8s";

      containerst.style.animationTimingFunction="ease-out";
      containerth.style.animationTimingFunction="ease-out";
      containerrd.style.animationTimingFunction="ease-out";
      containernd.style.animationTimingFunction="ease-out";

      document.getElementById("circle3").style.display = "block";
      document.getElementById("circle3").style.animationName = "shadow";
      document.getElementById("projects").style.animationName = "projects";
      document.getElementById("projects").style.display = "block";

      // document.getElementById('skrol').style.animationName = "projects";
      // document.getElementById("skrolText").style.animationName = "projects";


        setTimeout(()=>{
          document.getElementById("aboutText").style.animationName = "";
          document.getElementById("aboutText").style.visibility = "hidden";
          aniCon = 1;},3000);
    }

    else {
      {
        console.log(" scroll animation not ready");
      }
    }
});


containerst.addEventListener("mouseover", ()=>{
  if (aniCon>0){
    document.getElementById("mff").style.visibility="visible";
  }
});

containerst.addEventListener("mouseout", ()=>{
  document.getElementById("mff").style.visibility="hidden";
});

containernd.addEventListener("mouseover", ()=>{
  if (aniCon>0){
    document.getElementById("videoh").style.visibility="visible";
  }
});

containernd.addEventListener("mouseout", ()=>{
  document.getElementById("videoh").style.visibility="hidden";
});

containerrd.addEventListener("mouseover", ()=>{
  if (aniCon>0){
    document.getElementById("sound").style.visibility="visible";
  }
});

containerrd.addEventListener("mouseout", ()=>{
  document.getElementById("sound").style.visibility="hidden";
});

containerth.addEventListener("mouseover", ()=>{
  if (aniCon>0){
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



function hehe(){
  alert("dont call me >:(");
}
