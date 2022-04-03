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

let imageList=['https://a0.muscache.com/im/pictures/20d088e7-01a2-4ba6-93c5-f64df1a7ed42.jpg?im_w=720', 'https://a0.muscache.com/im/pictures/efa2c966-210f-4a00-b3d1-a665c0ca2788.jpg?im_w=720', 'https://a0.muscache.com/im/pictures/e306fc9e-361b-46bb-8a77-dc2a6a246740.jpg?im_w=720', 'https://a0.muscache.com/im/pictures/9f689f06-234b-4717-85fe-959e8759368c.jpg?im_w=720', 'https://a0.muscache.com/im/pictures/289354a4-bd1d-4e17-89f3-48c467e3c1e5.jpg?im_w=720']
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


function startingImage(response){
    imageList=JSON.parse(response);
    let data=JSON.parse((response))
    console.log(imageList)
    count=0;
    console.log(imageList);
    console.log(imageList[count]);
    document.getElementById("pic").src=imageList[count];
}


function stat(){
    ajaxGetRequest("/image",startingImage);
    console.log("yes")

}

function start(){
    document.getElementById("pic").src=imageList[count];
}