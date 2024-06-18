import { useForm } from 'react-hook-form'
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
  const { control, ...form } = useForm<QueryFormListFormFields>({
    defaultValues: {
      title: props.searchVo?.title,
      state: props.searchVo?.state,
    },
    resolver: zodResolver(schema),
  })

  return {
    control,
    form,
  }
}
