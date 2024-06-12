import { Controller } from 'react-hook-form'
import { ControlProps } from '../common'
import styled from 'styled-components'

interface InputProps extends ControlProps {
  type?: string
  placeholder?: string
  disabled?: boolean
  readOnly?: boolean
}

export const Input = ({
  control,
  name,
  placeholder,
  type = 'text',
  disabled = false,
  readOnly = false,
}: InputProps) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <>
          <InputControl
            {...field}
            type={type}
            className={fieldState.invalid ? 'error' : ''}
            disabled={disabled}
            readOnly={readOnly}
            placeholder={placeholder}
          />
          {fieldState.invalid && fieldState.error?.message && (
            <small>{fieldState.error?.message}</small>
          )}
        </>
      )}
    />
  )
}

const InputControl = styled.input`
  flex-grow: 1;
  border: 1px solid ${(props) => props.theme.colors.colorControlBorder};
  padding: 0.3rem 0.6rem;
  border-radius: 0.25rem;
  color: ${(props) => props.theme.colors.colorControlFont};
  background-color: ${(props) => props.theme.colors.colorControlBackground};
`
