import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const auth = JSON.parse(localStorage.getItem('user'));

const token = auth?.token;

const initialState = {
    cart : [],
    quantity:0,
    loading:false,
    error:"",
}

const base_domain = 'https://academics.newtonschool.co';
const projectID = 'dsc4zhei2sjh';

export const addToCart = createAsyncThunk('cart/addtocart', async (productID) =>{

    const url = `${base_domain}/api/v1/ecommerce/cart/${productID}`

    const options = {
        method : 'PATCH',
        headers : {
            'Content-Type': 'application/json',
            projectId: projectID,
            Authorization: `Bearer ${token}`,
        },
        body :JSON.stringify({
            quantity : 1
        })
    }

    const res = await fetch(url,options);

    if(res.ok){
        const data = await res.json();
        return await data;
    }
    else{
        const errorData = await res.json();
        throw new Error(errorData.message);
    }
});

export const deleteFromCart = createAsyncThunk('cart/deletefromcart',async (productID)=>{
    
    const url = `${base_domain}/api/v1/ecommerce/cart/${productID}`;
    const options = {
        method : 'DELETE',
        headers : {
            'Content-Type': 'application/json',
            projectId : projectID,
            Authorization : `Bearer ${token}`,
        },
    }

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

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{

    },
    extraReducers : (builder)=> {
        builder
        .addCase(addToCart.pending, state => {
            state.loading=true;
        })
        .addCase(addToCart.fulfilled,(state, action)=>{
            state.loading=false;
            state.cart = action.payload.cart;
        })
        .addCase(addToCart.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(deleteFromCart.pending, state => {
            state.loading = true;
        })
        .addCase(deleteFromCart.fulfilled, (state,action)=>{
            state.loading = false;
            state.cart = action.payload.cart;
        })
        .addCase(deleteFromCart.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
    }
})

export default cartSlice.reducer;