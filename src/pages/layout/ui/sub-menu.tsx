import { MenuItem } from "@/shared/store";

interface SubMenuProps {
  name: string;
  menu: MenuItem;
  gotoMenu: (menu: MenuItem) => void;
}
export function SubMenu({ name, menu, gotoMenu }: SubMenuProps) {
  return (
    <>
      <label htmlFor={menu.id} onClick={() => gotoMenu(menu)}>
        <input type="radio" name={name} id={menu.id} />
        <span>{menu.name}</span>
      </label>
    </>
  );
}
