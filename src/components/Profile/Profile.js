import { Typography } from "@material-ui/core";
import React from "react";
import CustomTimeline, { CustomTimelineSeperator } from "../Timeline/Timeline";
import "./profile.css";
import resumeData from "../../utils/resumeData";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import myImage from "../../assets/images/profile.jpg";
import TimelineItem from "@material-ui/lab/TimelineItem";
import GetAppIcon from "@material-ui/icons/GetApp";
import TimelineContent from "@material-ui/lab/TimelineContent";
import Custombutton from "../Button/Button";
import resume from "../../assets/cv-sanjeev.pdf";
const CustomTimelinItem = ({ title, text, link }) => (
  <TimelineItem>
    <CustomTimelineSeperator />
    <TimelineContent className="timeline_content">
      {link ? (
        <Typography className="timelineitem_text">
          <span>{title}: </span>
          <a href={link} target="_blank" rel="noopener noreferrer">
            {text}
          </a>
        </Typography>
      ) : (
        <Typography className="timelineitem_text">
          <span>{title}:</span>
          {text}
        </Typography>
      )}
    </TimelineContent>
  </TimelineItem>
);

const Profile = () => {
  return (
    <div className="profile container_shadow">
      <div className="profile_name">
        <Typography className="name">{resumeData.name}</Typography>
        <Typography className="title">{resumeData.title}</Typography>
      </div>
      <figure className="profile_image">
        <img src={myImage} alt="profile" />
      </figure>
      <div className="profile_information">
        <CustomTimeline icon={<PersonOutlineOutlinedIcon />}>
          <CustomTimelinItem title="Name" text={resumeData.name} />
          <CustomTimelinItem title="Title" text={resumeData.title} />
          <CustomTimelinItem title="Email" text={resumeData.email} />
          <CustomTimelinItem title="Birthday" text={resumeData.birdthdate} />
          {Object.keys(resumeData.social).map((key, i) => (
            <CustomTimelinItem
              key={i}
              title={key}
              text={resumeData.social[key].text}
              link={resumeData.social[key].link}
            />
          ))}
        </CustomTimeline>
        <div className="btn_container">
          <a href={resume} download="cv-sanjeev.pdf">
            <Custombutton text={"Download CV"} icon={<GetAppIcon />} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Profile;
