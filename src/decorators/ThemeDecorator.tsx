import React from "react";
import { DecoratorFunction } from "@storybook/addons";
import { ThemeParameter } from "../types";
import ThemeContainer from "../components/ThemeContainer";

const ThemeDecorator: DecoratorFunction = (story, context) => {
  const { themeGlobal, pixelPerfect } = context.globals as { themeGlobal: 'dark' | 'light', pixelPerfect?: boolean }
  const { theme } = context.parameters as { theme: ThemeParameter }

  const localTheme = themeGlobal ?? theme?.theme ?? 'light'

  if (localTheme === 'light' || localTheme === 'dark') {
    return <ThemeContainer theme={theme} mode={localTheme} pixel={pixelPerfect}>{story()}</ThemeContainer>
  }

  if (localTheme === 'vertical') {
    return (
      <div>
        <ThemeContainer theme={theme} mode={'light'} pixel={pixelPerfect}>{story()}</ThemeContainer>
        <ThemeContainer theme={theme} mode={'dark'} pixel={pixelPerfect}>{story()}</ThemeContainer>
      </div>
    )
  }

  if (localTheme === 'horizontal') {
    return (
      <div style={{ display: 'grid', gridTemplateColumns: '50% 50%' }}>
        <ThemeContainer theme={theme} mode={'light'} pixel={pixelPerfect}>{story()}</ThemeContainer>
        <ThemeContainer theme={theme} mode={'dark'} pixel={pixelPerfect}>{story()}</ThemeContainer>
      </div>
    )
  }

  return story()
}

export default ThemeDecorator

