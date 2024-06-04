import { QueryFormRunWidgetProps } from "../prop/query-form-run-widget.prop";
import { useEffect, useRef, useState } from "react";
import { QueryFormVo } from "@/shared/vo/data";
import { getQueryForm } from "@/shared/api/data";

export function useQueryFormRunWidgetAction(props: QueryFormRunWidgetProps) {
  const [queryFormVo, setQueryFormVo] = useState<QueryFormVo | undefined>();
  const [databaseId, setDatabaseId] = useState<string>("");
  const searchDataMap = useRef<{ [x: string]: string }>({});

  useEffect(() => {
    const init = async () => {
      if (props.id) {
        const res = await getQueryForm(props.id);
        setQueryFormVo({ ...res.data });
        searchDataMap.current = {};
      }
    };
    init();
  }, [props.id]);

  const runSql = (databaseId: string, queryFormId: string, inputData: { [x: string]: string }) => {
    await(databaseId, queryFormId, inputData);
  };

  return {
    queryFormVo,
    databaseId,
    setDatabaseId,
    searchDataMap,
    runSql,
  };
}
