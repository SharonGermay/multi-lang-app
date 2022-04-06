import { useTranslation } from "react-i18next";

function Home(props) {
  const { t } = useTranslation(["home"]);

  return (
    <div>
      <h1> {t("hello from home page")} </h1>
    </div>
  );
}

export default Home;
