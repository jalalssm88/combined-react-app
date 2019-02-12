import React, { Component } from 'react';

class TodoList extends Component{
    getStyle = ()=>{
        return{
            'textDecoration':this.props.todo.completed?'line-through':'none',
            'color':this.props.todo.completed?'black':'white',
        }
    }

   
    render(){
        var {id, title} = this.props.todo
        return(
            <div className="row todo_lists">
                <div className="col-sm-4">
                    <input type="checkbox" onChange={this.props.Complete.bind(this, id)}/>
                </div>
                <div style={this.getStyle()} className="col-sm-4"> 
                    {title}
                </div>
                <div className="col-sm-4">
                    <button onClick={this.props.Delete.bind(this, id)} className="cross_button">x</button>
                </div>
            </div>
        )
    }
}

export default TodoList;