import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
    value: number,
}

const initialState: CounterState = {
    value: 0
};

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        incremented(state: any) {
            state.value ++;
        }, 
        amountAdded(state: any, action: PayloadAction<number>) {
            state.value += action.payload;
        },
    }
});

export const { incremented, amountAdded } = counterSlice.actions;
export default counterSlice.reducer;