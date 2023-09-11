import { createSlice } from '@reduxjs/toolkit';

// Atua como um "modelo" para os dados recebidos
const initialState = {
    name: '',
    email: '',
    photo: '',
}

// Usar Slices permite mutação de valor de estado (Immer )
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.photo = action.payload.photo;
        },
        logout: (state) => {
            state.name = null;
            state.email = null;
            state.photo = null;
        },
    }
});

export const { setUser, logout } = userSlice.actions;

export const selectedName = (state) => state.user.name;
export const selectedEmail = (state) => state.user.email;
export const selectedPhoto = (state) => state.user.photo;

export default userSlice.reducer;