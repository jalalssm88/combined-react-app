import React, { Component } from 'react';

class AddTodo extends Component{
    constructor(props){
        super(props);
        this.state = {
            title:'',
        }
    }

    changeHandler = (e) => {
        this.setState({
            title:e.target.value
        })
    }

    submitHandler = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title) 
        this.setState({
            title:''
        })
    }
   
    render(){
        console.log('pross', this.props.todos)
        return(
            <div className="row">
                <div className="col-sm-12">
                    <h4 className="todo_header">Todo Lists</h4>
                    <form className="form-inline" onSubmit={this.submitHandler}>
                        <div className="form-group" style={{'width':'85%'}}>
                            <input type="text" placeholder="add item ...." value={this.state.title} className="form-control" style={{'width':'100%'}} onChange={this.changeHandler}/>
                        </div>
                        <button style={{'marginLeft':'71px'}} type="submit" className="btn btn-primary">Add Item</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default AddTodo;