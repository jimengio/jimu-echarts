import React from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import {
  fullHeight,
  mergeClassName,
  row,
  shrink0,
  flex,
  minWidth0,
  padding16
} from "@style";
import { css } from "emotion";

import JMChartDemo from "./demos/jm-chart";

interface IProps {
  path: string;
}

const Dashboard: React.FC<IProps> = props => {
  const [isExpand, setIsExpand] = React.useState<boolean>(false);

  return (
    <div className={mergeClassName(fullHeight, row)}>
      <div
        className={mergeClassName(
          sidebar,
          shrink0,
          isExpand ? pickupSidebar : ""
        )}
      >
        <div
          className={mergeClassName()}
          onClick={() => {
            setIsExpand(!isExpand);
          }}
        >
          {isExpand ? "》》" : "《《"}
        </div>
        <NavLink to={`${props.path}/basic`}>Basic</NavLink>
      </div>
      <div className={mergeClassName(flex, fullHeight, minWidth0)}>
        <Switch>
          <Route path={`${props.path}/basic`} render={() => <JMChartDemo />} />
        </Switch>
      </div>
    </div>
  );
};

export default Dashboard;

const sidebar = css`
  height: 100%;
  width: 300px;
  border-right: 1px solid #666666;

  transition: width 0.3s;
`;

const pickupSidebar = css`
  width: 50px;
`;
