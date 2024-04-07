import {createSlice} from "@reduxjs/toolkit"


const movieSlice=createSlice({
     name:"nowPlaying",
     initialState:{
        movie:null,
        trailerVideo:null
     },
     reducers:{
        addNowPlaying:(state,action)=>{
            state.movie =action.payload;
        },
        addTrailer:(state,action)=>{
            state.trailerVideo=action.payload;;
        }
     }
})

export const {addNowPlaying,addTrailer}=movieSlice.actions;
export default movieSlice.reducer;