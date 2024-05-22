import { RoleType } from "../type/role-type";

export interface UserRoleVo {
  id?: string;
  name?: RoleType;
  createdAt?: Date;
  updatedAt?: Date;
}
