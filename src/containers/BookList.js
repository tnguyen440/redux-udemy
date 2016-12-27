import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectBook } from '../actions';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li key={book.title} className="list-group-item">{book.title}</li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4 col-sm-offset-4 col-xs-12">
        {this.renderList()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  //whatever is returned will show up as props
  //inside if BookList
  return {
    books: state.books
  };
}

//anything returnd from this function  will end up as props on the BookList container
function mapDispatchToProps(dispatch) {
  //whenever selectBook is called , the result should be passed to all reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

//promote BookList from a component to a container - it needs to know about
//this new dispatch method, selecBook. Make it available as prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
