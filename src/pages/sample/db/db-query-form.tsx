import { QueryFormVo } from '@/shared/vo/data/query-form.vo'
import { QueryFormEditWidget } from '@widgets/data/query-form-edit'
import { QueryFormListWidget } from '@widgets/data/query-form-list/query-form-list-widget'
import { useState } from 'react'

export function DBQueryForm() {
  const queryFormVo: QueryFormVo = {}
  const [id, setId] = useState<string | undefined>()
  return (
    <div>
      <h2>Query Form Create</h2>
      <hr />
      <h3>Query Form List</h3>
      <QueryFormListWidget setId={setId} />
      <br />
      <br />
      <br />
      <h3>Query Form Edit</h3>
      <QueryFormEditWidget id={id} />
    </div>
  )
}
