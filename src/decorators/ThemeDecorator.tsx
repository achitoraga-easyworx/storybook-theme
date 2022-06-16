import React, { FC } from "react";
import { DecoratorFunction } from "@storybook/addons";
import { AddonGlobals, AddonParameters, ThemeVariant } from "../types";
import ThemeContainer from "../components/ThemeContainer";

const ThemeDecorator: DecoratorFunction = (story, context) => {
  const { themeGlobal, pixelPerfectGlobal } = context.globals as AddonGlobals
  const { theme, pixelPerfect } = context.parameters as AddonParameters

  const themeCurrent = themeGlobal ?? theme?.mode ?? 'light'

  const LocalContainer: FC<{ mode: ThemeVariant }> = ({ mode }) => {
    return (
      <ThemeContainer
        mode={mode}
        showPixelPerfect={pixelPerfectGlobal}
        theme={theme}
        pixelPerfect={pixelPerfect}
      >
        {story()}
      </ThemeContainer>
    )
  }

  if (themeCurrent === 'light' || themeCurrent === 'dark') {
    return <LocalContainer mode={themeCurrent} />
  }

  if (themeCurrent === 'vertical') {
    return (
      <div>
        <LocalContainer mode={'light'} />
        <LocalContainer mode={'dark'} />
      </div>
    )
  }

  if (themeCurrent === 'horizontal') {
    return (
      <div style={{ display: 'grid', gridTemplateColumns: '50% 50%' }}>
        <LocalContainer mode={'light'} />
        <LocalContainer mode={'dark'} />
      </div>
    )
  }

  return story()
}

export default ThemeDecorator

