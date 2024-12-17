import { createSlice } from "@reduxjs/toolkit";

const initialState = { 
    user_id:'',
    account_type:''    
};
const loginSlice = createSlice({
  name: "loginslice",
  initialState,
  reducers: {
    login_user: (state, action) => {
        state.user_id=action.payload;
    },
    change_account:(state,action)=>{
      state.account_type=action.payload;
    }
  },
});

export const { login_user,change_account } = loginSlice.actions;

export default loginSlice.reducer;
