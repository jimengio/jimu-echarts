import { css, cx } from "emotion";

export function mergeClassName(...args: string[]) {
  return cx(...args);
}

export const displayFlex = css`
  display: flex;
`;

export const row = cx(
  displayFlex,
  css`
    flex-direction: row;
  `
);

export const column = cx(
  displayFlex,
  css`
    flex-direction: column;
  `
);

export const justifyContentCenter = css`
  justify-content: center;
`;

export const justifyContentEnd = css`
  justify-content: flex-end;
`;

export const justifyContentAround = css`
  justify-content: space-around;
`;

export const justifyContentBetween = css`
  justify-content: space-between;
`;

export const alignItemsCenter = css`
  align-items: center;
`;

export const alignItemsEnd = css`
  align-items: flex-end;
`;

export const alignItemsAround = css`
  align-items: space-around;
`;

export const alignItemsBetween = css`
  align-items: space-between;
`;

export const center = cx(row, alignItemsCenter, justifyContentCenter);

export const rowMiddle = cx(row, alignItemsCenter);

export const rowCenter = cx(row, justifyContentCenter);

export const rowAround = cx(row, justifyContentAround);

export const rowBetween = cx(row, justifyContentBetween);

export const columnMiddle = cx(row, justifyContentCenter);

export const columnCenter = cx(row, alignItemsCenter);

export const columnAround = cx(row, alignItemsAround);

export const columnBetween = cx(row, alignItemsBetween);

export const flex = css`
  flex-grow: 1;
`;

export const shrink0 = css`
  flex-shrink: 0;
`;

export const fullHeight = css`
  height: 100%;
`;

export const fullWidth = css`
  height: 100%;
`;

export const minHeight0 = css`
  min-height: 0;
`;

export const minWidth0 = css`
  min-width: 0;
`;

export const scroll = css`
  overflow: auto;
`;

export const xScroll = css`
  overflow-x: auto;
  overflow-y: hidden;
`;

export const yScroll = css`
  overflow-x: hidden;
  overflow-y: auto;
`;

export const padding16 = css`
  padding: 16px;
`;

export const paddingTop16 = css`
  padding-top: 16px;
`;

export const paddingBottom16 = css`
  padding-bottom: 16px;
`;

export const margin16 = css`
  margin: 16px;
`;

export const marginTop16 = css`
  margin-top: 16px;
`;

export const marginBottom16 = css`
  margin-bottom: 16px;
`;
