import { combineReducers } from 'redux';

const id = (state = null, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const loading = (state = true, action) => {
  switch (action.type) {
    case 'ADD_CONTACTS':
      return false;
    default:
      return state;
  }
};

const name = (state = null, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const favourite = (state = false, action) => {
  switch (action.type) {
    case 'FAVOURITE_CONTACT':
      return action.isActive;
    default:
      return state;
  }
};

const twitter = (state = null, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const contact = combineReducers({
  id,
  loading,
  name,
  favourite,
  twitter,
});
