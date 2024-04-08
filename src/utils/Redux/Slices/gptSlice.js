import {createSlice} from "@reduxjs/toolkit"

const gptSlice=createSlice({
    name:"gpt",
    initialState:{
        toggleGptSearch:false
    },
    reducers:{
        toggleSearch:(state,action)=>{
            state.toggleGptSearch=!state.toggleGptSearch
        }
    }
});
export const {toggleSearch} = gptSlice.actions;
export default gptSlice.reducer;