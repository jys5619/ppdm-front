import { dbTypeList } from '@/shared/vo/type/db-type'
import { useDatabaseCreateWidgetAction } from './action/database-create-widget.action'
import { errorClass, errorRootClass, formClass } from './css/database-create-widget.css'
import { DatabaseCreateWidgetProps } from './prop/database-create-widget.prop'
import { activeInactiveStateList } from '@/shared/vo/state'
import { Select } from '@/shared/controlls'

export function DatabaseCreateWidget(props: DatabaseCreateWidgetProps) {
  const {
    control,
    register,
    handleSubmit,
    errors,
    watch,
    successMessage,
    onSubmit,
    onConnectionTest,
  } = useDatabaseCreateWidgetAction(props)

  const database = watch()

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={formClass}>
      <h1>{props.title || 'Database 연결'}</h1>
      {errors.root && <small className={errorRootClass}>{errors.root.message}</small>}
      {/* <select {...register('dbType')} disabled={!!database.id}>
        {dbTypeList?.map((dbType) => {
          return <option key={dbType}>{dbType}</option>
        })}
      </select> */}
      <Select name="dbType" control={control} typeList={dbTypeList} disabled={!!database.id} />
      {errors.dbType && <small className={errorClass}>{errors.dbType.message}</small>}
      <input
        {...register('dbName')}
        type="text"
        placeholder="Database명(사용자들이 확인할 수 있도록 화면에 출력되는 값 중복 불가)"
      />
      <input
        {...register('connectString')}
        type="text"
        placeholder="DB 연결 문자열 예)localhot:1521/ORCL"
      />
      {errors.connectString && <small className={errorClass}>{errors.connectString.message}</small>}

      <input {...register('username')} type="text" placeholder="DB 사용자 ID" />
      {errors.username && <small className={errorClass}>{errors.username.message}</small>}

      <input {...register('password')} type="text" placeholder="DB 사용자 패스워드" />
      {errors.password && <small className={errorClass}>{errors.password.message}</small>}

      <input {...register('poolName')} type="text" placeholder="Connection Pool Name" />
      {errors.poolName && <small className={errorClass}>{errors.poolName.message}</small>}

      <input {...register('poolMin')} type="number" placeholder="Connection Pool Min Count" />
      {errors.poolMin && <small className={errorClass}>{errors.poolMin.message}</small>}

      <input {...register('poolMax')} type="number" placeholder="Connection Pool Max Count" />
      {errors.poolMax && <small className={errorClass}>{errors.poolMax.message}</small>}

      <input {...register('timeout')} type="number" placeholder="Connection Timeout" />
      {errors.timeout && <small className={errorClass}>{errors.timeout.message}</small>}

      <Select name="state" control={control} typeList={activeInactiveStateList} />
      {successMessage && <small>{successMessage}</small>}
      <button type="submit" onClick={() => onConnectionTest(database)}>
        연결 테스트
      </button>
    </form>
  )
}
