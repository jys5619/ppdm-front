import { QueryFormInputType } from "../type/query-form-input-type";

export interface QueryFormInputVo {
  id?: string;
  name?: string;
  title?: string;
  type?: QueryFormInputType;
  arrayData?: string;
}
