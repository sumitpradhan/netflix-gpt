import {createSlice} from "@reduxjs/toolkit"

const gptSlice=createSlice({
    name:"gpt",
    initialState:{
        toggleGptSearch:false,
        gptMovies:null,
        movieNames:null,
    },
    reducers:{
        toggleSearch:(state,action)=>{
            state.toggleGptSearch=!state.toggleGptSearch
        },
        addGptMovie:(state,action)=>{
            const {movieNames,Movies} =action.payload
            state.gptMovies=Movies;
            state.movieNames=movieNames;
        }
    }
});
export const {toggleSearch,addGptMovie} = gptSlice.actions;
export default gptSlice.reducer;