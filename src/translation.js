/* eslint-disable no-unused-vars */
import React from 'react';
import { useTranslation } from 'react-i18next';
import './App.css';

function Translation() {
  const { t, i18n } = useTranslation();
  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };
  return (
    <div className="App">
      <header className="App-header">
      <button className="btn" onClick={() => changeLanguage('ar')}>Arabic</button>
        <button className="btn" onClick={() => changeLanguage('tur')}>Turkish</button>
        <button className="btn" onClick={() => changeLanguage('eng')}>English</button>
        </header>
    </div>
  );
}

export default Translation;