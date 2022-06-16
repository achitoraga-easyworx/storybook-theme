import React, { CSSProperties, FC } from "react";

type Props = {
  desktop: string
  mobile: string
  breakpoint: number
  style?: {
    bg?: {
      desktop?: CSSProperties
      mobile?: CSSProperties
    },
    story?: {
      desktop?: CSSProperties
      mobile?: CSSProperties
    }
  }
  desktopBgStyle?: CSSProperties
  mobileBgStyle?: CSSProperties
  desktopStoryStyle?: CSSProperties
  mobileStoryStyle?: CSSProperties
}

const PixelDecorator: FC<Props> = ({
  desktop,
  mobile,
  breakpoint,
  children,
  desktopBgStyle,
  mobileBgStyle,
  desktopStoryStyle,
  mobileStoryStyle
}) => {
  const mediaMatch = window.matchMedia(`(min-width: ${breakpoint}px)`).matches;

  return (
    <div style={{ position: 'relative' }}>
      <img
        src={mediaMatch ? desktop : mobile} alt={''}
        style={{ position: 'absolute', zIndex: 0, ...(mediaMatch ? desktopBgStyle : mobileBgStyle) }}
      />

      <div
        style={{
          zIndex: 1,
          position: 'relative',
          opacity: 0.5, ...(mediaMatch ? desktopStoryStyle : mobileStoryStyle)
        }}
      >
        {children}
      </div>
    </div>
  )
}

export default PixelDecorator
