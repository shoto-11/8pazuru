function gameover(){
    /*var list = [   "b1"     
                "a2"     ,"c2",
                     "b3"     ];*/
    var array = ["a1","b1","c1",
                 "a2","b2","c2",
                 "a3","b3","c3"];
    if(document.getElementById("a1").textContent==1&&
       document.getElementById("b1").textContent==2&&
       document.getElementById("c1").textContent==3&&
       document.getElementById("a2").textContent==4&&
       document.getElementById("b2").textContent==5&&
       document.getElementById("c2").textContent==6&&
       document.getElementById("a3").textContent==7&&
       document.getElementById("b3").textContent==8&&
       document.getElementById("c3").textContent=="")
    {
        alert("gameclear");
    }}
function color(){ 
     var array = ["a1","b1","c1",
                  "a2","b2","c2",
                  "a3","b3","c3"];
    for(var i=0;i<=8;i++){
        var place=document.getElementById(array[i]);
        var number=place.textContent;
         place.style.background="#cdbfb6";
        if(!number==""){
            if(number==1){
                place.style.background="#eee4da";
                place.style.color="#776e65";
            }
            else if(number==2){
                place.style.background="#ede0c8";
                place.style.color="#776e65";
            }
            else if(number==3){
                place.style.background="#f2b179";
                place.style.color="#f9f6f2";
            }
            else if(number==4){
                place.style.background="#f59563";
                place.style.color="#f9f6f2";                
            }
            else if(number==5){
                place.style.background="#f67c5f";
                place.style.color="#f9f6f2";
            }
            else if(number==6){
                place.style.background="#f65e3b";
                place.style.color="#f9f6f2";
            }            
            
            else if(number==7){
                place.style.background="#edcf72";
                place.style.color="#f9f6f2";
            }
            else if(number==8){
                place.style.background="#edcc61";
                place.style.color="#f9f6f2";
            }
            else if(number==9){
                place.style.background="#edc850";
                place.style.color="#f9f6f2";
            }
            else if(number==1024){
                place.style.background="#edc53f";
                place.style.color="#f9f6f2";
            }
            else if(number==2048){
                place.style.background="#e0ba01";
                place.style.color="#f9f6f2";
            }
            else if(number>=4096){
                place.style.background="#3a3a30";
                place.style.color="#f9f6f2";
            }
        }}}
function Time(){var time=setInterval("hogemoge()",1000);}
function hogemoge(){
    var num=Number(document.getElementById("cha").textContent)+1;
    document.getElementById("cha").innerHTML=num;
    document.getElementById("number").innerHTML="Time "+Math.floor(num/60)+":"+num%60;
}
function newgame(){
    const shuffle = ([...array]) => {
        for (let i = array.length - 1; i >= 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];}
        return array;
    }
     var lists=[1,2,3,4,5,6,7,8,""];
     var list =shuffle(lists)
     var array = ["a1","b1","c1",
                  "a2","b2","c2",
                  "a3","b3","c3"];
    for(var i=0;i<9;i++){
    　　var tar=document.getElementById(array[i]);
    　　tar.innerHTML="";
    }
    for(var i=0;i<9;i++){
    var target=document.getElementById(array[i]);
    var number=list[i];
    target.innerHTML= number;  
    }color(); 
    document.getElementById("score").innerHTML=0;
}

document.onkeydown=keydown;
function keydown(){
    switch(event.keyCode){
        case 37:
        left();  
        break;
        case 38:
        up();
        break;                                                                     
        case 39:
        right();
        break;
        case 40:
        down(); 
        break;   
        case 79:
        gate(); 
        break;      
    }
    setTimeout("color()",10)
    setTimeout("gameover()",100)
}
function left(){
     var array = ["a1","b1","c1",
                  "a2","b2","c2",
                  "a3","b3","c3"];
    var count=0
    for(var j=0;j<=6;j=j+3){
        var price=[];//セルに入っている値
        var spot=[];//値が入っていたセル
    for(var i=j;i<=j+2;i++ ){
        var place=document.getElementById(array[i]);
        price.push(place.textContent);
        spot.push(array[i]);
        }
    let count =price.filter(function(x){return x===""}).length;
    if(count==1){
        if(price[1]==""){
            document.getElementById(spot[0]).innerHTML=price[0];
            document.getElementById(spot[1]).innerHTML=price[2];
            document.getElementById(spot[2]).innerHTML="";
        }
        else if(price[0]==""){
            document.getElementById(spot[0]).innerHTML=price[1];
            document.getElementById(spot[1]).innerHTML="";
            document.getElementById(spot[2]).innerHTML=price[2];
        }
    }}}

function up(){
     var array = ["a1","b1","c1",
                  "a2","b2","c2",
                  "a3","b3","c3"];
    var count=0
    for(var j=0;j<=2;j++){
        var price=[];//セルに入っている値
        var spot=[];//値が入っていたセル
    for(var i=j;i<=j+6;i=i+3 ){
        var place=document.getElementById(array[i]);
        price.push(place.textContent);
        spot.push(array[i]);
        }
    let count =price.filter(function(x){return x===""}).length;
    if(count==1){
        if(price[1]==""){
            document.getElementById(spot[0]).innerHTML=price[0];
            document.getElementById(spot[1]).innerHTML=price[2];
            document.getElementById(spot[2]).innerHTML="";
        }
        else if(price[0]==""){
            document.getElementById(spot[0]).innerHTML=price[1];
            document.getElementById(spot[1]).innerHTML="";
            document.getElementById(spot[2]).innerHTML=price[2];
        }
    }}}
function right(){
    var array = ["a1","b1","c1",
                 "a2","b2","c2",
                 "a3","b3","c3"];
    var count=0
    for(var j=2;j<=8;j=j+3){
        var price=[];//セルに入っている値
        var spot=[];//値が入っていたセル
    for(var i=j;i>=j-2;i=i-1 ){
        var place=document.getElementById(array[i]);
        price.push(place.textContent);
        spot.push(array[i]);
        }
    let count =price.filter(function(x){return x===""}).length;
    if(count==1){
        if(price[1]==""){
            document.getElementById(spot[0]).innerHTML=price[0];
            document.getElementById(spot[1]).innerHTML=price[2];
            document.getElementById(spot[2]).innerHTML="";
        }
        else if(price[0]==""){
            document.getElementById(spot[0]).innerHTML=price[1];
            document.getElementById(spot[1]).innerHTML="";
            document.getElementById(spot[2]).innerHTML=price[2];
        }
    }}}

function down(){
    var array = ["a1","b1","c1",
                 "a2","b2","c2",
                 "a3","b3","c3"];
    var count=0
    for(var j=0;j<=2;j++){
        var price=[];//セルに入っている値
        var spot=[];//値が入っていたセル
    for(var i=j+6;i>=j;i=i-3 ){
        var place=document.getElementById(array[i]);
        price.push(place.textContent);
        spot.push(array[i]);
        }
    let count =price.filter(function(x){return x===""}).length;
    if(count==1){
        if(price[1]==""){
            document.getElementById(spot[0]).innerHTML=price[0];
            document.getElementById(spot[1]).innerHTML=price[2];
            document.getElementById(spot[2]).innerHTML="";
        }
        else if(price[0]==""){
            document.getElementById(spot[0]).innerHTML=price[1];
            document.getElementById(spot[1]).innerHTML="";
            document.getElementById(spot[2]).innerHTML=price[2];
        }
    }}}
function gate() {
    var position = prompt("移動させたい場所\n[a1,b1,c1]\n[a2,b2,c2]\n[a3,b3,c3]:","");
    var pos = prompt("移動させたい場所\n[a1,b1,c1]\n[a2,b2,c2]\n[a3,b3,c3]:","");
    alert(position)
    alert(pos)
    var val=document.getElementById(position).textContent;
    var vol=document.getElementById(pos).textContent;
    document.getElementById(position).innerHTML=vol;
    document.getElementById(pos).innerHTML=val;
    
}