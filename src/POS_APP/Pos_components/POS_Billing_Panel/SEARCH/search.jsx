import { useState } from "react";
import { Grid, Paper } from "@material-ui/core";
import { Box } from "@mui/system";
import { SearchOutlined } from "@ant-design/icons";
import { Select, Input } from "antd";
import "antd/dist/antd.css";

const { Option } = Select;

export const Search = (props) => {
  const [category, setCategory] = useState("All");
  console.log(category);
  return (
    <Paper elevation={2} style={{ background: "#f7f7f7" }}>
      <Box display="flex" alignItems="center" mb={4}>
        {/* //category drop down */}
        <Grid lg={5}>
          <Box mr={2} m={2}>
            <Select style={{ width: "100%" }} value={category}>
              <Option
                key={1}
                value="1324"
                onChange={() => {
                  setCategory("1234");
                  alert(category);
                }}
              >
                1234
              </Option>
              <Option key={2}>1234</Option>
              <Option key={3}>1234</Option>
              <Option key={4}>All</Option>
            </Select>
          </Box>
        </Grid>

        {/* //search box */}
        <Box mr={2} style={{ background: "green" }}>
          <Input
            placeholder="Search Items Here.."
            allowClear
            suffix={<SearchOutlined />}
          />
        </Box>
      </Box>
    </Paper>
  );
};
