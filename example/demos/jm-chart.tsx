import React from "react";
import {
  fullHeight,
  padding16,
  mergeClassName,
  marginBottom16,
  shrink0,
  column,
  flex,
  minHeight0
} from "@style";

import JMCharts from "@basic/index";

interface IProps {}

const JMChartDemo: React.FC<IProps> = props => {
  return (
    <div className={mergeClassName(fullHeight, column)}>
      {/* <div className={mergeClassName(marginBottom16, shrink0)} /> */}
      <div className={mergeClassName(flex, minHeight0, padding16)}>
        <JMCharts
          className={fullHeight}
          option={{
            title: {
              text: "ECharts 入门示例"
            },
            tooltip: {},
            legend: {
              data: ["销量"]
            },
            xAxis: {
              data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
            },
            yAxis: {},
            series: [
              {
                name: "销量",
                type: "bar",
                data: [5, 20, 36, 10, 10, 20]
              }
            ]
          }}
        />
      </div>
    </div>
  );
};

export default JMChartDemo;
