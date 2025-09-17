"use strict";
//  Дано два об’єкта. Обидва містять масив цілих чисел. При цьому у одному з них є функція
//             знаходження суми, а у іншому – функція для знаходження добутку тих, які знаходяться між заданими
//             мінімальним і максимальних значенням.
//             Використати обидва методи стосовно обидвох об’єктів (використати call, apply)
const obj1 = {
    arr: [1, 2, 3, 4, 5],
    getSum: function () {
        return this.arr.reduce((sum, num) => sum + num, 0);
    },
};
const obj2 = {
    arr: [2, 3, 4, 5, 6],
    getProductBetween: function (min, max) {
        return this.arr
            .filter((num) => num > min && num < max)
            .reduce((prod, num) => prod * num, 1);
    },
};
console.log("Сума obj1:", obj1.getSum());
console.log("Сума obj2:", obj1.getSum.call(obj2));
console.log("Добуток obj2:", obj2.getProductBetween(2, 6));
console.log("Добуток obj1:", obj2.getProductBetween.apply(obj1, [1, 5]));
