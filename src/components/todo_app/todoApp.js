import React, { Component } from 'react';
import TodoList from './todoList'


class TodoApp extends Component{
   
    render(){
        return(
            <div style={{'marginTop':'20px'}}>
               {
                   this.props.todos.map(todo =>{
                        return <TodoList key={todo.id} todo={todo} Complete={this.props.Complete} Delete={this.props.Delete}/>
                   })
               }
            </div>
        )
    }
}

export default TodoApp;