import { QueryFormVo } from "@/shared/vo/data";

export interface QueryFormSqlEntityProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: any;
  controlName: string;
  field: QueryFormVo;
  index: number;
  onUp: () => void;
  onDown: () => void;
  onRemove: () => void;
}
