import React, {createContext, useReducer} from 'react';
import users from '../data/users';

const UsersContext = createContext({});
const initialState = {users};

export const UsersProvider = ({children}) => {
  function reducer(state, action) {
    console.log(action);
    return state;
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
