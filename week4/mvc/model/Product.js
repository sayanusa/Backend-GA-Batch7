const fs = require('fs');

class Product {
    constructor(id, task, status, tag, created_at, completed_at){
        this.id = id,
        this.task = task,
        this.status = status,
        this.tag = tag,
        this.created_at = created_at,
        this.completed_at = completed_at;
    }

    static list(){
        const data = fs.readFileSync('./data.json', 'utf8');
        const parseData = JSON.parse(data)

        let tempData = [];
        parseData.forEach(el => {
            const {id, task, status, tag, created_at, completed_at} = el; //Destructuring Object
            tempData.push(new Product(id, task, status, tag, new Date (created_at), new Date (completed_at)));
        });
        return tempData;
        //console.log(tempData);
    }

    static add(params){
        const products = this.list();
        //const task = params[0];
        //console.log(params[0]);
        

        const [task, status] = params; //Destructuring Array
        let nextId = products[products.length-1].id + 1;
        //console.log(task);

        const tempAddObject = {
            id : nextId,
            task : task,
            status : (status === 'true'),
            tag : [],
            created_at : new Date(),
            completed_at : null, 
        };
        products.push(tempAddObject);
        this.save(products);
        return `"${task}" has been create!`;
    }

    static delete(params){
        const products = this.list();
        const id = Number(params[0]);

        const tempData = products.filter(product => product.id !== id);
        
        let check = false;
        if(tempData.length === products.length){
            check = true;
        }

        if(check){
            return `Data not found`;
        }else{
            const printTask = products[id-1].task;
            this.save(tempData);
            return `"${printTask}" has been remove!`;
        }
    }

    static update(params){
        const products = this.list();
        const id = Number(params[0]);
        const task = params[1];
        const beforeTask = products[id-1].task;

        products.forEach(product => {
            if(product.id === id){
                product.task = task;
            }
        })
        
        this.save(products);
        return `"${beforeTask}" has been changed to "${task}"!`
    }

    static help(){
        const listsHelp = `        node todo.js
        node todo.js help
        node todo.js list  
        node todo.js add <task>
        node todo.js update <id> <task>
        node todo.js delete <id>
        node todo.js complete <id>
        node todo.js uncomplete <id>
        `
        return listsHelp;
    }

    static complete(params){
        const products = this.list();
        const id = Number(params[0]);

        products.forEach(product => {
            if(product.id === id){
                product.completed_at = new Date;
                product.status = true;
            }
        })
        const printTask = products[id-1].task;
        this.save(products);
        return `"${printTask}" has been completed!`
    }

    static uncomplete(params){
        const products = this.list();
        const id = Number(params[0]);

        products.forEach(product => {
            if(product.id === id){
                product.completed_at = null;
                product.status = false;
            }
        })
        const printTask = products[id-1].task;
        this.save(products);
        return `"${printTask}" has been uncompleted!`
    }


    static save(data){
        fs.writeFileSync('./data.json', JSON.stringify(data,null,2));
    }

}

module.exports = Product;