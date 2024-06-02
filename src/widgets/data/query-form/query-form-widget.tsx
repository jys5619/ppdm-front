import { QueryFormInputEntity } from '@/entities/data/query-form-input'
import { useQueryFormWidgetAction } from './action/query-form-widget.action'
import { errorRootClass, formClass } from './css/query-form-widget.css'
import { QueryFormWidgetProps } from './prop/query-form-widget.prop'
import { Input, Textarea } from '@/shared/controlls'
import { QueryFormInputType } from '@/shared/vo/type'
import { QueryFormSqlEntity } from '@/entities/data/query-form-sql'

export function QueryFormWidget(props: QueryFormWidgetProps) {
  const { control, errors, form, inputDataList, sqlList, successMessage, onSubmit } =
    useQueryFormWidgetAction(props)

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className={formClass}>
      <Input name="name" control={control} type="text" placeholder="Query Form 명" />
      <Textarea
        name="favorites"
        control={control}
        placeholder="즐겨찾기 예)#favorites1 #favorites2"
      />
      <Textarea name="description" control={control} placeholder="Qury Form 설명" />
      {inputDataList.fields.map((field, i) => {
        return (
          <QueryFormInputEntity
            control={control}
            field={field}
            index={i}
            watchType={form.watch(`inputDataList.${i}.type`)}
            onChangeType={(event) =>
              form.setValue(`inputDataList.${i}.type`, event.target.value as QueryFormInputType)
            }
            onUp={() => i > 0 && inputDataList.swap(i, i - 1)}
            onDown={() => inputDataList.fields.length - 1 > i && inputDataList.swap(i + 1, i)}
            onRemove={() => inputDataList.append({ type: QueryFormInputType.INPUT })}
          />
        )
      })}

      <button
        type="button"
        onClick={() => inputDataList.append({ type: QueryFormInputType.INPUT })}
      >
        INPUT DATA 추가
      </button>
      {sqlList.fields.map((field, i) => {
        return (
          <QueryFormSqlEntity
            control={control}
            field={field}
            index={i}
            onUp={() => i > 0 && sqlList.swap(i, i - 1)}
            onDown={() => sqlList.fields.length - 1 > i && sqlList.swap(i + 1, i)}
            onRemove={() => sqlList.remove(i)}
          />
        )
      })}

      <button type="button" onClick={() => sqlList.append({})}>
        SQL 추가
      </button>
      {errors.root && <small className={errorRootClass}>{errors.root.message}</small>}
      {successMessage && <small>{successMessage}</small>}
      <button
        type="button"
        onClick={() => inputDataList.append({ type: QueryFormInputType.INPUT })}
      >
        저장
      </button>
    </form>
  )
}
