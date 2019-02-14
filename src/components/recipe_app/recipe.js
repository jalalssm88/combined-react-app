import React, { Component } from 'react';
import Form from './form'
import Axios from 'axios'
import Recipies from './recipes'
const api_key= "56a6d763587163f164164069892be8eb";
class Recipe extends Component{
    constructor(props){
        super(props);
        this.state = {
            name:'',
            recipes:[]
        }
    }
    addName = (e)=>{
       let name = e
       Axios.get(`https://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/search?key=${api_key}&q=${name}&count=12`).then(res=>{
           this.setState({
               recipes:res.data.recipes
           })
       })
    }
    render(){
        return(
            <div className="container"> 
                <Form addName={this.addName}/>
                {console.log('state', this.state.recipes)}
                <Recipies recipies={this.state.recipes} />
            </div>
        )
    }
}

export default Recipe;