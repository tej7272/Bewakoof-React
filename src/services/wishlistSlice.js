import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    wishlist:[],
    loading:false,
    error:null,
}

const user = JSON.parse(localStorage.getItem('user'));
const token = user?.token;

const base_domain = 'https://academics.newtonschool.co';
const projectID = 'dsc4zhei2sjh';

export const addToWishlist = createAsyncThunk('wishlist/addtowishlist', async (productId) => {
    const url = `${base_domain}/api/v1/ecommerce/wishlist`;

    const options = {
        method:'PATCH',
        headers:{
            'Content-Type': 'application/json',
            projectId : projectID,
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
            "productId" : `${productId}`
        })
    };

    const res = await fetch(url, options);

    if(res.ok){
        const data = await res.json();
        return await data;
    }
    else{
        const errorData = await res.json();
        throw new Error(errorData.message);
    }
})

export const deleteFromWishlist = createAsyncThunk('wishlist/deletefromwishlist', async(productId)=>{
    const url = `${base_domain}/api/v1/ecommerce/wishlist/${productId}`;


    const options={
        method:'DELETE',
        headers:{
            'Content-Type': 'application/json',
            projectId : projectID,
            Authorization: `Bearer ${token}`,
        }
    }

    const res = await fetch(url, options);

    if(res.ok){
        const data =await res.json();
        return await data;
    }
    else{
        const errorData = await res.json();
        throw new Error(errorData.message);
    }
})

const wishlistSlice = createSlice({
    name:'wishlist',
    initialState,
    reducers:{

    },
    extraReducers : (builder)=> {
        builder
        .addCase(addToWishlist.pending,state=>{
            state.loading = true;
        })
        .addCase(addToWishlist.fulfilled, (state, action) => {
            state.loading = false;
            state.wishlist = action.payload.item;
        })
        .addCase(addToWishlist.rejected, (state,action)=>{
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(deleteFromWishlist.pending, state => {
            state.pending = true;
        })
        .addCase(deleteFromWishlist.fulfilled, (state,action)=>{
            state.loading = false;
            state.wishlist = action.payload.wishlist;
        })
        .addCase(deleteFromWishlist.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.error;
        })
    }
})

export default wishlistSlice.reducer;