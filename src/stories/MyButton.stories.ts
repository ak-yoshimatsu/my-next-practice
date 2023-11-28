import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import MyButton from './MyButton';

const meta = {
  title: 'MyApp/Mybutton',
  component: MyButton,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    handleClick: { action: 'clicked' },
  },
} satisfies Meta<typeof MyButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Index: Story = {
  args: {
    primary: true,
    size: 'medium',
    label: 'ボタンデス。',
    // onClick: () => console.log('Hello!!'),
    handleClick: () => console.log('Hello!!'),
  },
};

export const White: Story = {
  args: {
    size: 'large',
    label: '大釦',
    backgroundColor: '#0F0',
    handleClick: (e) => {
      action('cliced')(e, new Date());
    },
    onClick: () => console.log('Hello!!'),
  },
};

export const Yellow: Story = {
  args: {
    ...White.args,
    backgroundColor: 'lightyellow',
  },
};
