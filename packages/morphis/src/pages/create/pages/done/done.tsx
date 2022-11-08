import { Link } from 'react-router-dom'

import MuiLink from '@mui/material/Link'
import { LayoutLogin } from '@pages/layout/layout_login'
import { Button } from '@components/button'

import Logo from '@assets/logo.svg'
import Twitter from '@assets/twitter.svg'
import Discord from '@assets/discord.svg'

import st from './done.module.less'

export const Done = () => (
  <LayoutLogin
    footer={
      <Link to="/">
        <Button fullWidth variant="outlined">
          Finish
        </Button>
      </Link>
    }
  >
    <img alt="logo" className={st.logo} src={Logo} />
    <p className={st.logoText}>You are all done!</p>
    <p className={st.desc}>
      Follow us to get the latest offers and product updates!
    </p>
    <MuiLink href="https://twitter.com/" target="_blank">
      <Button
        color="primary"
        fullWidth
        startIcon={
          <div className={st.icon}>
            <img alt="twitter" src={Twitter} />
          </div>
        }
        sx={{
          height: '56px',
          marginBottom: '8px',
        }}
        variant="contained"
      >
        <span className={st.buttonText}>Follow us on Twitter</span>
      </Button>
    </MuiLink>
    <MuiLink href="https://discord.com/" target="_blank">
      <Button
        className={st.button}
        color="primary"
        fullWidth
        startIcon={
          <div className={st.icon}>
            <img alt="discord" src={Discord} />
          </div>
        }
        sx={{
          height: '56px',
        }}
        variant="contained"
      >
        <span className={st.buttonText}>Join our Discord</span>
      </Button>
    </MuiLink>
  </LayoutLogin>
)
