import React from "react";
import { Button } from "@material-ui/core";
import "./Button.css";
const Custombutton = ({ text, icon }) => {
  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };
  return (
    <>
      {text === "Hire Me" ? (
        <Button
          onClick={() => openInNewTab("https://www.facebook.com/sanzeevd")}
          className="custom_btn"
          endIcon={
            icon ? <div className="btn_icon_container">{icon}</div> : null
          }
        >
          <span className="btn_text">{text}</span>
        </Button>
      ) : (
        <Button
          className="custom_btn"
          endIcon={
            icon ? <div className="btn_icon_container">{icon}</div> : null
          }
        >
          <span className="btn_text">{text}</span>
        </Button>
      )}
    </>
  );
};

export default Custombutton;
