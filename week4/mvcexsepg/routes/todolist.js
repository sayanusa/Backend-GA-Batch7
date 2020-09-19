const { Router } = require('express');
const router = Router();
const ToDoController = require('../controllers/todolist')

router.get('/', ToDoController.getToDoList)
// router.get('/add', ToDoController.addFormStudent)
//router.post('/add', ToDoController.addToDoList)
// router.get('/delete/:id', ToDoController.deleteStudent)
// router.get('/edit/:id', ToDoController.updateStudent)
// router.get('/:id', ToDoController.findById)

module.exports = router;
