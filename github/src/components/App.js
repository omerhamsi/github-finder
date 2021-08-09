import React, { Component } from 'react'
import Navbar from './Navbar';
//import User from './User'
import SearchBar from './SearchBar'
import axios from 'axios'
import Users from './Users'
import About from './About'
import UserDetails from './UserDetails'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            user:{},
            users: []
        }
    }
    componentDidMount() {
        this.setState({
            loading: false
        })
        setTimeout(() => {
            axios.get("https://api.github.com/users").then(res => (this.setState({
                users: res.data,
                loading: true
            })))
        }, 300);


    }
    searchusers(keyword) {
        console.log(keyword);
        this.setState({
            loading: false
        })
        setTimeout(() => {
            axios.get(`https://api.github.com/search/users?q=${keyword}`).then(res => (this.setState({
                users: res.data.items,

                loading: true
            })))
        }, 300);

    }
    getUser(username){
        this.setState({
            loading: false
        })
        setTimeout(() => {
            axios.get(`https://api.github.com/users/${username}`).then(res => (this.setState({
                user: res.data,

                loading: true
            })))
        }, 300);
    }
    render() {

        return (
            <BrowserRouter>
                <Navbar
                    title="GİTHUB FİNDER"
                />
                <Switch>
                    <Route exact path="/" render={props => (
                        <React.Fragment>
                            <SearchBar searchusers={this.searchusers.bind(this)} />
                            <Users users={this.state.users} loading={this.state.loading} />
                        </React.Fragment>
                    )}>

                    </Route>
                    <Route exact path="/about" component={About}> 
                    </Route>
                    <Route path="/user/:login" render={props=>(
                        <UserDetails {...props} getUser={this.getUser.bind(this)} user={this.state.user}/>
                    )}></Route>
                </Switch>

            </BrowserRouter>
        )
    }
}

export default App;