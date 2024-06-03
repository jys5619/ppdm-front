import { SubmitHandler } from 'react-hook-form'
import { QueryFormEditWidgetProps } from '../prop/query-form-edit-widget.prop'
import {
  QueryFormEditFormFields,
  useQueryFormEditWidgetForm,
} from '../form/query-form-edit-widget.form'
import { useEffect, useState } from 'react'
import { createQueryForm, getQueryForm } from '../api/query-form-edit-widget.api'
import { QueryFormVo } from '@/shared/vo/data'

export function useQueryFormEditWidgetAction(props: QueryFormEditWidgetProps) {
  const { control, errors, form, inputList, sqlList } = useQueryFormEditWidgetForm()
  const [successMessage, setSuccessMessage] = useState<string | undefined>()

  const onSubmit: SubmitHandler<QueryFormEditFormFields> = async (data: QueryFormVo) => {
    try {
      const res = await createQueryForm({ ...data })
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

  useEffect(() => {
    const init = async () => {
      if (props.id) {
        const res = await getQueryForm(props.id)
        console.log('res.data', res.data)
        form.reset({ ...res.data })
      }
    }
    init()
  }, [props.id])

  return {
    control,
    errors,
    form,
    inputList,
    sqlList,
    successMessage,
    onSubmit,
  }
}
