export const INPUT_SEARCHFIELD_CHANGE = "INPUT_SEARCHFIELD_CHANGE";
export const USERS_DID_FETCH = "USERS_DID_FETCH";

export const setUsers = (users) => {
  return {
    type: USERS_DID_FETCH,
    users: users
  };
};

export const storeResult = () => {
  return (dispatch) => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        dispatch(setUsers(users));
      });
  };
};
