import { useFormContext } from 'react-hook-form'

import { ChangeEvent, ReactNode } from 'react'
import styled from 'styled-components'
import { ErrorMessage } from '@hookform/error-message'
import { Control, ControlWrapper, Label } from '../style/style'

export interface OptionType {
  value: string
  label: string
}

type SelectProps = {
  id: string
  typeList: string[] | OptionType[]
  label?: string
  showAll?: boolean
  onChange?: (event: ChangeEvent<HTMLSelectElement>) => void
  helperText?: string
  helperClassName?: string
  errorClassName?: string
  rightComponent?: ReactNode
} & React.ComponentPropsWithoutRef<'select'>

export const Select = ({
  id,
  label,
  showAll,
  typeList,
  onChange,
  helperText,
  className,
  rightComponent,
  ...rest
}: SelectProps) => {
  const {
    register,
    setValue,
    formState: { errors },
  } = useFormContext()

  function getClassName(): string {
    let result = `w-full px-[12px] h-[50px] rounded-[5px] outline-none text-[16px] ${className}`

    if (rest.disabled) result += ' ' + 'bg-[#f2f4f7] cursor-not-allowed '
    else result += ' ' + 'text-[#333] border border-[#e1e2e3] focus:border-blue1'

    return result
  }

  return (
    <ControlWrapper>
      {label && (
        <Label>
          <label htmlFor={id}>{label}</label>
        </Label>
      )}
      <Control>
        <SelectControl
          {...register(id)}
          {...rest}
          id={id}
          name={id}
          className={getClassName()}
          onChange={(e) => {
            setValue(id, e.target.value)
            onChange && onChange(e)
          }}
        >
          {showAll && <option value=""></option>}
          {typeList?.map((type) => {
            let value = ''
            let label = ''
            if (typeof type === 'string') {
              value = type
              label = type
            } else if (typeof type === 'object') {
              value = type.value
              label = type.label
            }
            return (
              <option key={value} value={value}>
                {label}
              </option>
            )
          })}
        </SelectControl>
        {rightComponent ?? null}
      </Control>
      <ErrorMessage errors={errors} name={id} render={({ message }) => <p>{message}</p>} />
      <div>{helperText && <p>{helperText}</p>}</div>
    </ControlWrapper>
  )
}

const SelectControl = styled.select`
  flex-grow: 1;
  border: 1px solid ${(props) => props.theme.colors.colorControlBorder};
  padding: 0.3rem 0.3rem;
  border-radius: 0.25rem;
  color: ${(props) => props.theme.colors.colorControlFont};
  background-color: ${(props) => props.theme.colors.colorControlBackground};
`
