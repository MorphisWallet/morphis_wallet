import cl from 'classnames'

import TextField, { TextFieldProps } from '@mui/material/TextField'

import './Input.less'

export function Input({ className, sx, ...restProps }: TextFieldProps) {
  return (
    <TextField
      className={cl(['morphis-input', className])}
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
