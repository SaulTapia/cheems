//Canvas
var d = document.getElementById("dibujo");
var lienzo = d.getContext("2d");
function traza(x1, y1, x2, y2){
    lienzo.beginPath();
    lienzo.strokeStyle = "red";
    lienzo.moveTo(x1,y1);
    lienzo.lineTo(x2,y2);
    lienzo.stroke();
    lienzo.closePath();
}
for(var i = 0; i <= 300; i+= 10){
    traza(0,i,i,300);
}
for(var i = 0; i <= 300; i+=10){
    traza(300-i,0,0,i);
}
for(var i = 0; i <= 300; i+=10){
    traza(300,i,i,0);
}
for(var i = 0; i <= 300; i+=10){
    traza(i,300,300,300-i);
}

// Expanding box test
document.getElementById('button-box').addEventListener('click', function () {
    document.querySelector('.box').classList.toggle('box-grow');
});

