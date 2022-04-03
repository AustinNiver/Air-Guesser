"use strict"


function ajaxGetRequest(path, callback){
    let request = new XMLHttpRequest();
    request.onreadystatechange = function(){
        if (this.readyState === 4 && this.status === 200){
            callback(this.response);
        }
    };
    request.open("GET", path);
    request.send();
}

function ajaxPostRequest(path, data, callback){
    let request = new XMLHttpRequest();
    request.onreadystatechange = function(){
        if (this.readyState === 4 && this.status === 200){
            callback(this.response);
        }
    };
    request.open("POST", path);
    request.send(data);
}

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
    console.log(imageList)
    console.log(imageList[count])
    document.getElementById("pic").src=imageList[count];
}