import { ErrorMessage } from '@hookform/error-message'
import { ReactNode } from 'react'
import { useFormContext } from 'react-hook-form'
import { Control, ControlWrapper, Label } from '../style/style'
import { styled } from 'styled-components'

type InputProps = {
  id: string
  label?: string
  labelSize?: string
  helperText?: string
  helperClassName?: string
  errorClassName?: string
  rightComponent?: ReactNode
} & React.ComponentPropsWithoutRef<'input'>

export function Input({
  id,
  label,
  labelSize,
  helperText,
  type = 'text',
  className,
  rightComponent,
  ...rest
}: InputProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  function getClassName(): string {
    let result = `w-full px-[12px] h-[50px] rounded-[5px] outline-none text-[16px] ${className}`

    if (rest.readOnly) result += ' ' + 'bg-[#f2f4f7] cursor-not-allowed '
    else result += ' ' + 'text-[#333] border border-[#e1e2e3] focus:border-blue1'

    return result
  }

  return (
    <ControlWrapper>
      {label && (
        <Label size={labelSize}>
          <label htmlFor={id}>{label}</label>
        </Label>
      )}
      <Control>
        <InputControl
          {...register(id)}
          {...rest}
          type={type}
          name={id}
          id={id}
          className={getClassName()}
        />
        {rightComponent ?? null}
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
