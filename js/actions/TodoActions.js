import AppDispatcher from '../dispatcher/AppDispatcher'
import shortid from 'shortid'
export const CREATE_TODO = 'CREATE_TODO'
export const DELETE_TODO = 'DELETE_TODO'
export const COMPLETE_TODO = 'COMPLETE_TODO'

export function createTodo(body){
  AppDispatcher.dispatch({
    actionType: CREATE_TODO,
    todo: {
      id: shortid.generate(),
      body: body,
      createdAt: new Date(),
      completed: false
    }
  });
}

export function deleteTodo(id){
  AppDispatcher.dispatch({
    actionType: DELETE_TODO,
    id: id
  });
}

export function completeTodo(id){
  AppDispatcher.dispatch({
    actionType: COMPLETE_TODO,
    id
  })
}
