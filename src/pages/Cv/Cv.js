import { Grid, Icon, Paper, TextField, Typography } from "@material-ui/core";
import React from "react";
import "./Cv.css";
import DeveloperModeIcon from "@material-ui/icons/DeveloperMode";
import SchoolIcon from "@material-ui/icons/School";
import CustomTimeline, {
  CustomTimelineSeperator,
} from "../../components/Timeline/Timeline";
import resumeData from "../../utils/resumeData";
import CustomButton from "../../components/Button/Button";
import TimelineItem from "@material-ui/lab/TimelineItem";

import TimelineDot from "@material-ui/lab/TimelineDot";

import TimelineContent from "@material-ui/lab/TimelineContent";
const Cv = () => {
  return (
    <>
      {/* About me */}
      <Grid container className="section pb_45 pt_30">
        <Grid item className="section_title mb_30">
          <span></span>
          <h6 variant="h6" className="section_title_text">
            About Me
          </h6>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body_2" className="aboutme_text">
            {resumeData.about_me}
          </Typography>
        </Grid>
      </Grid>
      {/* education projects */}
      <Grid container className="section pb_45">
        <Grid item className="section_title mb_30">
          <span></span>
          <h6 variant="h6" className="section_title_text">
            CV
          </h6>
        </Grid>
        <Grid item xs={12}>
          <Grid container className="resume_timeline">
            {/* Education */}
            <Grid item sm={12} md={6}>
              <CustomTimeline title={"Education"} icon={<SchoolIcon />}>
                {resumeData.education.map((education) => (
                  <TimelineItem>
                    <CustomTimelineSeperator />
                    <TimelineContent className="timeline_content">
                      <Typography className="timeline_title">
                        {education.title}
                      </Typography>
                      <Typography variant="caption" className="timeline_date">
                        {education.date}
                      </Typography>
                      <Typography
                        variant="body2"
                        className="timeline_description"
                      >
                        {education.description}
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </CustomTimeline>
            </Grid>
            {/* Projects */}
            <Grid item sm={12} md={6}>
              <Grid item sm={12} md={6}>
                <CustomTimeline title={"Projects"} icon={<DeveloperModeIcon />}>
                  {resumeData.projects.map((project) => (
                    <TimelineItem>
                      <CustomTimelineSeperator />
                      <TimelineContent className="timeline_content">
                        <Typography className="timeline_title">
                          {project.title}
                        </Typography>
                        <Typography variant="caption" className="timeline_date">
                          <a href={project.link}>{project.link}</a>
                        </Typography>
                        <Typography
                          variant="body2"
                          className="timeline_description"
                        >
                          {project.description}
                        </Typography>
                      </TimelineContent>
                    </TimelineItem>
                  ))}
                </CustomTimeline>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/* Services */}
      <Grid container className="section pb_45">
        <Grid item className="section_title mb_30">
          <span></span>
          <h6 className="section_title_text">What I am into</h6>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={3} justify="space-around">
            {resumeData.services.map((service) => (
              <Grid item xs={12} sm={6} md={3}>
                <div className="service ">
                  <Icon className="sercice_icon">{service.icon}</Icon>
                  <Typography className="service_title" variant={"h6"}>
                    {service.title}
                  </Typography>
                  <Typography className="service_description" variant="body2">
                    {service.description}
                  </Typography>
                </div>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
      {/* Skills */}
      <Grid container className="section graybg pb_45 p_30">
        <Grid item xs={12}>
          <Grid container spacing={3} justify="space-between">
            {resumeData.skills.map((skill) => (
              <Grid item xs={12} sm={6} md={3}>
                <Paper elevation={0} className="skills">
                  <Typography variant="h6" className="skill_title">
                    {skill.title}
                  </Typography>
                  {skill.description.map((element) => (
                    <Typography className="skill_description" variant="body2">
                      <TimelineDot
                        variant={"outlined"}
                        className="timeline_dot"
                      ></TimelineDot>
                      {element}
                    </Typography>
                  ))}
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
      {/* Contact */}
      <Grid container spacing={5} className="section  pt_30 pb_45 ">
        <Grid item xs={12} lg={7}>
          <Grid container>
            <Grid item className="section_title mb_30">
              <span></span>
              <h6 className="section_title_text">Contact Form</h6>
            </Grid>

            <Grid item xs={12} className="contact_forms">
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField fullwidth name="Name" label="Name" />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullwidth name="Email" label="Email" />
                </Grid>
                <Grid item xs={12} className="message_contact">
                  <TextField
                    fullwidth
                    name="Message"
                    multiline
                    rows={3}
                    label="Message"
                  />
                </Grid>
                <Grid item xs={12}>
                  <CustomButton text="Submit" />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={5} className="right_contact">
          <Grid container>
            <Grid item className="section_title mb_30">
              <span></span>
              <h6 className="section_title_text">Contact Information</h6>
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography className="contact_information_item">
                    <span>Address: </span>
                    {resumeData.address}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography className="contact_information_item">
                    <span>Phone: </span>
                    {resumeData.phone}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography className="contact_information_item">
                    <span>Email: </span>
                    {resumeData.email}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Cv;
