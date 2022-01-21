import { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';

import Component from '@//Component';

export default {
title: '/Component',
component: Component,
argTypes: {
// override React.ReactNode type with this
// children: {
// control: { type: 'text' },
// },
},
} as ComponentMeta<typeof Component>;

  const Template: ComponentStory<typeof Component> = (args) => (
    <Component {...args} />
    );

    export const Default = Template.bind({});
    Default.args = {};