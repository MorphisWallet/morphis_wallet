import { Link } from 'react-router-dom'

import { Layout } from '@pages/layout'
import { Button } from '@components/Button'

import Logo from '@assets/logo.svg'

import st from './Welcome.module.less'

export const Welcome = () => (
  <Layout>
    <div className={st.welcome}>
      <img alt="logo" className={st.logo} src={Logo} />
      <p className={st.logoText}>Morphis</p>
      <p className={st.desc}>A friendly crypto wallet for your web3 journey</p>
      <Link className={st.buttonLink} to="/create">
        <Button
          color="primary"
          sx={{ marginBottom: '16px' }}
          variant="contained"
        >
          Create a new wallet
        </Button>
      </Link>
      <Link className={st.buttonLink} to="/login">
        <Button variant="outlined">I already have a wallet</Button>
      </Link>
    </div>
  </Layout>
)
