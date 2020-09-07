// 1. Convert Minute to time
function convertMinute(minute){
if (minute <= 1440){
    let h = Math.floor(minute / 60);
    let m = minute % 60;
    h = h < 10 ? '0' + h : h;
    m = m < 10 ? '0' + m : m;
    return `${h}:${m}`;
} else {
    return 'masukkan menit yg benar!'
}    
}

//Test Case
console.log(convertMinute(100)) //1:40
console.log(convertMinute(185)) //3:05

// 2. Sort the letters
// Sort the letter from the word
function sortLetter(words){
    var kata = words.split('').sort().join('');
    console.log(kata);
}

//Test Case
sortLetter("hello"); //ehllo

// 3. A random color
// Output a random color from a given color
    //Global
var colors = ['red','green','blue']
function randomColor(colors){
    var warna;
    warna = colors[Math.floor(Math.random()*3)];
    console.log(`color : ${warna}`);
}
    
//Test Case
 randomColor(colors); //Output -> Color : red


// 4. Split words without function .split(" ") and find the max
var string = "Lorem ipsum is dummy text"
j = 0;
let word = []
let cek1 = []
let temp = ''

x = 0;
y = 0;
z = 0;    
let kata = []
let cek2 = []
let tempo= ''

//Using For
function maxWordLength(){
  for(let i = 0; i<=string.length; i++){
    if (string[i] != " "){
       temp += string[i] 
    } else {
      word.push(temp);
      temp='';
      cek1.push(word[j].length);
      j++;
    }    
    if (i == string.length-1){
      word.push(temp);
      cek1.push(word[j].length);
    }
  } console.log(word);
  //console.log(cek1);
  //cek kata terpanjang
  let max = Math.max(...cek1);
  for(let i=0; i<=cek1.length; i++){
    if(word[i].length == max){
      console.log(word[i]);
      break;
    }
  }

//Using While
while(x < string.length){
    if (string[x] != " "){
        tempo += string[x] 
    } else {
      kata.push(tempo);
      tempo='';
      cek2.push(kata[y].length);
      y++;
    }   
x++; 
    if (x == string.length){
    kata.push(tempo);
    cek2.push(kata[y].length);
    }
  } console.log(kata);
  //console.log(cek2);
  let maks = Math.max(...cek2);
  while(z <= cek2.length){
    if(kata[z].length == maks){
      console.log(kata[z]);
      break;
    }
  z++;  
  }
}   

//Test Case
maxWordLength(string); //Lorem


// 5. Count the vowel
//Count the vowels and tunr into object
a = 0;
i = 0;
u = 0;
e = 0;
o = 0;

   function vowelsObject(apaja){
       countVoewl(apaja);
       var object = {
         a : a,
         i : i,
         u : u,
         e : e,
         o : o,
       };
       console.log(object);
       //console.log(a, i, u, e, o);
   }

   function countVoewl(apaja){
       //console.log(apaja.length);
       for (let x=0; x<=apaja.length; x++){
         if(apaja[x] == 'a'){
           a += 1;
         }
         else if(apaja[x] == 'i'){
           i += 1;
         }
         else if(apaja[x] == 'u'){
           u += 1;
         }
         else if(apaja[x] == 'e'){
           e += 1;
         }
         else if(apaja[x] == 'o'){
           o += 1;
         }
       }
       //console.log(a, i, u, e, o);
   }
   
   //Test Case
   vowelsObject("rum raisin chocolate ice cream");
   /*
       {
           a : 3,
           i : 3,
           u : 1,
           e : 3,
           o : 2
       }
   */