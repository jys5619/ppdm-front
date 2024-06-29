import { SubmitHandler, UseFormReturn } from 'react-hook-form'
import { QueryFormEditWidgetProps } from './query-form-edit-widget.prop'
import { QueryFormEditFormFields } from './query-form-edit-widget.form'
import { useEffect, useState } from 'react'
import { QueryFormVo } from '@/shared/vo/data'
import { createQueryForm, getQueryForm } from '@/shared/api/data'

export function useQueryFormEditWidgetAction(
  props: QueryFormEditWidgetProps,
  form: UseFormReturn<QueryFormEditFormFields>,
) {
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
  }, [props.id, form])

  return {
    successMessage,
    onSubmit,
  }
}
