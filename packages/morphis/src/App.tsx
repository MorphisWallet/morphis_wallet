import { useState } from 'react'
import { IntlProvider } from 'react-intl'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'

import { Create } from '@pages/create'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/create" />,
  },
  {
    path: 'create',
    element: <Create />,
  },
])

export default function App() {
  return (
    <IntlProvider locale="en">
      <RouterProvider router={router} />
    </IntlProvider>
  )
}
