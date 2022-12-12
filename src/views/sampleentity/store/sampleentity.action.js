import { createAsyncThunk } from '@reduxjs/toolkit'
import { showSuccess } from 'middleware/notification/store/notification.actions'
import axios from '../../../axios'

const endPoint = 'sampleentity'

export const fetchSampleentity = createAsyncThunk(
    'sampleentity/fetchSampleentity',
    async () => {
        const response = await axios.get(`/${endPoint}`)
        const sampleentity = await response.data
        return sampleentity
    }
)

export const addSampleentity = createAsyncThunk(
    'sampleentity/addSampleentity',
    async (data, thunkAPI) => {
        const response = await axios.post(`/${endPoint}`, data)
        const sampleentity = await response.data
        thunkAPI.dispatch(showSuccess('Sampleentity added successfully'))
        return sampleentity
    }
)

export const editSampleentity = createAsyncThunk(
    'sampleentity/editSampleentity',
    async (data, thunkAPI) => {
        const response = await axios.post(`/${endPoint}/${data.id}`, data)
        const sampleentity = await response.data
        thunkAPI.dispatch(showSuccess('Sampleentity updated successfully'))
        return sampleentity
    }
)

export const deleteSampleentity = createAsyncThunk(
    'sampleentity/deleteSampleentity',
    async (data, thunkAPI) => {
        const response = await axios.delete(`/${endPoint}/${data.id}`)
        const status = await response.status
        if (status === 200) {
            thunkAPI.dispatch(
                showSuccess('Selected sampleentity deleted successfully.')
            )
            return data.id
        }
    }
)
