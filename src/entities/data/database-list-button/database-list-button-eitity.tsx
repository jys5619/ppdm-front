import { getDatabaseList } from "@/shared/api/data";
import { DatabaseListButtonEntityProps } from "./prop/databasee-list-button-entity.prop";
import { useEffect, useState } from "react";
import { DatabaseVo } from "@/shared/vo/data";

export function DatabaseListButtonEntity(props: DatabaseListButtonEntityProps) {
  const { onChange } = props;
  const [databaseList, setDatabaseList] = useState<DatabaseVo[]>([]);

  useEffect(() => {
    const init = async () => {
      const res = await getDatabaseList();
      setDatabaseList(res.data);
    };

    init();
  }, []);

  return (
    <div style={{ display: "flex" }}>
      {databaseList.map(database => {
        return (
          <button key={database.id} type="button" onClick={() => onChange(database.id || "")}>
            {database.dbName}
          </button>
        );
      })}
    </div>
  );
}
