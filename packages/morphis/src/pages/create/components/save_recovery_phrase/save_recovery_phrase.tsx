import { useState, useEffect } from 'react'

import Tooltip from '@mui/material/Tooltip'
import Snackbar from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert'
import { Button } from '@components/button'

import commonSt from '../../create.module.less'
import st from './save_recovery_phrase.module.less'

import Copy from '@assets/copy.svg'

import type { CreateStepProps } from '@pages/create/types'

const MOCK_PHRASE_LENGTH = 12

export const SaveRecoveryPhrase = ({ onNext }: CreateStepProps) => {
  const [phrases, setPhrases] = useState<string[]>([])
  const [copyToastOpen, setCopyToastOpen] = useState(false)
  const [copyErrorOpen, setCopyErrorOpen] = useState(false)

  const onLoadRecoveryPhrase = () => {
    setPhrases(
      Array(MOCK_PHRASE_LENGTH)
        .fill(undefined)
        .map(() =>
          Math.random()
            .toString(36)
            .slice(2, Math.floor(Math.random() * 7 + 5))
        )
    )
  }

  const onCopy = async () => {
    try {
      if (navigator?.clipboard) {
        await navigator.clipboard.writeText(phrases.join(' '))
      } else {
        document.execCommand('copy')
      }

      setCopyToastOpen(true)
    } catch (e) {
      setCopyErrorOpen(true)
      setTimeout(() => {
        setCopyErrorOpen(false)
      }, 1000)
    }
  }

  const onMouseLeaveCopyButton = () => {
    setCopyToastOpen(false)
  }

  useEffect(() => {
    onLoadRecoveryPhrase()
  }, [])

  return (
    <div className={commonSt.container}>
      <Snackbar
        anchorOrigin={{ horizontal: 'center', vertical: 'top' }}
        open={copyErrorOpen}
      >
        <Alert severity="error" sx={{ width: '100%' }}>
          Browser failed to copy. Try to copy by yourself
        </Alert>
      </Snackbar>
      <div className={commonSt.centerContainer}>
        <p className={commonSt.h2}>Write down your recovery phrase</p>
        <p className={commonSt.desc}>
          Make sure to store it&nbsp;
          <b>in a safe place</b>
        </p>
        <div className={st.phraseContainer}>
          {phrases.map((ph, i) => (
            <div className={st.phWrapper} key={ph}>
              <span className={st.phIndex}>{`${i + 1}`.padStart(2, '0')}</span>
              <Tooltip
                PopperProps={{
                  modifiers: [
                    {
                      name: 'offset',
                      options: {
                        offset: [0, -14],
                      },
                    },
                  ],
                }}
                title={ph}
              >
                <span className={st.ph}>{ph}</span>
              </Tooltip>
            </div>
          ))}
        </div>
        <Tooltip open={copyToastOpen} placement="right" title="copied">
          <Button
            disabled={!phrases.length}
            fullWidth={false}
            onClick={onCopy}
            onMouseLeave={onMouseLeaveCopyButton}
            startIcon={<img alt="copy" src={Copy} />}
            sx={{
              alignSelf: 'flex-start',
              height: '24px',
              width: 'auto',
              '&:hover': {
                backgroundColor: 'transparent',
              },
            }}
          >
            Copy
          </Button>
        </Tooltip>
      </div>
      <Button color="primary" onClick={onNext} variant="contained">
        I saved my recovery phrase
      </Button>
    </div>
  )
}
