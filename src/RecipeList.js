import React from 'react';
import RecipeItem from './RecipeItem';
import axios from 'axios'

export default class RecipeList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {recipes: null};

        this.getRecipes = this.getRecipes.bind(this);
    }
    render() {
        const {query} = this.props;
        const {recipes} = this.state;
        if (query) {
            if (recipes === null) {
                return (
                    <div className="loading">
                        <svg>
                            <use href="icons.svg#icon-cw"></use>
                        </svg>
                    </div>
                );
            } else {
                return (
                    <div className="RecipeList">
                        {recipes.map(recipe => <RecipeItem
                            key={recipe.recipe_id}
                            recipeID={recipe.recipe_id}
                            title={recipe.title}
                            imageUrl={recipe.image_url}
                            publisher={recipe.publisher} />)}
                    </div>
                );
            }
        }
        return <div></div>
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
}