import { css } from "@linaria/core";
import { theme } from "@hitachivantara/styles";

export const styles = {
  base: css`
    display: inline-flex;
    border-width: 1px;
    border-style: solid;
  `,
  primary: css`
    color: rgb(255 255 255);
    background-color: rgb(59 130 246);
    border: transparent;
  `,
  secondary: css`
    background-color: rgb(255 255 255);
    color: rgb(31 41 55);
    border-color: rgb(156 163 175);
  `,
  small: css`
    font-size: 0.875rem /* 14px */;
    line-height: 1.25rem /* 20px */;
    padding: 0.25rem 0.5rem;
  `,
  medium: css`
    font-size: 1rem /* 16px */;
    line-height: 1.5rem /* 24px */;
    padding: 0.5rem 1rem;
  `,
  primaryMedium: css`
    text-transform: uppercase;
  `,
};
