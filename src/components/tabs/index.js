import { useState } from "react";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function BasicTabs({ list, children }) {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={value} onChange={handleChange}>
          {list.map((tab, index) => (
            <Tab label={tab} key={`${tab} ${index}`} />
          ))}
        </Tabs>
      </Box>
      {children.map((child, index) => (
        <TabPanel key={`tab ${index}`} value={value} index={index}>
          {child}
        </TabPanel>
      ))}
    </Box>
  );
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div role="tabpanel" hidden={value !== index} {...other}>
      <Box sx={{ p: 3 }}>
        <Typography component={"div"}>{children}</Typography>
      </Box>
    </div>
  );
}
export default BasicTabs;
