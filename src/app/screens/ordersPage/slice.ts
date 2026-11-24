import { createSlice } from "@reduxjs/toolkit";
import { OrdersPageState } from "../../../lib/types/screen";

const initialState: OrdersPageState = {
    pausedOrder: [],
    processOrder: [],
    finishedOrder: [],
};

const ordersPageSlice = createSlice({
    name: "ordersPage",
    initialState,
    reducers: {
        setPausedOrder: (state, action) => {
            state.pausedOrder = action.payload;
        },
        setProcessOrder: (state, action) => {
            state.processOrder = action.payload;
        },
        setFinishedOrder: (state, action) => {
            state.finishedOrder = action.payload;
        },
    },
});

export const { setPausedOrder, setProcessOrder, setFinishedOrder } =
    ordersPageSlice.actions;

const OrdersPageReducer = ordersPageSlice.reducer;
export default OrdersPageReducer;
