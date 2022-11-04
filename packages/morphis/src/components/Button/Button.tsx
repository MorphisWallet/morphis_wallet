import { forwardRef, ForwardedRef } from 'react'
import MuiButton, { ButtonProps } from '@mui/material/Button'

export const Button = forwardRef(
  ({ sx, ...restProps }: ButtonProps, ref: ForwardedRef<HTMLButtonElement>) => (
    <MuiButton
      className="morphis-button"
      disableElevation
      sx={{
        borderRadius: 20,
        fontSize: '0.875rem',
        height: '40px',
        textTransform: 'none',
        width: '100%',
        ...sx,
      }}
      ref={ref}
      {...restProps}
    />
  )
)

Button.displayName = 'Button'
