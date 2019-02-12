import React, { Component } from 'react';
import uuid from 'uuid';
import TodoApp from './todoApp'
import AddTodo from './addTodo'

class Todo extends Component{
    constructor(props){
        super(props);
        this.state = {
            todos:[
                {
                    id: uuid.v4(),
                    title: 'Hello world, what is going on in react world',
                    completed: false,
                },
                {
                    id: uuid.v4(),
                    title: 'Nothing! just practising everyday',
                    completed: false,
                },
                {
                    id: uuid.v4(),
                    title: 'yup! this is pretty awesome library',
                    completed: false,
                },
            ]
        }
    }

    addTodo = (e) =>{
        let myTodo = {
            id:uuid.v4(),
            title:e,
            completed:false,
        }
        this.setState({
            todos:[...this.state.todos,myTodo]
        })
    }

    Complete = (e) =>{
        console.log('e=============',e)
        this.setState({
            todos:this.state.todos.map(todo =>{
                if(e==todo.id){
                    todo.completed =! todo.completed
                }
                return todo
            })
        })
    }

    Delete = (e) =>{
        console.log('from parent page delete', e)
        this.setState({
            todos: [...this.state.todos.filter(todo=> todo.id!==e)]
        })
    }

    render(){
        return(
            <div className="container">
                <AddTodo addTodo={this.addTodo}/>
                <TodoApp todos={this.state.todos} Complete={this.Complete} Delete={this.Delete}/>
            </div>
        )
    }
}

export default Todo;