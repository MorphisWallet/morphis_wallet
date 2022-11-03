import MuiButton, { ButtonProps } from '@mui/material/Button'

export default function Button({ sx, ...restProps }: ButtonProps) {
  return (
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
      {...restProps}
    />
  )
}
