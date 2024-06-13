import { createAsyncThunk } from "@reduxjs/toolkit";

export const getProducts = createAsyncThunk(
    'getProducts',
    async ()=>{
        const productData = await fetch("http://localhost:5001/productCategories/products")
        .then((res)=>res.json());
        console.log(productData);
        return productData;
    }
)