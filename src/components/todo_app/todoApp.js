import React, { Component } from 'react';
import TodoList from './todoList'


class TodoApp extends Component{
   
    render(){
        console.log('pross', this.props.todos)
        return(
            <div style={{'marginTop':'20px'}}>
               {
                   this.props.todos.map(todo =>{
                        return <TodoList key={todo.id} todo={todo}/>
                   })
               }
            </div>
        )
    }
}

export default TodoApp;