import React, { Component, PropTypes } from 'react'
import shortid from 'shortid'
import TodoStore from '../stores/TodoStore'
import TodoInput from './TodoInput'
import TodoListItem from './TodoListItem'

function getTodoState(){
  return {
    todos: TodoStore.getTodos()
  }
}

class TodoApp extends Component{
  constructor(props){
    super(props)
    this.state = getTodoState();
  }

  componentDidMount(){
    TodoStore.addChangeListener(this._onChange.bind(this))
  }

  componentWillUnMount(){
    TodoStore.removeChangeListener(this._onChange)
  }

  _onChange(){
    this.setState(getTodoState());
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
