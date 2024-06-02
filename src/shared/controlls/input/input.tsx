import { Controller } from 'react-hook-form'
import { ControlProps } from '../common'

interface InputProps extends ControlProps {
  type?: string
  placeholder?: string
  disabled?: boolean
  readOnly?: boolean
}

export const Input = ({
  type = 'text',
  placeholder,
  disabled = false,
  readOnly = false,
  ...rest
}: InputProps) => {
  return (
    <Controller
      name={rest.name}
      control={rest.control}
      render={({ field, fieldState }) => (
        <>
          <input
            {...field}
            type={type}
            placeholder={placeholder}
            className={fieldState.invalid ? 'error' : ''}
            disabled={disabled}
            readOnly={readOnly}
          />
          {fieldState.invalid && fieldState.error?.message && (
            <small>{fieldState.error?.message}</small>
          )}
        </>
      )}
    />
  )
}
