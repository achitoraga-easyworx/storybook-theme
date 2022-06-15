import React from "react";
import { IconButton, Icons } from "@storybook/components";
import { useGlobals } from "@storybook/api";

const PixelPerfectTool = () => {
  const [{ pixelPerfect }, updateGlobals] = useGlobals();

  return (
    <IconButton
      key={12}
      title="Theme Light"
      active={pixelPerfect}
      onClick={() => updateGlobals({ pixelPerfect: !pixelPerfect })}
    >
      <Icons icon="contrast" />
    </IconButton>
  )
}

export default PixelPerfectTool
