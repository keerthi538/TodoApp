import React from 'react'
import { useState } from 'react'

export default function InputArea({ addTodos }) {

    const [text, setText] = useState('');

    const handleChange = (e) =>{
        setText(e.target.value)
    }
    const handleClick = (e) =>{
        e.preventDefault();
        setText('');
        if(text.length > 0){
            addTodos(text);
        }
        
    }

    return (
        <div>
            <form style={{textAlign:'center', width : '50vw', margin : 'auto', display : 'flex'}}>
                <input 
                    type="text" 
                    placeholder="Add todo" 
                    style={textInput} 
                    value={text} 
                    onChange={handleChange}
                />

                <input type="submit" style={submitInput} onClick={handleClick} value="Add"/>
            </form>
        </div>
    )
}

const textInput = {
    flex : '80%',
    padding : '10px'
}
const submitInput = {
    flex : '20%'
}