import React from "react";
import echarts from "echarts";
import { JMCharts, JMChartOption, JMChartRenderer } from "./types";
import useComponentSize from "@rehooks/component-size";
import { useDebouncedCallback } from "use-debounce";

export interface EChartProps {
  devicePixelRatio?: number;
  renderer?: JMChartRenderer;
  className?: string;
  style?: React.CSSProperties;
  option: JMChartOption;
}

const JMCharts: React.FC<EChartProps> = (props) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const chartContainer = React.useRef<JMCharts>();

  const size = useComponentSize(containerRef);
  const [debounceResizeChart] = useDebouncedCallback(() => {
    if (chartContainer.current != null) {
      chartContainer.current.resize();
    }
  }, 200);

  /** init chart */
  React.useEffect(() => {
    chartContainer.current = echarts.init(
      containerRef.current as HTMLDivElement,
      undefined,
      {
        devicePixelRatio: props.devicePixelRatio,
        renderer: props.renderer || "canvas",
      }
    );

    return () => {
      (chartContainer.current as JMCharts).dispose();
    };
  }, []);

  /** changed layout, resize chart */
  React.useEffect(() => {
    debounceResizeChart();
  }, [size.height, size.width]);

  /** render chart */
  React.useEffect(() => {
    if (chartContainer.current != null) {
      chartContainer.current.setOption(props.option);
    }
  }, [props.option]);

  return (
    <div
      ref={containerRef}
      className={props.className}
      style={{ height: "100%", width: "100%", ...props.style }}
    />
  );
};

export default JMCharts;
