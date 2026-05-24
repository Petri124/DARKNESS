
const mxval = [15, 45, 80, 39, 50, 24, 39, 40, 35, 9, 0, 80, 0, 23, 37, 68, 25, 39,50,4, 35,44,10,75];
const myval = [191, 438, 20, 221, 189, 290, 0, 223, 451, 195, 211, 221, 498, 161, 170, 380,340,382,300,143,370,251,114,98];
//0-3->livingroom, 4-7->attic, 8-11->bedroom, 12-15->kitchen 16-19->fronthall 20-23->basement
function hitbox_locate(roomsel, addon){
    //alert(roomsel);
    if(roomsel!=="clear"){  
        roomsel=roomsel+addon;
        document.querySelector('#hitbox').style.display= "block";  
        let monsterY= myval[roomsel-1];
        let monsterX= mxval[roomsel-1];
        //document.getElementById("hb").innerHTML= monsterX+", "+monsterY;
        document.querySelector('#hitbox').style.top = monsterY+"px";
        document.querySelector('#hitbox').style.left = monsterX+"%";
    }
    else{
        document.querySelector('#hitbox').style.display= "none"; 
    }
}
function hitbox_confirm(){
    if(lighton==true){
        //document.getElementById('hbconfirm').innerHTML= "hit";
        hit_action();
    }
    else{
       // document.getElementById('hbconfirm').innerHTML= "miss";
    }

}
function MouseoverRepeater(action){
    let checker;
    let hitbox = document.getElementById('hitbox');
    hitbox.addEventListener('mouseover', (e)=>{
        checker = setInterval(action, 100);
        
    });
    hitbox.addEventListener('mouseout', (e)=> {
        clearInterval(checker);
        action;
        //document.getElementById('hbconfirm').innerHTML= "miss";
    });
}
var op=0;
function hit_action(){
let add=0;
safe=true;
setTimeout(imagemake, 155, current_roomtype, 'clear', add, true)
setTimeout(MonsterExit, 100);
//imagemake(current_roomtype, 'clear', add);
//alert("room is now safe");
}
function MonsterExit(){
fade_in();
setTimeout(fade_out, 100);
}
function fade_out(){
    op=1;
    var timer = setInterval(function () {
        if (op <=0.1){
            clearInterval(timer);
            document.getElementById("fade_fx").style.display = 'none';
        }
	    op= op-0.1;
        document.getElementById("fade_fx").style.opacity = op;
    }, 50);
}

function fade_in() {
    op=0;
    document.getElementById("fade_fx").style.display = 'block';
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
	    op= op+0.1;
        document.getElementById("fade_fx").style.opacity = op;
    }, 50);
}