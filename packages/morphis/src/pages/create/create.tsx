import { useState, lazy } from 'react'
import { useNavigate } from 'react-router-dom'

import { LayoutLogin } from '@layouts/layout_login'
import { StepperHeader } from './components/stepper_header/stepper_header'

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
const ConfirmRecoveryPhrase = lazy(() =>
  import('./components/confirm_recovery_phrase').then((module) => ({
    default: module.ConfirmRecoveryPhrase,
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
      case StepKeys.CONFIRM_RECOVERY_PHRASE:
        return (
          <ConfirmRecoveryPhrase
            onNext={() => navigate('/create/done', { replace: true })}
          />
        )
      default:
        return null
    }
  }

  return (
    <LayoutLogin
      header={
        <StepperHeader
          activeStep={STEPS.indexOf(currentStep)}
          onBack={onBack}
        />
      }
    >
      {renderContent()}
    </LayoutLogin>
  )
}
