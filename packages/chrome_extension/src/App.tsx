// import { Provider } from 'react-redux'
// import { IntlProvider } from 'react-intl'
// import { RouterProvider } from 'react-router-dom'
// import { ThemeProvider } from '@mui/material/styles'

// import theme from './theme'
// import router from './router'

import { Button } from '@components/button'

const App = () => (
  <main>
    <Button>qwerqwer12341234sa fdsalkfjio3qur i9237i9r 7123098 r4732</Button>
    <Button disabled className='mb-4'>
      qwerqwer12341234sa fdsalkfjio3qur i9237i9r 7123098 r4732
    </Button>
    <Button variant="outlined">
      qwerqwer12341234sa fdsalkfjio3qur i9237i9r 7123098 r4732
    </Button>
    <Button variant="outlined" disabled>
      qwerqwer12341234sa fdsalkfjio3qur i9237i9r 7123098 r4732
    </Button>
  </main>
)

export default App
