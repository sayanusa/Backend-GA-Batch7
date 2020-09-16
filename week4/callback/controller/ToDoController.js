const Product = require('../model/Product');
const View = require('../view/View');

class ToDoController { //nama class fleksibel .....Controller tergantung kita mau buat apa
    static list(){
        //console.log('list di ProductController');
        Product.list((err, data) => {
            if(err){
                View.error(err);
            }
            else{
                View.list(data);
            }
        })
    }
    static add(params){
        Product.add(params, (err, data)=>{
            if(err){
                View.error(err);
            }
            else{
                View.message(data);
            }
        })
    }
    static delete(params){
        Product.delete(params, (err, data)=>{
            if(err){
                View.error(err);
            }
            else{
                View.message(data);
            }
        })
    }
    static update(params){
        Product.update(params, (err, data)=>{
            if(err){
                View.error(err);
            }
            else{
                View.message(data);
            }
        })
    }

    static help(params){
        const result = Product.help(params);
        View.help(result);
    }

    static complete(params){
        Product.complete(params, (err, data)=>{
            if(err){
                View.error(err);
            }
            else{
                View.message(data);
            }
        })
    }

    static uncomplete(params){
        Product.uncomplete(params, (err, data)=>{
            if(err){
                View.error(err);
            }
            else{
                View.message(data);
            }
        })
    }
    
    static message(msg){
        View.message(msg);
    }
}

module.exports = ToDoController;