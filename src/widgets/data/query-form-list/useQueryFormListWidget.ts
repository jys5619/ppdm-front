import { SubmitHandler, UseFormReturn } from 'react-hook-form'
import { useState } from 'react'
import { QueryFormVo } from '@/shared/vo/data'
import { AxiosError } from 'axios'
import { QueryFormListSearchVo, getQueryFormList } from '@/shared/api/data'
import { QueryFormListFormFields } from './form/useQueryFormListWidgetForm'

export function useQueryFormListWidget(form: UseFormReturn<QueryFormListFormFields>) {
  const [queryFormList, setQueryFormList] = useState<QueryFormVo[]>([])

  const onSearch: SubmitHandler<QueryFormListFormFields> = async (
    searchVo: QueryFormListSearchVo,
  ) => {
    try {
      const res = await getQueryFormList(searchVo)
      if (res.data) {
        setQueryFormList(res.data)
      }
    } catch (e) {
      if (e instanceof AxiosError) {
        form.setError('root', { message: e.message })
      } else {
        form.setError('root', { message: '오류가 발색하였습니다.' })
      }
    }
  }

  return {
    queryFormList,
    onSearch,
  }
}
