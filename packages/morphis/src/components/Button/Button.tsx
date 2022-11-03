import { Button as MuiButton, ButtonProps } from '@mui/material'

import './button.less'

export default function Button({ sx, ...restProps }: ButtonProps) {
  return (
    <MuiButton
      className="morphis-button"
      disableElevation
      sx={{
        borderRadius: 20,
        height: '40px',
        textTransform: 'none',
        width: '100%',
        ...sx,
      }}
      {...restProps}
    />
  )
}
