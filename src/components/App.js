import React, { Component } from 'react';
import Books from './Books/Books';

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

  editHandler = (name, id) => {
    let newBooks = this.state.books.map(book => {
      if (book.id === id) {
        return {
          ...book,
          name
        }
      }
      return book
    })
    this.setState({
      books: newBooks
    })
  }

  deleteHandler = (id) => {
    let newBooks = this.state.books.filter(book => book.id !== id)
    this.setState({
      books: newBooks
    })
  }

  render() {
    return (
      <div className="container py-5" >
        <Books
          editHandler={this.editHandler.bind(this)}
          deleteHandler={this.deleteHandler.bind(this)}
          books={this.state.books} />
      </div >
    );
  }
}

export default App;