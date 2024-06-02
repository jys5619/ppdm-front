import { Controller } from 'react-hook-form'
import { ControlProps } from '../common'
import { CSSProperties } from 'react'

interface TextareaProps extends ControlProps {
  style?: CSSProperties
  placeholder?: string
}

export const Textarea = ({ placeholder, style, ...rest }: TextareaProps) => {
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
            style={{ width: '100%', ...style }}
          />
          {fieldState.invalid && fieldState.error?.message && (
            <small>{fieldState.error?.message}</small>
          )}
        </>
      )}
    />
  )
}
