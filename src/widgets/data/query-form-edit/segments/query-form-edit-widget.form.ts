import { useFieldArray, useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { ActiveInactiveState } from '@/shared/vo/state'
import { QueryFormInputType } from '@/shared/vo/type/query-form-input-type'

const inputSchema = z.object({
  id: z.string().optional(),
  name: z
    .string()
    .min(1, { message: '변수명은 필수 입력 입니다.' })
    .max(30, { message: '30자리 이하 입력해 주세요.' })
    .optional(),
  title: z
    .string()
    .min(1, { message: '필드명은 필수 입력 입니다.' })
    .max(300, { message: '300자리 이하 입력해 주세요.' })
    .optional(),
  type: z.nativeEnum(QueryFormInputType).default(QueryFormInputType.INPUT),
  values: z
    .string()
    .min(1, { message: '필드명은 필수 입력 입니다.' })
    .max(2000, { message: '2000자리 이하 입력해 주세요.' })
    .optional(),
})

const sqlSchema = z.object({
  id: z.string().optional(),
  title: z
    .string()
    .min(1, { message: '필드명은 필수 입력 입니다.' })
    .max(300, { message: '300자리 이하 입력해 주세요.' })
    .optional(),
  description: z.string().optional(),
  sql: z.string().min(1, { message: '필드명은 필수 입력 입니다.' }).optional(),
})

const schema = z.object({
  id: z.string().optional(),
  title: z
    .string()
    .min(1, { message: '명은 필수 입력 입니다.' })
    .max(300, { message: '300자리 이하 입력해 주세요.' }),
  favorites: z.string().max(4000, { message: '4000자리 이하 입력해 주세요.' }).optional(),
  description: z.string().optional(),
  inputList: z.array(inputSchema).default([]).optional(),
  sqlList: z.array(sqlSchema).default([]),
  state: z.nativeEnum(ActiveInactiveState).default(ActiveInactiveState.Active),
})

export type QueryFormEditFormFields = z.infer<typeof schema>

export function useQueryFormEditWidgetForm() {
  const form = useForm<QueryFormEditFormFields>({
    // defaultValues: {
    //   id: props.queryFormVo?.id,
    //   title: props.queryFormVo?.title,
    //   favorites: props.queryFormVo?.favorites,
    //   description: props.queryFormVo?.description,
    //   inputList: props.queryFormVo?.inputList,
    //   sqlList: props.queryFormVo?.sqlList || [{}],
    //   state: props.queryFormVo?.state,
    // },
    resolver: zodResolver(schema),
  })

  const inputList = useFieldArray({
    control: form.control,
    name: 'inputList',
  })

  const sqlList = useFieldArray({
    control: form.control,
    name: 'sqlList',
  })

  return {
    form,
    inputList,
    sqlList,
  }
}
