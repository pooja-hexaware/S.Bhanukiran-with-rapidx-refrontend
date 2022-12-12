import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../../../axios'

const endPoint = 'store'

export const fetchShops = createAsyncThunk(
    'store/fetchShops',
    async () => {
        const response = await axios.get(`/${endPoint}`);
        const shops = await response.data;
        return shops;
    }
)

