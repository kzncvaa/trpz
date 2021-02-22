//1
{
    function seconds(total) {
        return total%60;
    }
    console.log(seconds(10));
}
//2
{
    function perimeter(side, count){
        return side*count;
    }
    console.log(perimeter(3,5));
}
//3
{
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
    function calculate(a=0, b=0, c=0){
        return (a+b+c)/3;
    };
    console.log(calculate(4,5,3));
}
//5
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
    function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  
    let mas = [getRandomInt(10)];
    for (let i = 0; i < mas.length; i++) {
        mas[i] = getRandomInt(10);
    }
    let temp;
    let sum =0;
    for (let i = 0; i < mas.length; i++) {
        sum+=mas[i];
        for (let j = 1; j < mas.length-1; j++) {
            if(mas[i]<mas[j]){
                temp = mas[i];
                mas[i]=mas[j];
                mas[j]=temp;
            }
        }
    }
    console.log(`max - ${mas[0]}`);
    console.log(`min - ${mas[mas.length-1]}`);
    console.log(`sum - ${sum}`);
    console.log(`arifm - ${sum/mas.length-1}`);
    console.log('odd numbers:');
    for (let i = 0; i < mas.length-1; i++) {
        if(mas[i]%2==0){
            console.log(mas[i]);
        }
    }
}
//7
{
    function randomInteger(min, max) {
        // получить случайное число от (min-0.5) до (max+0.5)
        let rand = min - 0.5 + Math.random() * (max - min + 1);
        return Math.round(rand);
      }
      

    var n = 5, m = 5;
    var mas = [];
    for (var i = 0; i < m; i++){
        mas[i] = [];
        for (var j = 0; j < n; j++){
            mas[i][j] = getRandomInt(-10, 30);
    }}
    console.log(mas);

}
//8
{
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
