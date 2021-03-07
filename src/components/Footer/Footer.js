import { Typography } from "@material-ui/core";
import React from "react";
import "./Footer.css";
import resumeData from "../../utils/resumeData";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_left">
        <Typography className="footer_name">
          Sanjeev <span>Das</span>
        </Typography>
      </div>
      <div className="footer_right">
        <Typography className="footer_copyright">
          Designed and Developed by{" "}
          <a href="" target="_bank">
            Sanjeev Das
          </a>
        </Typography>
      </div>
    </div>
  );
};

export default Footer;
