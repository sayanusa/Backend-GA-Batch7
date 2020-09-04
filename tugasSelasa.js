// 1. Find the Faktor Persekutuan terbesar
function fpb(number1 , number2){
    //code here
    //faktor number1
    var no1 = [];
    var no2 = [];
    for(let i = 1; i<=number1; i++){
        if(number1%i === 0){
            no1.push(i);
        }
        else{
            continue;
        }
        
    }
    //console.log(no1);
    //faktor number2
    for(let i = 1; i<=number2; i++){
        if(number2%i === 0){
            no2.push(i);
        }
        else{
            continue;
        }
        
    }
    //console.log(no2);
    var minNumber;
    if(number1 < number2){
        minNumber = number1;
    }
    else{
        minNumber = number2;
    }
    for(let i=minNumber; i>=1; i--){
        if(number1 % i === 0 && number2 % i === 0){
            return i;
        }
    }
    }

    //Test
    console.log(fpb(30,50)) //10
    console.log(fpb(12,15)) //3
    console.log(fpb(17,35)) //1

//2. Print the n first Prime numbers
function checkPrime(number){
    //var faktor = [];
    var jumlahFaktor = 0;
    for(let i=1; i<=number; i++){
        if(number%i === 0){
            //faktor.push(i);
            jumlahFaktor++;
        }
    }
        if(jumlahFaktor === 2){
            return true;
        } else {
            return false;
        }
    }
    
    function print(n){
        var x = 0;
        var number = 1;
        prime = [];
        if( n === 0){
            prime.push(number);
            //console.log(1);
        }
        else{
            while(x < n){
                if(checkPrime(number)){
                    //console.log(number);
                    prime.push(number);
                    x++;
                }
                number++;
            }
        }
        console.log(prime);
    }
    
    // Test Case
        print(3); //2 3 5
        print(5); //2 3 5 7 11 
        print(0); //1
    

//3. Find the Mean of given Array
function mean(array){
//code here
jumlah = null;
for(let i=0; i<array.length; i++){
    jumlah += array[i];
}
jumlah = jumlah / array.length
console.log(jumlah.toFixed(2))
}

//Test 
mean([1,2,3,4,5]) //3
mean([3.7,5.3,7.0,1.9,3.1,0.5,1.5]) //3.28 -> 2 angka di blkg 


//4. Check if 'x' and 'o' are the same  
function checkXO(string){
    //code here
    var siX = [];
    var siO = [];  
        //console.log(string.length);
        for(let i=0; i<string.length; i++){
            //console.log(string[i]);
            if(string[i] === 'x'){
                siX.push(string[i]);
            } else {
                siO.push(string[i]);
            }
        }
        if(siX.length === siO.length){
            return '1';
        } else {
            return '-1';
        }
        
    //console.log(siX);
    //console.log(siO);
    }

    //Test
    console.log(checkXO('xxxxxooooo')) //1
    console.log(checkXO('xxxooooo')) //-1
    

// 5. Encrypt the string
// Rules : swap the letter, after the letter itself.
// Example : "wow" -> //xpx
// after letter w is x, after letter o is p, and so on.
function swap(string){
    //code here
    var temp='';
    var a='abcdefghijklmnopqrstuvwxyz';
    var b='bcdefghijklmnopqrstuvwxyza';
    for(let i=0; i<string.length; i++){
        for(let j=0; j<a.length; j++){
            if(string[i] === a[j]){
                temp += b[j];
            }
        }
    } console.log(temp);
}

//Test
swap("wow") //xpx
swap("javascript") //kbwbtdsjqu