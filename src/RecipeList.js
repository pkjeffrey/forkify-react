import React from 'react';

export default class RecipeList extends React.Component {
    render() {
        return (
            <div>
                Results for: {this.props.query}
            </div>
        );
    }
    componentDidMount() {
        console.log('componentDidMount');
    }
    componentDidUpdate() {
        console.log('componentDidUpdate');
    }
}