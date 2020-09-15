//const data = process.argv;
const command = process.argv[2];;
const params = process.argv.slice(3);
const ProductController = require('./controller/ToDoController');

//console.log(command);
//console.log(params);

switch (command) {
    case 'list':
        ProductController.list();
        //console.log('list sudah masuk di index');
        break;
    
    case 'add':
        ProductController.add(params);
        // console.log('add sudah masuk di index');
        break;

    case 'delete':
        ProductController.delete(params);
        // console.log('delete sudah masuk di index');
        break;

    case 'update':
        ProductController.update(params);
        // console.log('update sudah masuk di index');
        break;

    case 'help':
        ProductController.help(params);
        break;

    case 'complete':
        ProductController.complete(params);
        break;

    case 'uncomplete':
        ProductController.uncomplete(params);
        break;

    default:
        ProductController.message('Please input the correct command!.');
        break;
}