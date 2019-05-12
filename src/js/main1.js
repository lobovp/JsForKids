"use strict";
//ПСЕВДОКОД
/*  1. Создать страницу игры с картинкой
        (картой сокровищ) и местом, куда будут
        выводиться сообщения для игрока.
    2. Выбрать на карте случайную точку, где спрятан клад.
    3. Создать обработчик кликов. Каждый раз, когда игрок кликает по карте, обработчик кликов должен:
        • Увеличить счетчик кликов на 1.
        • Вычислить, насколько далеко место клика от места, где
            спрятан клад.
        • Отобразить на странице сообщение для игрока —      «горячо» или «холодно».
        • Поздравить игрока, если он кликнул по кладу или вблизи
            него, и сообщить, сколько кликов ушло на поиски.
  */

// 1.создали html страницу
// с элементами <h1>, <p>, <img>
// 2.Выбор случайного места для клада
let getRandomNumber = function (size){
    return Math.floor(Math.random()*size);
};
// Вычислить расстояние от клика (event) до клада (target)
let getDistance = function (event, target) {
    let diffX = event.offsetX - target.x;
    let diffY = event.offsetY - target.y;
    return Math.sqrt((diffX * diffX) + (diffY * diffY));
};
// Получить для расстояния строку подсказки
let getDistanceHint = function (distance) {
    if (distance < 10) {
        return "Обожжешься!";
    } else if (distance < 20) {
        return "Очень горячо";
    } else if (distance < 40) {
        return "Горячо";
    } else if (distance < 80) {
        return "Тепло";
    } else if (distance < 160) {
        return "Холодно";
    } else if (distance < 320) {
        return "Очень холодно";
    } else {
        return "Замерзнешь!";
    }
};
// Создаем переменные
let width = 400;
let height = 400;
let clicks = 0;

//создали объект под названием target с двумя свойствами x и y,
// обозначающими координаты клада
let target = {
    x:getRandomNumber(width),
    y:getRandomNumber(height)
};

// Добавляем элементу img обработчик клика
$("#map").click(function (event) {
    clicks++;
    // Получаем расстояние от места клика до клада
let distance = getDistance(event, target);
// Преобразуем расстояние в подсказку
let distanceHint = getDistanceHint(distance);
// Записываем в элемент #distance новую подсказку
$("#distance").text(distanceHint);
// Если клик был достаточно близко, поздравляем с победой
if (distance < 8) {
        alert("Клад найден! Сделано кликов: " + clicks);
    }
});