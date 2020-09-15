class View {
    static list(data){
        //console.log(data);
        data.forEach(el => {
            let checkTask = el.status? 'x':' ';
            console.log(`${el.id}. [${checkTask}] ${el.task}`);
        })
    }
    static add(data){
        console.log(data);
    }
    static delete(data){
        console.log(data);
    }
    static update(data){
        console.log(data);
    }

    static help(data){
        console.log(data);
    }

    static complete(data){
        console.log(data);
    }

    static uncomplete(data){
        console.log(data);
    }

    static message(msg){
        console.log(msg);
    }
}

module.exports = View; 