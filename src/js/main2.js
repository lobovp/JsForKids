"use strict";
/*====== 1.Рисование на «холсте» ======*/
//находим элемент canvas
/*let canvas = document.getElementById("canvas");
//Контекст рисования — это JavaScript-объект, обладающий методами и свойствами,
// при помощи которых можно рисовать на «холсте».
let ctx = canvas.getContext("2d");

//Рисуем квадрат: (x, y, w, h)
for (let i = 0; i < 8; i++) {
    ctx.fillRect(i*10, i*10, 10, 10);
}

/*====== END 1.Рисование на «холсте» ======*/
/*====== DRAW HUMAN======*/
/*let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

ctx.fillRect(175,85, 50,50);
ctx.fillRect(195,135, 10,20);
ctx.fillStyle = "red";
ctx.fillRect(160,155, 80,80);
ctx.fillRect(125,155, 150,10);
ctx.fillRect(160,235, 10,70);
ctx.fillRect(230,235, 10,70);
//draw flag
ctx.fillStyle = "Navy";
ctx.fillRect(250, 10, 50, 100);
ctx.fillStyle = "Olive";
ctx.fillRect(300, 10, 50, 100);
ctx.fillStyle = "OrangeRed";
ctx.fillRect(350, 10, 50, 100);

/*====== END DRAW HUMAN ======

/*======  DRAW LINE ======*/
/*let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

//голова
ctx.lineWidth = 4;
ctx.strokeRect(190, 40, 20, 20);

// туловище при помощи линий
ctx.beginPath();
ctx.moveTo(200, 60);
ctx.lineTo(200, 100);
ctx.lineTo(180, 130);
ctx.moveTo(200, 100);
ctx.lineTo(220, 130);
ctx.moveTo(200, 80);
ctx.lineTo(175, 70);
ctx.moveTo(200, 80);
ctx.lineTo(225, 70);

//рисуем дуги
ctx.moveTo(300, 0);
ctx.arc(270, 0, 30,0, Math.PI,false);
//метод stroke, благодаря чему линии наконец-то появляются на экране.
ctx.stroke();


/*====== END DRAW LINE ======*/

/*======  ЗАДАЧИ ======*/
//13#1. Функция, рисующая снеговика
/*Создайте на основе вашего кода для рисования снеговика
(см. с. 205) функцию drawSnowman, которая рисует снеговика
в указанной позиции на «холсте», — так, чтобы в результате
вызова:
drawSnowman(50, 50);
снеговик появился в позиции (50, 50).
*/
//функция , рисующая окружности
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

let circle = function (x, y, radius,fillCircle) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, false);
    if (fillCircle) {
        ctx.fill();
    } else {
       ctx.stroke();
    }
};

let drawSnowman = function (x, y) {
    ctx.fillStyle = "Black";
    ctx.lineWidth = 4;

    circle(x + 200, y + 60, 40, false);
    circle(x + 185, y + 50, 5, true);
    circle(x + 215, y + 50, 5, true);
    circle(x + 200, y + 150, 50, false);
    circle(x + 200, y + 150, 5, true);
    circle(x + 200, y + 130, 5, true);
    circle(x + 200, y + 170, 5, true);

    ctx.fillStyle = "red";
    circle(x + 200, y + 60, 5, true);
};

drawSnowman(100, 100);
drawSnowman(0, 100);
/*====== END ЗАДАЧИ ======*/
