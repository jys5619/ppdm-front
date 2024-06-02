import { SubmitHandler } from 'react-hook-form'
import { QueryFormWidgetProps } from '../prop/query-form-widget.prop'
import { QueryFormFormFields, useQueryFormWidgetForm } from '../form/query-form-widget.form'
import { connectionTest, createDatabase } from '../api/query-form-widget.api'
import { useState } from 'react'
import { DatabaseVo } from '@/shared/vo/data'

export function useQueryFormWidgetAction(props: QueryFormWidgetProps) {
  const { control, errors, form, inputDataList, sqlList } = useQueryFormWidgetForm(props)
  const [successMessage, setSuccessMessage] = useState<string | undefined>()

  const onConnectionTest = async (data: DatabaseVo) => {
    try {
      const res = await connectionTest({ ...data })
      if (res.data) {
        setSuccessMessage(res.data)
      }
    } catch (e) {
      form.setError('root', { message: '오류가 발색하였습니다.' })
    }
  }

  const onSubmit: SubmitHandler<QueryFormFormFields> = async (data: DatabaseVo) => {
    try {
      const res = await createDatabase({ ...data })
      if (res.data && res.data.id) {
        // setValue('id', res.data.id)
        form.reset({ ...res.data })
        setSuccessMessage('저장 성공하였습니다.')
      } else {
        form.setError('root', { message: '저장에 실패하였습니다.' })
      }
    } catch (e) {
      form.setError('root', { message: '오류가 발색하였습니다.' })
    }
  }

  return {
    control,
    errors,
    form,
    inputDataList,
    sqlList,
    successMessage,
    onSubmit,
    onConnectionTest,
  }
}
