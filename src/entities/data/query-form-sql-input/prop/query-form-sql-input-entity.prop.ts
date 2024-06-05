import { QueryFormInputVo } from "@/shared/vo/data";
import { ChangeEvent } from "react";

export interface QueryFormSqlInputEntityProps {
  queryFormInput: QueryFormInputVo;
  onChange: (event: ChangeEvent<HTMLSelectElement | HTMLInputElement>) => void;
}
