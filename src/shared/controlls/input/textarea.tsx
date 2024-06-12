import { Controller } from 'react-hook-form'
import { ControlProps } from '../common'
import { CSSProperties } from 'react'
import styled from 'styled-components'

interface TextareaProps extends ControlProps {
  style?: CSSProperties
  placeholder?: string
  rows?: number
}

export const Textarea = ({ placeholder, style, rows, ...rest }: TextareaProps) => {
  return (
    <Controller
      name={rest.name}
      control={rest.control}
      render={({ field, fieldState }) => (
        <>
          <TextareaControl
            {...field}
            placeholder={placeholder}
            className={fieldState.invalid ? 'error' : ''}
            style={{ width: '100%', ...style }}
            rows={rows}
          />
          {fieldState.invalid && fieldState.error?.message && (
            <small>{fieldState.error?.message}</small>
          )}
        </>
      )}
    />
  )
}

const TextareaControl = styled.textarea`
  flex-grow: 1;
  border: 1px solid ${(props) => props.theme.colors.colorControlBorder};
  padding: 0.3rem 0.6rem;
  border-radius: 0.25rem;
  color: ${(props) => props.theme.colors.colorControlFont};
  background-color: ${(props) => props.theme.colors.colorControlBackground};
`
