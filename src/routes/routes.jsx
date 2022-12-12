import NotFound from 'views/sessions/NotFound'
import sampleentityRoutes from 'views/sampleentity/SampleentityRoutes'
import sessionRoutes from 'views/sessions/SessionRoutes'
import MatxLayout from '../components/MatxLayout/MatxLayout'
import homeRoutes from 'views/home/HomeRoutes'
import { Navigate } from 'react-router-dom'
export const AllPages = () => {
    const all_routes = [
        {
            element: <MatxLayout />,
            children: [...homeRoutes, ...sampleentityRoutes],
        },
        ...sessionRoutes,
        {
            path: '/',
            element: <Navigate to="shop" />,
        },
        {
            path: '*',
            element: <NotFound />,
        },
    ]
    return all_routes
}
