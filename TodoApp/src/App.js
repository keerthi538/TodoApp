import {useState, useEffect} from 'react'
import TodoItem from './TodoItem'
import InputArea from './InputArea'

function App() {

  const [todos, setTodos] = useState([]);

  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/todos/?_limit=5')
    .then(response => response.json())
    .then(json => setTodos(json))
  }, [])

  

  const deleteTodos = (id) =>{
      const filteredTodos = todos.filter(todo => todo.id !== id)
      setTodos(filteredTodos)
  }

  const addTodos = (title) =>{
    const newTodo = {
      id : todos.length + 1,
      title,
      completed : false
    }

    const updatedTodos = [...todos,newTodo]
    setTodos(updatedTodos)
  }


  const markComplete = (id) =>{
    
    const newTodos = todos.map(todo =>{
      if(todo.id === id){
        todo.completed = !todo.completed;
      } 
      return todo
    })

    setTodos(newTodos)

  }



  return (
    <div className="App">
      <h1>Todo application</h1><hr/>
      
      <InputArea addTodos={addTodos}/><br/>

      <div style={{width : '50vw', margin : 'auto'}}>
        {todos.map(todo => {
          return <TodoItem 
                  todo={todo} 
                  key={todo.id} 
                  deleteTodos={deleteTodos} 
                  markComplete={markComplete}
                  />
          })
        }
      </div>
      
    </div>
  );
}

export default App;
