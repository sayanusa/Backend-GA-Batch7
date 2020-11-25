function warnTheSheep(queue) {
    // your code here
    // queue.forEach(el => {
    //     if (el === 'wolf'){

    //     }
    // })
    //let wolf = 0
    // console.log(queue.length)
    // console.log(queue[0])
    // let length = (queue.length)+1
    // console.log(length);
    for (let i = 0; i < queue.length; i++) {
        let length = (queue.length)+1
        console.log(length);
        if (queue[i]==='wolf' && queue.length == queue[i]){
            return ("Pls go away and stop eating my sheep")
        }else if (queue[i] === 'wolf') {
            return (`Oi! Sheep number ${length-(i+2)}! You are about to be eaten by a wolf!`);
        }

    }
    // console.log(wolf);
    
    
} 


// Test Function do not edit
function Test(fun, result) {
    console.log(fun === result)
}


// Test assertions
Test(warnTheSheep(["sheep", "sheep", "sheep", "wolf", "sheep"]), "Oi! Sheep number 1! You are about to be eaten by a wolf!");
// Test(warnTheSheep(["sheep", "sheep", "wolf"]), "Pls go away and stop eating my sheep");
// Test(warnTheSheep(["sheep", "wolf", "sheep"]), "Oi! Sheep number 1! You are about to be eaten by a wolf!");
// Test(warnTheSheep(["wolf", "sheep", "sheep", "sheep", "sheep", "sheep", "sheep"]), "Oi! Sheep number 6! You are about to be eaten by a wolf!");