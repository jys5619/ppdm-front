import { DatabaseVo } from '@/shared/vo/data'
import { ActiveInactiveState } from '@/shared/vo/state'
import { DbType } from '@/shared/vo/type'
import { DatabaseCreateWidget } from '@widgets/data/database/database-create-widget'

export function DBConnection() {
  const databaseVo: DatabaseVo = {
    dbType: DbType.ORACLE,
    dbName: 'DEV2',
    connectString: 'localhost:1521/ORCL',
    username: 'ppdm',
    password: 'ppdm12',
    poolName: 'ppdm_dev2',
    poolMin: 1,
    poolMax: 3,
    timeout: 300,
    state: ActiveInactiveState.Active,
  }
  return (
    <div>
      <h2>DB Connection Sample</h2>
      <hr />

      <DatabaseCreateWidget title="데이터베이스 연결 테스트" database={databaseVo} />
    </div>
  )
}
