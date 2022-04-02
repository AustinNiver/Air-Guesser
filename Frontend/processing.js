"use strict"

let imageList=[]
let count = 0

function next(){
    if(count < imageList.length-1){
        count+=1;
        document.getElementById("pic").src=imageList[count];
        console.log("Yes");
    }
}

function back(){
    if(count > 0){
        count-=1;
        document.getElementById("pic").src=imageList[count];
        console.log("Yes");
    }
}

function startup(){
    ajaxGetRequest("/image",startingImage);
}

function startingImage(response){
    imageList=JSON.parse(response);
    let d1=document.getElementById();
}

function start(){
    count=0
    document.getElementById("pic").src=imageList[count];
}