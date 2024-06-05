import { QueryFormListSearchVo } from "@/shared/api/data";

export interface QueryFormListWidgetProps {
  searchVo?: QueryFormListSearchVo;
  setId: (id: string | undefined) => void;
}
