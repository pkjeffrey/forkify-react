import React from 'react';
import Search from './Search';
import RecipeList from './RecipeList';
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {query: ""};

    this.onSearchSubmit = this.onSearchSubmit.bind(this);
  }
  render() {
    const {query} = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src="favicon.png" alt="logo" title="Forkify in React" />
          <h1>Forkify in React</h1>
          <Search onSubmit={this.onSearchSubmit} />
        </header>
        <section>
          <RecipeList key={query} query={query} />
        </section>
        <section>
          <p>And this paragraph and the next</p>
          <p>are in the second section.</p>
        </section>
      </div>
    );
  }
  onSearchSubmit(query) {
    this.setState({query: query});
  }
}