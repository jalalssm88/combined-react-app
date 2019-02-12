import React, { Component } from 'react';

class TodoList extends Component{
    render(){
        var {id, title} = this.props.todo
        return(
            <div className="row todo_lists">
                <div className="col-sm-4">
                <input type="checkbox" />

                </div>
                <div className="col-sm-4">
                {title}

                </div>
                <div className="col-sm-4">
                <button className="cross_button">x</button>

                </div>
            </div>
        )
    }
}

export default TodoList;