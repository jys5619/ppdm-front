import { QueryFormInputEntity } from '@/entities/data/query-form-input'
import { useQueryFormEditWidgetAction } from './segments/query-form-edit-widget.action'
import { errorRootClass, formClass } from './segments/query-form-edit-widget.css'
import { QueryFormEditWidgetProps } from './segments/query-form-edit-widget.prop'
import { Input, Textarea } from '@/shared/controlls'
import { QueryFormInputType } from '@/shared/vo/type'
import { QueryFormSqlEntity } from '@/entities/data/query-form-sql'
import { useQueryFormEditWidgetForm } from './segments/query-form-edit-widget.form'

export function QueryFormEditWidget(props: QueryFormEditWidgetProps) {
  const { form, inputList, sqlList } = useQueryFormEditWidgetForm()
  const { successMessage, onSubmit } = useQueryFormEditWidgetAction(props, form)

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className={formClass}>
      <Input name="title" control={form.control} placeholder="Query Form 제목" />
      <Textarea
        name="favorites"
        control={form.control}
        placeholder="즐겨찾기 예)#favorites1 #favorites2"
      />
      <Textarea name="description" control={form.control} placeholder="Qury Form 설명" />
      <hr />
      {inputList.fields.map((field, i) => {
        return (
          <QueryFormInputEntity
            key={i}
            control={form.control}
            controlName={'inputList'}
            index={i}
            watchType={form.watch(`inputList.${i}.type`)}
            onChangeType={(event) =>
              form.setValue(`inputList.${i}.type`, event.target.value as QueryFormInputType)
            }
            onUp={() => i > 0 && inputList.swap(i, i - 1)}
            onDown={() => inputList.fields.length - 1 > i && inputList.swap(i + 1, i)}
            onRemove={() => inputList.append({ type: QueryFormInputType.INPUT })}
          />
        )
      })}
      <button type="button" onClick={() => inputList.append({ type: QueryFormInputType.INPUT })}>
        INPUT DATA 추가
      </button>
      <hr />
      {sqlList.fields.map((field, i) => {
        return (
          <QueryFormSqlEntity
            key={i}
            control={form.control}
            controlName={'sqlList'}
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
      <hr />
      {form.formState.errors.root && (
        <small className={errorRootClass}>{form.formState.errors.root.message}</small>
      )}
      {successMessage && <small>{successMessage}</small>}
      <button type="submit">저장</button>
    </form>
  )
}
