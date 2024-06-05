import { ActiveInactiveState } from "../state";
import { QueryFormInputType } from "../type";

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

export interface QueryFormSqlVo {
  id?: string;
  title?: string;
  description?: string;
  sql?: string;
}

export interface QueryFormInputVo {
  id?: string;
  name?: string;
  title?: string;
  type?: QueryFormInputType;
  arrayData?: string;
}

export interface QueryFormInputDataVo {
  [x: string]: string | number | null | undefined;
}

export interface QueryFormResultDataVo {
  id: string;
  metaData: Array<{ name: string; dbType: string }>;
  rows: Array<{ [x: string]: string | number | null | undefined }>;
}
