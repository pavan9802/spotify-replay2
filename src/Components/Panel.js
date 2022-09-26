import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import InfoBox from "./InfoBox";
import { Typography } from "@mui/material";
import { SpotifyState } from "../SpotifyContext";
import "./Panel.css";
//import Container from "@material-ui/core/Container";

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
} //
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
export default function Panel() {
  const { type, value, setValue } = SpotifyState();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      {type !== "recently_played" ? (
        <>
          <div className="other-div">
            <Box sx={{ width: "100%" }}>
              <Box
                sx={{
                  borderBottom: 0,
                  width: "100%",
                }}
              >
                <img
                  className="img"
                  src="https://storage.googleapis.com/cdn-leanplum-images/1/2018/07/Spotify-Feature.png"
                  alt=""
                ></img>
                <Tabs
                  centered
                  value={value}
                  onChange={handleChange}
                  textColor="red"
                  variant="scrollable"
                  scrollButtons
                  allowScrollButtonsMobile
                >
                  <Tab
                    // sx={{ width: "33%" }}

                    label="All Time"
                    {...a11yProps(0)}
                  />
                  <Tab
                    // sx={{ width: "33%" }}

                    label="Last 6 Months"
                    {...a11yProps(1)}
                  />
                  <Tab
                    // sx={{ width: "33%" }}

                    label="Last 4 Weeks"
                    {...a11yProps(2)}
                  />
                </Tabs>
              </Box>
              <TabPanel value={value} index={0}>
                <InfoBox />
              </TabPanel>

              <TabPanel value={value} index={1}>
                <InfoBox />
              </TabPanel>

              <TabPanel value={value} index={2}>
                <InfoBox />
              </TabPanel>
            </Box>
          </div>
        </>
      ) : (
        <div className="recPlay-div">
          <img
            className="img"
            src="https://storage.googleapis.com/cdn-leanplum-images/1/2018/07/Spotify-Feature.png"
            alt=""
          ></img>
          <div>
            <InfoBox />
          </div>
        </div>
      )}
    </>
  );
}
