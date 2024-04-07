import {createSlice} from "@reduxjs/toolkit"


const movieSlice=createSlice({
     name:"nowPlaying",
     initialState:{
        movie:null,
        trailerVideo:null,
        popularMovie:null,
        trendingMovie:null

     },
     reducers:{
        addNowPlaying:(state,action)=>{
            state.movie =action.payload;
        },
        addTrailer:(state,action)=>{
            state.trailerVideo=action.payload;;
        },
        addPopular:(state,action)=>{
            state.popularMovie =action.payload;
        },
        addTrending:(state,action)=>{
            state.trendingMovie =action.payload;
        },
     }
})

export const {addNowPlaying,addTrailer,addPopular,addTrending}=movieSlice.actions;
export default movieSlice.reducer;