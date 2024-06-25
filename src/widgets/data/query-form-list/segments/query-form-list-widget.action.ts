import { SubmitHandler, UseFormReturn } from 'react-hook-form'
import { QueryFormListFormFields } from './query-form-list-widget.form'
import { useState } from 'react'
import { QueryFormVo } from '@/shared/vo/data'
import { AxiosError } from 'axios'
import { QueryFormListSearchVo, getQueryFormList } from '@/shared/api/data'

export function useQueryFormListWidgetAction(form: UseFormReturn<QueryFormListFormFields>) {
  const [dataList, setDataList] = useState<QueryFormVo[]>([])

  const onSearch: SubmitHandler<QueryFormListFormFields> = async (
    searchVo: QueryFormListSearchVo,
  ) => {
    try {
      const res = await getQueryFormList(searchVo)
      if (res.data) {
        setDataList(res.data)
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
    dataList,
    onSearch,
  }
}
