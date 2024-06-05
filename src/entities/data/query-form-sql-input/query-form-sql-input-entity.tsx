import { QueryFormSqlInputEntityProps } from "./prop/query-form-sql-input-entity.prop";
import { useEffect, useState } from "react";
import { QueryFormInputType } from "@/shared/vo/type";

export function QueryFormSqlInputEntity(props: QueryFormSqlInputEntityProps) {
  const { queryFormInput, onChange } = props;

  const [options, setOptions] = useState<{ value: string; label: string }[]>([]);

  useEffect(() => {
    if (queryFormInput.type === QueryFormInputType.SELECT) {
      const splitData = queryFormInput.arrayData?.split("|");
      const optionList: { value: string; label: string }[] = [];
      if (splitData && splitData.length > 0) {
        for (const data of splitData) {
          if (data.indexOf(":") > -1) {
            const keyValues = data.split(":");
            optionList.push({ value: keyValues[0], label: keyValues[1] });
          } else {
            optionList.push({ value: data, label: data });
          }
        }
      }
      setOptions(optionList);
    }
  }, [queryFormInput.type, queryFormInput.arrayData]);

  return (
    <div>
      <h3>
        {queryFormInput.title}({queryFormInput.name})
      </h3>
      <span>
        {queryFormInput.type === QueryFormInputType.INPUT ? (
          <input type="text" onChange={onChange} />
        ) : queryFormInput.type === QueryFormInputType.SELECT ? (
          <select onChange={onChange}>
            <option value=""></option>
            {options.map(o => {
              return (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              );
            })}
          </select>
        ) : (
          <></>
        )}
      </span>
    </div>
  );
}
