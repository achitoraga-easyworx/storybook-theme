import { addons, types } from "@storybook/addons";

import { ADDON_ID, PIXEL_PERFECT_TOOL_ID, TOOL_ID } from "../constants";
import { ThemeTool } from "../tools/ThemeTool";
import PixelPerfectTool from "../tools/PixelPerfectTool";

addons.register(ADDON_ID, () => {
  addons.add(TOOL_ID, {
    type: types.TOOL,
    title: "Styled-System Theme",
    match: ({ viewMode }) => !!(viewMode && viewMode.match(/^(story)$/)),
    render: ThemeTool,
  });

  addons.add(PIXEL_PERFECT_TOOL_ID, {
    type: types.TOOL,
    title: 'Pixel Perfect',
    match: ({ viewMode }) => !!(viewMode && viewMode.match(/^(story)$/)),
    render: PixelPerfectTool,
  })
});
