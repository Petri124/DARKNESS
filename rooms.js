var clickcounter=0;
var current_roomtype ="livingroom";
const rooms = ["attic","bedroom","kitchen","fronthall","basement", "livingroom"];
const Nroom = [4, 8,12,16,20,0];

//main control + get new roomtype
function RandomRoomGen(){
    let N;
    let R;
    let roomtype;
    do {
        R = Math.floor(Math.random() * 6);
        roomtype= rooms[R];
        N= Nroom[R];
      }
      while (roomtype == current_roomtype);
    generate(roomtype, N);
    current_roomtype= roomtype;
}

//generate new room
function imagemake(roomtype,sel,addon,fl){
      //initializations
    if(fl==false){
        if(safe==false){
            Sanity_shift(-20,0);
        }
        else{
            Sanity_shift(5,50);
        }
    }
    clickcounter = 0;
    overtime=1;
    //current_roomtype= roomtype;
    light_out();
    hitbox_locate(sel, addon);
    let source;
    if(sel!=="clear"){
    source= "monster"+sel;
    safe=false;
    }
    else{
    source= sel;
    safe=true;
    }
    //document.getElementById('safeornah').innerHTML= safe;

    //imagebuilder
    let lightsource= roomtype+"/"+source+"_light.jpg";
    let darksource= roomtype+"/"+source+"_dark.jpg";
    //document.getElementById('namedisplay').innerHTML="images displayed: "+lightsource+" ,"+darksource;
    document.getElementById('light').src= lightsource;
    document.getElementById('dark').src= darksource;
}


//new room image control
function generate(roomtype, addon){
  //  document.getElementById("lightpercent").innerHTML= "light percent: "+percent+"%";
   // document.getElementById("clickdisplay").innerHTML= "click display: "+clickcounter;
    let sel= room_select();
imagemake(roomtype,sel,addon,false);
} 


//get room status
    function room_select(){
let g = Math.floor(Math.random() * 2);
//alert(g);
if(g==0){
return "clear";
}
else{
    let roomnum = Math.floor(Math.random() * 4)+1;
    //let p= "monster"+roomnum;
    return roomnum;
}
}


//endgame
function gameover(endscreen){
    document.location=endscreen;
    clickcounter= 0;
    current_roomtype ="livingroom";
    sanity_cap=50;
    SanityDisplay= 100;
    flashbattery=100;
    cap = 50;
    percent= 0;
    safe=true;
    timeCount= 10;
    Countdown;
    ectometer_count=0;
    overtime=1;
}
