//const data = process.argv;
const command = process.argv[2];;
const params = process.argv.slice(3);
const ToDoController = require('./controller/ToDoController');

//console.log(command);
//console.log(params);

switch (command) {
    case 'list':
        ToDoController.list();
        //console.log('list sudah masuk di index');
        break;
    
    case 'add':
        ToDoController.add(params);
        // console.log('add sudah masuk di index');
        break;

    case 'delete':
        ToDoController.delete(params);
        // console.log('delete sudah masuk di index');
        break;

    case 'update':
        ToDoController.update(params);
        // console.log('update sudah masuk di index');
        break;

    case 'help':
        ToDoController.help(params);
        break;

    case 'complete':
        ToDoController.complete(params);
        break;

    case 'uncomplete':
        ToDoController.uncomplete(params);
        break;

    default:
        ToDoController.message('Please input the correct command!.');
        break;
}