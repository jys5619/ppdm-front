import { useFieldArray, useForm } from 'react-hook-form'
import { z } from 'zod'
import { QueryFormWidgetProps } from '../prop/query-form-widget.prop'
import { zodResolver } from '@hookform/resolvers/zod'
import { ActiveInactiveState } from '@/shared/vo/state'
import { QueryFormInputType } from '@/shared/vo/type/query-form-input-type'

const inputDataSchema = z.object({
  id: z.string().optional(),
  name: z.string().min(1, { message: '변수명은 필수 입력 입니다.' }).optional(),
  title: z.string().min(1, { message: '필드명은 필수 입력 입니다.' }).optional(),
  type: z.nativeEnum(QueryFormInputType).default(QueryFormInputType.INPUT),
  values: z
    .string()
    .min(1, { message: '필드명은 필수 입력 입니다.' })
    .max(2000, { message: '2000자리 이하 입력해 주세요.' })
    .optional(),
})

const sqlSchema = z.object({
  id: z.string().optional(),
  title: z.string().min(1, { message: '필드명은 필수 입력 입니다.' }).optional(),
  description: z.string().max(4000, { message: '4000자리 이하 입력해 주세요.' }).optional(),
  sql: z.string().max(4000, { message: '4000자리 이하 입력해 주세요.' }).optional(),
})

const schema = z.object({
  id: z.string(),
  name: z
    .string()
    .min(1, { message: '명은 필수 입력 입니다.' })
    .max(100, { message: '100자리 이하 입력해 주세요.' }),
  favorites: z.string().max(4000, { message: '4000자리 이하 입력해 주세요.' }).optional(),
  description: z.string().max(4000, { message: '4000자리 이하 입력해 주세요.' }).optional(),
  inputDataList: z.array(inputDataSchema).default([]),
  sqlList: z.array(sqlSchema).default([]),
  state: z.nativeEnum(ActiveInactiveState).default(ActiveInactiveState.Active),
})

export type QueryFormFormFields = z.infer<typeof schema>

export function useQueryFormWidgetForm(props: QueryFormWidgetProps) {
  const {
    control,
    formState: { errors },
    ...form
  } = useForm<QueryFormFormFields>({
    defaultValues: {
      id: props.queryFormVo?.id,
      name: props.queryFormVo?.name,
      favorites: props.queryFormVo?.favorites,
      description: props.queryFormVo?.description,
      inputDataList: props.queryFormVo?.inputDataList,
      sqlList: props.queryFormVo?.sqlList,
      state: props.queryFormVo?.state,
    },
    resolver: zodResolver(schema),
  })

  const inputDataList = useFieldArray({
    control,
    name: 'inputDataList',
  })

  const sqlList = useFieldArray({
    control,
    name: 'sqlList',
  })

  return {
    control,
    errors,
    form,
    inputDataList,
    sqlList,
  }
}
