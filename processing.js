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
let data={}
let count = 0

function onLoad(){
  document.getElementById("BackA").style.visibility = "hidden";
  document.getElementById("frontA").style.visibility = "hidden";
}

function next(){
    if(count < imageList.length-1){
        count+=1;
        document.getElementById("pic").src=imageList[count];
    }    else {
        count=0;
        document.getElementById("pic").src=imageList[count];
    }
}

function back(){
    if(count > 0){
        count-=1;
        document.getElementById("pic").src=imageList[count];
    }    else {
        count=imageList.length-1;
        document.getElementById("pic").src=imageList[count];
    }
}


function startingImage(response){
    imageList=JSON.parse(response)[1];
    data=response[0]
    count=0;
    document.getElementById("pic").src=imageList[count];
  document.getElementById("StartB").style.visibility = "hidden";
}


function start(){
  ajaxGetRequest("/image",startingImage);
  document.getElementById("BackA").style.visibility = "visible";
  document.getElementById("frontA").style.visibility = "visible";
}

function stat(){
    document.getElementById("pic").src=imageList[count];
}
