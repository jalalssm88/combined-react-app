import React, { Component } from 'react';
import Axios from 'axios'
const api_key = "3b8c1473ddbdafbb242fc237dd47b3c0";
class Weather extends Component{
    constructor(props){
        super(props);
        this.state = {
            city:'',
            country: '',
            city2: undefined,
            country2: undefined,
            temprature: undefined,
            humidity: undefined,
            description: undefined,
            wind:undefined,
            error: undefined

        }
    }

    changeHandler = (e) =>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    submitHandler = (e) =>{
        e.preventDefault();
        let city = this.state.city
        let country = this.state.country
        Axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${api_key}`).then(res =>{
            console.log('ressssssssss', res)
            this.setState({
                city:'',
                country: '',
                city2:res.data.name,
                country2:res.data.sys.country,
                temprature: res.data.main.temp,
                humidity: res.data.main.humidity,
                description: res.data.weather[0].main,
                wind:res.data.wind.speed,
            })
        })      
    }

    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <h3 className="weather_header">Weather Finder</h3>
                        <form onSubmit={this.submitHandler} >
                            <div className="form-group">
                                <label htmlFor="city">City</label>
                                <input type="text" name="city" value={this.state.city} className="form-control" id="city" onChange={this.changeHandler}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="country">Country</label>
                                <input type="text" name="country" value={this.state.country} className="form-control" id="country" onChange={this.changeHandler}/>
                            </div>
                            
                            <button style={{'marginBottom':'30px'}} type="submit" className="btn btn-primary">Get weather</button>
                        </form>
                    </div>
                    <div className="col-sm-12">

                        {this.state.city2 &&
                            
                            <table className="table table-dark table-hover">
                                <thead>
                                    <tr>
                                        <th>Showing {this.state.city2} weather</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Country Code</td>
                                        <td>{this.state.country2}</td>
                                    </tr>
                                    <tr>
                                        <td>City</td>
                                        <td>{this.state.city2}</td>
                                    </tr>
                                    <tr>
                                        <td>Temprature</td>
                                        <td>{this.state.temprature}F</td>
                                    </tr>
                                    <tr>
                                        <td>Humidity</td>
                                        <td>{this.state.humidity}</td>
                                    </tr>
                                    <tr>
                                        <td>Wind</td>
                                        <td>{this.state.wind}km/hr</td>
                                    </tr>
                                    <tr>
                                        <td>Description</td>
                                        <td>{this.state.description}</td>
                                    </tr>
                                </tbody>
                            </table>

                        }
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default Weather;

