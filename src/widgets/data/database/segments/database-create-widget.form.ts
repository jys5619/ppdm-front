import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { DatabaseCreateWidgetProps } from './database-create-widget.prop'
import { zodResolver } from '@hookform/resolvers/zod'
import { DbType } from '@/shared/vo/type/db-type'
import { ActiveInactiveState } from '@/shared/vo/state'

const schema = z.object({
  id: z.string(),
  dbType: z.nativeEnum(DbType).default(DbType.ORACLE),
  dbName: z
    .string()
    .min(1, { message: 'DB 명을 입력해 주세요.' })
    .max(30, { message: '30자리 이하 입력해 주세요.' }),
  connectString: z
    .string()
    .min(1, { message: 'DB 연결 문자열을 입력하십시오.' })
    .max(100, { message: '100자리 이하 입력해 주세요.' }),
  username: z.string().max(100, { message: '100자리 이하 입력해 주세요.' }),
  password: z.string().max(100, { message: '100자리 이하 입력해 주세요.' }),
  poolMin: z.coerce.number(),
  poolMax: z.coerce.number(),
  timeout: z.coerce.number(),
  dbInfo: z.string().max(4000, { message: '4000자리 이하 입력해 주세요.' }),
  state: z.nativeEnum(ActiveInactiveState).default(ActiveInactiveState.Active),
})

export type DatabaseCreateFormFields = z.infer<typeof schema>

export function useDatabaseCreateWidgetForm(props: DatabaseCreateWidgetProps) {
  const {
    control,
    handleSubmit,
    setError,
    setValue,
    setFocus,
    watch,
    reset,
    formState: { isSubmitting },
  } = useForm<DatabaseCreateFormFields>({
    defaultValues: {
      id: props.database?.id,
      dbType: props.database?.dbType,
      dbName: props.database?.dbName,
      connectString: props.database?.connectString,
      username: props.database?.username,
      password: props.database?.password,
      poolMin: props.database?.poolMin,
      poolMax: props.database?.poolMax,
      timeout: props.database?.timeout,
      state: props.database?.state,
      dbInfo: props.database?.dbInfo,
    },
    resolver: zodResolver(schema),
  })

  return { control, handleSubmit, setError, setValue, setFocus, watch, reset, isSubmitting }
}
