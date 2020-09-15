const Product = require('../model/Product');
const View = require('../view/View');

class ProductController { //nama class fleksibel .....Controller tergantung kita mau buat apa
    static list(){
        //console.log('list di ProductController');
        const list = Product.list();
        View.list(list);
        //View.list(Product.list());
    }
    static add(params){
        const result = Product.add(params);
        View.add(result);
        //View.add(Product.add());
    }
    static delete(params){
        const result = Product.delete(params);
        View.delete(result);
    }
    static update(params){
        const result = Product.update(params);
        View.delete(result);
    }

    static help(params){
        const result = Product.help(params);
        View.help(result);
    }

    static complete(params){
        const result = Product.complete(params);
        View.complete(result);
    }

    static uncomplete(params){
        const result = Product.uncomplete(params);
        View.uncomplete(result);
    }
    
    static message(msg){
        View.message(msg);
    }
}

module.exports = ProductController;