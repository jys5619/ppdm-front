import { ActiveInactiveState } from '../state'
import { QueryFormInputDataVo } from './query-form-input-data.vo'
import { QueryFormSqlVo } from './query-form-sql.vo'

export interface QueryFormVo {
  id?: string
  name?: string
  favorites?: string
  description?: string
  inputDataList?: QueryFormInputDataVo[]
  sqlList?: QueryFormSqlVo[]
  state?: ActiveInactiveState
  createdAt?: Date
  updatedAt?: Date
}
