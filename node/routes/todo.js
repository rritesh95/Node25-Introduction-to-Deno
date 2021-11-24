const express = require('express');

const router = express.Router();

let todos = [];

router.get('/todos', (req, res, next) => {
    res.json({
        todos: todos
    });
})

router.post('/todos', (req, res, next) => {
    const todoItem = {
        id: new Date().toISOString(),
        text: req.body.text
    };
    todos.push(todoItem);

    res.status(201).json({
        message: "todo item created!",
        todo: todoItem
    });
})

router.put('/todos/:todoId', (req, res, next) => {
    const todoId = req.params.todoId;
    const todoIndex = todos.findIndex(todo => todo.id === todoId);

    todos[todoIndex].text = req.body.text;
    res.status(200).json({
        message: "Todo Item updated!"
    });
})

router.delete('/todos/:todoId', (req, res, next) => {
    const todoId = req.params.todoId;
    todos = todos.filter(todo => todo.id !== todoId);

    res.status(200).json({
        message: "Todo Item deleted!"
    });
})

module.exports = router;