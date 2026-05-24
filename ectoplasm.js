const letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"] 
var timeCount= 10;
var Countdown;
var ectometer_count=0;
var DisplayTimer;
let overtime=1;

// objects
class object{
  constructor(name, type, effect){
    this.name = name;
    this.type = type;
    this.effect = effect;
    }
    obj_effect(){
      switch (this.type){
        case "light":
           Flashlight_shift(this.effect,100);
            break;
        case "sanity":
          Sanity_shift(this.effect,100)
          break;
      }
    }
    Hide_print(){
      //alert("clear");
      document.getElementById('announcement').style.display= "none";
      document.getElementById('obj').innerHTML="";
      }
      
    Print_obj(){
      document.getElementById('announcement').style.display= "flex";
      document.getElementById('obj').innerHTML=this.name;
      document.getElementById('announcement').classList.add("notif");
      const myTimeout = setTimeout(this.Hide_print, 1500);
     //alert(this.name+"-"+this.type+"-"+this.effect); 
    }
    Print_objNULL(){
      alert("nothing:(");
      }
  }
  
  
const Battery = new object("battery", "light" ,20)
const Weird_Doll = new object("Weird Doll", "sanity" ,5)
const Cookie = new object("Weird Doll", "sanity" ,10);

const Items = [Battery, Weird_Doll, Cookie]
function inspect(){
    let gain = Math.floor((Math.random() * 3)+1);
    object_get();
    ectometer_count= ectometer_count+gain;
    if(overtime>0){
        overtime--;
    }
    else{ 
        Sanity_shift(-10,0)
    }
    document.getElementById("ectometer percent").innerHTML = ectometer_count*2+"%";
    drawbar(ectometer_count, "ectometer");
    if(ectometer_count>=50){
        //alert("win");
        gameover('winscreen.html');
    }
}


//get object
  function object_get(){
     let objcheck =Math.floor(Math.random() * 6);
       //alert(objcheck);
    if(objcheck <3){
      //alert("get battery")
      Items[objcheck].obj_effect();
      Items[objcheck].Print_obj();
      }
    else{
      //Battery.Print_objNULL();
      }
  }


/*
function inspect(){
    if(overtime>0){
        overtime--;
    }
    else{ 
        Sanity_shift(-10,0)
    }
    EctoSetup();
    document.getElementById("inspectbutton").style.display= "none";
    Countdown = setInterval(DisplayTimer,1000);
    document.getElementById("inspect").style.zIndex= 5;
}

function EctoSetup(){
    document.getElementById("inspect").style.padding= "10%";
    document.getElementById("ectoplasm").style.display= "block";
    document.getElementById("Timer").style.display= "block";
}
function DisplayTimer(){
    if(timeCount>0){
    timeCount--;
    document.getElementById("Timer").innerHTML = timeCount;
    }
    else{
        clearInterval(Countdown);
        //endpoint trigger here
        TimesUp();
    }
}
function TimesUp(){
    document.getElementById("ectoplasm").style.display= "none";
    document.getElementById("Timer").style.display= "none";
    timeCount=10;
    document.getElementById("inspectbutton").style.display= "block";
    document.getElementById("inspect").style.padding = "0%";
    document.getElementById("inspect").style.paddingTop = "25%";
    document.getElementById("inspect").style.paddingLeft = "40%";
    document.getElementById("inspect").style.zIndex= 3;
}
function EctoGen(){
    let item= document.getElementById("ectoplasm");
    item.style.display= 'block';
    let ecposX = Math.floor(Math.random() * 80);
    let ecposY = Math.floor(Math.random() * 66);
    let newletter= Math.floor(Math.random() * 26);
    document.getElementById("ectoplasm").innerHTML= letters[newletter];
    placer(ecposX,ecposY,item);
    ectometer_count++;
    document.getElementById("ectometer percent").innerHTML = ectometer_count*2+"%";
    drawbar(ectometer_count, "ectometer");
}
function placer(xval, yval, item){
    item.style.top= yval+"%";
    item.style.left= xval+"%";
    }*/
/*
function placer(xval, yval, item){
    item.style.top = yval+"%";
    item.style.left = xval+"%";
    }

function TimerDisplay(){
    countdown--;
    document.getElementById("CountDown").innerHTML = countdown;
}
function endpoint(){
    clearTimeout(Timer);
    clearInterval(intva);
    removeEventListener('keydown');
    document.getElementById("inspect").style.display= "none";
}

//removeEventListener(type, listener)
document.addEventListener('keydown', (e)=>{
   let current_lett= document.getElementById("letter").innerHTML;
    if(event.key == "key"+current_lett){
        ecto_select();
    }
});

function ecto_select(){
    let item= document.getElementById("ectoplasm");
    item.style.display= 'block';
    let ecposX = Math.floor(Math.random() * 95);
    let ecposY = Math.floor(Math.random() * 95);
    let newletter= Math.floor(Math.random() * 26);
    document.getElementById("ectoplasm").innerHTML= letters[newletter];
    placer(ecposX,ecposY,item);
}*/