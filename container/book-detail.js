import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
  render() {
    if (!this.props.books) {
      return <div>I m sorry</div>;
    }

    return (
      <div>
        <h3>Detail for : </h3>
        <div>{this.props.books.title}</div>
        <div>{this.props.books.pages}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    books: state.reducer2,
  };
}
export default connect(mapStateToProps)(BookDetail);
