import React from 'react';
import './Search.css';

export default class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {query: ""};

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <label>
                    Search:
                    <input type="text" value={this.state.query} onChange={this.onChange} />
                </label>
            </form>
        );
    }
    onChange(e) {
        this.setState({query: e.target.value});
    }
    onSubmit(e) {
        this.props.onSubmit(this.state.query);
        e.preventDefault();
    }
}