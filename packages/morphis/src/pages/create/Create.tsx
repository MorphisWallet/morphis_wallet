import { useFormik } from 'formik'
import * as Yup from 'yup'
import cln from 'classnames'
import IconButton from '@mui/material/IconButton'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Link from '@mui/material/Link'
import MobileStepper from '@mui/material/MobileStepper'

import { Layout } from '@pages/layout'
import { Button } from '@components/Button'
import { Input } from '@components/Input'

import ArrowShort from '@assets/arrow_short.svg'

import st from './Create.module.less'

const PASSWORD_MIN_LENGTH = 8

const schema = Yup.object().shape({
  password: Yup.string()
    .required('This field is required')
    .min(PASSWORD_MIN_LENGTH),
  confirmPassword: Yup.string().when('password', {
    is: (val: string | undefined) => (val && val.length > 0 ? true : false),
    then: Yup.string().oneOf(
      [Yup.ref('password')],
      'Both passwords need to be the same'
    ),
  }),
  agreeTOS: Yup.bool()
    .required()
    .oneOf([true], 'The Terms of Service must be accepted'),
})

export function Create() {
  const { values, touched, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      password: '',
      confirmPassword: '',
      agreeTOS: false,
    },
    validationSchema: schema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
    },
  })

  return (
    <Layout>
      <div className={st.create}>
        <nav className={st.nav}>
          <IconButton
            aria-label="back"
            sx={{ left: '-8px', position: 'absolute', top: '22px' }}
          >
            <img
              alt="back arrow"
              className={st.backButtonSVG}
              src={ArrowShort}
            />
          </IconButton>
          <MobileStepper
            backButton={null}
            nextButton={null}
            position="static"
            steps={3}
            sx={{ display: 'flex', justifyContent: 'center' }}
            variant="dots"
          />
        </nav>
        <FormGroup sx={{ flexGrow: '1', width: '100%' }}>
          <div className={st.centerContainer}>
            <p className={st.h2}>Create a password</p>
            <p className={st.desc}>We will use this to unlock your wallet</p>
            <Input
              error={touched.password && Boolean(errors.password)}
              helperText={touched.password && errors.password}
              id="password"
              inputProps={{ 'aria-label': 'Password input' }}
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
              inputProps={{ 'aria-label': 'Confirm password input' }}
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
                id="agreeTOS"
                inputProps={{ 'aria-label': 'Terms of service checkbox' }}
                name="agreeTOS"
                onChange={handleChange}
              />
            }
            label={
              <span
                className={cln([
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
      </div>
    </Layout>
  )
}
