import React, { FC } from "react";
import { DecoratorFunction } from "@storybook/addons";
import { ThemeProvider } from "styled-components";
import { Box } from "rebass";
import { ThemeParameter } from "../types";

const ThemeDecorator: DecoratorFunction = (story, context) => {
  const { themeGlobal } = context.globals as { themeGlobal: 'dark' | 'light' }
  const { theme } = context.parameters as { theme: ThemeParameter }

  const localTheme = themeGlobal ?? theme?.theme ?? 'light'

  const ThemeBox: FC<{ localTheme: 'light' | 'dark' }> = ({ children, localTheme }) => (
    <ThemeProvider theme={theme?.themes?.[localTheme] ?? {}}>
      <Box bg={theme?.background?.[localTheme]} p={25}>{children}</Box>
    </ThemeProvider>
  )

  if (localTheme === 'light' || localTheme === 'dark') {
    return <ThemeBox localTheme={localTheme}>{story()}</ThemeBox>
  }

  if (localTheme === 'vertical') {
    return (
      <div>
        <ThemeBox localTheme={'light'}>{story()}</ThemeBox>
        <ThemeBox localTheme={'dark'}>{story()}</ThemeBox>
      </div>
    )
  }

  if (localTheme === 'horizontal') {
    return (
      <div style={{ display: 'grid', gridTemplateColumns: '50% 50%' }}>
        <ThemeBox localTheme={'light'}>{story()}</ThemeBox>
        <ThemeBox localTheme={'dark'}>{story()}</ThemeBox>
      </div>
    )
  }

  return story()
}

export default ThemeDecorator

