import React, { Component } from 'react'
import User from './User'
import Loading from './Loading'
class Users extends Component {
    render() {
        if(this.props.loading){
            console.log(this.props.loading)
            return (
                <React.Fragment>
                    <div className="container">
                        <div className="row">
                            {this.props.users.map(user => (
                                <User user={user} key={user.id}/>
                            ))}
                        </div>
                    </div>
    
                </React.Fragment>
            )
        }else{
            return <Loading/>
        }
        
    }
}
export default Users;