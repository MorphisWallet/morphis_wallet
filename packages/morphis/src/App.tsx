import { Provider } from 'react-redux'
import { IntlProvider } from 'react-intl'
import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles'

import { store } from '@core/store'
import theme from './theme'
import router from './router'

import './App.less'

const App = () => (
  <IntlProvider locale="en">
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </ThemeProvider>
  </IntlProvider>
)

export default App
