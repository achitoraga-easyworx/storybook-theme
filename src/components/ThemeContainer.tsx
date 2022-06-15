import React, { FC } from "react";
import { Box } from "rebass";
import PixelDecorator from "../decorators/PixelDecorator";
import { ThemeProvider } from "styled-components";
import { ThemeParameter } from "../types";

type Props = {
  theme?: ThemeParameter
  mode: 'light' | 'dark'
  pixel?: boolean
}

const ThemeContainer: FC<Props> = ({ theme, children, mode, pixel }) => {
  return (
    <ThemeProvider theme={theme?.themes?.[mode] ?? {}}>
      <Box bg={theme?.background?.[mode]} p={25}>
        {pixel ? (
          <PixelDecorator
            desktop={theme?.design?.desktop?.[mode] ?? ''}
            mobile={theme?.design?.mobile?.[mode] ?? ''}
            breakpoint={theme?.design?.breakpoint ?? 500}
            desktopBgStyle={theme?.design?.desktop?.style?.bg}
            desktopStoryStyle={theme?.design?.desktop?.style?.story}
            mobileBgStyle={theme?.design?.mobile?.style?.bg}
            mobileStoryStyle={theme?.design?.mobile?.style?.story}
          >
            {children}
          </PixelDecorator>
        ) : children}
      </Box>
    </ThemeProvider>
  )
}

export default ThemeContainer
