import React, { Component, PropTypes } from 'react'
import TodoListItem from './TodoListItem'

class CompletedTodos extends Component{
  render(){
    return(
        <div style={{overflow:'hidden'}}>
        <h1>CompletedTodos({this.props.todos.length})</h1>
           <ul>
             {this.props.todos.map(
               (todo)=>{
                 return(
                   <TodoListItem todo={todo} key={todo.id} />
                 );
               }
             )}
           </ul>
        </div>
      )
  }
}

export default CompletedTodos
