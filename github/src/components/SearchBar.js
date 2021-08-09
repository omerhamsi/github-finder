import React, { Component } from 'react'

class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state={
            keyword:""
        }
    }
    clicksearch(e){
        this.setState({
            keyword:e.target.value
        })
    }
    form_submit(e){
        e.preventDefault();
        this.props.searchusers(this.state.keyword);
    }
    render() {
        return (
            <React.Fragment>
                <form className="container my-3" onSubmit={this.form_submit.bind(this)}>
                <div class="input-group mb-3">
                    <input type="text" onChange={this.clicksearch.bind(this)} class="form-control" placeholder="Search" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                        <button class="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
                </div>
                </form>
            </React.Fragment>
        )
    }
}
export default SearchBar;
