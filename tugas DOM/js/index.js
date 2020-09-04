// var container = document.querySelector('.container');
// console.log(container);

// var input = document.querySelector('input');
// console.log(input);

// var taskData = document.querySelector('#task-data');
// console.log(taskData);

// var btn = document.getElementById('btn');
// btn.addEventListener('click',submitHandler);

//Task 1 : Prepare variable
//Prepare global variable for data
//Contains object
//Example
var tasks = [
    {
        id : 1,
        title : "Salary Income",
        type : "income",
        total : 5000000
    }
];

getData();

function submitHandler(){
    // console.log("Click already worked.");
    var taskValue = document.getElementById('task-title').value;
    var taskType = document.getElementById('task-type').value;
    var taskTotal = document.getElementById('task-total').value;
    
    addData(taskValue,taskType,TaskTotal);
    getData();
    document.getElementById('task-title').value = "";

    return false;
}
//Task 2 : getData
//Code getData function to read the data from the global variable
function getData(){
    //Code here
    var taskData = document.getElementById('task-data');
    taskData.innerHTML = "";
    
    for(let i=0; i<tasks.length; i++){
        let taskHTML = `
            <p>${tasks[i].id}. ${tasks[i].title} , type : ${tasks[i].type}, total : ${task[i].total}</p>
        `
        taskData.insertAdjacentHTML('beforeend',taskHTML);
    }
}

function addData(title,type,total){
    //Code here
    var taskObject = createObject(title,type,total);
    tasks.push(taskObject);
    console.log(`"${title}" has been inserted!`);
}

function createObject(title,type,total){
    var temp = {
        id : generateId() + 1,
        title : title,
        type : type,
        total : total,
    }
    return temp
}

function generateId(){
    var tasksLength = tasks.length;
    var id = tasks[tasksLength - 1].id;
    return id
    // return tasks[tasks.length - 1].id
}

