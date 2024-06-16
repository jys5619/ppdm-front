import { DatabaseCreateWidgetProps } from './segments/database-create-widget.prop'
import { useDatabaseCreateWidgetForm } from './database-create-widget-form'
import { useDatabaseCreateWidgetAction } from './segments/database-create-widget.action'
import { Button, Form, ButtonGroup, MessageBox } from '@/shared/controlls'

export function DatabaseCreateWidget(props: DatabaseCreateWidgetProps) {
  const { control, watch, apiResult, onConnectionTest, onSubmit } =
    useDatabaseCreateWidgetAction(props)
  const database = watch()

  const formCols = useDatabaseCreateWidgetForm(control, database)

  return (
    <>
      <Form rows={formCols} />
      <ButtonGroup
        right={[
          <Button type="button" onClick={() => onConnectionTest(database)}>
            연결 테스트
          </Button>,
          <Button type="button" onClick={() => onSubmit(database)}>
            저장
          </Button>,
        ]}
      />
      <MessageBox {...apiResult} />
    </>
  )
}
