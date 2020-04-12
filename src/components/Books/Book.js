import React, { Component } from 'react';

class Book extends Component {

    state = {
        isEditable: false
    }

    changeKey = (event) => {
        if (event.key === 'Enter') {
            this.setState({
                isEditable: false
            })
        }
    }

    render() {
        let output = this.state.isEditable ? (
            <input
                onChange={(e) => this.props.editHandler(e.target.value, this.props.book.id)}
                onKeyPress={this.changeKey}
                type="text"
                placeholder="enter name"
                value={this.props.book.name} />) : (<p>{this.props.book.name}</p>);

        return (
            <li className='list-group-item d-flex'>
                {output}
                <span className='ml-auto'>{this.props.book.price}</span>
                <div className='mx-4'>
                    <span
                        style={{ cursor: 'pointer', color: 'green' }}
                        onClick={() => this.setState({ isEditable: true })}>
                        <i className="far fa-edit"></i>
                    </span>
                </div>
                <div className='mx-1'>
                    <span
                        style={{ cursor: 'pointer', color: 'red' }}
                        onClick={() => this.props.deleteHandler(this.props.book.id)}>
                        <i className='fas fa-trash-alt'></i>
                    </span>
                </div>
            </li>
        );
    }
}

export default Book;