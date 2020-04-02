import React, { Component } from 'react';
import './QuoteCard.css';

class QuoteCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
          favorite: false,
        };
      }

    render() {
        const { quote, character, image } = this.props;
        const { favorite } = this.state;
        const handleClick = e => {
            let newState = !this.state.favorite
            this.setState({ 
                favorite: newState
            })
        }

        return (
            <figure className="QuoteCard">
                <img
                    src={image}
                    alt={character}
                />
                <figcaption>
                    <blockquote>
                        {quote}
                    </blockquote>
                    <p>
                        <cite>{character}</cite>
                        <span className={favorite && "is-favorite"} onClick={handleClick} >&#9733;</span>
                    </p>
                </figcaption>
            </figure>
        );
    }

};

export default QuoteCard;