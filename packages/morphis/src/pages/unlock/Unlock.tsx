import { useState } from 'react'
import { Link } from 'react-router-dom'

import { LayoutLogin } from '@pages/layout/layout_login'
import { Input } from '@components/Input'
import { Button } from '@components/Button'

import Logo from '@assets/logo.svg'

import st from './Unlock.module.less'

export const Unlock = () => {
  const [password, setPassword] = useState<string>('')

  const onUnlock = () => {
    if (!password) return
  }

  return (
    <LayoutLogin
      footer={
        <Link className={st.buttonLink} to="/">
          Forgot password?
        </Link>
      }
    >
      <img alt="logo" className={st.logo} src={Logo} />
      <p className={st.logoText}>Welcome back!</p>
      <Input
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setPassword(e.target.value)
        }}
        placeholder="Password"
        sx={{ marginBottom: '16px' }}
        type="password"
        value={password}
      />
      <Button
        color="primary"
        disabled={!password.length}
        fullWidth
        onClick={onUnlock}
        variant="contained"
      >
        Unlock
      </Button>
    </LayoutLogin>
  )
}
