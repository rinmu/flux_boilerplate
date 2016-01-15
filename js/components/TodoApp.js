import React, { Component, PropTypes } from 'react'
import shortid from 'shortid'
import TodoInput from './TodoInput'
import TodoListItem from './TodoListItem'

class TodoApp extends Component{
  constructor(props){
    super(props)
    this.state = {
      todos: []
    }
  }

  handleSubmit(body){
    const newTodo = {
      id: shortid.generate(),
      body
    }

    this.setState({todos: [newTodo, ...this.state.todos]});
  }

  handleDelete(id){
    const newTodos = this.state.todos.filter(
      (todo)=>{
        return todo.id !== id
      }
    )

    this.setState({todos: newTodos});
  }

  render(){
    return(
      <div>
        <h1>TODO</h1>
        <TodoInput handleCreate={this.handleSubmit.bind(this)} />

        <div>
           <ul>
             {this.state.todos.map(
               (todo)=>{
                 return(
                   <TodoListItem todo={todo} key={todo.id} handleDelete={this.handleDelete.bind(this)}/>
                 );
               }
             )}
           </ul>
        </div>
      </div>
    )
  }
}

export default TodoApp
