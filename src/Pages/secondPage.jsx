import React from 'react';
import { useTranslation } from "react-i18next";

function SecondPage(props) {
    const { t } = useTranslation(["secondPage"]);

    return (
        <div>
      <h1> {t("hello from second page")} </h1>
        </div>
    );
}

export default SecondPage;