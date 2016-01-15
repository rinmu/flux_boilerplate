import React, { Component, PropTypes } from 'react'

class TodoInput extends Component{
  handleSubmit(e){
    e.preventDefault();

    const body = this.refs.body.value.trim();

    this.props.handleCreate(body);
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit.bind(this)}>
         <input type="text" ref="body"/>
         <input type="submit" />
      </form>
    )
  }
}

TodoInput.propTypes = {
  handleCreate: PropTypes.func.isRequired
}

export default TodoInput
