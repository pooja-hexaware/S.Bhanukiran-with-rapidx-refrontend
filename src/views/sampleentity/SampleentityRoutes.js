import React, { lazy } from 'react'
import Loadable from 'components/Loadable/Loadable'

const SampleentityList = Loadable(lazy(() => import('./SampleentityList')))
const EditSampleentity = Loadable(lazy(() => import('./EditSampleentity')))
const AddSampleentity = Loadable(lazy(() => import('./AddSampleentity')))

const sampleentityRoutes = [
    {
        path: '/sampleentity',
        element: <SampleentityList />,
    },
    {
        path: '/sampleentity/edit/:id',
        element: <EditSampleentity />,
    },
    {
        path: '/sampleentity/add',
        element: <AddSampleentity />,
    },
]

export default sampleentityRoutes
