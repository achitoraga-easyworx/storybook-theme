import { CSSProperties } from "react";

export type ThemeParameter = {
  theme?: ThemeVariant
  background?: {
    light: string
    dark: string
  }
  themes?: {
    light: any,
    dark: any
  }
  design?: {
    breakpoint?: number
    desktop: {
      light: string
      dark: string
      style?: {
        bg?: CSSProperties
        story?: CSSProperties
      }
    },
    mobile: {
      light: string
      dark: string
      style?: {
        bg?: CSSProperties
        story?: CSSProperties
      }
    },
  }
}

export type ThemeVariant = 'light' | 'dark' | 'vertical' | 'horizontal'
