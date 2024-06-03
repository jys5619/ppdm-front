import { ActiveInactiveState } from "../state";
import { QueryFormInputVo } from "./query-form-input.vo";
import { QueryFormSqlVo } from "./query-form-sql.vo";

export interface QueryFormVo {
  id?: string;
  title?: string;
  favorites?: string;
  description?: string;
  inputList?: QueryFormInputVo[];
  sqlList?: QueryFormSqlVo[];
  state?: ActiveInactiveState;
  createdAt?: Date;
  updatedAt?: Date;
}
