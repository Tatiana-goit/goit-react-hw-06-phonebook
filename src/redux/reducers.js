import { combineReducers } from 'redux';
import initialContacts from '../data.json';
import {ADD_CONTACT} from './types'

const initialState = initialContacts;

// const initialState = {
//   contacts:
//     JSON.parse(window.localStorage.getItem('contacts')) ?? initialContacts,
// //   filter: '',
// };

const contactList = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_CONTACT:
        /////'contact/add'/добавить проверку на существующее имя
      return [...state, payload];
    case 'contact/delete':
      return state.filter(contact => contact.id !== payload.id);
    default:
      return state;
  }
};

const contactFilter = (state = '', { type, payload }) => {
    switch (type) {
    //   case types.FILTER:
    //     return payload;
  
      default:
        return state;
    }
  };

const contactReducer = combineReducers({
  contact: contactList,
  filter: contactFilter,
});

export default contactReducer;
