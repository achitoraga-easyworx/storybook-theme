import React, { useEffect } from "react";
import { useGlobals, useParameter } from "@storybook/api";
import { IconButton, Icons, IconsProps, TooltipLinkList, WithTooltip } from "@storybook/components";

type Theme = 'light' | 'dark' | 'vertical' | 'horizontal'

export const Tool = () => {
  const theme = useParameter('theme')
  const [{ themeGlobal }, updateGlobals] = useGlobals();

  useEffect(() => {
    setTheme(theme as Theme)
  }, [theme])

  function setTheme(mode?: 'light' | 'dark' | 'vertical' | 'horizontal') {
    updateGlobals({ themeGlobal: mode })
  }

  const Icon: React.FC<{ icon: IconsProps['icon'] }> = ({ icon }) => (
    <div style={{ width: '15px' }}>
      <Icons icon={icon} />
    </div>
  )

  return (
    <WithTooltip
      tooltip={({ onHide }) => <TooltipLinkList
        links={[
          {
            id: 'default',
            title: 'Default',
            left: <Icon icon={'power'} />, onClick() {
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
            left: <Icon icon={'circlehollow'} />, onClick() {
              setTheme('light')
              onHide()
            },
            active: themeGlobal === 'light',
          },
          {
            id: 'dark',
            title: 'Dark',
            left: <Icon icon={'circle'} />, onClick() {
              setTheme('dark')
              onHide()
            },
            active: themeGlobal === 'dark'
          },
          {
            id: 'vertical',
            title: 'Vertical',
            left: <Icon icon={'arrowdown'} />, onClick() {
              setTheme('vertical')
              onHide()
            },
            active: themeGlobal === 'vertical'
          },
          {
            id: 'horizontal',
            title: 'Horizontal',
            left: <Icon icon={'arrowleft'} />, onClick() {
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
        {/*
        Checkout https://next--storybookjs.netlify.app/official-storybook/?path=/story/basics-icon--labels
        for the full list of icons
      */}
        <Icons icon="circlehollow" />
      </IconButton>
    </WithTooltip>
  );
};
