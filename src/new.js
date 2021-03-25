import React, { Component } from "react";

export default class Conver extends Component {
  componentDidMount() {
    googleTranslateElementInit(() => {
      new google.translate.TranslateElement(
        { pageLanguage: "en" },
        "google_translate_element"
      );
    });
    const script = document.createElement("script");
    script.src =
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);
  }
  render() {
    return (
      <div>
        <script
          type="text/javascript"
          src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        />
        <div id="google_translate_element"></div>
      </div>
    );
  }
}
