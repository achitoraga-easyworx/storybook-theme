import React from "react";
import { IconButton, Icons } from "@storybook/components";
import { useGlobals } from "@storybook/api";

const PixelPerfectTool = () => {
  const [{ pixelPerfectGlobal }, updateGlobals] = useGlobals();

  return (
    <IconButton
      key={'pixel-perfect'}
      title="Pixel Perfect"
      active={pixelPerfectGlobal}
      onClick={() => updateGlobals({ pixelPerfectGlobal: !pixelPerfectGlobal })}
    >
      <Icons icon="contrast" />
    </IconButton>
  )
}

export default PixelPerfectTool
