import { createSlice } from '@reduxjs/toolkit';


const books = createSlice({
    name: 'books',
    initialState: {
        books:[],
        id:"",
    },
    reducers: {
        setData(state, action) {
            state.books =action.payload;
        },
        setId(state,action){
        state.id=action.payload;
        }
    }
});


export const booksState = (state) => state.books;
export const { setData ,setId} = books.actions;
export default books.reducer;

