import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';

const rootReducer = combineReducers({
  // key- state name, value- reducer 그 자체
  books: BooksReducer,
  activeBook: ActiveBook
});

export default rootReducer;
