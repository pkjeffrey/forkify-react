import React from 'react';
import './RecipeItem.css';

export default class RecipeItem extends React.Component {
    render() {
        const {recipeID, title, imageUrl, publisher} = this.props;
        return (
            <div className="RecipeItem">
                <figure>
                    <img src={imageUrl} alt={title} />
                </figure>
                <div>
                    <h1>{title}</h1>
                    <p>{publisher}</p>
                </div>
            </div>
        );
    }
}