import { createSlice } from "@reduxjs/toolkit";

const AppSlice = createSlice({
    name: "game",
    initialState: {
        score: 0,
        isPicking: true,
        pick: "scissors",
        randomPick: "rock",
        isShowRule: false
    },

    reducers: {

        setPick: (state, action) => {
            state.isPicking = false
            state.pick = action.payload.item
            state.randomPick = action.payload.rand
        },

        playAgain: (state) => {
            state.isPicking = true;
            state.pick = null
            state.randomPick = null
        },

        addScore: (state) => {
            state.score += .5;
        },

        showRule: (state) => {
            state.isShowRule = !state.isShowRule
        }
    }
})

export const { setPick, playAgain, addScore, showRule } = AppSlice.actions
export default AppSlice.reducer