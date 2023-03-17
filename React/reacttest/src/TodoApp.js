import React from 'react'
import { TodoReducer } from './TodoReducer'
import { useReducer } from 'react'
import { TodoList } from './TodoList'
import { TodoAdd } from './TodoAdd'

const initialState = [{
    id: new Date().getTime(),
    description: 'Hacer los challenges',
    done: false
}]

export const TodoApp = () => {

    const [todos, dispatchTodo] = useReducer(TodoReducer, initialState)

    const handleNewTodo = (todo) => {
        const action = {
            type: '[TODO] ADD TODO',
            payload: todo,
        }
        dispatchTodo(action)
      }

  return (
    <>
    <h1>
        TodoApp: 10, <small>Pendientes: 2</small>
      </h1>
      <hr />
      <div>
        <TodoList todos={todos} />
        </div>
        <div>
          <TodoAdd handleAddTodo={handleNewTodo} />
        </div>
      </>
  )
}
