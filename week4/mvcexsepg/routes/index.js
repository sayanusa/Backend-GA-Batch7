const { Router } = require('express');
const router = Router();
const ToDoListRoutes = require('./todolist');

router.get('/', (req, res) => {
    //res.send('Home Page')
    res.render('index.ejs')
})

router.use('/todolist', ToDoListRoutes);

module.exports = router;


