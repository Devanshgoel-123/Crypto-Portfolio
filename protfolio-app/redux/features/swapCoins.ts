import {createSlice,PayloadAction} from "@reduxjs/toolkit";

type SwapCoins={
  coin1:String,
  coin2:String
};
const initialState={
   coin1:"",
    coin2:""
} as SwapCoins;

const Coinslice=createSlice({
        name:"SwapCoins",
        initialState,
        reducers:{
            setCoins(state:SwapCoins,action:PayloadAction<SwapCoins>){
                state.coin1=action.payload.coin1;
                state.coin2=action.payload.coin2;
                console.log(state.coin1,state.coin2)
            }
        }
    
})
export const {setCoins}=Coinslice.actions;
export default Coinslice.reducer