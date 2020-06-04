import React from "react";
import JMCharts from "../basic";
import { JMChartOption, JMChartRenderer } from "../basic/types";

export interface CIIChartData {
  title?: string;
  xAxis?: (string | number)[];
}

export interface CIIChartProps {
  className?: string;
  style?: React.CSSProperties;
  renderder?: JMChartRenderer;
  data: CIIChartData;
}

const CIIChart: React.FC<CIIChartProps> = props => {
  const { data, ...otherProps } = props;
  return <JMCharts {...otherProps} option={getChartOption(props.data)} />;
};

export default CIIChart;

function getChartOption(data: CIIChartData): JMChartOption {
  return {
    title: {},
    xAxis: {}
  };
}
