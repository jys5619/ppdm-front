import { QueryFormVo } from '@/shared/vo/data/query-form.vo'
import { QueryFormWidget } from '@widgets/data/query-form'

export function DBQueryForm() {
  const queryFormVo: QueryFormVo = {}
  return (
    <div>
      <h2>Query Form Create</h2>
      <hr />

      <QueryFormWidget queryFormVo={queryFormVo} />
    </div>
  )
}
