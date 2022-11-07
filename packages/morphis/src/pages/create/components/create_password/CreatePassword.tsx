import { useFormik } from 'formik'
import * as yup from 'yup'
import cl from 'classnames'

import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Link from '@mui/material/Link'
import { Button } from '@components/Button'
import { Input } from '@components/Input'

import type { CreateStepProps } from '@pages/create/types'

import commonSt from '../../Create.module.less'
import st from './CreatePassword.module.less'

const PASSWORD_MIN_LENGTH = 8

const SCHEMA = yup.object().shape({
  password: yup.string()
    .required('This field is required')
    .min(PASSWORD_MIN_LENGTH),
  confirmPassword: yup.string().when('password', {
    is: (val: string | undefined) => (val && val.length > 0 ? true : false),
    then: yup.string().oneOf(
      [yup.ref('password')],
      'Both passwords need to be the same'
    ),
  }),
  agreeTOS: yup.bool()
    .required()
    .oneOf([true], 'The Terms of Service must be accepted'),
})

export const CreatePassword = ({ onNext }: CreateStepProps) => {
  const { values, touched, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      password: '',
      confirmPassword: '',
      agreeTOS: false,
    },
    validationSchema: SCHEMA,
    onSubmit: () => {
      onNext()
    },
  })

  return (
    <FormGroup sx={{ flexGrow: '1', width: '100%' }}>
      <div className={commonSt.centerContainer}>
        <p className={commonSt.h2}>Create a password</p>
        <p className={commonSt.desc}>We will use this to unlock your wallet</p>
        <Input
          error={touched.password && Boolean(errors.password)}
          helperText={touched.password && errors.password}
          id="password"
          inputProps={{ 'aria-label': 'password input' }}
          name="password"
          onChange={handleChange}
          placeholder="Password"
          sx={{ marginBottom: '11px' }}
          type="password"
          value={values.password}
        />
        <Input
          error={touched.confirmPassword && Boolean(errors.confirmPassword)}
          helperText={touched.confirmPassword && errors.confirmPassword}
          id="confirmPassword"
          inputProps={{ 'aria-label': 'confirm password input' }}
          name="confirmPassword"
          onChange={handleChange}
          placeholder="Confirm password"
          type="password"
          value={values.confirmPassword}
        />
      </div>
      <FormControlLabel
        control={
          <Checkbox
            checked={values.agreeTOS}
            color="primary"
            disableRipple
            id="agreeTOS"
            inputProps={{ 'aria-label': 'terms of service checkbox' }}
            name="agreeTOS"
            onChange={handleChange}
          />
        }
        label={
          <span
            className={cl([
              st.tos,
              touched.agreeTOS && Boolean(errors.agreeTOS) && st.tosError,
            ])}
          >
            I agree to the&nbsp;
            <Link color="inherit" href="/" target="_blank">
              Terms of Service
            </Link>
          </span>
        }
      />
      <Button
        color="primary"
        onClick={() => handleSubmit()}
        variant="contained"
      >
        Unlock
      </Button>
    </FormGroup>
  )
}
