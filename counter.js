let count=0

document.getElementById("increase").onclick= function(){
    count+=1;
    console.log("inc")
    document.getElementById("countlabel").innerHTML=count
}


document.getElementById("decrease").onclick=function(){
    count-=1;
    console.log("dec")
    document.getElementById("countlabel").innerHTML=count
}


document.getElementById("reset").onclick=function(){
    count=0;
    console.log("reset")
    document.getElementById("countlabel").innerHTML=count;
}
