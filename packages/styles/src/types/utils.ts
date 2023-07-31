import * as CSS from "csstype";

export interface CSSProperties extends CSS.Properties<string | number> {}

export type DeepString<T> = {
  [P in keyof T]: T[P] extends object ? DeepString<T[P]> : string;
};
