import React, { Component, PropTypes } from 'react'
import shortid from 'shortid'
import TodoStore from '../stores/TodoStore'
import TodoInput from './TodoInput'
import TodoListItem from './TodoListItem'
import ActiveTodos from './ActiveTodos'
import CompletedTodos from './CompletedTodos'

function getTodoState(){
  return {
    todos: TodoStore.getTodos(),
    completedTodos: TodoStore.getCompletedTodos()
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
        <TodoInput handleCreate={this.handleSubmit.bind(this)} />
        <ActiveTodos todos={this.state.todos} />
        <CompletedTodos todos={this.state.completedTodos} />
      </div>
    )
  }
}

export default TodoApp
