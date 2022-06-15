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
}

export type ThemeVariant = 'light' | 'dark' | 'vertical' | 'horizontal'
