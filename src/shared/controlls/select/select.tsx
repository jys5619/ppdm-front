import { Controller } from 'react-hook-form'
import { ControlProps } from '../common'
import { ChangeEvent } from 'react'
import styled from 'styled-components'

export interface OptionType {
  value: string
  label: string
}

interface SelectProps extends ControlProps {
  showAll?: boolean
  onChange?: (event: ChangeEvent<HTMLSelectElement>) => void
  typeList?: string[] | OptionType[]
}

export const Select = ({ showAll, typeList, onChange, ...rest }: SelectProps) => {
  return (
    <Controller
      name={rest.name}
      control={rest.control}
      render={({ field, fieldState }) => (
        <>
          <SelectControl
            {...field}
            disabled={rest.disabled}
            className={fieldState.invalid ? 'error' : ''}
            onChange={(e) => {
              field.onChange(e.target.value)
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

          {fieldState.invalid && fieldState.error?.message && (
            <small>{fieldState.error?.message}</small>
          )}
        </>
      )}
    />
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
