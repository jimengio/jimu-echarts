import {
  EChartOption,
  ERectangle,
  EChartsSeriesType,
  EChartsResponsiveOption,
  EChartsResizeOption,
  EChartsOptionConfig,
  EChartsMediaOption,
  EChartsLoadingOption,
  EChartTitleOption,
  ECharts,
  EChartsConvertFinder
} from "echarts";

/** echarts type */
export interface JMCharts extends ECharts {}
export interface JMChartOption extends EChartOption {}
export interface JMChartTitleOption extends EChartTitleOption {}
export interface JMChartsConvertFinder extends EChartsConvertFinder {}
export interface JMChartsLoadingOption extends EChartsLoadingOption {}
export interface JMChartsMediaOption extends EChartsMediaOption {}
export interface JMChartsOptionConfig extends EChartsOptionConfig {}
export interface JMChartsResizeOption extends EChartsResizeOption {}
export interface JMChartsResponsiveOption extends EChartsResponsiveOption {}
export interface JMRectangle extends ERectangle {}
export type JMChartsSeriesType = EChartsSeriesType;

/** custom */
export type JMChartRenderer = "svg" | "canvas";
