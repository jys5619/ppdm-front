import request from "@/app/axios/axios.config";
import { QueryFormVo } from "@/shared/vo/data";
import { QueryFormListSearchVo } from "../vo/query-form-list-search.vo";

export async function getQueryFormList(searchVo: QueryFormListSearchVo) {
  return await request.put<QueryFormVo[]>(`/query-form`, searchVo);
}
