let sanity_cap=50;
let SanityDisplay= 100;
/*
function loss(n){
    clear('sanity');
    sanity_cap=sanity_cap-n;
    SanityDisplay= SanityDisplay-(n*2)
    drawbar(sanity_cap,'sanity');
    document.getElementById("sanity percent").innerHTML= SanityDisplay+"%";
}
function gain(n){
    let gain;
    if(sanity_cap!==50){
        gain=n;
    }
    else{
        gain=0;
    }
    clear('sanity');
    sanity_cap=sanity_cap+gain;
    SanityDisplay= SanityDisplay+(gain*2)
    drawbar(sanity_cap,'sanity');
    document.getElementById("sanity percent").innerHTML= "sanity: "+SanityDisplay+"%";
}*/
function Sanity_shift(n,max){
    let shift;
    if(sanity_cap!==max){
        shift=n;
    }
    else{
        shift=0;
    }
    clear('sanity');
    
    sanity_cap=Math.min(sanity_cap+shift, 100);
    SanityDisplay= Math.min(SanityDisplay+(shift*2),100)
    if(sanity_cap<=0){
        //alert("loss");
        gameover('deathscreen.html');
    }
    drawbar(sanity_cap,'sanity');
    document.getElementById("sanity percent").innerHTML= SanityDisplay+"%";
}

//canavas function
function drawbar(a,id){
    let canvas = document.getElementById(id);
    //document.getElementById("capacity").innerHTML= "capacity: "+cap;
    let ctx = canvas.getContext("2d");
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, a, 1);
    }

function clear(id){
    let canvas = document.getElementById(id);
    let ctx = canvas.getContext("2d"); 
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, 50, 1);
}