import cl from 'classnames'

import TextField, { TextFieldProps } from '@mui/material/TextField'

import st from './input.module.less'

export function Input({ className, sx, ...restProps }: TextFieldProps) {
  return (
    <TextField
      className={cl([st.morphisInput, className])}
      fullWidth
      hiddenLabel
      size="small"
      sx={{
        fontSize: '14px',
        ...sx,
      }}
      variant="outlined"
      {...restProps}
    />
  )
}
