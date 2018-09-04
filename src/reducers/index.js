import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';

const rootReducer = combineReducers({
  // key- state name, value- reducer 그 자체
  books: BooksReducer
});

export default rootReducer;
