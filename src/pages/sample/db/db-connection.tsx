import { PageWrapper } from '@/shared/controlls'
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
    poolMin: 1,
    poolMax: 3,
    timeout: 300,
    dbInfo: '사용자들에게 보여줄 정보',
    state: ActiveInactiveState.Active,
  }
  return (
    <PageWrapper title="데이터베이스 연결 테스트">
      <DatabaseCreateWidget database={databaseVo} />
    </PageWrapper>
  )
}
