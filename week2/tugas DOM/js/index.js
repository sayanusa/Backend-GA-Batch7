var tasks = [
    {
        id : 1,
        title : "Salary Income",
        type : "income",
        total : 5000000,
    },
    {
        id : 2,
        title : "Salary Expense",
        type : "outcome",
        total : 100000,
    }
];

getData();

function submitHandler(){
    //console.log("Click already worked.");
    var taskValue = document.getElementById('task-title').value;
    var taskStatus = document.getElementById('task-status').value;
    var taskTotal= document.getElementById('task-total').value;
    addData(taskValue,taskStatus,taskTotal);
    getData();
    document.getElementById('task-title').value = "";
    document.getElementById('task-status').value = "";
    document.getElementById('task-total').value = "";
    return false;
}

function getData(){
    var taskData = document.getElementById('task-data');
    taskData.innerHTML = "";
    
    for(let i=0; i<tasks.length; i++){
        let taskHTML = `
            <p>${tasks[i].id}. ${tasks[i].title} , type : ${tasks[i].type} , total : ${tasks[i].total}</p>
        `
        
        taskData.insertAdjacentHTML('beforeend',taskHTML);
    }
    
}
function addData(title,type,total){
    var taskObject = createObject(title,type,total);
    tasks.push(taskObject);
    console.log(`"${title}" has been inserted!`);

}

function createObject(title,type,total){
    var temp = {
        id : generateId() + 1,
        title : title,
        type : type,
        total : total
    }
    return temp
}

function generateId(){
    var tasksLength = tasks.length;
    var id = tasks[tasksLength - 1].id;
    return id
    // return tasks[tasks.length - 1].id
}
