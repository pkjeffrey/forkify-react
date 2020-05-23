import React from 'react';
import './Search.css'

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { query: "" };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  render() {
    return (
      <form className="Search" onSubmit={this.onSubmit}>
        <input
          className="Search-input"
          type="text"
          placeholder="Search over 1,000,000 recipes..."
          value={this.state.query}
          onChange={this.onChange}
        />
      </form>
    );
  }
  onChange(e) {
    this.setState({ query: e.target.value });
  }
  onSubmit(e) {
    this.props.onSubmit(this.state.query);
    e.preventDefault();
  }
}