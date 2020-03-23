var c = document.getElementById("canvas");
var ctx = c.getContext("2d");

ctx.translate(0.5, 0.5)

function drawGrid(){
    for(let i = 1; i < 8; i++){
        ctx.moveTo(60 * i, 0);
        ctx.lineTo(60 * i, 480);
        ctx.stroke();
        ctx.moveTo(0, 60 * i);
        ctx.lineTo(480, 60 * i);
        ctx.stroke();
    }
}

drawGrid();