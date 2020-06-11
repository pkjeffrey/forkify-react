import React from 'react';
import axios from 'axios';

export default class RecipeDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {recipe: null}
    }
    render() {
        const {recipeID} = this.props;
        const {recipe} = this.state;
        if (recipeID) {
            if (recipe === null) {
                return (
                    <div className="RecipeDisplay loading">
                        <svg>
                            <use href="icons.svg#icon-cw"></use>
                        </svg>
                    </div>
                );
            } else if (recipe === "none") {
                return (
                    <div>not found</div>
                );
            } else {
                const {title, publisher, source_url, image_url, ingredients} = recipe;
                return (
                    <div className="RecipeDisplay">
                        <img src={image_url} alt="recipe" title={title}></img>
                        <h1>{title}</h1>
                        <p>Ingredients:</p>
                        <ul>
                            {ingredients.map((ing, idx) => <li key={idx}>{ing}</li>)}
                        </ul>
                        <p>Instructions at <a href={source_url} target="blank">{publisher}</a></p>
                    </div>
                );
            }
        }
        return <div className="RecipeDisplay"></div>;
    }
    componentDidMount() {
        const {recipeID} = this.props;
        this.getRecipe(recipeID);
    }
    getRecipe(recipeID) {
        if (recipeID) {
            axios.get(`https://forkify-api.herokuapp.com/api/get?rId=${recipeID}`)
                .then(response => {
                    this.setState({recipe: response.data.recipe})
                })
                .catch(error => {
                    console.log(error);
                    this.setState({recipe: "none"});
                })
        }
    }
}