import { createSlice } from '@reduxjs/toolkit'
import { fetchSampleentity } from './sampleentity.action'
import { addSampleentity } from './sampleentity.action'
import { editSampleentity } from './sampleentity.action'
import { deleteSampleentity } from './sampleentity.action'

const fetchSampleentityExtraReducer = {
    [fetchSampleentity.pending]: (state, action) => {
        state.loading = true
    },
    [fetchSampleentity.fulfilled]: (state, action) => {
        state.entities = [...action.payload]
        state.loading = false
    },
    [fetchSampleentity.rejected]: (state, action) => {
        state.loading = false
    },
}

const addSampleentityExtraReducer = {
    [addSampleentity.pending]: (state, action) => {
        state.loading = true
    },
    [addSampleentity.fulfilled]: (state, action) => {
        state.entities.push(action.payload)
        state.loading = false
    },
    [addSampleentity.rejected]: (state, action) => {
        state.loading = false
    },
}

const editSampleentityExtraReducer = {
    [editSampleentity.pending]: (state, action) => {
        state.loading = true
    },
    [editSampleentity.fulfilled]: (state, action) => {
        const { id, name, idno, email, mobile, address } = action.payload
        const existingSampleentity = state.entities.find(
            (sampleentity) => sampleentity._id.toString() === id.toString()
        )
        if (existingSampleentity) {
            existingSampleentity.name = name
            existingSampleentity.idno = idno
            existingSampleentity.email = email
            existingSampleentity.mobile = mobile
            existingSampleentity.address = address
        }
        state.loading = false
    },
    [editSampleentity.rejected]: (state, action) => {
        state.loading = false
    },
}

const deleteSampleentityExtraReducer = {
    [deleteSampleentity.pending]: (state, action) => {
        state.loading = true
    },
    [deleteSampleentity.fulfilled]: (state, action) => {
        const id = action.payload
        const existingSampleentity = state.entities.find(
            (sampleentity) => sampleentity._id.toString() === id.toString()
        )
        if (existingSampleentity) {
            state.entities = state.entities.filter(
                (sampleentity) => sampleentity._id !== id
            )
        }
        state.loading = false
    },
    [deleteSampleentity.rejected]: (state, action) => {
        state.loading = false
    },
}
const sampleentitySlice = createSlice({
    name: 'sampleentity',
    initialState: {
        entities: [],
        loading: false,
    },
    reducers: {
        sampleentityAdded(state, action) {
            state.entities.push(action.payload)
        },
        sampleentityUpdated(state, action) {
            const { id, name, idno, email, mobile, address } = action.payload
            const existingSampleentity = state.entities.find(
                (sampleentity) => sampleentity._id.toString() === id.toString()
            )
            if (existingSampleentity) {
                existingSampleentity.name = name
                existingSampleentity.idno = idno
                existingSampleentity.email = email
                existingSampleentity.mobile = mobile
                existingSampleentity.address = address
            }
        },
        sampleentityDeleted(state, action) {
            const { id } = action.payload
            const existingSampleentity = state.entities.find(
                (sampleentity) => sampleentity._id.toString() === id.toString()
            )
            if (existingSampleentity) {
                state.entities = state.entities.filter(
                    (sampleentity) => sampleentity._id !== id
                )
            }
        },
    },
    extraReducers: {
        ...fetchSampleentityExtraReducer,
        ...addSampleentityExtraReducer,
        ...editSampleentityExtraReducer,
        ...deleteSampleentityExtraReducer,
    },
})

export const { sampleentityAdded, sampleentityUpdated, sampleentityDeleted } =
    sampleentitySlice.actions

export default sampleentitySlice.reducer
