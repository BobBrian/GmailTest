//The Creation of the userSlice which helps keep track off all the Credentials a Users Logs into and also maps there messages to them.
import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name:"user",

  initialState: {
    user: null
  },

  reducers: {
    login:(state, action) => {
      // the payload is the general name all the information in the email is sotred in the redux store.
      // This usaully happen when an action is run and is found in the Action Tab
      state.user = action.payload;
    },

    logout: (state) => {
      state.user = null;
    },
  },
});

export const {login, logout} = userSlice.actions;

// creation of the selected mail selector so it can be used in the app

export const selectUser = (state) => state.user.user;

export default userSlice.reducer

