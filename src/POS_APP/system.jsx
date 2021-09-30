//components
import { Toolbar } from "@material-ui/core";
import { PageTabs } from "./Pos_components/page tabs/pageTabs";
import { PosNavBar } from "./Pos_components/pos nav bar/posNavBar";

export const System = (props) => {
  return (
    <>
      <PosNavBar history={props.history} />
      <Toolbar />
      <PageTabs />
    </>
  );
};
