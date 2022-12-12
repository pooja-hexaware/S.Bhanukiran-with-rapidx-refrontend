const {
    render,
    screen,
    fireEvent,
    within,
    waitFor,
    getByRole,
    act,
    cleanup,
} = require('@testing-library/react')
import '@testing-library/jest-dom/extend-expect'
import { Provider } from 'react-redux'
import store from 'store/store'
import { BrowserRouter as Router } from 'react-router-dom'
import { SettingsProvider } from 'common/contexts/SettingsContext'
import { MatxTheme } from 'components'
import axios from '../../../../axios'
import MockAdapter from 'axios-mock-adapter'
import AddSampleentity from '../AddSampleentity'

beforeEach(() => {
    const endPoint = 'sampleentity'
    const getStudentListResponse = [
        {
            id: 1,
            name: 'name',
            idno: 'idno',
            email: 'email',
            mobile: 'mobile',
            address: 'address',
        },
    ]
    const mock = new MockAdapter(axios)
    mock.onGet(`/${endPoint}`).reply(200, getStudentListResponse)
    render(
        <Provider store={store}>
            <SettingsProvider>
                <MatxTheme>
                    <Router>
                        <AddSampleentity />
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

describe('testing view SampleentityAdd Component', () => {
    test('should render AddSampleentity and to display Add Form title', async () => {
        const headingNote = screen.getByText(/Add Form/i)
        expect(headingNote).toBeInTheDocument()
    })

    test('should have all input fields present in the add form', async () => {
        const addSampleentityButtonElement = screen.getByRole('button', {
            name: /Add/i,
        })

        const nameElement = screen.getByLabelText(/Name/i)
        const idnoElement = screen.getByLabelText(/Idno/i)
        const emailElement = screen.getByLabelText(/Email/i)
        const mobileElement = screen.getByLabelText(/Mobile/i)
        const addressElement = screen.getByLabelText(/Address/i)

        expect(addSampleentityButtonElement).toBeInTheDocument()

        expect(nameElement).toBeInTheDocument()
        expect(idnoElement).toBeInTheDocument()
        expect(emailElement).toBeInTheDocument()
        expect(mobileElement).toBeInTheDocument()
        expect(addressElement).toBeInTheDocument()
    })

    test('should be able to give inputs to all fields of Sampleentity add form', async () => {
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
    })

    test('should return error message when add Sampleentity button is clicked on invalid form', async () => {
        jest.useFakeTimers()
        const addSampleentityButtonElement = screen.getByRole('button', {
            name: /Add/i,
        })

        await clickAndWait(addSampleentityButtonElement)

        let errorList = await screen.findAllByText('this field is required')
        expect(errorList).toHaveLength(5)
    })
})
