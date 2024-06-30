import { Input, Select } from '@/shared/controlls'
import { FieldValues, UseFormReturn } from 'react-hook-form'
import { Form } from '@/shared/controlls/form/form'
import { activeInactiveStateList } from '@/shared/vo/state'
import { QueryFormListFormFields } from './useQueryFormListWidgetForm'

interface QueryFormListWidgetSearchFormPorps {
  onSubmit: (searchData: QueryFormListFormFields) => void
  form: UseFormReturn<FieldValues>
}

export function QueryFormListWidgetForm({ onSubmit, form }: QueryFormListWidgetSearchFormPorps) {
  const Columns = {
    Title: () => {
      return <Input id="title" label="Title" />
    },
    State: () => {
      return <Select id="state" label="State" typeList={activeInactiveStateList} />
    },
  }

  const columns = [[Columns.Title()], [Columns.State()]]

  return (
    <Form onSubmit={onSubmit} columns={columns} form={form}>
      <button type="submit">조회</button>
    </Form>
  )
}
