import {configureStore} from '@reduxjs/toolkit'
import products from './products'
import api from "./api";
export default configureStore({
    reducer : {
        products : products
    },
    middleware : [api]
})
