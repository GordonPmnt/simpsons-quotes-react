import React from 'react';
import Navbar from './components/Navbar';
import QuoteCard from './components/QuoteCard';
import QuoteForm from './components/QuoteForm';
import axios from 'axios';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: []
    }
    this.getQuotes = this.getQuotes.bind(this)
  }

  getQuotes() {
    axios.get('https://thesimpsonsquoteapi.glitch.me/quotes', {
      params: { count: 2 }
    }).then(
      response => response.data
    ).then(
      data => this.setState({ quotes: data })
    ).catch(
      error => console.log(error)
    );
  }

  render() {

    return (
      <>
        <Navbar />
        <QuoteForm getQuotes={this.getQuotes} />
        {
          this.state.quotes.map(
            quote => <QuoteCard key={quote.character} {...quote} />
          )
        }
      </>
    );
  }
}

export default App;
