import { Link } from 'react-router-dom'

import { LayoutLogin } from '@pages/layout/layout_login'
import { Button } from '@components/Button'

import Logo from '@assets/logo.svg'

import st from './Done.module.less'

export const Done = () => (
  <LayoutLogin
    footer={
      <Link className={st.buttonLink} to="/">
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
  </LayoutLogin>
)
