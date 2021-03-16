//The Creation of the MailSlice provides us the ability to send data regarding the user form different Javascript 
// file via the Redux Database as to avoid prop drilling

import { createSlice } from '@reduxjs/toolkit';

export const mailSlice = createSlice({
  name: 'mail',
  initialState: {
    sendMessageIsOpen: false,
  },
  reducers: {
    // this is repsonsible for changing a piece of state in the data layer. It is triggered by the
    // Compose button setting it to true when opebed adnd false when close
    openSendMessage: (state) => {
      state.sendMessageIsOpen = true;
    },
    closeSendMessage: (state) => {
      state.sendMessageIsOpen = false;
    },
  },
});

export const { openSendMessage, closeSendMessage } = mailSlice.actions;

export const selectSendMessageIsOpen = (state) => state.mail.sendMessageIsOpen;

export default mailSlice.reducer;
