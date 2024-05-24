import { useMenus } from "@/shared/store";
import { Link } from "react-router-dom";
import "./css/aside.css";

export function Aside() {
  const { menus } = useMenus();
  const sampleMenu = menus.filter(m => m.group === "sample");
  const sampleUiMenu = menus.filter(m => m.group === "sample-ui");

  return (
    <aside>
      <div className="logo">
        <a href="#">UI</a>
      </div>
      <nav className="accordion-menu">
        <div className="accrodion">
          {sampleMenu.map(m => (
            <>
              <input type="checkbox" id={m.id} />
              <label htmlFor={m.id}>
                {m.name}
                <em></em>
              </label>
              <div>
                {sampleUiMenu.map(sm => (
                  <label htmlFor={sm.id}>
                    <input type="radio" name={m.id} id={sm.id} />
                    <span>
                      <Link to={sm.url}>{sm.name}</Link>
                    </span>
                  </label>
                ))}
              </div>
            </>
          ))}
        </div>
      </nav>
    </aside>
  );
}
