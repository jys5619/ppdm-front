import { dbTypeList } from "@/shared/vo/type/db-type";
import { useDatabaseCreateWidgetAction } from "./segments/database-create-widget.action";
import { errorClass, errorRootClass, formClass } from "./segments/database-create-widget.css";
import { DatabaseCreateWidgetProps } from "./segments/database-create-widget.prop";
import { activeInactiveStateList } from "@/shared/vo/state";
import { Input, Select } from "@/shared/controlls";

export function DatabaseCreateWidget(props: DatabaseCreateWidgetProps) {
  const { control, handleSubmit, errors, watch, successMessage, onSubmit, onConnectionTest } =
    useDatabaseCreateWidgetAction(props);

  const database = watch();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={formClass}>
      <h1>{props.title || "Database 연결"}</h1>
      {errors.root && <small className={errorRootClass}>{errors.root.message}</small>}
      <Select name="dbType" control={control} typeList={dbTypeList} disabled={!!database.id} />
      {errors.dbType && <small className={errorClass}>{errors.dbType.message}</small>}
      <Input
        name="dbName"
        control={control}
        type="text"
        placeholder="Database명(사용자들이 확인할 수 있도록 화면에 출력되는 값 중복 불가)"
      />
      <Input
        name="connectString"
        control={control}
        type="text"
        placeholder="DB 연결 문자열 예)localhot:1521/ORCL"
      />

      <Input name="username" control={control} type="text" placeholder="DB 사용자 ID" />

      <Input name="password" control={control} type="text" placeholder="DB 사용자 패스워드" />

      <Input
        name="poolMin"
        control={control}
        type="number"
        placeholder="Connection Pool Min Count"
      />

      <Input
        name="poolMax"
        type="number"
        control={control}
        placeholder="Connection Pool Max Count"
      />

      <Input name="timeout" type="number" control={control} placeholder="Connection Timeout" />

      <textarea name="dbInfo" placeholder="사용자에게 보여줄 정보" />

      <Select name="state" control={control} typeList={activeInactiveStateList} />
      {successMessage && <small>{successMessage}</small>}
      <button type="submit" onClick={() => onConnectionTest(database)}>
        연결 테스트
      </button>
    </form>
  );
}
