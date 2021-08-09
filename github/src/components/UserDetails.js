import React, { Component } from 'react'

class UserDetails extends Component {
    componentDidMount(){
        //console.log(this.props.props);
        this.props.getUser(this.props.match.params.login);
    }
    render() {
        console.log(this.props)
        return (
            <div className="container">
               <h1>{this.props.user.name}</h1>
            </div>
        )
    }
}

export default UserDetails
