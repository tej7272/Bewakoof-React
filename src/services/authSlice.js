import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    loading : false,
    error : "",
    user : "",
    token : "",
}

const base_domain = 'https://academics.newtonschool.co'
const projectID = 'dsc4zhei2sjh'

export const signUpUser = createAsyncThunk('user/signupuser', async (signupData)=>{
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
        console.log('signData', data);
        const userSignupData = {
            token : data.token,
            name : data.data.user.name,
            email : data.data.user.email
        }

        localStorage.setItem('user', JSON.stringify(userSignupData));
        return await data;
    }
    else{
        throw new Error('User already exists');
    }
});

export const loginUser = createAsyncThunk('user/loginuser', async (loginData)=>{
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
        // console.log("loginData", data);
        const userLoginData = {
            token : data.token,
            name : data.data.name,
            email : data.data.email
        }

        localStorage.setItem('user', JSON.stringify(userLoginData));
        return await data;
    }
    else{
        throw new Error ("provide correct password")
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
            state.error = action.error.message;
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
            state.error = action.error.message;
        })
    }
})

export default authSlice.reducer;