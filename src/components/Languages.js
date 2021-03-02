import React from "react";
import { useTranslation } from 'react-i18next';
import { Col } from "react-bootstrap";
import "./Languages.css";

 function Languages() {
   const { t, i18n } = useTranslation();
   const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  }
  return (
    <>
    <Col className="languageDropdown">
      <select onChange={(e) => changeLanguage(e.target.value)}>
        <option value="en">EN</option>
        <option value="ar">Ar</option>
        <option value="tr ">TR</option>
      </select>
    </Col>
  </>
    );
}
export default Languages;