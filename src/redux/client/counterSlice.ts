import { createSlice} from '@reduxjs/toolkit';
import { useAppDispatch  , useAppSelector } from '../core';

type InitialState = {
  count : number
}

const counterSlice = createSlice({
    name : 'counter',
    initialState : {count : 0} as InitialState,
    reducers : {
        increment (state){
            
            state.count += 1; 
        },
        decrement (state) {
            state.count -= 1 ;
        },
        clear(state) {
            state.count = 0;
        }
    }
});
export default counterSlice.reducer;
const {increment, decrement, clear}= counterSlice.actions;

export function useCounter() {
    const count = useAppSelector(state => state.count.count);
    const dispatch = useAppDispatch();

    return{
        count, 
        increment : () => dispatch(increment()),
        decrement: () => dispatch(decrement()),
        clear : () => dispatch(clear())
    }
}