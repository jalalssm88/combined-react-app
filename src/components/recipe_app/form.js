import React, { Component } from 'react';


class Form extends Component{
    constructor(props){
        super(props);
        this.state = {
            recipe_name:''
        }
    }
    changeHandler =(e)=>{
        this.setState({
            recipe_name:e.target.value
        })
    }
    submitHandler = (e) =>{
        e.preventDefault();
        this.props.addName(this.state.recipe_name)
        setInterval(() => {
            this.setState({
                recipe_name:''
            })
        }, 100);
           
    }
    render(){
        return(
            <div className="row recipe_from_row">
                <div className="col-sm-12">
                    <form className="form form-inline recipe_form" onSubmit={this.submitHandler}>
                        <input type="text" value={this.state.recipe_name} className="form-control" onChange={this.changeHandler} />
                        <button className="btn btn-primary">Search</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Form;