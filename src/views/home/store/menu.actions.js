import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../../../axios'

const endPoint = 'items'

export const fetchItems = createAsyncThunk(
    'items/fetchItems',
    async () => {
        const response = await axios.get(`/${endPoint}`);
        const items = await response.data;
        return items;
    }
)



