import { SubmitHandler, UseFormReturn } from 'react-hook-form'
import { DatabaseCreateFormFields } from './form/useDatabaseCreateWidgetForm'
import { useState } from 'react'
import { DatabaseVo } from '@/shared/vo/data'
import { connectionTest } from '@/shared/api/data'
import { AxiosError } from 'axios'

export function useDatabaseCreateWidget(form: UseFormReturn<DatabaseCreateFormFields>) {
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
    console.log(data, form)
    // try {
    //   const res = await createDatabase({ ...data })
    //   if (res.data && res.data.id) {
    //     // setValue('id', res.data.id)
    //     form.reset({ ...res.data })
    //     setApiResult({ state: 'success', message: '저장 성공하였습니다.' })
    //   } else {
    //     setApiResult({ state: 'error', message: '저장 실패하였습니다.' })
    //   }
    // } catch (e) {
    //   let message = '저장에 실패하였습니다.'
    //   if (e instanceof AxiosError) {
    //     message = message + ' ' + e.message
    //   }
    //   setApiResult({ state: 'error', message })
    // }
  }

  return {
    apiResult,
    onSubmit,
    onConnectionTest,
  }
}
