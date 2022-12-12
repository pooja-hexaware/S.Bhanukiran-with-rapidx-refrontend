import Shop from 'views/shops/Shop'
import Home from './Home'

const routes = [
    {
        path: '/shop',
        element: <Shop />,
    },
    {
        path: '/menu',
        element: <Home />
    }
  
]

export default routes
