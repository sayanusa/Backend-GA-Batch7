//Soal no.1 Check odd or even number
//Test Case
//Input 5 -> Output Odd
//Input 10 -> Output Even

var number = 5;
if(number%2 == 1){
 console.log("This is Odd number.");
}
else{
 console.log("This is Even number.");
}
console.log("")

//Soal no 2. Print the n first numbers
//Test Case

var number = 15;

for(let i=1; i<=number; i++){
   if(i%3 == 0 && i%5 == 0){
   console.log(i, "kelipatan 3 dan 5");
   }
   else if(i%3 == 0){
   console.log(i, "kelipatan 3");
   }
   else if(i%5 == 0){
   console.log(i, "kelipatan 5");
   }
   else
   console.log(i);
}
console.log(" ");

//Soal no.3 Print Segitiga
//input 3
var number = 3;

for(let i=0; i<1; i++){
   temp = "";
 for(let j=0; j<number; j++){
    temp += "*";
    console.log(temp);
 }
}
console.log("")
//Input 5
var number = 5;

for(let i=0; i<1; i++){
   temp = "";
 for(let j=0; j<number; j++){
    temp += "*";
    console.log(temp);
 }
}
console.log(" ")

//Soal no.4 Split words without function .split(" ")

var string = "Lorem ipsum is dummy text";

// Using For
 var word = []
 var temp = ""

 for(let i=0; i < string.length; i++){
      temp += string[i]
      if (string[i] == " "){
         word.push(temp);
         temp = "";
      }
      if (i == string.length-1){
        word.push(temp);
      }
    } 
 console.log(word)

// Using While
var kata = []
var tempo = ""
var x=0;

while(x < string.length){
tempo += string[x]
x++;
if (string[x] == " "){
  kata.push(tempo);
  tempo = "";
}
if (x == string.length){
 kata.push(tempo);
}
}
console.log(kata) 

console.log(" ") 
//Soal no.5 Find the faktorial
//3! = 3.2.1 = 6
var x = 3;
var y = x;
temp = "";


for(let i=x-1; i>=1; i--){
   x*=i;
   temp += y;
   y--;  
   temp += ".";
}
temp += "1";
console.log("3! =", temp, "=", x)

//Input 5
//5.4.3.2.1 = 120
var x = 5;
var y = x;
temp = "";

for(let i=x-1; i>=1; i--){
   x*=i;
   temp += y;
   y--;  
   temp += "."; 
}
temp += "1";
console.log("5! =", temp, "=", x)
console.log(" ")