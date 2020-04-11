import React, { Component } from 'react';
import Books from './Books/Books';
import './App.css';

class App extends Component {
  state = {
    books: [
      {
        name: 'React',
        price: 20,
        id: 1
      },
      {
        name: 'Redux',
        price: 30,
        id: 2
      },
      {
        name: 'React-Native',
        price: 25,
        id: 3
      }
    ]
  }

  deleteHandler = (id) => {
    let newBooks = this.state.books.filter(book => book.id != id)
    this.setState({
      books: newBooks
    })
  }

  render() {
    return (
      <div className="container py-5">
        <Books deleteHandler={this.deleteHandler} books={this.state.books} />
      </div>
    );
  }
}

export default App;