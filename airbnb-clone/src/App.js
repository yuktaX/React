import React from 'react';
import ReactDOM from 'react-dom';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Card from './components/Card';
import data from './data';

export default function App() {
  const cards = data.map(card => {
    return (
      <Card 
        key={card.id}
        card={card}
        //{...card}  //craetes spread puts everything the old way remove .item in comp
      />
    )
  })
    
  return (
    <div>
      <Navbar />
      <Hero />
      <section className="cards--list">
        {cards}
      </section>
    </div>
  )
}
