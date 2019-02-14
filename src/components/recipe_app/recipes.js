import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class Recipies extends Component{
    render(){
        console.log('recipie_items', this.props.recipies)
        return(
            <div className="row">
                {this.props.recipies.map((recep)=>(
                    <div key={recep.recipe_id} className="col-sm-4">
                        <div className="card recipe_card">
                            <img className="card-img-top" src={recep.image_url} alt={recep.title} style={{'height':'230px'}} />
                            <div className="card-body">
                                <h6 className="card-title">{recep.title}</h6>
                                <p className="card-text"><span><b>PUBLISHER:</b> </span>{ recep.publisher }</p>
                                <Link to={{
                                      pathname: `/recipe/myrecip/${recep.recipe_id}`,
                                      state: { recipe: recep.title}
                                }} className="btn btn-primary">view</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}

export default Recipies;