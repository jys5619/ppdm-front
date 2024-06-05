import { useQueryFormRunWidgetAction } from "./segments/query-form-run-widget.action";
import { QueryFormRunWidgetProps } from "./segments/query-form-run-widget.prop";
import { DatabaseListButtonEntity } from "@/entities/data/database-list-button";
import { QueryFormInputVo, QueryFormSqlVo } from "@/shared/vo/data";
import { QueryFormSqlInputEntity } from "@/entities/data/query-form-sql-input";
import { QueryFormSqlResultEntity } from "@/entities/data/query-form-sql-result";

export function QueryFormRunWidget(props: QueryFormRunWidgetProps) {
  const { queryFormVo, databaseId, setDatabaseId, searchDataMap, runSql, resultData } =
    useQueryFormRunWidgetAction(props);

  return (
    <div>
      <h2>{queryFormVo?.title}</h2>
      <p>{queryFormVo?.favorites}</p>
      <p>{queryFormVo?.description}</p>
      {queryFormVo?.inputList &&
        queryFormVo.inputList.map((queryFormInput: QueryFormInputVo) => {
          return (
            <QueryFormSqlInputEntity
              key={queryFormInput.id}
              queryFormInput={queryFormInput}
              onChange={e => (searchDataMap.current[queryFormInput.name || ""] = e.target.value)}
            />
          );
        })}

      {queryFormVo?.sqlList &&
        queryFormVo.sqlList.map((queryFormSql: QueryFormSqlVo) => {
          return (
            <QueryFormSqlResultEntity
              key={queryFormSql.id}
              queryFormSql={queryFormSql}
              resultData={resultData && resultData.find(r => r.id === queryFormSql.id)}
            />
          );
        })}

      <DatabaseListButtonEntity onChange={setDatabaseId} />
      <button
        type="button"
        onClick={() => runSql(databaseId, queryFormVo?.id || "", searchDataMap.current)}
      >
        실행
      </button>
    </div>
  );
}
