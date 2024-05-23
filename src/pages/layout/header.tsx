import { useAppSetting, useUserInfo } from "@/shared/store";
import { IoSettingsOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export function Header() {
  const navigate = useNavigate();
  const { userInfo } = useUserInfo();
  const { theme, setTheme } = useAppSetting();

  const menus = {
    main: [
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
        id: "sampleUI",
        url: `sample-ui`,
        name: "Sample U1",
      },
    ],
  };

  const onLogOut = async () => {
    const ok = confirm("Are you sure you want to log out?");
    if (ok) {
      // await auth.signOut();
      navigate("/login");
    }
  };

  const changeTheme = () => {
    console.log("chagne theme", theme);
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <header>
      <div id="sidebar">
        <nav>
          <ul>
            <li style={{ marginLeft: "50px", fontSize: "20px" }}>
              <Link to={"/"}>Home</Link>
            </li>
            {menus.main.map(menu => (
              <li key={menu.id}>
                <Link to={menu.url}>
                  <>{menu.name}</>
                </Link>
              </li>
            ))}
          </ul>
          <ul>
            <li>
              <details className="dropdown">
                <summary>
                  {userInfo.name}({userInfo.email})
                </summary>
                <ul dir="rtl">
                  <li>
                    <a href="#">Profile</a>
                  </li>
                  <li>
                    <a href="#">Settings</a>
                  </li>
                  <li>
                    <a href="#">Security</a>
                  </li>
                  <li>
                    <button onClick={onLogOut}>Logout</button>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <button onClick={changeTheme}>
                <IoSettingsOutline />
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
