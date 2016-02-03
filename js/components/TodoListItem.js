import React, { Component, PropTypes } from 'react'
import {deleteTodo, completeTodo} from '../actions/TodoActions'

class TodoListItem extends Component{
  handleDelete(id){
    deleteTodo(id);
  }
  handleComplete(id){
    completeTodo(id);
  }
  getListStyle(){
    if(this.props.todo.completed){
      return {
        textDecoration: 'line-through',
        color: '#EEE'
      }
    }else{
      return {}
    }
  }

  render(){
    return(
      <li style={this.getListStyle()}>
        {this.props.todo.body}
        <input type="button" value="delete" onClick={
          ()=>{
            this.handleDelete(this.props.todo.id);
          }
        } />
        <input type="button" value="complete" onClick={
          ()=>{
            this.handleComplete(this.props.todo.id);
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
