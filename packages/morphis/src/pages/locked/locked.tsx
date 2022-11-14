import { Form, FormikHelpers, useFormik } from 'formik'
import { Link } from 'react-router-dom'
import * as Yup from 'yup'

import { Loading } from '@components/loading'
import { LayoutLogin } from '@layouts/layout_login'
import { Input } from '@components/input'
import { Button } from '@components/button'
import { Logo } from '@components/logo'

import {
  useAppDispatch,
  useInitializedGuard,
  useLockedGuard,
} from '@core/hooks'
import { unlockWallet } from '@core/slices/wallet'

import st from './locked.module.less'

type UnlockValues = {
  password: string
}

const SCHEMA = Yup.object({
  password: Yup.string().ensure(),
})

export const Locked = () => {
  const dispatch = useAppDispatch()
  const initGuardLoading = useInitializedGuard(true)
  const lockedGuardLoading = useLockedGuard(true)
  const { values, touched, errors, handleSubmit } = useFormik({
    initialValues: {
      password: '',
    },
    validationSchema: SCHEMA,
    onSubmit: onUnlock,
  })

  const guardsLoading = initGuardLoading || lockedGuardLoading

  async function onUnlock(
    { password }: UnlockValues,
    { setFieldError }: FormikHelpers<UnlockValues>
  ) {
    try {
      await dispatch(unlockWallet({ password })).unwrap()
    } catch (e) {
      setFieldError('password', (e as Error).message || 'Incorrect password')
    }
  }

  return (
    <Loading loading={guardsLoading}>
      <LayoutLogin
        footer={
          <Link className={st.buttonLink} to="/">
            Forgot password?
          </Link>
        }
      >
        <Logo className={st.logo} />
        <p className={st.logoText}>Welcome back!</p>
        <Form onSubmit={handleSubmit}>
          <Input
            error={touched.password && Boolean(errors.password)}
            helperText={touched.password && errors.password}
            id="password"
            inputProps={{ 'aria-label': 'password input' }}
            name="password"
            placeholder="Password"
            sx={{ marginBottom: '16px' }}
            type="password"
            value={values.password}
          />
          <Button
            color="primary"
            disabled={!values.password.length}
            fullWidth
            type="submit"
            variant="contained"
          >
            Unlock
          </Button>
        </Form>
      </LayoutLogin>
    </Loading>
  )
}
