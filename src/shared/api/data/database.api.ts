import request from '@/app/axios/axios.config'
import { DatabaseVo } from '@/shared/vo/data/database.vo'

export async function connectionTest(databaseVo: DatabaseVo) {
  return await request.put<{ state: 'success' | 'error'; message: string }>(
    `/database/connection-test`,
    databaseVo,
  )
}

export async function getDatabaseList() {
  return await request.get<DatabaseVo[]>(`/database`)
}

export async function getDatabase(id: string) {
  return await request.get<DatabaseVo>(`/database/${id}`)
}

export async function createDatabase(databaseVo: DatabaseVo) {
  return await request.post<DatabaseVo>('/database', databaseVo)
}
