import React from 'react';
import './RecipeItem.css';

export default class RecipeItem extends React.Component {
    constructor(props) {
        super(props);
        this.onSelect = this.onSelect.bind(this);
    }
    render() {
        const {title, imageUrl, publisher} = this.props;
        return (
            <div className="RecipeItem" onClick={this.onSelect}>
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
    onSelect() {
        const {onSelect, recipeID} = this.props;
        onSelect(recipeID);
    }
}