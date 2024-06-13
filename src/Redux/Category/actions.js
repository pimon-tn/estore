import { createAsyncThunk } from "@reduxjs/toolkit";

export const getCategories = createAsyncThunk(
    'getCategories',
    async ()=>{
        const categories = await fetch("http://localhost:5001/productCategories/categories")
        .then((res)=>res.json());
        return categories;
    }
)