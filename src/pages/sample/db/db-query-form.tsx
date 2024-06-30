import { PageWrapper } from '@/shared/controlls'
import { QueryFormEditWidget } from '@widgets/data/query-form-edit'
import { QueryFormListWidget } from '@widgets/data/query-form-list/QueryFormListWidget'
import { QueryFormRunWidget } from '@widgets/data/query-form-run'
import { useState } from 'react'

export function DBQueryForm() {
  const [id, setId] = useState<string | undefined>()
  return (
    <PageWrapper title="Query Form Create">
      <>
        <h3>Query Form List</h3>
        <QueryFormListWidget setId={setId} />
        <br />
        <br />
        <br />
        {false && <h3>Query Form Edit</h3>}
        {false && <QueryFormEditWidget id={id} />}
        <br />
        <br />
        <br />
        <h3>Query Form Run</h3>

        <QueryFormRunWidget id={id} />
      </>
    </PageWrapper>
  )
}
