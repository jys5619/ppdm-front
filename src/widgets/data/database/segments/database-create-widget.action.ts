import { SubmitHandler } from 'react-hook-form'
import { DatabaseCreateWidgetProps } from './database-create-widget.prop'
import {
  DatabaseCreateFormFields,
  useDatabaseCreateWidgetForm,
} from './database-create-widget.form'
import { useState } from 'react'
import { DatabaseVo } from '@/shared/vo/data'
import { connectionTest, createDatabase } from '@/shared/api/data'
import { AxiosError } from 'axios'

export function useDatabaseCreateWidgetAction(props: DatabaseCreateWidgetProps) {
  const { control, handleSubmit, watch, reset, isSubmitting } = useDatabaseCreateWidgetForm(props)
  const [apiResult, setApiResult] = useState<
    { state?: 'success' | 'error'; message: string } | undefined
  >()

  const onConnectionTest = async (data: DatabaseVo) => {
    try {
      const res = await connectionTest({ ...data })
      if (res.data) {
        setApiResult(res.data)
      }
    } catch (e) {
      let message = '오류가 발생하였습니다.'
      if (e instanceof AxiosError) {
        message = message + ' ' + e.message
      }
      setApiResult({ state: 'error', message })
    }
  }

  const onSubmit: SubmitHandler<DatabaseCreateFormFields> = async (data: DatabaseVo) => {
    try {
      const res = await createDatabase({ ...data })
      if (res.data && res.data.id) {
        // setValue('id', res.data.id)
        reset({ ...res.data })
        setApiResult({ state: 'success', message: '저장 성공하였습니다.' })
      } else {
        setApiResult({ state: 'error', message: '저장 실패하였습니다.' })
      }
    } catch (e) {
      let message = '저장에 실패하였습니다.'
      if (e instanceof AxiosError) {
        message = message + ' ' + e.message
      }
      setApiResult({ state: 'error', message })
    }
  }

  return {
    control,
    handleSubmit,
    watch,
    apiResult,
    onSubmit,
    onConnectionTest,
    isSubmitting,
  }
}
