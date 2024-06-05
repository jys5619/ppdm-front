import { QueryFormSqlResultEntityProps } from "./prop/query-form-sql-result-entity.prop";

export function QueryFormSqlResultEntity(props: QueryFormSqlResultEntityProps) {
  const { queryFormSql, resultData } = props;

  return (
    <div>
      <h3>{queryFormSql.title}</h3>
      <p>{queryFormSql.description}</p>
      <span>{queryFormSql.sql}</span>
      {resultData && (
        <div>
          <table>
            <thead>
              <tr>
                {resultData.metaData.map(md => {
                  return <td>{md.name}</td>;
                })}
              </tr>
            </thead>
            <tbody>
              {resultData.rows.map(row => {
                return (
                  <tr>
                    {resultData.metaData.map(md => {
                      return <td>{row[md.name]}</td>;
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
