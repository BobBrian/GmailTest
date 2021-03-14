//The Creation of the MailSlice provides us the ability to send data regarding the user form different Javascript 
// file via the Redux Database as to avoid prop drilling

import { createSlice } from '@reduxjs/toolkit';

export const mailSlice = createSlice({
  name: 'mail',
  initialState: {
    sendMessageisOpen: false,
  },
  reducers: {
    // this is repsonsible for changing a piece of state in the data layer. It is triggered by the
    // Compose button setting it to true when opebed adnd false when close
    openSendMessage: state => {
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
