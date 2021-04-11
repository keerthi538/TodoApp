import React from 'react'

function TodoItem({todo, deleteTodos, markComplete}) {
 
    return (
        <div style={item}>
            <div style={(todo.completed ? completedStyle : null)}>
                <input type="checkbox" style={checkbox} onChange={() => markComplete(todo.id)} checked={todo.completed}/> 
                {todo.title}
            </div><br/>
            <div style={cancelButton}>
                <button style={deleteButton} onClick={() => deleteTodos(todo.id)}>Delete</button>
            </div><br/>
        </div>
    )
}


const completedStyle = {
    textDecoration : 'line-through'
}
const checkbox = {
    marginRight : '10px'
}
const cancelButton = {
    display : 'flex',
    justifyContent : 'flex-start'
}

const deleteButton = {
    backgroundColor : '#ED5472', 
    border : 'none', 
    borderRadius : 10, 
    padding : '5px', 
    outline : 'none',
    width : 60
}
const item = {
    paddingTop : '3px',
    paddingLeft : '5px',
    border : '1px solid black'
}


export default TodoItem;