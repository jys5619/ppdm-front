import styled from 'styled-components'
import { useFormContext } from 'react-hook-form'
import { ReactNode } from 'react'
import { ErrorMessage } from '@hookform/error-message'

type TextareaProps = {
  id: string
  label?: string
  helperText?: string
  helperClassName?: string
  errorClassName?: string
  rightComponent?: ReactNode
} & React.ComponentPropsWithoutRef<'textarea'>

export const Textarea = ({
  id,
  label,
  helperText,
  className,
  rightComponent,
  ...rest
}: TextareaProps) => {
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
    <div>
      {label ? (
        <div>
          <label htmlFor={id}>{label}</label>
        </div>
      ) : null}
      <div>
        <TextareaWrapper {...register(id)} id={id} name={id} className={getClassName()} {...rest} />
        {rightComponent ?? null}
      </div>
      <ErrorMessage errors={errors} name={id} render={({ message }) => <p>{message}</p>} />
      <div>{helperText && <p>{helperText}</p>}</div>
    </div>
  )
}

const TextareaWrapper = styled.textarea`
  flex-grow: 1;
  border: 1px solid ${(props) => props.theme.colors.colorControlBorder};
  padding: 0.3rem 0.6rem;
  border-radius: 0.25rem;
  color: ${(props) => props.theme.colors.colorControlFont};
  background-color: ${(props) => props.theme.colors.colorControlBackground};
`
