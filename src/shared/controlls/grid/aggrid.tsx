import { GridApiSet } from 'ag-grid-community'
import 'ag-grid-community/styles/ag-grid.css' // Mandatory CSS required by the grid
import 'ag-grid-community/styles/ag-theme-quartz.css' // Optional Theme applied to the grid
import { AgGridReact, AgGridReactProps } from 'ag-grid-react'
import { MutableRefObject } from 'react'

interface GridProps extends AgGridReactProps {
  gridRef?: MutableRefObject<GridApiSet | null>
}

export function AgGrid({ gridRef, rowData, columnDefs }: GridProps) {
  return (
    <div className="ag-theme-alpine" style={{ height: 400 }}>
      <AgGridReact
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ref={gridRef as any}
        rowData={rowData}
        columnDefs={columnDefs}
        singleClickEdit={true}
        defaultColDef={{ filter: true }}
      />
    </div>
  )
}
