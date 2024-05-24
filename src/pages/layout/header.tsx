import { useAuths, useMenus, useUserInfo } from "@/shared/store";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./css/header.css";
import { FaCaretDown } from "react-icons/fa";

export function Header() {
  const navigate = useNavigate();
  const auths = useAuths();
  const { userInfo, resetUserInfo } = useUserInfo();
  // const { theme, setTheme } = useAppSetting();
  const { menus } = useMenus();

  const onLogOut = async () => {
    const ok = confirm("로그아웃 하시겠습니까?");
    if (ok) {
      resetUserInfo();
      auths.logout();
      navigate("/login");
    }
  };

  // const changeTheme = () => {
  //   console.log("chagne theme", theme);
  //   setTheme(theme === "dark" ? "light" : "dark");
  // };

  return (
    <header>
      <nav>
        <div className="top-menu">
          <div>
            <Link to={"/"}>Home</Link>
          </div>
          {menus
            .filter(m => m.group === "main")
            .map(menu => (
              <div key={menu.id}>
                <Link to={menu.url}>
                  <>{menu.name}</>
                </Link>
              </div>
            ))}
          <div className="slice">
            <a href="#">&nbsp;</a>
          </div>
          <div className="comboMenu">
            <div>
              <label htmlFor="mainComboMenuList">
                {userInfo.name}({userInfo.email}) <FaCaretDown />
              </label>
            </div>
            <input type="checkbox" id="mainComboMenuList"></input>
            <div className="comboList">
              <label htmlFor="mainComboMenuList">
                <div>사용자정보</div>
                <div>설정</div>
                <div>화면잠금</div>
                <div onClick={onLogOut}>로그아웃 </div>
              </label>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
