import { Button } from '@components/Button'

import commonSt from '../../Create.module.less'
import st from './SaveRecoveryPhrase.module.less'

import type { CreateStepProps } from '@pages/create/types'

export const ConfirmRecoveryPhrase = ({ onNext }: CreateStepProps) => {
  return (
    <div className={st.container}>
      <div className={commonSt.centerContainer}>
        <p className={commonSt.h2}>Confirm your recovery phrase</p>
        <p className={commonSt.desc}>Enter your recovery phrase</p>
      </div>
      <Button color="primary" onClick={onNext} variant="contained">
        Continue
      </Button>
    </div>
  )
}
