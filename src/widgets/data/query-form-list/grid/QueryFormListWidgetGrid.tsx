import { AgGrid } from '@/shared/controlls'
import { QueryFormVo } from '@/shared/vo/data'
import { ColDef } from 'ag-grid-community'
import { useMemo } from 'react'

interface QueryFormListWidgetGrid {
  rowData: QueryFormVo[]
}

export function QueryFormListWidgetGrid({ rowData }: QueryFormListWidgetGrid) {
  const colDefs = useMemo<ColDef[]>(() => {
    return [{ field: 'id' }, { field: 'title' }, { field: 'favorites' }, { field: 'state' }]
  }, [])

  return (
    <div className="ag-theme-alpine" style={{ height: 400 }}>
      <AgGrid rowData={rowData} columnDefs={colDefs} />
    </div>
  )
}
