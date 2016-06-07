import { combineReducers } from 'redux';

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
    case 'ADD_CONTACTS':
      return [
        ...state,
        ...action.contacts,
      ];
    default:
      return state;
  }
};

export const contacts = combineReducers({
  loading,
  items,
});
