import React from "react";
import { DecoratorFunction } from "@storybook/addons";
import { ThemeProvider } from "styled-components";

const ThemeDecorator: DecoratorFunction = (story, context) => {
  const { themeMode } = context.globals

  return <ThemeProvider theme={context.parameters.themes?.[themeMode] ?? {}}>{story()}</ThemeProvider>
}

export default ThemeDecorator
