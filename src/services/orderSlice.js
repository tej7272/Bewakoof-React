import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const auth = JSON.parse(localStorage.getItem('user'));

const token = auth?.token;

const initialState = {
    order : [],
    loading:false,
    error:"",
}


const base_domain = 'https://academics.newtonschool.co';
const projectID = 'dsc4zhei2sjh';


export const orderItems = createAsyncThunk('order/orderitems', async(addressData)=>{
    const url = `${base_domain}/api/v1/ecommerce/order`

    const  options= {
        method:'Post',
        headers:{
            'Content-Type': 'application/json',
            projectId: projectID,
            Authorization : `Bearer ${token}`,
        },
        body:JSON.stringify(addressData),
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
})

const orderSlice = createSlice({
    name:'order',
    initialState,
    reducers:{

    },
    extraReducers:(builder)=>{
        builder
        .addCase(orderItems.pending, state=>{
            state.loading = true;
        })
        .addCase(orderItems.fulfilled, (state, action)=>{
            state.loading = false;
            state.order = action.payload.order;
        })
        .addCase(orderItems.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        })
    }
})

export default orderSlice.reducer;