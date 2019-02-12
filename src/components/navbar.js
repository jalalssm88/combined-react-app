import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Navbar extends Component{
    constructor(props){
        super(props);
        this.state = {
            currentTime : new Date().toString()
        }
        this.updateTime()
    }
    changed = (e) => {
        return{
            'display':'block'
        }
    }
    updateTime (){
       setInterval(()=>{
           this.setState({
               
               currentTime: new Date().toString().slice(0, 25)
           })
       },1000)
    }
       
    render(){
        return(
            <div className="navbar navbar-expand-lg navbar-light top_nav">
            <div className="container">
                <a className="navbar-brand navbar_header">Combined App</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" onClick={this.changed.bind(this)} data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" style={this.changed()}>
                    <ul className="navbar-nav mr-auto nav_ul">
                        <li className="nav-item">
                            <Link to='/weather' className="nav-link" >Weather</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/todo' className="nav-link" >Todo</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/users' className="nav-link" >Users</Link>
                        </li>
                    </ul>
                    <div>
                        <p className="time_container">{this.state.currentTime}</p>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

export default Navbar;