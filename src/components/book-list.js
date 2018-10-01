import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookList extends Component {
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li key={book.title} className="list-group-item">{book.title}</li>
            );
        });
    }
    render() {
        console.log(this.props.asdf);
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}

function mapStateToProps(state) {
    return {
        // 리덕스와 컨테이너의 컴포넌트와 연결
        books: state.books
    };
}

export default connect(mapStateToProps)(BookList);