import { Outlet, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function LayoutMain() {
  const menus = [
    {
      id: "mydatabase",
      url: `/my/database`,
      name: "Database",
    },
    {
      id: "database",
      url: `/datas/database`,
      name: "Database",
    },
    {
      id: "menu12",
      url: `contacts/2`,
      name: "MENU2",
    },
    {
      id: "menu3",
      url: `contacts/3`,
      name: "MENU3",
    },
  ];
  const navigate = useNavigate();

  const onLogOut = async () => {
    const ok = confirm("Are you sure you want to log out?");
    if (ok) {
      // await auth.signOut();
      navigate("/login");
    }
  };

  return (
    <>
      <div id="sidebar">
        <nav>
          <ul>
            <li>
              <Link to={"/"}>HOME</Link>
            </li>
          </ul>
          <ul>
            {menus.map(menu => (
              <li key={menu.id}>
                <Link to={menu.url}>
                  <>{menu.name}</>
                </Link>
              </li>
            ))}
          </ul>
          <ul>
            <li>
              <button onClick={onLogOut}>Logout</button>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}
