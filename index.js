// тебе написать функцию-конструктор Stopwatch по описанию
// проверочные ярлыки:
const labels = ["Работа", "Отдых", "Учёба"];

function Stopwatch(label) {
    this.label = label;
    this.seconds = 0;
};

const workTimer = new Stopwatch(labels[0]);
const restTimer = new Stopwatch(labels[1]);
const studyTimer = new Stopwatch(labels[2]);

workTimer.seconds = 10;

console.log(workTimer.seconds);
console.log(restTimer.seconds);
console.log(studyTimer.seconds);