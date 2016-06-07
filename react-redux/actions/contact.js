export const favouriteContact = (id, isActive) => ({
  type: 'FAVOURITE_CONTACT',
  id,
  isActive,
});

export const changeTwitterHandle = (id, handle) => ({
  type: 'CHANGE_TWITTER',
  id,
  handle,
});
