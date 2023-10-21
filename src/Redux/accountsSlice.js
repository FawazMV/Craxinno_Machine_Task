import { createSlice } from '@reduxjs/toolkit';

const accountsSlice = createSlice({
    name: 'accounts',
    initialState: {
        accounts: [],
        repayment: 0,
    },
    reducers: {
        addAccount: (state, action) => {
            state.accounts = [...state.accounts, action.payload];
        },
        removeAccount: (state, action) => {
            state.accounts = state.accounts.filter((account) => account.id !== action.payload);
        },
        changeRepayment: (state, action) => {
            if (!isNaN(Number(action.payload))) {
                state.repayment = Number(action.payload);
            }
        },
    },
});

export const { addAccount, removeAccount, changeRepayment } = accountsSlice.actions;
export default accountsSlice.reducer;
