import React, { useState } from 'react'
import { useTodo } from '../contexts/TodoContext';

function TodoItem({ todo }) {
  const [editableTodo, setEditableTodo]   = useState(false)
 const [todoMsg , setTodoMsg] = useState(todo.todo)

const {updateTodo, deleteTodo, toggleComplete} = useTodo()

const editTodo = (e) => {
  updateTodo(todo.id, {...todo, todo: todoMsg})
  setEditableTodo(false)
}

const toggleCompleted = (e) => {
  toggleComplete(todo.id)
}

  return (
      <div
          className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
              todo.checked ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
          }`}
      >
          <input
              type="checkbox"
              className="cursor-pointer"
              checked={todo.checked}
              onChange={toggleCompleted}
          />
          <input
              type="text"
              className={`border outline-none w-full bg-transparent rounded-lg ${
                editableTodo ? "border-black/10 px-2" : "border-transparent"
              } ${todo.checked ? "line-through" : ""}`}
              value={todoMsg}
              onChange={(e) => setTodoMsg(e.target.value)}
              readOnly={!editableTodo}
          />
          {/* Edit, Save Button */}
          <button
              className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
              onClick={() => {
                  if (todo.checked) return;

                  if (editableTodo) {
                      editTodo();
                  } else setEditableTodo((prev) => !prev);
              }}
              disabled={todo.checked}
          >
              {editableTodo ? "📁" : "✏️"}
          </button>
          {/* Delete Todo Button */}
          <button
              className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
              onClick={() => deleteTodo(todo.id)}
          >
              ❌
          </button>
      </div>
  );
}

export default TodoItem;
