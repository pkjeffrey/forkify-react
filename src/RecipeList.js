import React from 'react';
import RecipeItem from './RecipeItem';
import axios from 'axios'

export default class RecipeList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recipes: null,
            page: 1,
        };

        this.getRecipes = this.getRecipes.bind(this);
        this.onPrevClick = this.onPrevClick.bind(this);
        this.onNextClick = this.onNextClick.bind(this);
    }
    render() {
        const {query, resultsPerPage = 10} = this.props;
        const {recipes, page} = this.state;
        const start = (page - 1) * resultsPerPage;
        const end = start + resultsPerPage;
        if (query) {
            if (recipes === null) {
                return (
                    <div className="RecipeList loading">
                        <svg>
                            <use href="icons.svg#icon-cw"></use>
                        </svg>
                    </div>
                );
            } else {
                const pages = Math.ceil(recipes.length / resultsPerPage);
                const pageRecipes = recipes.slice(start, end);
                let prevButton, nextButton;
                if (page > 1) {
                    prevButton = <button className="btn-inline results__btn--prev" onClick={this.onPrevClick}>
                                    <svg className="search__icon">
                                        <use href="icons.svg#icon-triangle-left"></use>
                                    </svg>
                                    <span>Page {page - 1}</span>
                                </button>;
                }
                if (page < pages) {
                    nextButton = <button className="btn-inline results__btn--next" onClick={this.onNextClick}>
                                    <span>Page {page + 1}</span>
                                    <svg className="search__icon">
                                        <use href="icons.svg#icon-triangle-right"></use>
                                    </svg>
                                </button>;
                }
                return (
                    <div className="RecipeList">
                        {pageRecipes.map(recipe => <RecipeItem
                            key={recipe.recipe_id}
                            recipeID={recipe.recipe_id}
                            title={recipe.title}
                            imageUrl={recipe.image_url}
                            publisher={recipe.publisher}
                            onSelect={this.props.onSelect} />)}
                        <div className="RecipeListPages">
                            {prevButton}
                            {nextButton}
                        </div>
                    </div>
                );
            }
        }
        return <div className="RecipeList"></div>
    }
    componentDidMount() {
        const {query} = this.props;
        this.getRecipes(query);
    }
    getRecipes(query) {
        if (query) {
            axios.get(`https://forkify-api.herokuapp.com/api/search?q=${query}`)
                .then(response => {
                    this.setState({recipes: response.data.recipes})
                })
                .catch(error => {
                    console.log(error);
                    this.setState({recipes: []});
                });
        }
    }
    onPrevClick() {
        const {page} = this.state;
        this.setState({page: page - 1});
    }
    onNextClick() {
        const {page} = this.state;
        this.setState({page: page + 1});
    }
}