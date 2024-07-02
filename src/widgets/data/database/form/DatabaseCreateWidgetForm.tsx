import { DatabaseCreateFormFields } from './useDatabaseCreateWidgetForm'
import { Button, ButtonGroup, Form, Input, Select, Textarea } from '@/shared/controlls'
import { dbTypeList } from '@/shared/vo/type'
import { activeInactiveStateList } from '@/shared/vo/state'
import { FieldValues, UseFormReturn } from 'react-hook-form'
import { DatabaseVo } from '@/shared/vo/data'

interface QueryFormListWidgetSearchFormPorps {
  onSubmit: (data: DatabaseCreateFormFields) => void
  form: UseFormReturn<FieldValues>
  database: DatabaseCreateFormFields
  onConnectionTest: (data: DatabaseVo) => void
}

export function DatabaseCreateWidgetForm({
  onSubmit,
  form,
  database,
  onConnectionTest,
}: QueryFormListWidgetSearchFormPorps) {
  const Columns = {
    DatabaseType: () => {
      return (
        <Select id="dbType" label="Database Type" typeList={dbTypeList} disabled={!!database.id} />
      )
    },
    DatabaseName: () => {
      return (
        <Input
          id="dbName"
          label="Database Name"
          placeholder="Database명(사용자들이 확인할 수 있도록 화면에 출력되는 값 중복 불가)"
        />
      )
    },
    ConnectionString: () => {
      return (
        <Input
          id="connectString"
          label="Connection String"
          placeholder="Database 연결 문자열 예)localhot:1521/ORCL"
        />
      )
    },
    DatabaseID: () => {
      return <Input id="username" label="Database ID" placeholder="Database ID" />
    },
    DatabasePassword: () => {
      return <Input id="password" label="Database password" placeholder="Database 패스워드" />
    },
    PoolMinCount: () => {
      return (
        <Input
          id="poolMin"
          label="Pool Min Count"
          type="number"
          placeholder="Connection Pool Min Count"
        />
      )
    },
    PoolMaxCount: () => {
      return (
        <Input
          id="poolMax"
          label="Pool Max Count"
          type="number"
          placeholder="Connection Pool Max Count"
        />
      )
    },
    ConnectionTimeout: () => {
      return (
        <Input
          id="timeout"
          type="number"
          label="Connection Timeout(초)"
          placeholder="Connection Timeout"
        />
      )
    },
    DbInfo: () => {
      return (
        <Textarea
          id="dbInfo"
          label="Database Information"
          placeholder="사용자에게 보여줄 정보"
          style={{ width: '100%' }}
          rows={10}
        />
      )
    },
    State: () => {
      return <Select id="state" label="상태" typeList={activeInactiveStateList} />
    },
  }

  const columns = [
    [Columns.DatabaseType()],
    [Columns.DatabaseName()],
    [Columns.ConnectionString()],
    [Columns.DatabaseID()],
    [Columns.DatabasePassword()],
    [Columns.PoolMinCount()],
    [Columns.PoolMaxCount()],
    [Columns.ConnectionTimeout()],
    [Columns.DbInfo()],
    [Columns.State()],
  ]

  return (
    <Form onSubmit={onSubmit} columns={columns} form={form}>
      <ButtonGroup
        right={[
          <Button type="button" onClick={() => onConnectionTest(database)}>
            연결 테스트
          </Button>,
          <Button type="submit">저장</Button>,
        ]}
      />
    </Form>
  )
}
