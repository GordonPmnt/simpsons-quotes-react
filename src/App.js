import React from 'react';
import Navbar from './components/Navbar.js'
import QuoteCard from './components/QuoteCard.js'
import quotes from './quotes'

function App() {
  return (
    <>
      <Navbar />
      {
        quotes.map(quote => <QuoteCard key={quote.character} {...quote} />)
      }
    </>
  );
}

export default App;
