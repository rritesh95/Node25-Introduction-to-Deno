import { Router } from "https://deno.land/x/oak/mod.ts";

interface ToDo {
    id: string,
    text: string
}

let todos: ToDo[] = [];

const router = new Router();

router.get('/todos', (context) => {
    context.response.body = { todos: todos };
    //"oak" always automatically send response
});

router.post('/todos', async (context) => {
    const result = context.request.body();
    // above method gives access to request body, it returns promise
    const data = await result.value;
    const newToDo: ToDo = {
        id: new Date().toISOString(),
        text: data.text
    };

    todos.push(newToDo);
    context.response.body = { message: "Todo created!", todo: newToDo };
});

router.put('/todos/:todoId', async (context) => {
    const result = context.request.body();
    // above method gives access to request body, it returns promise
    const data = await result.value;
    const tid = context.params.todoId;

    const todoIndex = todos.findIndex(todo => todo.id === tid);

    todos[todoIndex].text = data.text;
    context.response.body = { message: "Todo updated!" };
});

router.delete('/todos/:todoId', (context) => {
    const tid = context.params.todoId;

    todos = todos.filter(todo => todo.id !== tid);
    context.response.body = { message: "Todo deleted!" };
});

export default router;