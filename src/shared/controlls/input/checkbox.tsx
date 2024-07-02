import { ErrorMessage } from '@hookform/error-message'
import { CSSProperties } from 'react'
import { useFormContext } from 'react-hook-form'
import { styled } from 'styled-components'
import { Control, ControlWrapper, Label } from '../style/style'

type CheckboxProps = {
  id: string
  checkboxLabel: string
  align?: 'center' | 'left' | 'right'
  label?: string
  helperText?: string
  helperClassName?: string
  errorClassName?: string
} & React.ComponentPropsWithoutRef<'input'>

export function Checkbox({
  id,
  checkboxLabel,
  label,
  helperText,
  align = 'left',
  ...rest
}: CheckboxProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  function getStyle(): CSSProperties {
    return { width: '100%', textAlign: align }
  }

  return (
    <ControlWrapper>
      {label && (
        <Label>
          <label htmlFor={id}>{label}</label>
        </Label>
      )}
      <Control>
        <label style={getStyle()}>
          <InputControl {...register(id)} {...rest} type="checkbox" name={id} id={id} />
          {checkboxLabel}
        </label>
      </Control>
      <ErrorMessage errors={errors} name={id} render={({ message }) => <p>{message}</p>} />
      <div>{helperText && <p>{helperText}</p>}</div>
    </ControlWrapper>
  )
}

const InputControl = styled.input`
  flex-grow: 1;
  border: 1px solid ${(props) => props.theme.colors.colorControlBorder};
  padding: 0.3rem 0.3rem;
  border-radius: 0.25rem;
  color: ${(props) => props.theme.colors.colorControlFont};
  background-color: ${(props) => props.theme.colors.colorControlBackground};
`
