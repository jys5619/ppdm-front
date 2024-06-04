import { useQueryFormRunWidgetAction } from "./action/query-form-run-widget.action";
import { QueryFormRunWidgetProps } from "./prop/query-form-run-widget.prop";
import { QueryFormInputType } from "@/shared/vo/type";
import { QueryFormInputVo, QueryFormSqlVo } from "@/shared/vo/data";
import { DatabaseListButtonEntity } from "@/entities/data/database-list-button";

export function QueryFormRunWidget(props: QueryFormRunWidgetProps) {
  const { queryFormVo, databaseId, setDatabaseId, searchDataMap, runSql } =
    useQueryFormRunWidgetAction(props);

  return (
    <div>
      <h2>{queryFormVo?.title}</h2>
      <p>{queryFormVo?.favorites}</p>
      <p>{queryFormVo?.description}</p>
      {queryFormVo?.inputList &&
        queryFormVo.inputList.map((input: QueryFormInputVo) => {
          return (
            <div key={input.id}>
              <h3>
                {input.title}({input.name})
              </h3>
              <span>
                {input.type === QueryFormInputType.INPUT && (
                  <input
                    type="text"
                    onChange={e => (searchDataMap.current[input.name || ""] = e.target.value)}
                  />
                )}
                {input.type === QueryFormInputType.SELECT && (
                  <select
                    onChange={e => (searchDataMap.current[input.name || ""] = e.target.value)}
                  >
                    <option value=""></option>
                    {input.arrayData?.split("|").map(o => {
                      return (
                        <option key={o} value={o}>
                          {o}
                        </option>
                      );
                    })}
                  </select>
                )}
              </span>
            </div>
          );
        })}

      {queryFormVo?.sqlList &&
        queryFormVo.sqlList.map((sql: QueryFormSqlVo) => {
          return (
            <div key={sql.id}>
              <h3>{sql.title}</h3>
              <p>{sql.description}</p>
              <span>{sql.sql}</span>
            </div>
          );
        })}

      <DatabaseListButtonEntity onChange={setDatabaseId} />
      <button
        type="button"
        onClick={() => runSql(databaseId, queryFormVo?.id || "", searchDataMap.current)}
      >
        저장
      </button>
    </div>
  );
}
