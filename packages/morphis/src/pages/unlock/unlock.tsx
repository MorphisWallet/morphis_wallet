import { useState } from 'react'
import { Link } from 'react-router-dom'

import { LayoutLogin } from '@layouts/layout_login'
import { Input } from '@components/input'
import { Button } from '@components/button'
import { Logo } from '@components/logo'

import st from './unlock.module.less'

export const Unlock = () => {
  const [password, setPassword] = useState<string>('')

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

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
      <Logo className={st.logo} />
      <p className={st.logoText}>Welcome back!</p>
      <Input
        onChange={onChange}
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
