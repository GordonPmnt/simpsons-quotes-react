import React from 'react';
import Navbar from './components/Navbar';
import QuoteCard from './components/QuoteCard';
import QuoteForm from './components/QuoteForm';
import quotes from './quotes';

function App() {
  return (
    <>
      <Navbar />
      <QuoteForm />
      {
        quotes.map(quote => <QuoteCard key={quote.character} {...quote} />)
      }
    </>
  );
}

export default App;
