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

    static list(cb){
        // const data = fs.readFileSync('./data.json', 'utf8');
        fs.readFile('./data.json', 'utf8', (err, data) => {
            if (err) {
                cb(err, null);
            }
            else {
                const parseData = JSON.parse(data);

                let tempData = [];
                parseData.forEach(el => {
                    const {id, task, status, tag, created_at, completed_at} = el; //Destructuring Object
                    tempData.push(new Product(id, task, status, tag, new Date (created_at), new Date (completed_at)));
                });
                cb(null, tempData);
            }
        })
    }

    static add(params, cb){
        this.list((err, products)=>{
            if(err){
                cb(err,null)
            } else {
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
                cb(null,`"${task}" has been create!`)
            }
        })
    }

    static delete(params, cb){
        this.list((err, products)=>{
            if(err){
                cb(err,null)
            } else {
                const id = Number(params[0]);
                const tempData = products.filter(product => product.id !== id);
                
                let check = false;
                if(tempData.length === products.length){
                    check = true;
                }

                if(check){
                    cb(null,`Data not found`)
                }else{
                    const printTask = products[id-1].task;
                    this.save(tempData);
                    cb(null,`"${printTask}" has been remove!`)
                }
            }
        })
    }

    static update(params, cb){
        this.list((err, products)=>{
            if(err){
                cb(err,null)
            } else {
                const id = Number(params[0]);
                const task = params[1];
                const beforeTask = products[id-1].task;

                products.forEach(product => {
                    if(product.id === id){
                        product.task = task;
                    }
                })
                
                this.save(products);
                cb(null, `"${beforeTask}" has been changed to "${task}"!`);
            }
        })
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

    static complete(params, cb){
        this.list((err, products)=>{
            if(err){
                cb(err,null)
            } else {
                const id = Number(params[0]);

                products.forEach(product => {
                    if(product.id === id){
                        product.completed_at = new Date;
                        product.status = true;
                    }
                })
                const printTask = products[id-1].task;
                this.save(products);
                cb(null, `"${printTask}" has been completed!`);
            }
        })
    }

    static uncomplete(params, cb){
        this.list((err, products)=>{
            if(err){
                cb(err,null)
            } else {
                const id = Number(params[0]);

                products.forEach(product => {
                    if(product.id === id){
                        product.completed_at = null;
                        product.status = false;
                    }
                })
                const printTask = products[id-1].task;
                this.save(products);
                cb(null, `"${printTask}" has been uncompleted!`);
            }
        })
    }

    static save(data){
        fs.writeFileSync('./data.json', JSON.stringify(data,null,2));
    }

}

module.exports = Product;