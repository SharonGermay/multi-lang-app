import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

export default function Header() {
  const { i18n, t } = useTranslation(["common"]);

  useEffect(() => {
    let userLang = navigator.language || navigator.userLanguage;
    userLang = userLang.split("-");
    if (localStorage.getItem("i18nextLng")?.length > 2) {
      i18next.changeLanguage(userLang[0]);
    }
  }, []);

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };
  return (
    <div className="menu-navbar">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to={"/"}>
                  {t("home")}
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to={"/secondPage"}>
                  {t("second page")}
                </Link>
              </li>

              <li className="nav-item">
                <div style={{ padding: "8px" }}>
                  <select
                    value={localStorage.getItem("i18nextLng")}
                    onChange={handleLanguageChange}
                  >
                    <option value="en">english</option>
                    <option value="he">עברית </option>
                  </select>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
