import { useState } from "react";
import Box from "@mui/material/Box";
import { TabSet } from "../page tabs/tabset";
import { useSelector } from "react-redux";

//components
import { BillingPanel } from "../../POS_Pages/billingPanel";
import { Stocks } from "../../POS_Pages/stocks";

//tab content setters
export const TabPanel = (props) => {
  const { children, value, index } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      style={{
        width: window.innerWidth,
        height: "auto",
      }}
    >
      {value === index && children}
    </div>
  );
};

export function PageTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const deviceWidth = useSelector((store) => store.deviceWidth);

  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        display: "flex",
      }}
    >
      <TabPanel value={value} index={0}>
        <Box
          style={{
            background: "#f2f5f0",
            height: "auto",
          }}
        >
          <BillingPanel />
        </Box>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Stocks />
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>

      <TabSet
        handleChange={handleChange}
        deviceWidth={deviceWidth}
        value={value}
      />
    </Box>
  );
}
