import React from 'react'
import TodoItem from './TodoItem'

export default function TodoList({ todos }) {

    const finalTodos = todos.map(todo =>{
        return <TodoItem key={todo.id} todo={todo}/>
    })


    return (

        <div style={mainStyle}>
            <h2>{console.log(todos.length)}</h2>
            <ul>
                {finalTodos}
            </ul>
        </div>
        
    )
}

const mainStyle = {
    width : '50vw',
    margin : 'auto'
}