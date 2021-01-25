import { createSlice } from '@reduxjs/toolkit';

export const mailSlice = createSlice({
  name: 'mail',
  initialState: {
    selctedMail : null,
    sendMessageIsOpen:false,
  },
  reducers: {
    selectMail : (state,action) => {
      state.selctedMail = action.payload
    },
    openSendMessage: state => {
  
      state.sendMessageIsOpen = true;
    },
    closeSendMessage: state => {
      state.sendMessageIsOpen = false;
    },
   
  },
});

export const {selectMail, openSendMessage, closeSendMessage } = mailSlice.actions;

export const selectedOpenMail = state => state.mail.selctedMail;

export const selectSendMessageIsOpen = state => state.mail.sendMessageIsOpen;

export default mailSlice.reducer;
