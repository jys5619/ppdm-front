import { ColumnApi, GridApi } from 'ag-grid-community'

declare module 'ag-grid-community' {
  export type GridApiSet = {
    api: GridApi
    columnApi: ColumnApi
  }
}
