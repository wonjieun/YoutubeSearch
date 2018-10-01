// 앱과 reducer를 연결
import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';

// state를 mapping한다.
const rootReducer = combineReducers({
  // state: (state = {}) => state
  // key- state 이름, value- reducer 그 자체
  books: BooksReducer,
  activeBook: ActiveBook
});

export default rootReducer;
