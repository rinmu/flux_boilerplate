import React, { Component, PropTypes } from 'react'

class TodoListItem extends Component{
  render(){
    return(
      <li >
        {this.props.todo.body}
        <input type="button" value="delete" onClick={
          ()=>{
            this.props.handleDelete(this.props.todo.id);
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
