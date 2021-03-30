//The Creation of the MailSlice provides us the ability to send data regarding the user form different Javascript 
// file via the Redux Database as to avoid prop drilling

import { createSlice } from '@reduxjs/toolkit';

export const mailSlice = createSlice({
  name:"mail",

  initialState: {
    // creating a new state for the selected mail in the emailrow
    selectedMail: null,
    sendMessageIsOpen: false,
  },

  reducers: {
    selectMail:(state, action) => {
      // the payload is the general name all the information in the email is sotred in the redux store.
      // This usaully happen when an action is run and is found in the Action Tab
      state.selectedMail = action.payload;

    },

    openSendMessage: (state) => {
      state.sendMessageIsOpen = true;
    },

    closeSendMessage: (state) => {
      state.sendMessageIsOpen = false;
    },
  },
});

export const {selectMail, openSendMessage, closeSendMessage} = mailSlice.actions;

// creation of the selected mail selector so it can be used in the app

export const selectOpenMail = (state) => state.mail.selectedMail;

export const selectSendMessageIsOpen = (state) => state.mail.sendMessageIsOpen;

export default mailSlice.reducer

