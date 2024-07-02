import { DatabaseCreateWidgetProps } from './DatabaseCreateWidgetProps'
import { MessageBox } from '@/shared/controlls'
import { useDatabaseCreateWidgetForm } from './form/useDatabaseCreateWidgetForm'
import { DatabaseCreateWidgetForm } from './form/DatabaseCreateWidgetForm'
import { useDatabaseCreateWidget } from './useDatabaseCreateWidget'

export function DatabaseCreateWidget(props: DatabaseCreateWidgetProps) {
  const { form } = useDatabaseCreateWidgetForm(props)
  const { apiResult, onSubmit, onConnectionTest } = useDatabaseCreateWidget(form)
  const database = form.watch()

  return (
    <>
      <DatabaseCreateWidgetForm
        form={form}
        database={database}
        onSubmit={onSubmit}
        onConnectionTest={onConnectionTest}
      />

      <MessageBox {...apiResult} />
    </>
  )
}
