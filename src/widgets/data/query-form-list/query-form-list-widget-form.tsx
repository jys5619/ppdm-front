import { Control } from 'react-hook-form'
import { QueryFormListFormFields } from './segments/query-form-list-widget.form'
import { Input, Select } from '@/shared/controlls'
import { activeInactiveStateList } from '@/shared/vo/state'
import { useMemo } from 'react'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useQueryFormListWidgetForm(control: any) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any

  const getFormCols = (control: Control<QueryFormListFormFields>) => {
    const FormCol = {
      Title: {
        label: 'Title',
        node: <Input name="title" control={control} type="text" />,
      },
      State: {
        label: '상태',
        node: <Select name="state" control={control} typeList={activeInactiveStateList} />,
      },
    }
    return [[FormCol.Title, FormCol.State]]
  }

  const formCols = useMemo(() => getFormCols(control), [control])

  return formCols
}
