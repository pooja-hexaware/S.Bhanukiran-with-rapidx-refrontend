import store from 'store/store'
import {
    sampleentityAdded,
    sampleentityDeleted,
    sampleentityUpdated,
} from '../sampleentitySlice'

describe('testing sampleentity redux store reducers', () => {
    test('add sampleentity to store test', () => {
        let state = store.getState().sampleentity
        expect(state.entities).toHaveLength(0)
        const initialInput = {
            id: 1,
            name: 'name',
            idno: 'idno',
            email: 'email',
            mobile: 'mobile',
            address: 'address',
        }
        store.dispatch(sampleentityAdded(initialInput))
        state = store.getState().sampleentity
        expect(state.entities).toHaveLength(1)
    })

    test('update sampleentity from store should change the length of the entities array in redux store', () => {
        const initialInput = {
            id: 2,
            name: 'name',
            idno: 'idno',
            email: 'email',
            mobile: 'mobile',
            address: 'address',
        }
        store.dispatch(sampleentityAdded(initialInput))
        let state = store.getState().sampleentity
        expect(state.entities).toHaveLength(2)

        const updatedInput = {
            id: initialInput.id,
            name: 'name1',
            idno: 'idno1',
            email: 'email1',
            mobile: 'mobile1',
            address: 'address1',
        }
        store.dispatch(sampleentityUpdated(updatedInput))
        state = store.getState().sampleentity
        let changedSampleentity = state.entities.find((p) => p.id === 2)
        expect(changedSampleentity).toStrictEqual(updatedInput)
    })

    test('delete sampleentity from store should reduce the length of the entities array in redux store', () => {
        const initialInput = {
            id: 3,
            name: 'name',
            idno: 'idno',
            email: 'email',
            mobile: 'mobile',
            address: 'address',
        }
        store.dispatch(sampleentityAdded(initialInput))
        let state = store.getState().sampleentity
        expect(state.entities).toHaveLength(3)

        store.dispatch(
            sampleentityDeleted({
                id: initialInput.id,
            })
        )
        state = store.getState().sampleentity
        expect(state.entities).toHaveLength(2)
    })
})
