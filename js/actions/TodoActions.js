import AppDispatcher from '../dispatcher/AppDispatcher'
import shortid from 'shortid'
import store from 'store'
export const CREATE_TODO = 'CREATE_TODO'
export const DELETE_TODO = 'DELETE_TODO'
export const COMPLETE_TODO = 'COMPLETE_TODO'
export const FETCH_TODOS = 'FETCH_TODOS'
export const RECEIVE_TODOS = 'RECEIVE_TODOS'

export function createTodo(body){
  var newTodo = {
    id: shortid.generate(),
    body: body,
    createdAt: new Date(),
    completed: false
  };

  var todos = store.get("todos") || [];
  var newTodos = [newTodo, ...todos];
  store.set("todos", newTodos);

  AppDispatcher.dispatch({
    actionType: CREATE_TODO,
    todo: newTodo,
  });
}

export function deleteTodo(id){
  var todos = store.get("todos");
  var newTodos = todos.filter(function(todo){
    return todo.id !== id;
  });
  store.set("todos", newTodos);

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

export function fetchTodos(){
  setTimeout(function(){
    var todos = store.get("todos") || [];
    AppDispatcher.dispatch({
      actionType: RECEIVE_TODOS,
      todos
    });
  }, 1000)

  AppDispatcher.dispatch({
    actionType: FETCH_TODOS
  });
}
