import { IntlProvider } from 'react-intl'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material/styles'

import { Create } from '@pages/create'

import './App.less'

const theme = createTheme({
  palette: {
    primary: {
      main: '#000',
    },
    secondary: {
      main: '#fff',
    },
  },
})

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
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} fallbackElement={<div>loading</div>} />
      </ThemeProvider>
    </IntlProvider>
  )
}
