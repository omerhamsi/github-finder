import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class User extends Component {
    render() {
        return (
            <div>
                {console.log(this.props.user)}
                <div className="container my-3">
                    <div className="card" style={{ width: "18rem" }}>
                        <img src={this.props.user.avatar_url} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{this.props.user.login}</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <Link to={`/user/${this.props.user.login}`} className="btn btn-primary">Go somewhere</Link>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
export default User;