import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    token: "",
    username: ""
}

export const authSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload
        },
        setUsername: (state, action) => {
            state.username = action.payload
        }
    }
})

export const { setToken,setUsername } = authSlice.actions;

export default authSlice.reducer 