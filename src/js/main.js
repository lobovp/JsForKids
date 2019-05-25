'use strict';

/*======4 OBJECTS======*/


/*let cat = { legs: 3, name: "Гармония", color: "Черепаховый" };

console.log(cat['name']);
console.log(cat.name);
console.log(Object.keys(cat));

let dog = {};
dog["legs"] = 3;
dog["name"] = "Senya";
dog["color"] = "Black";
console.log(dog.isBrown);
console.log(dog);*/
/*-----МАССИВ ДРУЗЕЙ------*/
/*let anna = { name: "Анна", age: 11, luckyNumbers: [2, 4, 8, 16] };
let dave = { name: "Дэйв", age: 5, luckyNumbers: [3, 9, 40] };
let kate = { name: "Кейт", age: 9, luckyNumbers: [1, 2, 3] };

let friends = [anna, dave, kate];
/*++++WHAT USEFUL CAN BE DONE WITH OBJECTS+++++++++ */
/*----- Учет долгов-------*/
/*let owedMoney = {};
owedMoney["Джимми"] = 5;
owedMoney["Анна"] = 7;
owedMoney["Джимми"];
owedMoney["Элис"];
owedMoney["Джимми"]+=3;
/*----- END Учет долгов-------*/

/*----- ХРАНЕНИЕ ИНФОРМАЦИИ О ФИЛЬМАХ-------*/
/*let movies = {
    "В поисках Немо": {
        releaseDate: 2003,
        duration: 100,
        actors: ["Альберт Брукс", "Эллен Дедженерес",
        "Александр Гоулд"],
        format: "DVD"
    },
    "Звездные войны: Эпизод VI — Возвращение джедая": {
        releaseDate: 1983,
        duration: 134,
        actors: ["Марк Хэмилл", "Харрисон Форд", "Кэрри Фишер"],
        format: "DVD"
    },
    "Гарри Поттер и Кубок огня": {
    releaseDate: 2005,
        duration: 157,
        actors: ["Дэниел Рэдклифф", "Эмма Уотсон", "Руперт Гринт"],
        format: "Blu-ray"
    }
};
let findingNemo = movies["В поисках Немо"];
findingNemo.duration;
findingNemo.format;
/*----- END ХРАНЕНИЕ ИНФОРМАЦИИ О ФИЛЬМАХ-------*/
/*----- TASK #4.1-------*/
/*Представьте, что вы играете в какую-нибудь игру со своими друзь-
ями и вам нужно вести счет. Создайте для этого объект и назовите
его scores. Пусть ключами будут имена ваших друзей, а значе-
ниями — набранные ими очки (0 или больше). Счет игроков надо
будет увеличивать по мере того, как они зарабатывают новые
очки. Как вы будете менять счет игрока, хранящийся в объекте
scores?*/
/*let scores = {"Петр":0,"Тоня":0,"Кирилл":0,"Андрей":0,};

scores["Петр"] += 3;
scores["Тоня"] += 1;
scores["Андрей"] += 5;
/*----- END TASK #4.1-------*/
/*----- TASK #4.2-------*/
/*Как одной строкой JavaScript-кода извлечь из этого объекта
число 123? Проверьте свое решение, запустив его в консоли.*/

/*let myCrazyObject = {
    "name": "Нелепый объект",
    "some array": [7, 9, { purpose: "путаница", number: 123 }, 3.3],
    "random animal": "Банановая акула"
};
console.log(myCrazyObject['some array'][2]['number']);
/*----- END TASK #4.2-------*/

/*++++WHAT USEFUL CAN BE DONE WITH OBJECTS+++++++++ */
/*======END 4 OBJECTS======*/

/*======6 IF&LOOP======*/
/*++++++++IfElse+++++++*/
/*let name = "Николай";
    console.log("Привет, " + name);
    if (name.length > 6) {
    console.log("Ну и длиннющее же у вас имя!");
}
*/
/*Напишите программу с переменной name. Если в этой переменной находится
ваше имя, напечатайте: «Привет мне!» — иначе напечатайте: «Привет,
незнакомец!» (Подсказка: используйте === для сравнения переменной name
с вашим именем.)
Теперь дополните программу, чтобы она здоровалась с вашим папой,
если в name его имя, и с вашей мамой, если в name ее имя. Если же там
что-то иное, по-прежнему печатайте «Привет, незнакомец!».*/

/*let name = prompt("Введите Ваше имя", "Вася");
    if(name === "Петр"){
        alert("Привет Мне!!!!");
    }else {alert("Привет,\n" +
    "незнакомец!")}

/*++++++++LOOP+++++++*/
/*Напишите цикл for, который печатает степени тройки, не превышающие
10 000 (программа должна выводить 3, 9, 27 и т. д.)
Перепишите это задание, вместо for использовав цикл while.
(Подсказка: установите начальное значение перед входом в цикл.)*/
/*for (let i= 3; i < 10000; i*=3){
    console.log(i);
}*/
/*let i = 3;
while(i < 10000){
    console.log(i);
    i*=3;
}
/*++++++++ENDLOOP+++++++*/

/*----- TASK #6.1-------*/
/*#1. Прекрасные животные
Напишите цикл for, который изменяет массив животных, делая
их прекрасными!*/
/*let animals = ["Кот", "Рыба", "Лемур", "Комодский варан"];
    for (let i = 0; i < animals.length; i++){
        animals[i]+= " - прекрасное животное ";
    }
alert(animals);
/*----- ENDTASK #6.1-------*/

/*----- TASK #6.3-------*/
/*Переведите англоязычный текст на «хакерский язык» (h4ck3r
sp34k)! Многим в интернете нравится заменять некоторые
буквы похожими на них числами — например, число «4» похоже
на букву «A», «3» похоже на «E», «1» — на «I», а «0» — на «О». Хотя
цифры напоминают скорее заглавные буквы, мы будем заменять
ими буквы строчные.*/
/*let input = "javascript is awesome";
let output = '';
//alert(output);
for (let i = 0; i < input.length; i++){
    if (input[i] === 'a'){
        output += '4';
    } else if(input[i] === 'e'){
        output += '3';
    } else if(input[i] === 'i'){
        output+= '1';
    } else if(input[i] === 'o') {
        output+= '0';
    }else
       output += input[i];
}
alert(output);
/*----- ENDTASK #6.3----*/

/*======END 6 IF&LOOP======*/




/*====== 8 ФУНКЦИИ======*/
//8#1. Математические расчеты и функции

/*Создайте две функции, add и multiply; пусть каждая принимает
по два аргумента. Функция add должна складывать аргументы
и возвращать результат, а функция multiply — перемножать
аргументы.
С помощью только этих двух функций вычислите следующее
несложное выражение:36325 * 9824 + 777*/
/*function add(num1, num2) {
    return num1 + num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}
console.log(add(multiply(36325,9824),777));

//8#2. Совпадают ли массивы?
/*Напишите функцию areArraysSame, которая принимает два
массива с числами в качестве аргументов. Она должна возвра-
щать true, если эти массивы одинаковые (то есть содержат одни
и те же числа в одном и том же порядке), или false, если мас-
сивы различаются. Убедитесь, что ваша функция работает пра-
вильно, запустив такой код:
areArraysSame([1, 2, 3], [4, 5, 6]);
false
areArraysSame([1, 2, 3], [1, 2, 3]);
true
areArraysSame([1, 2, 3], [1, 2, 3, 4]);
false*/

/*function areArraysSame(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++){
        if (arr1[i] === arr2[i]){
            continue;
        }else {
            return false;
        }
    }
    return true;
}
console.log(areArraysSame([1, 2, 3], [4, 5, 6]));
//false
console.log(areArraysSame([1, 2, 3], [1, 2, 3]));
//true
console.log(areArraysSame([1, 2, 3], [1, 2, 3, 4]));
/*======END 8 ФУНКЦИИ======*/

/*======9 DOM&iQuery======*/
//ANIMATION
//9#1. Перечислите своих друзей (и сделайте их лучшими!)
/*$("h1").fadeIn(2000);
let friends = ['Petr','Andy',"Kirill"];
console.log(friends);
for (let i = 0; i < 3; i++){
    $("body").append("<p>" + friends[i] + "</p>");
}
$("p").append(" лучший");
for (let i = 1; i <= 5; i++){
    $("h1").fadeOut(1000*i).fadeIn(1000*i);
}
//9#2. Мигающий заголовок
/*Как с помощью fadeOut и fadeIn сделать так, чтобы заголовок
мигнул пять раз с интервалом в секунду? Как сделать это в цикле
for? А теперь измените цикл, чтобы заголовок появлялся
и исчезал в первый раз за секунду, потом за две, потом за три
и т. д.*/
//9#2#1
/*$("h1").fadeOut(1000).fadeIn(1000).fadeOut(1000).fadeIn(1000).fadeOut(1000).fadeIn(1000).fadeOut(1000).fadeIn(1000).fadeOut(1000).fadeIn(1000);*/

//9#2#2
/*for (let i = 0; i < 5; i++){
	$('h1').fadeOut(1000).fadeIn(1000);
}

//#3. Отложенная анимация
/*Для задержки анимации можно воспользоваться методом delay.
С помощью delay, fadeOut и fadeIn заставьте какой-нибудь
элемент плавно исчезнуть, а затем, через пять секунд, снова
проявиться*/
//$("div").fadeOut(1000).delay(5000).fadeIn(1000);

//9#4. Метод fadeTo()
/*Поэкспериментируйте с методом fadeTo. Первый его аргу-
мент — число миллисекунд, как и у прочих методов анимации,
а второй — число от 0 до 1.*/

//$("h1").fadeTo(2000, 1);
/*======END 9 DOM&iQuery======*/

/*====== 10 Interactive programming ======*/

//10.1 Отложенное выполнение кода и setTimeout
//функцию timeUp, открывающую диа-
// лог alert с сообщением "Время вышло!".
/*let timeUp = function () {
    alert("Время вышло!");
};
//вызвали setTimeout с двумя аргументами: функцией, которую нужно запустить
// (timeUp), и числом миллисекунд (3000)
setTimeout(timeUp, 3000);*/


//10.2 Отмена действия таймера

/*let doHomeWorkAlarm = function () {
    alert("Эй! Пора делать домашку!!!!!!");
}
let timeoutId = setTimeout(doHomeWorkAlarm, 1000);*/

//10.3 Многократный запуск кода и setInterval
/*let clicks = 1;
let printMessage = function () {
    console.log("Ты смотришь в консоль уже " + clicks + " сек");
    clicks++;
};
 let intervalId = setInterval(printMessage, 1000);
/!*Ты смотришь в консоль уже 1 сек
Ты смотришь в консоль уже 2 сек
Ты смотришь в консоль уже 3 сек
Ты смотришь в консоль уже 4 сек
Ты смотришь в консоль уже 5 сек
Ты смотришь в консоль уже 6 сек*!/
clearInterval(intervalId);*/

//10.4 Анимация элементов с помощью setInterval


/*let leftOffset = 0;

let moveHeading = function () {
    $("#main-heading").offset({left:leftOffset});
    leftOffset+= 10;
    if (leftOffset > 200){
        leftOffset = 0;
    }
};

setInterval(moveHeading, 30);*/
//10.5 Реакция на действия пользователя
        //10.4.1 Реакция на клики
             /*let clickHandler = function (event) {
                console.log("Клик! " + event.pageX + " " + event.pageY);
            };
            $("h1").click(clickHandler);*/

        //10.4.2 Событие mousemove
        /*$("html").mousemove(function (event) {
            $("#main-heading").offset({
                left:event.pageX,
                top: event.pageY
            });
        });*/
//=====EXAMPLES======/

//10#1  СЛЕДОМ ЗА КЛИКАМИ
/*Измените последний пример с mousemove так, чтобы заголовок
следовал не за указателем мышки, а только за кликами: вы кли-
каете в любом месте страницы, и заголовок перемещается туда.*/
/*$("html").click(function (event) {
    $("#main-heading").offset({
        left:event.pageX,
        top: event.pageY
        });
});*/

//10#2  СОЗДАЙТЕ СОБСТВЕННУЮ АНИМАЦИЮ
/*Используйте setInterval для анимации заголовка h1, двигая
его по квадрату, вдоль краев страницы. Пусть он переместится
на 200 пикселей вправо, на 200 пикселей вниз, 200 пикселей
влево, 200 пикселей вверх, а затем начнет с начала. Подсказка:
нужно запоминать текущее направление (вправо, вниз, влево
или вверх), чтобы знать, увеличивать или уменьшать для заго-
ловка отступы слева (left) и сверху (top). Кроме того, при
достижении угла квадрата нужно будет менять направление.*/

let direction = "вправо";
let offset = 0;
let timeSpeed = 120;
let clicks = 0;
let titleH1 = $("#main-heading");// чтобы не было Duplicated jQuery Selector
/*let animateId = animate();*/

$(titleH1).offset({left:offset, top: offset});


let animate = function () {
    if (direction === 'вправо') {
        $(titleH1).offset({ left: offset });
        offset++;
        if (offset > 200) {
            offset = 0;
            direction = 'вниз';
        }
    } else if (direction === 'вниз') {
        $(titleH1).offset({ top: offset });
        offset++;
        if (offset > 200) {
            offset = 200;
            direction = 'влево';
        }
    } else if (direction === 'влево') {
        $(titleH1).offset({ left: offset });
        offset--;
        if (offset < 0) {
            offset = 200;
            direction = 'вверх';
        }
    } else if (direction === 'вверх') {
        $(titleH1).offset({ top: offset });
        offset--;
        if (offset < 0) {
            offset = 0;
            direction = 'вправо';
        }
    }
};

let intervalId = setInterval(animate, timeSpeed);

$(titleH1).click(function (){
    clearInterval(intervalId);
    timeSpeed /=2;
    clicks++;

    if(clicks > 10){
        alert("ВЫ победили");
    }else {
        intervalId = setInterval(animate,timeSpeed);
    }
});
/*======END 10 Interactive programming======*/
