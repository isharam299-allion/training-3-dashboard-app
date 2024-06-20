import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Logo from './Logo';


const meta = {
  title: 'Components/Atoms/Logo',
  component: Logo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Logo>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Logosvg: Story = {
  args: {
  },
};
