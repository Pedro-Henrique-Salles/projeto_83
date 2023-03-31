var cor="black";
var largura=5;
var canvas=document.getElementById("canvas");
var contexto=canvas.getContext("2d");
var ultima_pos_x;
var ultima_pos_y;

canvas.addEventListener("touchstart", toque_comeca);
function toque_comeca(evento){
    cor=document.getElementById("cor").value;
    largura=document.getElementById("largura").value;
    ultima_pos_x=evento.touches[0].clientX-canvas.offsetLeft;
    ultima_pos_y=evento.touches[0].clientY-canvas.offsetTop;
}



canvas.addEventListener("touchmove", toque_move);
function toque_move(evento){
    var pos_x=evento.touches[0].clientX - canvas.offsetLeft;
    var pos_y=evento.touches[0].clientY - canvas.offsetTop;
        contexto.beginPath();
        contexto.strokeStyle=cor;
        contexto.lineWidth=largura;
        contexto.moveTo(ultima_pos_x, ultima_pos_y);
        contexto.lineTo(pos_x, pos_y);
        contexto.stroke();
        ultima_pos_x=pos_x;
        ultima_pos_y=pos_y;

}

function limpar(){
    contexto.clearRect(0, 0, contexto.canvas.width, contexto.canvas.height);
}