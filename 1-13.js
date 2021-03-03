//1
{

let answer2;
const words = {
    ua: ['Понеділок', "Вівторок", 'середа', 'четверг', 'п\'ятниця', 'субота', 'неділя'],
    en: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'friday', 'saturday', 'sunday']
};
function ask1(){
    let answer1 = prompt("Виберіть мову “ua” або “en”?");
    
    switch (answer1.toLowerCase()){
        case "ua":
            ask2ua();
            break;
        case "en":
            ask2en();
            break;
        default:
            ask1();
            break;
        
    };
}
function ask2ua(){
    answer2 = prompt("Введіть номер дня неділі від 1 до 7?");
    if(answer2<=7&&answer2>=1){
        alert(words.ua[answer2-1]);
        console.log(words.ua[answer2-1]);
    }else{
        alert("error!!! try again!!!");
        ask2ua();
    }
}
function ask2en(){
    answer2 = prompt("Enter the day number of the week (from 1 to 7)?");
    if(answer2<=7&&answer2>=1){
        alert(words.en[answer2-1]);
    }else{
        alert("error!!! try again!!!");
        ask2en();
    }
}
ask1();
}
//2
{
    function Task2(length, width){
        this.length = length;
        this.width = width;
        this.create = function(){
            let string = '';
            let str = '';
            for (;length > 0; length--){
                string += '\n'
                string += length;
                if(length%2==0){
                    for (let y = 1; y < width + 1; y++){
                        if ( y % 2 !== 0){
                            string += " #"
                        } else string += " @"
                    }
                }else{
                    for (let y = 1; y < width + 1; y++){
                        if ( y % 2 !== 0){
                            string += " @"
                        } else string += " #"
                    }
                }
            }
            console.log(string)
            for (let i = 0; i < width; i++) {
                str += String.fromCodePoint(65 + i) + ' ';
            }
            console.log('  ' + str);
        } ;
    }
    let x = new Task2(8, 8);
    x.create();
}
//3
{
    class Random{
        nextDouble(low, high) {
            return ((Math.random() * high) + low).toFixed(1);
        }
        nextInt(low, high){
            return Math.floor(Math.random() * high) + low;
        }
        nextElement(...array){
            return array[Math.floor(Math.random() * array.length)];
        }
    }
    let rand = new Random();
    console.log(`${rand.nextDouble(1,20)}, ${rand.nextInt(1,20)}, ${rand.nextElement(1,2,3,4,5,6,7,8)}`)
}
//4
{
    class Person{
        constructor(name){
            this.name = name;
        }
        greet = function(greeting) {
            return `${greeting}, ${this.name}!`
        };
    }
    const g = new Person('Oleg');
    console.log(g.greet('Hello'));
}
//5
{
    function sequence(start, step) {
    return () => (start === 0 ? start += 1 : start += step)
}
let generator = sequence(10, 3);
let generator2 = sequence(7,1);

console.log(generator());
console.log(generator2());
console.log(generator());
console.log(generator2());
console.log(generator());
}
//6
{
    let characters = [
            {name: "Barney", age: 36},
            {name: "Fred", age: 40}
        ];
        
        function pluck(array) {
            return array.map(item => item.name)
                .filter((value, index, self) => self.indexOf(value) === index)
        }
        
        console.log(pluck(characters)); //['Barney', 'Fred'];
        
}
//7
{
function count(obj) {
    let count = 0;
    for (let key in obj) {
        count++
    }
    return count;
}
let a = { a: 1, b: 2 };
console.log(count(a)); // 2
let b = function () {};
console.log(count(b)); // 0
let c = [1, 2, 3];
console.log(count(c)); // 3
let d = [];
d[100] = 1;
console.log(count(d)); // 1
}
//8
{
class Task {
    constructor(name, description, startDate, endDate) {
        this.name = name;
        this.description = description;
        this.startDate = startDate;
        this.endDate = endDate;
    }
    subtask(){

    }
}

let t1 = new Task('do pz!', 'pz 1_13 TRPZ', new Date(2021, 3, 12), new Date(2021, 3, 24) )
console.log(t1)
console.log(t1.subtask())
}
//9
{

class Worker {
    constructor(name, surname, rate, days) {
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.days = days;
    }
    getSalary() { return console.log(`Salary worker: ${this.days * this.days}`) }
}
let work = new Worker('Arina', 'Kuznetsova', 20000, 150)
work.getSalary();
console.log(work)

}
//10