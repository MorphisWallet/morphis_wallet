import type { ClipboardEvent } from 'react'
import {
  Formik,
  Form,
  Field,
  FieldArray,
  FieldProps,
  FormikProps,
} from 'formik'
import * as yup from 'yup'

import { Button } from '@components/Button'
import { Input } from '@components/Input'

import commonSt from '../../Create.module.less'
import st from './ConfirmRecoveryPhrase.module.less'

import type { CreateStepProps } from '@pages/create/types'

const PHRASES_LENGTH = 12
const EMPTY_PHRASES = Array(PHRASES_LENGTH).fill('')

const SCHEMA = yup.object().shape({
  phrases: yup.array().of(yup.string().min(1).required()),
})

type valuesType = {
  phrases: string[]
}

export const ConfirmRecoveryPhrase = ({ onNext }: CreateStepProps) => {
  const onSubmit = () => {
    onNext()
  }

  const onPaste = (
    e: ClipboardEvent<HTMLInputElement>,
    i: number,
    values: valuesType,
    setValues: (
      values: React.SetStateAction<valuesType>,
      shouldValidate?: boolean
    ) => void
  ) => {
    const pasteContent = e.clipboardData?.getData('Text')
    if (typeof pasteContent !== 'string') return

    const pasteContentArray = pasteContent.split(' ')
    setTimeout(() => {
      setValues({
        ...values,
        phrases: values.phrases.map((v, index) =>
          index < i ? values.phrases[index] : pasteContentArray[index - i] || ''
        ),
      })
    }, 0)
  }

  return (
    <div className={commonSt.container}>
      <div className={commonSt.centerContainer}>
        <p className={commonSt.h2}>Confirm your recovery phrase</p>
        <p className={commonSt.desc}>Enter your recovery phrase</p>
        <Formik
          initialValues={{ phrases: EMPTY_PHRASES }}
          onSubmit={onSubmit}
          validationSchema={SCHEMA}
        >
          {({ values, setValues }: FormikProps<valuesType>) => (
            <Form className={st.form} id="confirm-form">
              <div className={st.phraseContainer}>
                <FieldArray
                  name="phrases"
                  render={() => (
                    <>
                      {values?.phrases.map((ph: string, i) => (
                        <Field key={`${i}`} name={`phrases.${i}`}>
                          {({ field, meta }: FieldProps) => (
                            <Input
                              {...field}
                              className={st.input}
                              error={meta.touched && Boolean(meta.error)}
                              inputProps={{
                                onPaste: (
                                  e: ClipboardEvent<HTMLInputElement>
                                ) => onPaste(e, i, values, setValues),
                                style: {
                                  height: '11px',
                                },
                              }}
                              placeholder={`${i + 1}`.padStart(2, '0')}
                              sx={{
                                '.MuiOutlinedInput-notchedOutline': {
                                  borderColor: '#c8c8c8',
                                },
                                '.MuiInputBase-input': {
                                  fontSize: '12px',
                                  '&::placeholder': {
                                    fontSize: '12px',
                                  },
                                },
                              }}
                            />
                          )}
                        </Field>
                      ))}
                    </>
                  )}
                />
              </div>
            </Form>
          )}
        </Formik>
      </div>
      <Button
        color="primary"
        form="confirm-form"
        type="submit"
        variant="contained"
      >
        Continue
      </Button>
    </div>
  )
}
