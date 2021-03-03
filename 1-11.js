//1
{
    console.log('task 1:');
    function seconds(total) {
        return total%60;
    }
    console.log(seconds(10));
}
//2
{
    console.log('task 2:');
    function perimeter(side, count){
        return side*count;
    }
    console.log(perimeter(3,5));
}
//3
{
    console.log('task 3:');
    function task3(n){
    for (let i = 1; i < n; i++) {
        if(i%3==0){
            console.log(`fizz`);
        }
        else if(i%5==0){
            console.log('buzz');
        }
        else if(i%5==0&&i%3==0){
            console.log('fizzbuzz');
        }
        else{
            console.log(i);
        }
    }
}
task3(10);
}
//4
{
    console.log('task 4:');
    function calculate(a=0, b=0, c=0){
        return (a+b+c)/3;
    };
    console.log(calculate(4,5,3));
}
//5
console.log('task 5:');
function isDivisible(n,x,y){
    let bool = false;
    if(n%x==0&& n%y==0){
        bool = true;
    }
    else{
        bool = false;
    }

    n%x==0&& n%y==0? bool2=true: bool2=false;

    return bool;
    
}
console.log(isDivisible(3,4,5));
//6
{
    console.log('task 6:');
    function task6(elementsCount){
    function random(min, max) {
        return Math.round(min + Math.random() * (max - min));
    }
    let arrodd = [];
    let arr = [];
    for (let i = 0; i < elementsCount; i++) {
        arr.push(random(1,100));
    }
    console.log(arr);
    let maxValue = 0;
    let minValue = 1000;
    let elementsSum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > maxValue) {
            maxValue = arr[i];
        }
        if (arr[i] < minValue) {
            minValue = arr[i];
        }
        if (arr[i] % 2 == 1) {
            arrodd.push(arr[i]);
        }
        elementsSum += arr[i];
    }
    console.log("max " + maxValue);
    console.log("min " + minValue);
    console.log("sum " + elementsSum);
    console.log("average " + elementsSum / arr.length);
    console.log("odd " + arrodd);
}
task6(10);
}
//7
{
    console.log('task 7:');
    function task7() {
        let arr = [[],[],[],[],[]];
        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 5; j++) {
                arr[i][j] = Math.round(-50 + Math.random() * (100));
            }
        }
        console.log(arr);
            let mas = arr.slice();
            for (let i = 0; i < 5; i++) {
                if (mas[i][i] < 0) {
                    mas[i][i] = 0;
                }
                if (mas[i][i] > 0) {
                    mas[i][i] = 1;
                }
            }
            console.log(mas);
    }
    task7();
}
//8
{
    console.log('task 8:');
    function Add(a,b){
        console.log(a+b);
    }
    function Sub(a,b){
        console.log(a-b);
    }
    function Mul(a,b){
        console.log(a*b);
    }
    function Add(a,b){
        if(b==0) {
            throw console.error("div on 0");
        }else{
            console.log(a+b);
        }
    }
}
//9
{
    console.log('task 9:');
    function isPrime(num) {
        if (num <= 1) return false; // negatives
        if (num % 2 == 0 && num > 2) return false; // even numbers
        let s = Math.sqrt(num); // store the square to loop faster
        for(let i = 3; i <= s; i++) { // start from 3, stop at the square, increment
            if(num % i === 0) return false; // modulo shows a divisor was found
        }
        return true;
      }

    function usernumber(n){
        let result;
        if(n<0){
            result = "number is negative."
        }else{
            result = "number is positive."
        }
        isPrime(n) ? result+= " number is simple." : result+= " number isn`t simple.";
        
        if(n%2==0&&n%5==0&&n%3==0&&n%6==0&&n%9==0){
            result+=" number is divided on 2, 3, 5, 6, 9."
        }
        return result;
    }
    console.log(usernumber(10));
}
//10
{
    console.log('task 10:');
    function task10(mas){
        mas.reverse();
        for (let i = 0; i < mas.length; i++) {
            if(typeof(mas[i]) == "number"){
                mas[i]*=mas[i];
            }
        }
        return mas;
    }
    let arr = [1,2,3,4,5, "efs", "fdbdf"];
    console.log(task10(arr));
}
