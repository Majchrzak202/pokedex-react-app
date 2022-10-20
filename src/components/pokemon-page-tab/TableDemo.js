import React, { useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stats from "./pokemon-tab-utils/Stats";
import About from "./pokemon-tab-utils/About";
import Evolution from "./pokemon-tab-utils/Evolution";
import Moves from "./pokemon-tab-utils/Moves";

const TabPanel = (props) => {
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
};

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

const TableDemo = ({pokemon}) => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider", paddingTop: 3 }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="About" {...a11yProps(0)} />
          <Tab label="Stats" {...a11yProps(1)} />
          <Tab label="Evolution" {...a11yProps(2)} />
          <Tab label="Moves" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <TabPanel style={{height: 300}} value={value} index={0}>
       <About pokemon={pokemon}/>
      </TabPanel>
      <TabPanel style={{height: 300}} value={value} index={1}>
        <Stats pokemon={pokemon} />
      </TabPanel>
      <TabPanel style={{height: 300}}value={value} index={2}>
        <Evolution pokemon={pokemon}/>
      </TabPanel>
      <TabPanel style={{height: 300}}value={value} index={3}>
        <Moves pokemon={pokemon}/>
      </TabPanel>
    </Box>
  );
};

export default TableDemo;
