import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{id: 1, todoText: "Hello world"}]
}


export const todoSlice = createSlice ({
    name: "coffee",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                todoText: action.payload,                  
            }
           state.todos.push(todo)
        },
        removeTodo : (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload )
        },
        updateTodo: (state, action) => {
            const { id, newTodoText } = action.payload;
            const updatedTodo = state.todos.find(todo => todo.id === id);
          
            if (updatedTodo) {
              updatedTodo.todoText = newTodoText;
            }
          }
    }
})

export const {addTodo, removeTodo, updateTodo} =  todoSlice.actions

export default todoSlice.reducer