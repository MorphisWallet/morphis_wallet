import { Layout } from '@pages/ layout'
import { Button } from '@components/Button'

import Logo from '@assets/logo.svg'

import st from './Create.module.less'

export function Create() {
  return (
    <Layout>
      <div className={st.create}>
        <img alt="logo" className={st.logo} src={Logo} />
        <p className={st.logoText}>Morphis</p>
        <p className={st.desc}>
          A friendly crypto wallet for your web3 journey
        </p>
        <Button
          color="primary"
          sx={{ marginBottom: '16px' }}
          variant="contained"
        >
          Create a new wallet
        </Button>
        <Button variant="outlined">I already have a wallet</Button>
      </div>
    </Layout>
  )
}
