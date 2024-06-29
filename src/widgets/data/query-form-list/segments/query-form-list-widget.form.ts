import { useForm, useFormContext } from 'react-hook-form'
import { z } from 'zod'
import { QueryFormListWidgetProps } from './query-form-list-widget.prop'
import { zodResolver } from '@hookform/resolvers/zod'
import { ActiveInactiveState } from '@/shared/vo/state'

const schema = z.object({
  title: z.string().optional(),
  state: z.nativeEnum(ActiveInactiveState).default(ActiveInactiveState.Active).optional(),
})

export type QueryFormListFormFields = z.infer<typeof schema>

export function useQueryFormListWidgetForm(props: QueryFormListWidgetProps) {
  const form = useForm<QueryFormListFormFields>({
    defaultValues: {
      title: props.searchVo?.title,
      state: props.searchVo?.state,
    },
    mode: 'onSubmit',
    resolver: zodResolver(schema),
  })

  return {
    form,
  }
}

export const useQueryFormListSearchContext = () => useFormContext<QueryFormListFormFields>()
