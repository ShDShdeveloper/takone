import {createSlice, createAction} from "@reduxjs/toolkit";

const slice = createSlice({
    name: "products",
    initialState: {
        products: []
    },
    reducers:{
        getFromResponse: (state :any, action: any)=>{
            state.products = action.payload
        }
    }

})
const apiCall : any = createAction("api/apiCall")
export const getProducts =()=> apiCall({
    url: "/products",
    method: "get",
    onSuccess: slice.actions.getFromResponse.type
})
export default slice.reducer