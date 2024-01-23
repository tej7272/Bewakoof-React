import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const user = JSON.parse(localStorage.getItem('user'));
const token = user?.token

const initialState = {
    loading : false,
    error : "",
    user : "",
    token : "",
}

const base_domain = 'https://academics.newtonschool.co'
const projectID = 'dsc4zhei2sjh'

export const signUpUser = createAsyncThunk('signupuser', async (signupData)=>{
    const url = `${base_domain}/api/v1/user/signup`

    const options = {
        method : 'POST',
        headers : {
            'Content-Type': 'application/json',
            'projectId': projectID
        },
        body : JSON.stringify(signupData)
    }

    const res = await fetch(url,options);

    if(res.ok){
        const data = await res.json();
        const userSignupData = {
            token : data.token,
            name : data.data.user.name,
            email : data.data.user.email,
            password : data.data.user.password
        }

        localStorage.setItem('user', JSON.stringify(userSignupData));
        return await data;
    }
    else{
        const errorData = await res.json();
        throw new Error(errorData.message);
    }
});

export const loginUser = createAsyncThunk('loginuser', async (loginData)=>{
    const url = `${base_domain}/api/v1/user/login`;
    const options = {
        method:'POST',
        headers:{
            'Content-Type': 'application/json',
            'projectId' : projectID
        },
        body : JSON.stringify(loginData),
    }

    const res = await fetch(url,options);

    if(res.ok){
        const data = await res.json();
        const userLoginData = {
            token : data.token,
            name : data.data.name,
            email : data.data.email,
            password : data.data.password
        }

        localStorage.setItem('user', JSON.stringify(userLoginData));

        return await data;
    }
    else{
        const errorData = await res.json();
        throw new Error(errorData.message);
    }
})

export const updatePassword = createAsyncThunk('updatepassword', async (updateData)=>{
    const url = `${base_domain}/api/v1/user/updateMyPassword`;
    const options = {
        method:'PATCH',
        headers:{
            'Content-Type': 'application/json',
            projectId : projectID,
            Authorization: `Bearer ${token}`,
        },
        body : JSON.stringify(updateData),
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


export const deleteMyAccount = createAsyncThunk('deletemyaccount', async (deleteData)=>{
    const url = `${base_domain}/api/v1/user/deleteMe`;
    const options = {
        method:'DELETE',
        headers:{
            'Content-Type': 'application/json',
            projectId : projectID,
            Authorization: `Bearer ${token}`,
        },
        body : JSON.stringify(deleteData),
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


export const forgotPassword = createAsyncThunk('forgotPassword', async (forgotData)=>{
    const url = `${base_domain}/api/v1/user/forgotPassword`;
    const options = {
        method:'POST',
        headers:{
            'Content-Type': 'application/json',
            projectId : projectID,
        },
        body : JSON.stringify(forgotData),
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


const authSlice = createSlice({
    name : 'user',
    initialState,
    reducers : {

    },
    extraReducers : (builder) => {
        builder
        .addCase(signUpUser.pending, state =>{
            state.loading ='true';
            state.user = "";
            state.error =''
        })
        .addCase(signUpUser.fulfilled, (state, action)=>{
            state.loading = "false";
            state.user = action.payload.user;
            state.error = "";
        })
        .addCase(signUpUser.rejected,(state,action)=>{
            state.loading = "false";
            state.user = "";
            state.error = action.payload;
        })
        .addCase(loginUser.pending,state=>{
            state.loading = true;
            state.user = "";
            state.error = "";
        })
        .addCase(loginUser.fulfilled, (state,action)=>{
            state.loading = false;
            state.user = action.payload.user;
            state.error = "";
        })
        .addCase(loginUser.rejected,(state,action)=>{
            state.loading = false;
            state.user = "";
            state.error = action.payload;
        })
        .addCase(updatePassword.pending,state=>{
            state.loading = true;
            state.user = "";
            state.error = "";
        })
        .addCase(updatePassword.fulfilled, (state,action)=>{
            state.loading = false;
            state.user = action.payload.user;
            state.error = "";
        })
        .addCase(updatePassword.rejected,(state,action)=>{
            state.loading = false;
            state.user = "";
            state.error = action.payload;
        })
        .addCase(deleteMyAccount.pending,state=>{
            state.loading = true;
            state.user = "";
            state.error = "";
        })
        .addCase(deleteMyAccount.fulfilled, (state,action)=>{
            state.loading = false;
            state.user = "";
            state.error = "";
        })
        .addCase(deleteMyAccount.rejected,(state,action)=>{
            state.loading = false;
            state.user = "";
            state.error = action.payload;
        })
        .addCase(forgotPassword.pending,state=>{
            state.loading = true;
            state.user = "";
            state.error = "";
        })
        .addCase(forgotPassword.fulfilled, (state,action)=>{
            state.loading = false;
            state.user = action.payload.user;
            state.error = "";
        })
        .addCase(forgotPassword.rejected,(state,action)=>{
            state.loading = false;
            state.user = "";
            state.error = action.payload;
        })
    }
})

export default authSlice.reducer;