const { render, screen, cleanup } = require('@testing-library/react')
import '@testing-library/jest-dom/extend-expect'
import { Provider } from 'react-redux'
import store from 'store/store'
import { BrowserRouter as Router } from 'react-router-dom'
import { SettingsProvider } from 'common/contexts/SettingsContext'
import { MatxTheme } from 'components'
import SampleentityList from '../SampleentityList'
import axios from '../../../../axios'
import MockAdapter from 'axios-mock-adapter'

afterEach(cleanup)

test('should render Sampleentity rows when api response has data', async () => {
    const endPoint = 'sampleentity'
    const getSampleentityListResponse = [
        {
            id: 1,
            name: 'name1',
            idno: 'idno1',
            email: 'email1',
            mobile: 'mobile1',
            address: 'address1',
        },
    ]
    const mock = new MockAdapter(axios)
    mock.onGet(`/${endPoint}`).reply(200, getSampleentityListResponse)
    render(
        <Provider store={store}>
            <SettingsProvider>
                <MatxTheme>
                    <Router>
                        <SampleentityList />
                    </Router>
                </MatxTheme>
            </SettingsProvider>
        </Provider>
    )
    const sampleentityNameCell = await screen.findByText(/name1/i)

    expect(sampleentityNameCell).toHaveTextContent(/name1/i)
    mock.reset()
})
