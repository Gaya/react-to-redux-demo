export const addContacts = (contacts) => ({
  type: 'ADD_CONTACTS',
  contacts,
});

export const fetchContacts = () => (
  dispatch => {
    fetch('/contacts.json')
      .then((response) => response.json())
      .then((contacts) => {
        dispatch(addContacts(contacts));
      });
  });
