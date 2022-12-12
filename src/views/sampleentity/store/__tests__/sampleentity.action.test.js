import axios from '../../../../../axios'
import MockAdapter from 'axios-mock-adapter'
import store from 'store/store'
import {
    fetchSampleentity,
    addSampleentity,
    editSampleentity,
    deleteSampleentity,
} from '../sampleentity.action'

const getSampleentityListResponse = [
    {
        id: 1,
        name: 'name',
        idno: 'idno',
        email: 'email',
        mobile: 'mobile',
        address: 'address',
    },
]

const addSampleentityListResponse = (data) => {
    return { id: 2, ...data }
}
const editSampleentityListResponse = (data) => {
    return data
}

describe('should test Sampleentity redux tooklit asyncThunk api action and redux store updation', () => {
    const mock = new MockAdapter(axios)
    const endPoint = 'sampleentity'
    test('Should be able to fetch the sampleentity list and update sampleentity redux store', async () => {
        mock.onGet(`/${endPoint}`).reply(200, getSampleentityListResponse)
        const result = await store.dispatch(fetchSampleentity())
        const sampleentityList = result.payload
        expect(result.type).toBe('sampleentity/fetchSampleentity/fulfilled')
        expect(sampleentityList).toEqual(getSampleentityListResponse)

        const state = store.getState().sampleentity
        expect(state.entities).toEqual(sampleentityList)
    })

    test('Should be able to add new sampleentity to list and make post api and update sampleentity redux store', async () => {
        const body = {
            name: 'name',
            idno: 'idno',
            email: 'email',
            mobile: 'mobile',
            address: 'address',
        }
        mock.onPost(`/${endPoint}`, body).reply(
            201,
            addSampleentityListResponse(body)
        )
        const result = await store.dispatch(addSampleentity(body))
        const sampleentityItem = result.payload
        expect(result.type).toBe('sampleentity/addSampleentity/fulfilled')
        expect(sampleentityItem).toEqual(addSampleentityListResponse(body))

        const state = store.getState().sampleentity
        expect(state.entities).toContainEqual(addSampleentityListResponse(body))
    })

    test('Should be able to edit sampleentity in list and make put api call and update sampleentity redux store', async () => {
        const body = {
            id: 1,
            name: 'name',
            idno: 'idno',
            email: 'email',
            mobile: 'mobile',
            address: 'address',
        }
        mock.onPut(`/${endPoint}/${body.id}`, body).reply(
            201,
            editSampleentityListResponse(body)
        )
        const result = await store.dispatch(editSampleentity(body))
        const sampleentityItem = result.payload
        expect(result.type).toBe('sampleentity/editSampleentity/fulfilled')
        expect(sampleentityItem).toEqual(editSampleentityListResponse(body))

        const state = store.getState().sampleentity
        let changedSampleentity = state.entities.find((p) => p.id === body.id)
        expect(changedSampleentity.name).toEqual(body.name)
    })

    test('Should be able to delete sampleentity in list and update sampleentity redux store', async () => {
        const input = {
            id: 2,
        }
        mock.onDelete(`/${endPoint}/${input.id}`, input).reply(200)
        let state = store.getState().sampleentity
        const initialLength = state.entities.length
        const result = await store.dispatch(deleteSampleentity(input))
        const deletId = result.payload
        expect(result.type).toBe('sampleentity/deleteSampleentity/fulfilled')
        expect(deletId).toEqual(input.id)

        state = store.getState().sampleentity
        const updateLength = initialLength - 1
        expect(state.entities.length).toEqual(updateLength)
    })
})
