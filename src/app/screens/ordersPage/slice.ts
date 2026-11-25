import { createSlice } from "@reduxjs/toolkit";
import { OrdersPageState } from "../../../lib/types/screen";

const initialState: OrdersPageState = {
    pausedOrders: [],
    processOrders: [],
    finishedOrders: [],
};

const ordersPageSlice = createSlice({
    name: "ordersPage",
    initialState,
    reducers: {
        setPausedOrder: (state, action) => {
            state.pausedOrders = action.payload;
        },
        setProcessOrder: (state, action) => {
            state.processOrders = action.payload;
        },
        setFinishedOrder: (state, action) => {
            state.finishedOrders = action.payload;
        },
    },
});

export const { setPausedOrder, setProcessOrder, setFinishedOrder } =
    ordersPageSlice.actions;

const OrdersPageReducer = ordersPageSlice.reducer;
export default OrdersPageReducer;
