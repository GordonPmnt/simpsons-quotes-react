import React, { Component } from 'react';
import './QuoteForm.css';

const maxLength = 30;

class QuoteForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            character: '',
        };
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange({ target }) {
        if(target.value.length <= maxLength) {
            this.setState({
                character: target.value,
            })
        }
    }

    render() {
      let { character } = this.state;
      return (
        <form
          className="QuoteForm"
        >
          <label htmlFor="character">Character:</label>
          <input
            id="character"
            name="character"
            type="text"
            value={character}
            className={character.length >= maxLength && "length-maximum-reached"}
            onChange={this.handleChange}
          />
          {character &&
            <>
                <p>{`You've selected ${character}`}</p>
                <p className="remaining-characters">{`You still have ${maxLength - character.length} remaining characters.`}</p>
            </>
          }
        </form>
      );
    }
  }
  
export default QuoteForm;