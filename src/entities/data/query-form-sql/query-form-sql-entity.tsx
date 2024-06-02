import { Input, Textarea } from '@/shared/controlls'
import { FaArrowDown, FaArrowUp } from 'react-icons/fa'
import { RiDeleteBin5Line } from 'react-icons/ri'
import { QueryFormSqlEntityProps } from './prop/query-form-sql-entity.prop'

export function QueryFormSqlEntity(props: QueryFormSqlEntityProps) {
  const { control, field, index, onUp, onDown, onRemove } = props

  const title = `inputDataList.${index}.title`
  const description = `inputDataList.${index}.description`
  const sql = `inputDataList.${index}.sql`

  return (
    <div key={field.id} style={{ display: 'flex', flexDirection: 'column' }}>
      <Input name={title} control={control} placeholder="제목" />
      <Textarea name={description} control={control} placeholder="설명" />
      <Textarea
        name={sql}
        control={control}
        placeholder="쿼리문"
        style={{
          backgroundColor: '#f5f5f5',
          fontFamily: 'Consolas, "Liberation Mono", Menlo, monospace',
        }}
      />
      <div style={{ display: 'flex' }}>
        <button type="button" onClick={onUp}>
          <FaArrowUp />
        </button>
        <button type="button" onClick={onDown}>
          <FaArrowDown />
        </button>
        <button type="button" onClick={onRemove}>
          <RiDeleteBin5Line />
        </button>
      </div>
    </div>
  )
}
