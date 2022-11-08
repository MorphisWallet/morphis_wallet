import { Link } from 'react-router-dom'

import { LayoutLogin } from '@pages/layout/layout_login'
import { Button } from '@components/button1'

import Logo from '@assets/logo.svg'

import st from './welcome1.module.less'

export const Welcome = () => (
  <LayoutLogin>
    <img alt="logo" className={st.logo} src={Logo} />
    <p className={st.logoText}>Morphis</p>
    <p className={st.desc}>A friendly crypto wallet for your web3 journey</p>
    <Link to="/create">
      <Button
        color="primary"
        fullWidth
        sx={{ marginBottom: '16px' }}
        variant="contained"
      >
        Create a new wallet
      </Button>
    </Link>
    <Link to="/unlock">
      <Button fullWidth variant="outlined">
        I already have a wallet
      </Button>
    </Link>
  </LayoutLogin>
)
