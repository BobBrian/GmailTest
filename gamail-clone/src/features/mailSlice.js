//The Creation of the MailSlice provides us the ability to send data regarding the user form different Javascript 
// file via the Redux Database as to avoid prop drilling

import { createSlice } from '@reduxjs/toolkit';

export const mailSlice = createSlice({
  name: 'mail',
  initialState: {
    sendMessageisOpen: false,
  },
  reducers: {
    openSendMessage: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      state.sendMessageisOpen = true;
    },
    closeSendMessage: state => {
      state.sendMessageisOpen = false;
    },
  },
});

export const { openSendMessage, closeSendMessage } = counterSlice.actions;

export const selectSendMessageIsOpen = (state) => state.mail.sendMessageisOpen;

export default mailSlice.reducer;
