import React, { Component } from 'react';
import Axios from 'axios';

class UserList extends Component{
    constructor(props){
        super(props);

        this.state = {
            users:[]
        }
    }
    componentDidMount(){
        Axios.get(`https://jsonplaceholder.typicode.com/users`).then(res=>{
            this.setState({
                users:res.data
            })
        })
    }
    render(){
    
        return(
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <h4 className="user_header">Users List view</h4>
                        <table className="table table-bordered" style={{'fontSize':'15px'}}>
                            <thead style={{'background':'#c3c3c3'}}>
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>User Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Company</th>
                                    <th>City</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.users.map((user)=>(
                                        
                                        <tr key={user.id}>
                                        {console.log(user)}
                                            <td>{user.id}</td>
                                            <td>{user.name}</td>
                                            <td>{user.username}</td>
                                            <td>{user.email}</td>
                                            <td>{user.phone}</td>
                                            <td>{user.company.name}</td>
                                            <td>{user.address.city}</td>
                                            
                                            
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                
                </div>
                        
                      
              
            </div>
        )
    }
}

export default UserList;