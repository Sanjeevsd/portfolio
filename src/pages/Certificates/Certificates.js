import {
  Grid,
  Tabs,
  Tab,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Grow,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@material-ui/core";
import React, { useState } from "react";
import "./Certificates.css";
import resumeData from "../../utils/resumeData";

const Certificates = () => {
  const [tabValue, setTabValue] = useState("All");
  const [projectDialog, setProjectDialog] = useState(false);

  return (
    <Grid container spacing={1} className="section pb_45 pt_30">
      <Grid item className="section_title mb_30">
        <span></span>
        <h1 className="section_title_text">Certificates</h1>
      </Grid>

      {/* tabs */}
      <Grid item xs={12}>
        <Tabs
          value={tabValue}
          indicatorColor={"white"}
          className="customtabs"
          onChange={(event, newValue) => setTabValue(newValue)}
        >
          <Tab
            label="All"
            value="All"
            className={
              tabValue === "All" ? "customtabs_item active" : "customtabs_item"
            }
          />
          {[...new Set(resumeData.certificate.map((item) => item.tag))].map(
            (tag) => (
              <Tab
                label={tag}
                value={tag}
                className={
                  tabValue === tag
                    ? "customtabs_item active"
                    : "customtabs_item"
                }
              />
            )
          )}
        </Tabs>
      </Grid>
      {/* projects */}
      <Grid item xs={12}>
        <Grid spacing={3} container>
          {resumeData.certificate.map((project) => (
            <>
              {tabValue === project.tag || tabValue === "All" ? (
                <Grid item xs={12} sm={6} md={4}>
                  <Grow in timeout={1000}>
                    <Card
                      className="customcard"
                      onClick={() => setProjectDialog(project)}
                    >
                      <CardActionArea>
                        <CardMedia
                          className="customcard_image"
                          image={project.image}
                          title={project.title}
                        />
                        <CardContent>
                          <Typography
                            variant="body2"
                            className="customcard_title"
                          >
                            {project.title}
                          </Typography>
                          <Typography
                            variant="body2"
                            className="customcard_description"
                          >
                            {project.caption}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grow>
                </Grid>
              ) : null}
            </>
          ))}
        </Grid>
      </Grid>
      <Dialog
        fullWidth
        open={projectDialog}
        onClose={() => setProjectDialog(false)}
        className="projectdialog"
      >
        <DialogTitle
          onClose={() => setProjectDialog(false)}
          className="projectdialog_title"
        >
          {projectDialog.title}
        </DialogTitle>
        <img src={projectDialog.image} alt="" className="projectdialog_image" />
        <DialogContent>
          <Typography className="projectdialog_description">
            {projectDialog.description}
          </Typography>
        </DialogContent>
        <DialogActions className="projectdialog_actions">
          {projectDialog?.links?.map((link) => (
            <a
              href={link.link}
              target="_blank"
              rel="noopener noreferrer"
              className="projectdialog_icon"
            >
              {link.icon}
            </a>
          ))}
        </DialogActions>
      </Dialog>
    </Grid>
  );
};

export default Certificates;
