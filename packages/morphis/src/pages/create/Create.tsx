import { useState, lazy } from 'react'
import { useNavigate } from 'react-router-dom'

import IconButton from '@mui/material/IconButton'
import MobileStepper from '@mui/material/MobileStepper'
import { Layout } from '@pages/layout'

import ArrowShort from '@assets/arrow_short.svg'

import st from './Create.module.less'

enum StepKeys {
  CREATE_PASSWORD = 'CREATE_PASSWORD',
  SAVE_RECOVERY_PHRASE = 'SAVE_RECOVERY_PHRASE',
  CONFIRM_RECOVERY_PHRASE = 'CONFIRM_RECOVERY_PHRASE',
}

const CreatePassword = lazy(() =>
  import('./components/create_password').then((module) => ({
    default: module.CreatePassword,
  }))
)
const SaveRecoveryPhrase = lazy(() =>
  import('./components/save_recovery_phrase').then((module) => ({
    default: module.SaveRecoveryPhrase,
  }))
)

const STEPS: StepKeys[] = [
  StepKeys.CREATE_PASSWORD,
  StepKeys.SAVE_RECOVERY_PHRASE,
  StepKeys.CONFIRM_RECOVERY_PHRASE,
]

export const Create = () => {
  const navigate = useNavigate()

  const [currentStep, setCurrentStep] = useState<StepKeys>(
    StepKeys.CREATE_PASSWORD
  )

  const onBack = () => {
    const activeStepIndex = STEPS.indexOf(currentStep)

    if (activeStepIndex < 1) {
      navigate('/')
      return
    }

    setCurrentStep(STEPS[activeStepIndex - 1])
  }

  const renderContent = () => {
    switch (currentStep) {
      case StepKeys.CREATE_PASSWORD:
        return (
          <CreatePassword
            onNext={() => setCurrentStep(StepKeys.SAVE_RECOVERY_PHRASE)}
          />
        )
      case StepKeys.SAVE_RECOVERY_PHRASE:
        return (
          <SaveRecoveryPhrase
            onNext={() => setCurrentStep(StepKeys.CONFIRM_RECOVERY_PHRASE)}
          />
        )
    }
  }

  return (
    <Layout>
      <div className={st.create}>
        <nav className={st.nav}>
          <IconButton
            aria-label="back"
            onClick={onBack}
            sx={{ left: '-8px', position: 'absolute', top: '22px' }}
          >
            <img
              alt="back arrow"
              className={st.backButtonSVG}
              src={ArrowShort}
            />
          </IconButton>
          <MobileStepper
            activeStep={STEPS.indexOf(currentStep)}
            backButton={null}
            nextButton={null}
            position="static"
            steps={3}
            sx={{ display: 'flex', justifyContent: 'center' }}
            variant="dots"
          />
        </nav>
        {renderContent()}
      </div>
    </Layout>
  )
}
