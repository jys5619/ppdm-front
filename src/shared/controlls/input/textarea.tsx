import { Controller } from 'react-hook-form'
import { ControlProps } from '../common'

interface TextareaProps extends ControlProps {
  placeholder?: string
}

export const Textarea = ({ placeholder, ...rest }: TextareaProps) => {
  return (
    <Controller
      name={rest.name}
      control={rest.control}
      render={({ field, fieldState }) => (
        <>
          <textarea
            {...field}
            placeholder={placeholder}
            className={fieldState.invalid ? 'error' : ''}
            style={{ width: '100%' }}
          />
          {fieldState.invalid && fieldState.error?.message && (
            <small>{fieldState.error?.message}</small>
          )}
        </>
      )}
    />
  )
}
