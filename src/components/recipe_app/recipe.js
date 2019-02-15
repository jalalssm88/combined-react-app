import React, { Component } from 'react';
import Form from './form'
import Axios from 'axios'
import Recipies from './recipes'
// const api_key= "56a6d763587163f164164069892be8eb";
const api_key= "4e2c8a683706eb8d20be4d3a22a67a4c";
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
        console.log('res====', res)
        if(res.data.error){
           alert('data call limited')
        }else{
            this.setState({
                recipes:res.data.recipes
            })
        }    
      
       })
    }
    componentDidUpdate(){
        const local_recipes = JSON.stringify(this.state.recipes);
        localStorage.setItem('local_recipes', local_recipes)
    }
    componentDidMount(){
        const local_recipes_sting = localStorage.getItem('local_recipes');
        const local_recipes_parsed = JSON.parse(local_recipes_sting);
        this.setState({
            recipes:local_recipes_parsed
        })
    }
    render(){
        return(
            <div className="container"> 
                <Form addName={this.addName}/>
                
                <Recipies recipies={this.state.recipes} />
            </div>
        )
    }
}

export default Recipe;