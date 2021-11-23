import { SearchPanel } from "../Pos_components/POS_Billing_Panel/SEARCH/searchPanel";
import { Items_And_Options_Panel } from "../Pos_components/POS_Billing_Panel/ITEMS_AND_OPTIONS/itemsAndOptions";
import { Billing_Data_Panel } from "../Pos_components/POS_Billing_Panel/BILLING/billingDataPanel";
import { Grid, Paper } from "@material-ui/core";
import { Box } from "@mui/system";
import "./system_page_style.css";

export const BillingPanel = () => {
  return (
    <>
      <Box m={1}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
            <Paper>
              <SearchPanel />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={5} xl={5}>
            <Paper>
              <Items_And_Options_Panel />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={3} xl={3}>
            <Paper>
              <Billing_Data_Panel />
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
