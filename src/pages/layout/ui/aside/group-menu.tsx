import { MenuItem } from "@/shared/store";
import { useState } from "react";

interface GroupMenuProps {
  menu: MenuItem;
}
export function GroupMenu({ menu }: GroupMenuProps) {
  const [isChecked, setChecked] = useState<boolean>(true);
  return (
    <>
      <input id={menu.id} type="checkbox" checked={isChecked} />
      <label onClick={() => setChecked(!isChecked)}>
        {menu.name}
        <em></em>
      </label>
    </>
  );
}
