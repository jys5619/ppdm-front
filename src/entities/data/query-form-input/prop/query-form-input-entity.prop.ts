import { QueryFormVo } from '@/shared/vo/data'
import { ChangeEvent } from 'react'

export interface QueryFormInputEntityProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: any
  field: QueryFormVo
  index: number
  watchType: string
  onChangeType: (event: ChangeEvent<HTMLSelectElement>) => void
  onUp: () => void
  onDown: () => void
  onRemove: () => void
}
