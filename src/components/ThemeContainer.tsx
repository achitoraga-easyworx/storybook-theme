import React, { FC } from "react";
import PixelDecorator from "../decorators/PixelDecorator";
import { ThemeProvider } from "styled-components";
import { PixelPerfectParameter, ThemeParameter, ThemeVariant } from "../types";

type Props = {
  theme?: ThemeParameter['theme']
  pixelPerfect?: PixelPerfectParameter['pixelPerfect']
  mode: ThemeVariant
  showPixelPerfect?: boolean
}

const ThemeContainer: FC<Props> = ({ theme, children, mode, showPixelPerfect, pixelPerfect }) => {
  return (
    <ThemeProvider theme={theme?.themes?.[mode] ?? {}}>
      <div style={{ backgroundColor: theme?.background?.[mode], padding: 25, ...theme?.style }}>
        {showPixelPerfect ? (
          <PixelDecorator
            desktop={pixelPerfect?.desktop?.[mode] ?? ''}
            mobile={pixelPerfect?.mobile?.[mode] ?? ''}
            breakpoint={pixelPerfect?.breakpoint ?? 500}
            desktopBgStyle={pixelPerfect?.desktop?.style?.bg}
            desktopStoryStyle={pixelPerfect?.desktop?.style?.story}
            mobileBgStyle={pixelPerfect?.mobile?.style?.bg}
            mobileStoryStyle={pixelPerfect?.mobile?.style?.story}
          >
            {children}
          </PixelDecorator>
        ) : children}
      </div>
    </ThemeProvider>
  )
}

export default ThemeContainer
