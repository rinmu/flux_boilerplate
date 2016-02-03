import React, { Component, PropTypes } from 'react'
import TodoListItem from './TodoListItem'

class ActiveTodos extends Component{
  render(){
    return(
        <div style={{width:'400px', float:'left'}}>
        <h1>ActiveTodos({this.props.todos.length})</h1>
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

export default ActiveTodos
