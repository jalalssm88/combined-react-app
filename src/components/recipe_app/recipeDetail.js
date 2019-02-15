import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Axios from 'axios'
// const api_key= "56a6d763587163f164164069892be8eb";
const api_key= "4e2c8a683706eb8d20be4d3a22a67a4c";

class RecipeDetail extends Component{
    state = {
        activeRecipe:[]
    }
    componentDidMount(){
        var title = this.props.location.state.recipe;
        console.log('titleeee', title)

        Axios.get(`https://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/search?key=${api_key}&q=${title}`).then(res=>{
        this.setState({
                activeRecipe:res.data.recipes[0]
           })
           console.log('stateActive', this.state.activeRecipe)
       })
    }
    render(){
        return(
            <div className="container">
                {
                    this.state.activeRecipe.length !== 0 &&
                    <div className="row">
                        <div className="col-sm-4"></div>
                        <div className="col-sm-4">
                            <div className="card recipe_card">
                                <img className="card-img-top" src={this.state.activeRecipe.image_url}  style={{'height':'230px'}} />
                                <div className="card-body">
                                    <h6 className="card-title">
                                        {this.state.activeRecipe.title}
                                    </h6>
                                    <p className='card-text'>publisher site: <a href={this.state.activeRecipe.publisher_url}>{this.state.activeRecipe.publisher_url}</a></p>
                                    <p className="card-text"><span><b>PUBLISHER:</b> </span>{ this.state.activeRecipe.publisher }</p>
                                    <Link to="/recipe" className="btn btn-primary">Go Home</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
        )
    }
}

export default RecipeDetail;