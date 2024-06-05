import { QueryFormRunWidgetProps } from "./query-form-run-widget.prop";
import { useEffect, useRef, useState } from "react";
import { QueryFormInputDataVo, QueryFormResultDataVo, QueryFormVo } from "@/shared/vo/data";
import { executeQueryForm, getQueryForm } from "@/shared/api/data";

export function useQueryFormRunWidgetAction(props: QueryFormRunWidgetProps) {
  const [queryFormVo, setQueryFormVo] = useState<QueryFormVo | undefined>();
  const [databaseId, setDatabaseId] = useState<string>("");
  const searchDataMap = useRef<QueryFormInputDataVo>({});
  const [resultData, setResultData] = useState<QueryFormResultDataVo[]>([]);

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

  const runSql = async (
    databaseId: string,
    queryFormId: string,
    inputData: QueryFormInputDataVo
  ) => {
    const res = await executeQueryForm(databaseId, queryFormId, inputData);
    setResultData(res.data);
  };

  return {
    queryFormVo,
    databaseId,
    setDatabaseId,
    searchDataMap,
    runSql,
    resultData,
  };
}
