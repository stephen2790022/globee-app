/* eslint-disable @typescript-eslint/no-empty-object-type */
// styles/styled-components.d.ts
import "styled-components";
import { theme } from "./theme"; // Adjust the path to your theme file

type ThemeType = typeof theme;

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}
