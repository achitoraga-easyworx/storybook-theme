import { CSSProperties } from "react";

export type ThemeMode = 'light' | 'dark' | 'vertical' | 'horizontal'

export type ThemeVariant = 'light' | 'dark'

export type AddonGlobals = {
  themeGlobal?: ThemeMode
  pixelPerfectGlobal?: boolean
}

export type PixelPerfectScreen = {
  light?: string
  dark?: string
  style?: {
    bg?: CSSProperties
    story?: CSSProperties
  }
}

export type ThemeParameter = {
  theme?: {
    mode?: ThemeMode
    background?: {
      light?: string
      dark?: string
    }
    themes?: {
      light: any
      dark: any
    }
    style?: CSSProperties
  }
}

export type PixelPerfectParameter = {
  pixelPerfect?: {
    breakpoint?: number
    desktop?: PixelPerfectScreen
    mobile?: PixelPerfectScreen
  }
}

export type AddonParameters = ThemeParameter & PixelPerfectParameter
