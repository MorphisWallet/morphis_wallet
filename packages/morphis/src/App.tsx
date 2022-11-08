import { IntlProvider } from 'react-intl'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material/styles'

import { Welcome } from '@pages/welcome'
import { Create } from '@pages/create'
import { Done } from '@pages/create/pages/done'
import { Unlock } from '@pages/unlock'
import { Landing } from '@pages/landing'
import { Settings } from '@pages/settings'

import { Loading } from '@components/loading'

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
  {
    path: 'create/done',
    element: <Done />,
  },
  {
    path: 'unlock',
    element: <Unlock />,
  },
  {
    path: 'landing',
    element: <Landing />,
  },
  {
    path: 'settings',
    element: <Settings />,
  },
])

const App = () => (
  <IntlProvider locale="en">
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} fallbackElement={<Loading />} />
    </ThemeProvider>
  </IntlProvider>
)

export default App
