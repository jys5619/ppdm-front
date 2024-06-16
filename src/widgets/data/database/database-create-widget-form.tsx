import { Control } from 'react-hook-form'
import { DatabaseCreateFormFields } from './segments/database-create-widget.form'
import { Input, Select, Textarea } from '@/shared/controlls'
import { dbTypeList } from '@/shared/vo/type'
import { activeInactiveStateList } from '@/shared/vo/state'
import { useMemo } from 'react'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useDatabaseCreateWidgetForm(control: any, database: DatabaseCreateFormFields) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any

  const getFormCols = (
    control: Control<DatabaseCreateFormFields>,
    database: DatabaseCreateFormFields,
  ) => {
    const FormCol = {
      DatabaseType: {
        label: 'Database Type',
        node: (
          <Select name="dbType" control={control} typeList={dbTypeList} disabled={!!database.id} />
        ),
      },
      DatabaseName: {
        label: 'Database Name',
        node: (
          <Input
            name="dbName"
            control={control}
            type="text"
            placeholder="Database명(사용자들이 확인할 수 있도록 화면에 출력되는 값 중복 불가)"
          />
        ),
      },
      ConnectionString: {
        label: 'Connection String',
        node: (
          <Input
            name="connectString"
            control={control}
            type="text"
            placeholder="Database 연결 문자열 예)localhot:1521/ORCL"
          />
        ),
      },
      DatabaseID: {
        label: 'Database ID',
        node: <Input name="username" control={control} type="text" placeholder="Database ID" />,
      },
      DatabasePassword: {
        label: 'Database password',
        node: (
          <Input name="password" control={control} type="text" placeholder="Database 패스워드" />
        ),
      },
      PoolMinCount: {
        label: 'Pool Min Count',
        node: (
          <Input
            name="poolMin"
            control={control}
            type="number"
            placeholder="Connection Pool Min Count"
          />
        ),
      },
      PoolMaxCount: {
        label: 'Pool Max Count',
        node: (
          <Input
            name="poolMax"
            type="number"
            control={control}
            placeholder="Connection Pool Max Count"
          />
        ),
      },
      ConnectionTimeout: {
        label: 'Connection Timeout(초)',
        node: (
          <Input name="timeout" type="number" control={control} placeholder="Connection Timeout" />
        ),
      },
      DbInfo: {
        label: 'Database Information',
        node: (
          <Textarea
            control={control}
            name="dbInfo"
            placeholder="사용자에게 보여줄 정보"
            style={{ width: '100%' }}
            rows={10}
          />
        ),
      },
      State: {
        label: '상태',
        node: <Select name="state" control={control} typeList={activeInactiveStateList} />,
      },
    }

    return [
      [FormCol.DatabaseType],
      [FormCol.DatabaseName],
      [FormCol.ConnectionString],
      [FormCol.DatabaseID],
      [FormCol.DatabasePassword],
      [FormCol.PoolMinCount],
      [FormCol.PoolMaxCount],
      [FormCol.ConnectionTimeout],
      [FormCol.DbInfo],
      [FormCol.State],
    ]
  }

  const formCols = useMemo(() => getFormCols(control, database), [control, database])

  return formCols
}
