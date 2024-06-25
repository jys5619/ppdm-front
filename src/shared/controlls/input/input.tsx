import { Control, Controller, FieldPath, FieldValues } from 'react-hook-form'
import styled from 'styled-components'
import { InputHTMLAttributes } from 'react'

interface InputProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> extends Omit<InputHTMLAttributes<HTMLInputElement>, 'name' | 'defaultValue'> {
  control: Control<TFieldValues>
  name: TName
}

export const Input = ({ control, name, ...rest }: InputProps) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <>
          <InputControl {...field} {...rest} />
          {error && <span>{error.message}</span>}
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
