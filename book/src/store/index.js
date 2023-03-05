import { configureStore  } from '@reduxjs/toolkit';
import books from './books';



export default configureStore({
    reducer:{
        books:books
    }
});


