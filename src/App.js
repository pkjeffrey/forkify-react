import React from 'react';
import Search from './Search';
import RecipeList from './RecipeList';
import RecipeDisplay from './RecipeDisplay';
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      selectedRecipe: ""
    };

    this.onSearchSubmit = this.onSearchSubmit.bind(this);
    this.onRecipeSelected = this.onRecipeSelected.bind(this);
  }
  render() {
    const {query, selectedRecipe} = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src="favicon.png" alt="logo" title="Forkify in React" />
          <h1>Forkify in React</h1>
          <Search onSubmit={this.onSearchSubmit} />
        </header>
        <RecipeList key={query} query={query} onSelect={this.onRecipeSelected} />
        <RecipeDisplay key={selectedRecipe} recipeID={selectedRecipe} />
      </div>
    );
  }
  onSearchSubmit(query) {
    this.setState({query: query});
  }
  onRecipeSelected(recipeID) {
    this.setState({selectedRecipe: recipeID});
  }
}