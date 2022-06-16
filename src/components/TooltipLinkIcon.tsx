import React, { FC } from "react";
import { Icons, IconsProps } from "@storybook/components";

type Props = {
  icon: IconsProps['icon']
}

const TooltipLinkIcon: FC<Props> = ({ icon }) => (
  <div style={{ width: '15px' }}>
    <Icons icon={icon} />
  </div>
)

export default TooltipLinkIcon
