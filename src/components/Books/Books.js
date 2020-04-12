import React, { Component } from 'react';
import Book from './Book';

class Books extends Component {

    render() {
        return (
            <div>
                {this.props.books.map(book => {
                    return (
                        <Book
                            editHandler={this.props.editHandler}
                            deleteHandler={this.props.deleteHandler}
                            book={book} />
                    )
                })}
            </div>
        );
    }
}

export default Books;