import React from "react";
import { DecoratorFunction } from "@storybook/addons";
import { ThemeProvider } from "styled-components";
import { Box } from "rebass";

const ThemeDecorator: DecoratorFunction = (story, context) => {
  const { themeGlobal } = context.globals
  const { theme } = context.parameters

  const localTheme = themeGlobal ?? theme

  if (localTheme === 'light' || localTheme === 'dark') {
    return (
      <ThemeProvider theme={context.parameters.themes?.[themeGlobal] ?? {}}>
        <Box bg={'background'} p={25}>{story()}</Box>
      </ThemeProvider>
    )
  }

  if (localTheme === 'vertical') {
    return (
      <div>
        <ThemeProvider theme={context.parameters.themes?.light ?? {}}>
          <Box bg={'background'} p={25}>{story()}</Box>
        </ThemeProvider>
        <ThemeProvider theme={context.parameters.themes?.dark ?? {}}>
          <Box bg={'background'} p={25}>{story()}</Box>
        </ThemeProvider>
      </div>
    )
  }

  if (localTheme === 'horizontal') {
    return (
      <div style={{ display: 'grid', gridTemplateColumns: '50% 50%' }}>
        <ThemeProvider theme={context.parameters.themes?.light ?? {}}>
          <Box bg={'background'} p={25}>{story()}</Box>
        </ThemeProvider>
        <ThemeProvider theme={context.parameters.themes?.dark ?? {}}>
          <Box bg={'background'} p={25}>{story()}</Box>
        </ThemeProvider>
      </div>
    )
  }

  return story()
}

export default ThemeDecorator

