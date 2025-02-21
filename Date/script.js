var date= new Date();

function getDate(){
    document.getElementById('res').innerText=date;
}

function year(){
    document.getElementById('res').innerText=date.getFullYear();
}

function month(){
    var month=["january","february","march","april","may","june","july","august","september","october","november","december"]
    document.getElementById('res').innerText=month[date.getMonth()];
}

function hour(){
    document.getElementById('res').innerText=date.getHours();
}

function todate(){
    document.getElementById('res').innerText=date.getDate();
}

function day(){
    document.getElementById('res').innerText=date.getDay();
}

function minutes(){
    document.getElementById('res').innerText=date.getMinutes();
}

function time(){
    document.getElementById('res').innerText=date.getTime();
}

function sec(){
    document.getElementById('res').innerText=date.getSeconds();
}