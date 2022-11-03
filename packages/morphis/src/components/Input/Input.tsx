import TextField, { TextFieldProps } from '@mui/material/TextField'

import './Input.less'

export function Input({ sx, ...restProps }: TextFieldProps) {
  return (
    <TextField
      className="morphis-input"
      fullWidth
      hiddenLabel
      size="small"
      sx={{
        borderColor: '#7e7e7e',
        fontSize: '0.875rem',
        ...sx,
      }}
      variant="outlined"
      {...restProps}
    />
  )
}
