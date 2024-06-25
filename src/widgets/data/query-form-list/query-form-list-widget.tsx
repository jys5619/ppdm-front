import { useQueryFormListWidgetAction } from './segments/query-form-list-widget.action'
import { QueryFormListWidgetProps } from './segments/query-form-list-widget.prop'
import { Button, ButtonGroup } from '@/shared/controlls'
import { QueryFormListWidgetForm } from './query-form-list-widget-form'
import { useMemo } from 'react'
import { ColDef } from 'ag-grid-community'
import { AgGridReact } from 'ag-grid-react'
import 'ag-grid-community/styles/ag-grid.css' // Mandatory CSS required by the grid
import 'ag-grid-community/styles/ag-theme-quartz.css' // Optional Theme applied to the grid
import { useQueryFormListWidgetForm } from './segments/query-form-list-widget.form'

export function QueryFormListWidget(props: QueryFormListWidgetProps) {
  const { form } = useQueryFormListWidgetForm(props)
  const { onSearch, dataList } = useQueryFormListWidgetAction(form)
  const search = form.watch()

  const colDefs = useMemo<ColDef[]>(() => {
    return [{ field: 'id' }, { field: 'title' }, { field: 'favorites' }, { field: 'state' }]
  }, [])

  return (
    <>
      {/* <form>
        <label>
          Title
          <Input name="title" control={form.control} type="text" />
        </label>
        <label>
          상태
          <Select name="state" control={form.control} typeList={activeInactiveStateList} />
        </label>
      </form> */}
      {/* <Form rows={formCols} /> */}
      <QueryFormListWidgetForm control={form.control} name="form" />

      <ButtonGroup
        right={[
          <Button type="button" onClick={() => onSearch(search)}>
            조회
          </Button>,
        ]}
      />
      <div className="ag-theme-alpine" style={{ height: 400 }}>
        <AgGridReact rowData={dataList} columnDefs={colDefs} defaultColDef={{ filter: true }} />
      </div>
      {/* <table style={{ border: '1px solid black', width: '100%' }}>
        <thead>
          <tr>
            <th>1</th>
            <th>2</th>
            <th>3</th>
            <th>4</th>
          </tr>
        </thead>
        <tbody>
          {dataList.map((data) => {
            return (
              <tr key={data.id}>
                <td>
                  <span onClick={() => props.setId(data.id)}> {data.id}</span>
                </td>
                <td>{data.title}</td>
                <td>{data.favorites}</td>
                <td>{data.state}</td>
              </tr>
            )
          })}
        </tbody>
      </table> */}
    </>
  )
}
