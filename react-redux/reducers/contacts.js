import { combineReducers } from 'redux';
import { contact } from './contact';

const loading = (state = true, action) => {
  switch (action.type) {
    case 'ADD_CONTACTS':
      return false;
    default:
      return state;
  }
};

const items = (state = [], action) => {
  switch (action.type) {
    case 'FAVOURITE_CONTACT':
      return [
        ...state.map(
          stateContact => {
            if (stateContact.id === action.id) {
              return contact(stateContact, action);
            }

            return stateContact;
          }
        ),
      ];
    case 'ADD_CONTACTS':
      return [
        ...state,
        ...action.contacts.map(
          contactAction => contact(contactAction, action)
        ),
      ];
    default:
      return state;
  }
};

export const contacts = combineReducers({
  loading,
  items,
});
