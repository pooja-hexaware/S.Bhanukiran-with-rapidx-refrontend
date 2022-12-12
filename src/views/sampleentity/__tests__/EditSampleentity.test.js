const {
    render,
    screen,
    fireEvent,
    within,
    getByRole,
    act,
    cleanup,
} = require('@testing-library/react')
import '@testing-library/jest-dom/extend-expect'
import { Provider } from 'react-redux'
import store from 'store/store'
import {
    BrowserRouter as Router,
    Navigate,
    Route,
    Routes,
} from 'react-router-dom'
import { SettingsProvider } from 'common/contexts/SettingsContext'
import { MatxTheme } from 'components'
import EditSampleentity from '../EditSampleentity'
import { sampleentityAdded } from '../store/sampleentitySlice'
beforeAll(() => {
    store.dispatch(
        sampleentityAdded({
            id: 1,
            name: 'name',
            idno: 'idno',
            email: 'email',
            mobile: 'mobile',
            address: 'address',
        })
    )
})

beforeEach(() => {
    render(
        <Provider store={store}>
            <SettingsProvider>
                <MatxTheme>
                    <Router>
                        <Routes>
                            <Route
                                path="/"
                                element={
                                    <Navigate
                                        to="sampleentity/edit/1"
                                        replace
                                    />
                                }
                            />
                            <Route
                                path="sampleentity/edit/:id"
                                element={<EditSampleentity />}
                            />
                        </Routes>
                    </Router>
                </MatxTheme>
            </SettingsProvider>
        </Provider>
    )
})

const clickAndWait = async (element) => {
    await act(async () => {
        fireEvent.click(element)
    })

    await act(async () => {
        jest.runOnlyPendingTimers()
    })
}

afterEach(cleanup)

describe('testing view of SampleentityEdit Component', () => {
    test('should render EditSampleentity and display the heading Edit Form', async () => {
        const headingNote = screen.getByText(/Edit Form/i)
        expect(headingNote).toBeInTheDocument()
    })

    test('should have all input fields present in the edit form', async () => {
        const saveSampleentityButtonElement = screen.getByRole('button', {
            name: /save/i,
        })
        const nameElement = screen.getByLabelText(/Name/i)
        const idnoElement = screen.getByLabelText(/Idno/i)
        const emailElement = screen.getByLabelText(/Email/i)
        const mobileElement = screen.getByLabelText(/Mobile/i)
        const addressElement = screen.getByLabelText(/Address/i)

        expect(saveSampleentityButtonElement).toBeInTheDocument()

        expect(nameElement).toBeInTheDocument()
        expect(idnoElement).toBeInTheDocument()
        expect(emailElement).toBeInTheDocument()
        expect(mobileElement).toBeInTheDocument()
        expect(addressElement).toBeInTheDocument()
    })

    test('should be able to give inputs to all fields of Sampleentity edit form', async () => {
        const nameElement = screen.getByLabelText(/Name/i)
        const idnoElement = screen.getByLabelText(/Idno/i)
        const emailElement = screen.getByLabelText(/Email/i)
        const mobileElement = screen.getByLabelText(/Mobile/i)
        const addressElement = screen.getByLabelText(/Address/i)

        fireEvent.change(nameElement, { target: { value: 'name' } })
        fireEvent.change(idnoElement, { target: { value: 'idno' } })
        fireEvent.change(emailElement, { target: { value: 'email' } })
        fireEvent.change(mobileElement, { target: { value: 'mobile' } })
        fireEvent.change(addressElement, { target: { value: 'address' } })

        expect(nameElement.value).toBe('name')

        expect(idnoElement.value).toBe('idno')

        expect(emailElement.value).toBe('email')

        expect(mobileElement.value).toBe('mobile')

        expect(addressElement.value).toBe('address')
    })

    test('should return error message when save button is clicked on invalid form', async () => {
        jest.useFakeTimers()
        const nameElement = screen.getByLabelText(/Name/i)
        const idnoElement = screen.getByLabelText(/Idno/i)
        const emailElement = screen.getByLabelText(/Email/i)
        const mobileElement = screen.getByLabelText(/Mobile/i)
        const addressElement = screen.getByLabelText(/Address/i)

        fireEvent.change(nameElement, { target: { value: '' } })
        fireEvent.change(idnoElement, { target: { value: '' } })
        fireEvent.change(emailElement, { target: { value: '' } })
        fireEvent.change(mobileElement, { target: { value: '' } })
        fireEvent.change(addressElement, { target: { value: '' } })
        await act(async () => {
            jest.runOnlyPendingTimers()
        })
        const saveSampleentityButtonElement = screen.getByRole('button', {
            name: /save/i,
        })

        await clickAndWait(saveSampleentityButtonElement)

        const errorList = await screen.findAllByText('this field is required')
        expect(errorList).toHaveLength(5)
    })
})
