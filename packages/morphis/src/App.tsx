import { IntlProvider } from 'react-intl'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material/styles'

import { Welcome } from '@pages/welcome'
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
  typography: {
    fontFamily: 'satoshi',
  },
})

const router = createBrowserRouter([
  {
    path: '/',
    element: <Welcome />,
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
