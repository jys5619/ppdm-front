import { useQueryFormListWidgetAction } from './segments/query-form-list-widget.action'
import { QueryFormListWidgetProps } from './segments/query-form-list-widget.prop'
import { ReactNode, createContext, useContext, useMemo } from 'react'
import { ColDef } from 'ag-grid-community'
import { AgGridReact } from 'ag-grid-react'
import 'ag-grid-community/styles/ag-grid.css' // Mandatory CSS required by the grid
import 'ag-grid-community/styles/ag-theme-quartz.css' // Optional Theme applied to the grid
import {
  QueryFormListFormFields,
  useQueryFormListWidgetForm,
} from './segments/query-form-list-widget.form'
import { FormProvider, RegisterOptions, useFormContext } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'

export function QueryFormListWidget(props: QueryFormListWidgetProps) {
  const { form } = useQueryFormListWidgetForm(props)
  const { dataList } = useQueryFormListWidgetAction(form)
  // const search = form.watch()

  const colDefs = useMemo<ColDef[]>(() => {
    return [{ field: 'id' }, { field: 'title' }, { field: 'favorites' }, { field: 'state' }]
  }, [])

  // const methods = useForm<QueryFormListFormFields>({
  //   defaultValues: { state: ActiveInactiveState.Active },
  //   mode: 'onSubmit',
  // })

  const { title, state } = form.watch()

  const columns = getNestedComponent()
  return (
    <>
      [{title}][
      {state}]
      <FormProvider {...form}>
        <FomColumnsContext.Provider value={columns}>
          <FomColumnsWrapper />
        </FomColumnsContext.Provider>
      </FormProvider>
      <div className="ag-theme-alpine" style={{ height: 400 }}>
        <AgGridReact rowData={dataList} columnDefs={colDefs} defaultColDef={{ filter: true }} />
      </div>
    </>
  )
}

function getNestedComponent() {
  const getField = () => {
    const FormCol = {
      Title: {
        id: 'title',
        label: '이메일',
        validation: {
          required: '입력하세요!',
        },
      },
      State: {
        id: 'state',
        label: '패스워드',
        validation: {
          required: '입력하세요!',
        },
      },
    }
    return [[FormCol.Title], [FormCol.State]]
  }

  const formCols = getField()

  return formCols
}

const FomColumnsContext = createContext<InputProps[][]>([])

function FomColumnsWrapper() {
  const columns = useContext(FomColumnsContext)
  const { handleSubmit } = useFormContext()

  function onSubmit(foo: QueryFormListFormFields) {
    console.log(foo)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {columns.map((fields) => {
        return (
          <>
            {fields.map((col) => {
              return <Input {...col} />
            })}
          </>
        )
      })}
      <input type="submit" />
    </form>
  )
}

export type InputProps = {
  id: string
  label?: string
  placeholder?: string
  helperText?: string
  type?: string
  readOnly?: boolean
  validation?: RegisterOptions
  helperClassName?: string
  errorClassName?: string
  inputRightComponent?: ReactNode
} & React.ComponentPropsWithoutRef<'input'>

export default function Input({
  id,
  label,
  placeholder = '',
  helperText,
  type = 'text',
  readOnly = false,
  validation,
  className,
  inputRightComponent,
  ...rest
}: InputProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  function getClassName(): string {
    let result = `w-full px-[12px] h-[50px] rounded-[5px] outline-none text-[16px] ${className}`

    if (readOnly) result += ' ' + 'bg-[#f2f4f7] cursor-not-allowed '
    else result += ' ' + 'text-[#333] border border-[#e1e2e3] focus:border-blue1'

    return result
  }

  return (
    <div>
      {label ? (
        <div>
          <label htmlFor={id}>{label}</label>
        </div>
      ) : null}
      <div>
        <input
          {...register(id, validation)}
          {...rest}
          type={type}
          name={id}
          id={id}
          readOnly={readOnly}
          className={getClassName()}
          placeholder={placeholder}
        />
        {inputRightComponent ?? null}
      </div>
      <ErrorMessage errors={errors} name={id} render={({ message }) => <p>{message}</p>} />
      <div>{helperText && <p>{helperText}</p>}</div>
    </div>
  )
}
