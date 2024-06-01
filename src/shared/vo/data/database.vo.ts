import { ActiveInactiveState } from '../state'
import { DbType } from '../type'

export interface DatabaseVo {
  id?: string
  dbType?: DbType
  dbName?: string
  connectString?: string
  username?: string
  password?: string
  poolName?: string
  poolMin?: number
  poolMax?: number
  timeout?: number
  state?: ActiveInactiveState
  createdAt?: Date
  updatedAt?: Date
}
