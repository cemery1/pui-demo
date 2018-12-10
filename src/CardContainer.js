import React, {Component} from 'react';
import Card from './Card.js';

class CardContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            displayOverlay: true
        };
    }

    toggleOverlay = () => {
        this.setState(prevState => ({displayOverlay: !prevState.displayOverlay}))
    }

    render() {
        return (
            <Card
                {...this.props}
                displayOverlay={this.state.displayOverlay}
                toggleOverlay={this.toggleOverlay}
            />
        );
    }
};

export default CardContainer