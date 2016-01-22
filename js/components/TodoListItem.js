import React, { Component, PropTypes } from 'react'
import {deleteTodo} from '../actions/TodoActions'

class TodoListItem extends Component{
  handleDelete(id){
    deleteTodo(id);
  }

  render(){
    return(
      <li >
        {this.props.todo.body}
        <input type="button" value="delete" onClick={
          ()=>{
            this.handleDelete(this.props.todo.id);
          }
        } />
      </li>
    )
  }
}

TodoListItem.propTypes = {
  handleDelete: PropTypes.func.isRequired
}

export default TodoListItem
