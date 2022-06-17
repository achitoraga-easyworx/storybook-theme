import React from "react";
import { Button } from "./Button";

export default {
    title: "Example/Button",
    component: Button,
    parameters: {
        theme: {
            mode: 'horizontal',
            background: {
                light: 'white',
                dark: 'black',
            },
        },
        pixelPerfect: {
            breakpoint: 500,
            desktop: {
                light: 'https://www.syncfusion.com/blogs/wp-content/uploads/2018/08/blogbutton_3b87bbde.png',
                dark: 'https://www.syncfusion.com/blogs/wp-content/uploads/2018/08/blogbutton_3b87bbde.png',
                style: {
                    bg: {
                        top: 30
                    }
                }
            },
            mobile: {
                light: 'https://www.syncfusion.com/blogs/wp-content/uploads/2018/08/blogbutton_3b87bbde.png',
                dark: 'https://www.syncfusion.com/blogs/wp-content/uploads/2018/08/blogbutton_3b87bbde.png',
                style: {
                    bg: {
                        top: -30
                    }
                }
            },
        },
    },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    primary: true,
    label: "Button",
};
Primary.parameters = {
    theme: {
        mode: null
    }
}

export const Secondary = Template.bind({});
Secondary.args = {
    label: "Button",
};

export const Large = Template.bind({});
Large.args = {
    size: "large",
    label: "Button",
};

export const Small = Template.bind({});
Small.args = {
    size: "small",
    label: "Button",
};
