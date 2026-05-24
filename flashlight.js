var flashbattery=100;
var cap = 50;
var percent= 0;
var safe=true;
var flash_use= false;
document.addEventListener("mousemove", (e)=>{
let Mx = e.pageX;
let My = e.pageY;
//document.getElementById('display').innerHTML= Mx+", "+My;
document.querySelector('#light').style.clipPath = "circle("+percent+"% at "+e.pageX+"px "+e.pageY+"px)";
});

function lightswitch(){
clickcounter++;
//document.getElementById("clickdisplay").innerHTML= "click display: "+clickcounter;
    if(clickcounter%2==0){
    light_out();
}
else{
    if(flashbattery!==0){
        light_on();
        Flashlight_shift(-5,0);
    }
    else{
    light_out();
    }
}
}

var lighton=false;
function light_on(){
  lighton=true;
document.querySelector('.room').style.cursor= "none";
//document.querySelector('#light').style.zIndex = 5;
document.querySelector('#light').style.clipPath = "circle(20%)";
percent= 20;

}

function light_out(){
  lighton=false;
//alert("function triggered");
  document.querySelector('.room').style.cursor= "pointer";
  document.querySelector('#light').style.clipPath = "circle(0%)";
 percent= 0;
}

function Flashlight_shift(n,max){
    let shift;
    if(flashbattery!==max){
        shift=n;
    }
    else{
        shift=0;
    }
    clear('battery');
    if(shift>0){
      flashbattery=Math.min(flashbattery+(shift*2), 100);
    }
    else{
      flashbattery=flashbattery+(shift*2);
      }
    cap=Math.min(cap+shift,50);
    drawbar(cap,'battery');
    document.getElementById("flashlight percent").innerHTML= flashbattery+"%";
}
