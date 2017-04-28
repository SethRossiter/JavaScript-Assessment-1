//1. provide the sum of the following variables 
var num10 = 10;
var string8 = '8';
var one = 1;
function add(a,b,c){
    return a + Number(string8) + c
}
add(num10,string8,one)
//2. write a loop that will log only numbers divisible by 3 between 20 - 100
function loop(){
    for(var i = 20; i <= 100; i++){
        if(i % 3 === 0){
            console.log(i)
        }
    }
}
loop()


//3. find the class average given the following test scores

var scores = [88, 84, 100, 92, 70, 76, 76, 84, 86, 98]; 
function average(str){
    var x = 0
    for(var i = 0; i < str.length; i++){
        x += str[i]
    }
    return x/str.length
}
average(scores)
