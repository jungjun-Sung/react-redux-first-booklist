import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectBook } from '../action/index';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book, i) => {
      return (
        <button
          onClick={() => {
            this.props.selectBook(book);
          }}
          key={i}
        >
          {book.title}
        </button>
      );
    });
  }

  render() {
    return <div>{this.renderList()}</div>;
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    books: state.reducer,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
