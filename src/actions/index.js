const addUser = (data) => {
  return {
    type: 'ADD_USER',
    payload: data,
  };
};

const usersRequestedAction = () => {
  return {
    type: "FETCH_USERS_REQUEST",
  };
};

const usersLoadedAction = (users) => {
  return {
    type: "FETCH_USERS_SUCCESS",
    payload: users,
  };
};

const usersErrorAction = (error) => {
  return {
    type: "FETCH_USERS_FAILURE",
    payload: error,
  };
};

const updateUsersAction = (users) => {
  return {
    type: "UPDATE_USERS",
    payload: users,
  };
};

const fetchUsers = (getData, dispatch) => {
  dispatch(usersRequestedAction());

  getData()
    .then((data) => dispatch(usersLoadedAction(data)))
    .catch((err) => dispatch(usersErrorAction(err)));
};

export {
  addUser,
  fetchUsers,
  updateUsersAction,
}