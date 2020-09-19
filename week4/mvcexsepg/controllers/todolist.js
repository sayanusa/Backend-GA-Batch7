const { todolist } = require('../models') 

class ToDoController {
    static getToDoList(req, res) {
        todolist.findAll()
            .then(result => {
                // console.log(result);
                res.send(result)
                //res.render('todolist.ejs', { ToDoTables: result })
            })
            .catch(err => {
                console.log(err);
            })
    }

    // static addFormStudent(req, res) {
    //     res.render('addStudent.ejs');
    // }
    
    static addToDoList(req, res) {
        const { task, status } = req.body;
        todolist.create({
            task,
            status
        })
            .then(result => {
                res.send(result)
                //res.redirect('/todolist')
            })
            .catch(err => {
                res.send(err)
            })
    }

    // static findById(req, res) {
    //     const id = req.params.id;
    //     Student.findOne({
    //         where: { id }
    //     })
    //         .then(result => {
    //             res.send(result)
    //         })
    //         .catch(err => {
    //             res.send(err)
    //         })
    // }

    // static deleteStudent(req, res) {
    //     const id = req.params.id;
    //     Student.destroy({
    //         where: { id }
    //     })
    //         .then(() => {
    //             // res.send("Deleted")
    //             res.redirect('/students')
    //         })
    //         .catch(err => {
    //             res.send(err)
    //         })
    // }

    // static updateStudent(req, res) {
    //     const id = req.params.id;
    //     const { name, major, score } = req.body;
    //     Student.update({
    //         name,
    //         major,
    //         score
    //     }, {
    //         where: { id }
    //     })
    //         .then(result => {
    //             res.send(result)
    //         })
    //         .catch(err => {
    //             res.send(err)
    //         })
    // }
}


module.exports = ToDoController
