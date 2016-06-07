export const contacts = (state = [], action) => {
  switch (action.type) {
    case 'ADD_CONTACTS':
      return [
        ...state,
        action.contacts,
      ];
    default:
      return state;
  }
};
