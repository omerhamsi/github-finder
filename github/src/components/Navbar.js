import React, { Component } from 'react'
import {Link} from 'react-router-dom'
//import PropTypes from 'prop-types';
class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
                    <div className="container">
                        <Link to="/" className="navbar-brand">
                            <i className={this.props.icon}></i> {this.props.title}
                        </Link>
                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <Link to="about" className="nav-link">About</Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                </nav>
            </div>
        )
    }
}
// Navbar.defaultProps={
//     title:"Github finder"
// }
// Navbar.prototype={
//     title:PropTypes.string.isRequired()
// }
export default Navbar;