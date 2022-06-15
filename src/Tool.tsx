import React from "react";
import { useGlobals } from "@storybook/api";
import { IconButton, Icons, TooltipLinkList, WithTooltip } from "@storybook/components";

export const Tool = () => {
  const [{ themeMode }, updateGlobals] = useGlobals();

  function setTheme(mode: 'light' | 'dark') {
    updateGlobals({ themeMode: mode })
  }

  return (
    <div>
      <WithTooltip
        tooltip={({ onHide }) => <TooltipLinkList
          links={[{
            id: '1',
            title: 'Light',
            left: <Icons icon={'circle'} />, onClick() {
              setTheme('light')
              onHide()
            },
            active: themeMode === 'light'
          }, {
            id: '2',
            title: 'Dark',
            left: <Icons icon={'circle'} />, onClick() {
              setTheme('dark')
              onHide()
            },
            active: themeMode === 'dark'
          }]}
        />}
        placement={'top'}
        trigger={'click'}
        closeOnClick
      >
        <IconButton
          key={12}
          title="Theme Light"
          active={themeMode}
        >
          {/*
        Checkout https://next--storybookjs.netlify.app/official-storybook/?path=/story/basics-icon--labels
        for the full list of icons
      */}
          <Icons icon="circlehollow" />
        </IconButton>
      </WithTooltip>
    </div>
  );
};
