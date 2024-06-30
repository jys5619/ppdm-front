import { ErrorMessage } from '@hookform/error-message'
import { ReactNode } from 'react'
import { useFormContext } from 'react-hook-form'

type InputProps = {
  id: string
  label?: string
  helperText?: string
  helperClassName?: string
  errorClassName?: string
  rightComponent?: ReactNode
} & React.ComponentPropsWithoutRef<'input'>

export function Input({
  id,
  label,
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
    <div>
      {label ? (
        <div>
          <label htmlFor={id}>{label}</label>
        </div>
      ) : null}
      <div>
        <input
          {...register(id)}
          {...rest}
          type={type}
          name={id}
          id={id}
          className={getClassName()}
        />
        {rightComponent ?? null}
      </div>
      <ErrorMessage errors={errors} name={id} render={({ message }) => <p>{message}</p>} />
      <div>{helperText && <p>{helperText}</p>}</div>
    </div>
  )
}
