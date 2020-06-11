import { createStore } from 'redux';
import reducer from './reducers/message';
const store = createStore(reducer);

export default store;
