import IconButton from '@mui/material/IconButton'
import MobileStepper from '@mui/material/MobileStepper'

import ArrowShort from '@assets/arrow_short.svg'

import st from './StepperHeader.module.less'

type StepperHeaderProps = {
  activeStep: number
  onBack: () => void
}

export const StepperHeader = ({ activeStep, onBack }: StepperHeaderProps) => {
  return (
    <nav className={st.nav}>
      <IconButton
        aria-label="back"
        onClick={onBack}
        sx={{ left: '-8px', position: 'absolute', top: '22px' }}
      >
        <img alt="back arrow" className={st.backButtonSVG} src={ArrowShort} />
      </IconButton>
      <MobileStepper
        activeStep={activeStep}
        backButton={null}
        nextButton={null}
        position="static"
        steps={3}
        sx={{ display: 'flex', flexShrink: 0, justifyContent: 'center' }}
        variant="dots"
      />
    </nav>
  )
}
