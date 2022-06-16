import React, { useEffect } from "react";
import { useGlobals, useParameter } from "@storybook/api";
import { IconButton, Icons, TooltipLinkList, WithTooltip } from "@storybook/components";
import { ThemeMode, ThemeParameter } from "../types";
import TooltipLinkIcon from "../components/TooltipLinkIcon";

export const ThemeTool = () => {
  const theme = useParameter<ThemeParameter['theme']>('theme')
  const [{ themeGlobal }, updateGlobals] = useGlobals();

  useEffect(() => {
    setTheme(theme?.mode)
  }, [theme?.mode])

  function setTheme(mode?: ThemeMode) {
    updateGlobals({ themeGlobal: mode })
  }

  return (
    <WithTooltip
      tooltip={({ onHide }) => <TooltipLinkList
        links={[
          {
            id: 'default',
            title: 'Default',
            left: <TooltipLinkIcon icon={'power'} />, onClick() {
              setTheme(undefined)
              onHide()
            },
            style: {
              display: themeGlobal ? 'flex' : 'none'
            }
          },
          {
            id: 'light',
            title: 'Light',
            left: <TooltipLinkIcon icon={'circlehollow'} />, onClick() {
              setTheme('light')
              onHide()
            },
            active: themeGlobal === 'light',
          },
          {
            id: 'dark',
            title: 'Dark',
            left: <TooltipLinkIcon icon={'circle'} />, onClick() {
              setTheme('dark')
              onHide()
            },
            active: themeGlobal === 'dark'
          },
          {
            id: 'vertical',
            title: 'Vertical',
            left: <TooltipLinkIcon icon={'arrowdown'} />, onClick() {
              setTheme('vertical')
              onHide()
            },
            active: themeGlobal === 'vertical'
          },
          {
            id: 'horizontal',
            title: 'Horizontal',
            left: <TooltipLinkIcon icon={'arrowleft'} />, onClick() {
              setTheme('horizontal')
              onHide()
            },
            active: themeGlobal === 'horizontal'
          },
        ]}
      />}
      placement={'top'}
      trigger={'click'}
      closeOnClick
    >
      <IconButton
        key={12}
        title="Theme Light"
        active={themeGlobal}
      >
        <Icons icon="circlehollow" />
      </IconButton>
    </WithTooltip>
  );
};
