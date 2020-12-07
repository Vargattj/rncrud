import React, {createContext, useReducer} from 'react';
import users from '../data/users';

const UsersContext = createContext({});
const initialState = {users};

const actions = {
  createUser(state, action) {
    const user = action.payload;
    user.id = Math.random();
    return {
      ...state,
      users: [...state.users, user],
    };
  },
  deleteUser(state, action) {
    const userId = action.payload.id;
    return {
      ...state,
      users: state.users.filter((u) => u.id !== userId),
    };
  },
  updateUser(state, action) {
    const updated = action.payload;
    const oldUser = state.users.map((u) => {
      if (u.id === updated.id) {
        return (u = updated);
      }
      return u;
    });
    return {
      ...state,
      users: oldUser,
    };
  },
};
export const UsersProvider = ({children}) => {
  function reducer(state, action) {
    const fn = actions[action.type];
    return fn ? fn(state, action) : state;
  }
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UsersContext.Provider
      value={{
        state,
        dispatch,
      }}>
      {children}
    </UsersContext.Provider>
  );
};
export default UsersContext;
